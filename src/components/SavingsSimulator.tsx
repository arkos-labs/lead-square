import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { TrendingDown, Euro, Leaf, ArrowRight, Zap } from "lucide-react";

const SavingsSimulator = () => {
  const [surface, setSurface] = useState(5000);
  const [hoursPerDay, setHoursPerDay] = useState(16);
  const [hasSensors, setHasSensors] = useState(true);
  const [savings, setSavings] = useState({ annual: 0, fiveYear: 0, co2: 0 });

  const POWER_OLD = 600;
  const POWER_SQUARE = 250;
  const KWH_PRICE = 0.18;
  const MAINT_COST_SAVINGS = 45;
  const CO2_FACTOR = 0.057;

  useEffect(() => {
    const annualHours = hoursPerDay * 365;
    const oldUnitKwh = (POWER_OLD * annualHours) / 1000;
    const squareUnitKwh = (POWER_SQUARE * annualHours) / 1000;
    const nbUnits = Math.ceil(surface / 100);
    const finalSquareKwh = hasSensors ? squareUnitKwh * 0.7 : squareUnitKwh;
    const annualEnergySavings = (oldUnitKwh - finalSquareKwh) * nbUnits * KWH_PRICE;
    const annualMaintSavings = nbUnits * MAINT_COST_SAVINGS;
    const totalAnnual = annualEnergySavings + annualMaintSavings;

    setSavings({
      annual: Math.round(totalAnnual),
      fiveYear: Math.round(totalAnnual * 5),
      co2: Math.round(((oldUnitKwh - finalSquareKwh) * nbUnits * CO2_FACTOR) / 1000),
    });
  }, [surface, hoursPerDay, hasSensors]);

  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="simulator" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            Simulateur
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Estimez vos économies en 30 secondes
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ajustez les paramètres selon votre installation actuelle pour découvrir votre potentiel de réduction des coûts.
          </p>
        </div>

        {/* Simulator Card */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Left: Controls */}
            <div className="space-y-8">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Paramètres de simulation
              </h3>

              {/* Surface Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-slate-700">Surface à équiper</label>
                  <span className="text-lg font-bold text-primary">{surface.toLocaleString()} m²</span>
                </div>
                <Slider
                  value={[surface]}
                  onValueChange={(value) => setSurface(value[0])}
                  min={1000}
                  max={50000}
                  step={500}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1 000 m²</span>
                  <span>50 000 m²</span>
                </div>
              </div>

              {/* Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-slate-700">Heures d'éclairage par jour</label>
                  <span className="text-lg font-bold text-primary">{hoursPerDay}h</span>
                </div>
                <Slider
                  value={[hoursPerDay]}
                  onValueChange={(value) => setHoursPerDay(value[0])}
                  min={8}
                  max={24}
                  step={1}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>8h</span>
                  <span>24h</span>
                </div>
              </div>

              {/* Sensors Toggle */}
              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                <div>
                  <Label htmlFor="sensors" className="text-sm font-medium text-slate-800 cursor-pointer">
                    Détection de présence
                  </Label>
                  <p className="text-xs text-slate-500 mt-0.5">Économies supplémentaires de 30%</p>
                </div>
                <Switch id="sensors" checked={hasSensors} onCheckedChange={setHasSensors} />
              </div>

              {/* Tech Specs */}
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="text-xs font-medium text-slate-700 mb-2">Hypothèses de calcul :</p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Remplacement éclairage 600W → LED 250W</li>
                  <li>• Prix électricité : 0,18 €/kWh</li>
                  <li>• 1 luminaire pour 100 m²</li>
                </ul>
              </div>
            </div>

            {/* Right: Results */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-800">
                Résultats estimés
              </h3>

              {/* Main Result */}
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Euro className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-600">Économies annuelles</span>
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  {savings.annual.toLocaleString()} €
                </p>
              </div>

              {/* Secondary Results */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-500">Sur 5 ans</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800">
                    {savings.fiveYear.toLocaleString()} €
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-slate-500">CO₂ évité/an</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800">
                    {savings.co2} tonnes
                  </p>
                </div>
              </div>

              {/* ROI Info */}
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-800">Retour sur investissement :</strong> généralement atteint entre 12 et 18 mois selon votre configuration.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Demander une étude personnalisée
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-slate-500">
                Estimation indicative basée sur des données moyennes du secteur
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SavingsSimulator;
