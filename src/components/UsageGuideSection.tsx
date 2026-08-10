import React from 'react';
import { Clock, Sun, Utensils, Activity, Droplets, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const UsageGuideSection: React.FC = () => {
  return (
    <section id="ka-un-kad-lietot" className="py-8 sm:py-10 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#122E1F]">
            Kā un kad lietot enzīmu dzērienus?
          </h2>
          <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
            Lai gūtu maksimālu labumu no dzīvajām baktērijām un enzīmiem, ir svarīgi to lietot pareizā laikā un veidā.
          </p>
        </div>

        {/* Grid 1: Kad lietot (When to use) */}
        <div className="space-y-4">
          <h3 className="font-serif-title text-xl font-bold text-[#122E1F] flex items-start gap-2.5">
            <Clock className="w-5 h-5 text-[#1B8044] shrink-0 mt-1" />
            <span>1. Kad vislabāk lietot enzīmu dzērienu?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Morning */}
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] flex items-center justify-center text-[#1B8044] border border-[#CDE8D5]">
                  <Sun className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1B8044] uppercase tracking-wider block">Rīta rituāls</span>
                  <h4 className="font-serif-title text-base font-bold text-[#122E1F]">No rīta tukšā dūšā</h4>
                </div>
                <p className="text-xs text-[#2E523A] leading-relaxed">
                  Iedzeriet <strong>50–100 ml</strong> dzēriena 15–20 minūtes pirms brokastīm. Tas pamodina gremošanas traktu, veicina žults izdalīšanos un piepilda organismu ar dabisku enerģiju.
                </p>
              </div>
              <div className="pt-2 border-t border-[#CDE8D5]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#122E1F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8044]" />
                <span>Labākais laiks mikrofloras atjaunošanai</span>
              </div>
            </div>

            {/* Before Meals */}
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] flex items-center justify-center text-[#1B8044] border border-[#CDE8D5]">
                  <Utensils className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1B8044] uppercase tracking-wider block">Pirms ēšanas</span>
                  <h4 className="font-serif-title text-base font-bold text-[#122E1F]">15–20 min pirms maltītes</h4>
                </div>
                <p className="text-xs text-[#2E523A] leading-relaxed">
                  Lietojot pirms pusdienām vai vakariņām, enzīmi un organiskās skābes palīdz kuņģim vieglāk sašķelt barību, novēršot smaguma sajūtu un vēdera pūšanos.
                </p>
              </div>
              <div className="pt-2 border-t border-[#CDE8D5]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#122E1F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8044]" />
                <span>Atvieglo smagu ēdienu sagremošanu</span>
              </div>
            </div>

            {/* After Sport/Meals */}
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] flex items-center justify-center text-[#1B8044] border border-[#CDE8D5]">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1B8044] uppercase tracking-wider block">Slodze un atjaunošanās</span>
                  <h4 className="font-serif-title text-base font-bold text-[#122E1F]">Pēc fiziskas slodzes</h4>
                </div>
                <p className="text-xs text-[#2E523A] leading-relaxed">
                  Sajaukts ar vēsu ūdeni, enzīmu dzēriens kalpo kā organisks izotonisks dzēriens. Tas atjauno elektrolītu un pH līdzsvaru pēc treniņa vai pirts apmeklējuma.
                </p>
              </div>
              <div className="pt-2 border-t border-[#CDE8D5]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#122E1F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8044]" />
                <span>Atjauno organisma spēkus un šķidrumu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2: Kā pareizi lietot (How to use & Tips) */}
        <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-6">
          <h3 className="font-serif-title text-xl font-bold text-[#122E1F] flex items-start gap-2.5">
            <Droplets className="w-5 h-5 text-[#1B8044] shrink-0 mt-1" />
            <span>2. Pagatavošanas un lietošanas noteikumi</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">Dienas deva</span>
              <p className="text-xs text-[#2E523A]">
                Sāciet ar 30–50 ml dienā. Kad organisms pieradīs, devu variet palielināt līdz 100–150 ml dienā.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">Jaukšana ar ūdeni</span>
              <p className="text-xs text-[#2E523A]">
                Var lietot tīrā veidā kā koncentrātu vai atšķaidīt ar vēsu ūdeni proporcijā 1:3 līdz 1:5.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">Kursa ilgums</span>
              <p className="text-xs text-[#2E523A]">
                Vislabākos rezultātus sniedz 3–4 nedēļu regulārs kurss, īpaši pavasara un rudens gadalaiku maiņā.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">Uzglabāšana</span>
              <p className="text-xs text-[#2E523A]">
                Pēc pudeles atvēršanas glabāt ledusskapī (+2°C līdz +6°C). Dzēriens ir dzīvs un tas turpina fermentēties arī pēc pudeles atvēršanas, ledusskapī tas notiek lēnāk.
              </p>
            </div>
          </div>

          {/* Golden Rule Warning */}
          <div className="bg-[#E5F4E9]/80 p-4 sm:p-5 rounded-2xl border border-[#CDE8D5] flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#122E1F] space-y-1">
              <strong className="font-bold block">Svarīgs noteikums:</strong>
              <p className="text-[#2E523A] leading-relaxed">
                Nekad nepievienojiet enzīmu dzērienu karstam ūdenim vai tējai (virs 40°C)! Karstuma ietekmē dzīvās baktērijas un vērtīgie fermenti aiziet bojā. Dzērienam jābūt vēsā vai istabas temperatūrā.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
