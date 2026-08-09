import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email Transporter helper (lazy / resilient configuration)
  function createTransporter() {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      return nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
    }

    // Fallback: Ethereal test account or simulated logging
    return null;
  }

  // API endpoint: Send Order Confirmation Email
  app.post("/api/order", async (req, res) => {
    try {
      const { customerName, email, phone, deliveryMethod, address, items, grandTotal } = req.body;

      if (!customerName || !email || !items || !Array.isArray(items)) {
        return res.status(400).json({ error: "Nederīgi pasūtījuma dati" });
      }

      const orderItemsHtml = items
        .map(
          (item: any) => `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${item.name} (${item.volume || '750ml'})</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;">${item.quantity}</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">€${(item.price * item.quantity).toFixed(2)}</td>
          </tr>`
        )
        .join("");

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF9F5; padding: 24px; border-radius: 16px; border: 1px solid #CDE8D5;">
          <h2 style="color: #122E1F; margin-top: 0;">🌿 Jauns Pasūtījums no Enzīmi veikala!</h2>
          
          <div style="background-color: #ffffff; padding: 16px; border-radius: 12px; border: 1px solid #CDE8D5; margin-bottom: 16px;">
            <h3 style="color: #1B8044; margin-top: 0;">Klienta informācija:</h3>
            <p style="margin: 4px 0;"><strong>Vārds, uzvārds:</strong> ${customerName}</p>
            <p style="margin: 4px 0;"><strong>E-pasts:</strong> ${email}</p>
            <p style="margin: 4px 0;"><strong>Tālrunis:</strong> ${phone}</p>
            <p style="margin: 4px 0;"><strong>Piegādes veids:</strong> ${deliveryMethod === 'delivery' ? 'Piegāde ar pakomātu/kurjeru' : 'Saņemšana klātienē Rīgā'}</p>
            ${address ? `<p style="margin: 4px 0;"><strong>Adrese / Pakomāts:</strong> ${address}</p>` : ''}
          </div>

          <div style="background-color: #ffffff; padding: 16px; border-radius: 12px; border: 1px solid #CDE8D5;">
            <h3 style="color: #1B8044; margin-top: 0;">Pasūtītās preces:</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <thead>
                <tr style="background-color: #E5F4E9; text-align: left;">
                  <th style="padding: 8px;">Prece</th>
                  <th style="padding: 8px; text-align: center;">Daudzums</th>
                  <th style="padding: 8px; text-align: right;">Cena</th>
                </tr>
              </thead>
              <tbody>
                ${orderItemsHtml}
              </tbody>
            </table>
            <h3 style="text-align: right; color: #122E1F; margin-top: 16px;">Kopā apmaksai: €${Number(grandTotal).toFixed(2)}</h3>
          </div>

          <p style="font-size: 12px; color: #666666; margin-top: 20px; text-align: center;">
            Šis ir automātisks paziņojums no Enzīmi e-veikala sistēmas.
          </p>
        </div>
      `;

      const notificationEmail = process.env.ORDER_NOTIFICATION_EMAIL || process.env.SMTP_USER || "enzimi@inbox.lv";
      const transporter = createTransporter();

      if (transporter) {
        // Send notification to store owner
        await transporter.sendMail({
          from: `"Enzīmi Veikals" <${process.env.SMTP_USER}>`,
          to: notificationEmail,
          subject: `📦 Jauns pasūtījums: ${customerName} (€${Number(grandTotal).toFixed(2)})`,
          html: emailHtml,
        });

        // Send confirmation to customer
        await transporter.sendMail({
          from: `"Enzīmi Veikals" <${process.env.SMTP_USER}>`,
          to: email,
          subject: `Paldies par pasūtījumu! - Enzīmi`,
          html: emailHtml,
        });

        console.log(`[E-PASTS] Veiksmīgi nosūtīts pasūtījuma e-pasts uz ${notificationEmail} un ${email}`);
        return res.json({ success: true, message: "E-pasts veiksmīgi nosūtīts" });
      } else {
        // Log order to console when SMTP is not configured yet
        console.log("==================================================");
        console.log("[E-PASTS SIMULĀCIJA] SMTP nav konfigurēts. Saņemts pasūtījums:");
        console.log(`Saņēmējs: ${notificationEmail}`);
        console.log(`Klients: ${customerName} (${email}, ${phone})`);
        console.log(`Kopā: €${Number(grandTotal).toFixed(2)}`);
        console.log("==================================================");

        return res.json({
          success: true,
          simulated: true,
          message: "Pasūtījums pieņemts! (Lai reāli nosūtītu e-pastus, iestatiet SMTP mainīgos .env failā)",
        });
      }
    } catch (error: any) {
      console.error("[E-PASTS KĻŪDA]", error);
      res.status(500).json({ error: error.message || "Kļūda sūtot e-pastu" });
    }
  });

  // API endpoint: Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      const notificationEmail = process.env.ORDER_NOTIFICATION_EMAIL || process.env.SMTP_USER || "enzimi@inbox.lv";
      const transporter = createTransporter();

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #FAF9F5;">
          <h2 style="color: #122E1F;">📩 Jauna ziņa no saziņas formas</h2>
          <p><strong>Vārds:</strong> ${name}</p>
          <p><strong>E-pasts:</strong> ${email}</p>
          <p><strong>Tālrunis:</strong> ${phone || 'Nav norādīts'}</p>
          <p><strong>Ziņa:</strong></p>
          <blockquote style="background-color: #ffffff; padding: 12px; border-left: 4px solid #1B8044;">${message}</blockquote>
        </div>
      `;

      if (transporter) {
        await transporter.sendMail({
          from: `"Enzīmi Kontakti" <${process.env.SMTP_USER}>`,
          to: notificationEmail,
          replyTo: email,
          subject: `📩 Jauna ziņa no saziņas formas (${name})`,
          html: emailHtml,
        });
      } else {
        console.log("[KONTAKTI SIMULĀCIJA]", { name, email, phone, message });
      }

      return res.json({ success: true });
    } catch (error: any) {
      console.error("[KONTAKTI KĻŪDA]", error);
      res.status(500).json({ error: error.message || "Kļūda sūtot ziņu" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
