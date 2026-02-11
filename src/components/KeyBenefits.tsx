

const KeyBenefits = () => {
    return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
                    {/* Bloc 1: Key benefits summary (clean corporate) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            Audit LED Industriel • 48h de réponse
                        </div>
                        <h3 className="mt-4 text-2xl md:text-3xl font-display font-bold text-slate-900">
                            Performance, conformité et économies.
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Audit précis, étude photométrique claire, installation LED haute performance : réduction durable des consommations et confort visuel renforcé.
                        </p>

                        <div className="mt-5 grid sm:grid-cols-3 gap-3">
                            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                                <div className="text-xl font-semibold text-slate-900">-60%</div>
                                <div className="text-xs text-slate-500">Consommation</div>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                                <div className="text-xl font-semibold text-slate-900">8–24 mois</div>
                                <div className="text-xs text-slate-500">ROI</div>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                                <div className="text-xl font-semibold text-slate-900">10 ans</div>
                                <div className="text-xs text-slate-500">Garantie</div>
                            </div>
                        </div>

                        <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Audit + plan d’éclairement</li>
                            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Montage aides CEE</li>
                            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Pilotage chantier & SAV</li>
                            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Conformité Décret Tertiaire</li>
                        </ul>
                    </div>

                    {/* Bloc 2: Company summary (clean corporate) */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            Société • Couverture nationale
                        </div>
                        <h3 className="mt-4 text-2xl md:text-3xl font-display font-bold text-slate-900">
                            Votre partenaire relamping LED partout en France
                        </h3>
                        <p className="mt-3 text-slate-600">
                            Un interlocuteur unique, des délais maîtrisés et des solutions éligibles aux aides CEE. Objectif : un éclairage homogène, confortable et conforme.
                        </p>

                        <div className="mt-5 grid sm:grid-cols-2 gap-3">
                            <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Audit & étude photométrique</div>
                                <div className="text-sm text-slate-700">Diagnostic précis + recommandations techniques par zone.</div>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Financement CEE</div>
                                <div className="text-sm text-slate-700">Optimisation financière pour accélérer le ROI.</div>
                            </div>
                        </div>

                        <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                            <div className="grid sm:grid-cols-3 gap-2">
                                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Délais maîtrisés</div>
                                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />ROI optimisé</div>
                                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Conformité garantie</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;
