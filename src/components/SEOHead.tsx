import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Enzīmi - Dabiski Fermentēti Dzērieni`;
    } else {
      document.title = "Enzīmi | Dabiski Fermentēti Dzērieni un Pakalpojumi";
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return null;
}

export default SEOHead;
