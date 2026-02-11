import { CheckCircle2, Zap, Hourglass, Euro, ShieldCheck } from "lucide-react";

const StrategicPointBlock = () => {
    return (
        <div className="my-16 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <Zap className="w-6 h-6 text-blue-600" />
                À RETENIR : Pourquoi choisir les solutions Square ?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <Euro className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Économie Immédiate</h4>
                        <p className="text-sm text-slate-600">Jusqu'à 80% de réduction sur votre facture d'électricité dès l'installation.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <Hourglass className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Maintenance Zéro</h4>
                        <p className="text-sm text-slate-600">Durée de vie supérieure à 50 000 heures, fini le remplacement incessant.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Éligibilité CEE</h4>
                        <p className="text-sm text-slate-600">Nous finançons votre projet via les Certificats d'Économies d'Énergie.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Conformité 2026</h4>
                        <p className="text-sm text-slate-600">Répondez aux exigences du Décret Tertiaire sans effort.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicPointBlock;
