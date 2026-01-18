import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import squareLogo from '@/assets/square-logo-new.png';
import {
    Building2,
    Warehouse,
    Store,
    Zap,
    Ruler,
    TrendingDown,
    ShieldCheck,
    Users,
    Wrench,
    ChevronRight,
    ArrowLeft,
    Mail,
    Phone,
    Briefcase,
    Sparkles,
    Loader2,
    CheckCircle,
    FileSpreadsheet,
    ShieldAlert,
    X,
    Factory,
    Plus,
    ArrowRight
} from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

/**
 * LumePro - Audit Énergétique LED Interactif
 * Adapté pour fonctionner dans une Modale
 */
const AuditModal = ({ children }: { children?: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [auditResult, setAuditResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        sector: '',
        surface: '',
        currentLighting: '',
        priority: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: ''
    });

    const apiKey = ""; // La clé API semble manquante ou vide dans l'original. Assurez-vous qu'elle est gérée.

    // --- DONNÉES DES ÉTAPES ---

    const sectors = [
        { id: 'logistique', label: 'Logistique', icon: <Warehouse />, desc: 'Entrepôts & stockage' },
        { id: 'industrie', label: 'Industrie', icon: <Factory />, desc: 'Production & usines' },
        { id: 'distribution', label: 'Distribution', icon: <Store />, desc: 'Surfaces de vente' },
        { id: 'autre', label: 'Autre', icon: <Plus />, desc: 'Spécifiez votre projet' }
    ];

    const surfaces = [
        { id: 'pme', label: 'Moins de 1 000 m²' },
        { id: 'eti', label: '1 000 à 5 000 m²' },
        { id: 'grand', label: '5 000 à 15 000 m²' },
        { id: 'industriel', label: 'Plus de 15 000 m²' }
    ];

    const lightingTypes = [
        { id: 'fluo', label: 'Tubes Fluorescents / Néons', desc: 'Consommation élevée, maintenance fréquente' },
        { id: 'halogene', label: 'Projecteurs Halogènes / Sodium', desc: 'Chaleur excessive, forte puissance' },
        { id: 'old_led', label: 'LED ancienne génération (> 5 ans)', desc: 'Efficacité lumineuse dépassée' },
        { id: 'autre', label: 'Autre type d\'éclairage énergivore', desc: 'Audit visuel nécessaire' }
    ];

    const priorities = [
        { id: 'facture', label: 'Réduire la facture d\'énergie', icon: <TrendingDown /> },
        { id: 'normes', label: 'Être conforme aux normes', icon: <ShieldCheck /> },
        { id: 'confort', label: 'Améliorer le confort des équipes', icon: <Users /> },
        { id: 'maintenance', label: 'Éliminer les interventions', icon: <Wrench /> }
    ];

    // --- LOGIQUE API & NAVIGATION ---

    // --- LOGIQUE API & NAVIGATION ---

    // ... (rest of imports)

    // --- LOGIQUE API & NAVIGATION ---

    const handleSelect = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleNext = (field: string, value: string) => {
        handleSelect(field, value);
        handleNextStep();
    };

    const handleBack = () => setStep(step - 1);

    const sendLeadEmail = async () => {
        const SERVICE_ID = "service_kfa7m5l";
        const TEMPLATE_ID = "template_mvrjb45";
        const PUBLIC_KEY = "0-T-0-9LG_-Q2_SuC";

        const templateParams = {
            to_email: 'pro.squaregroup@gmail.com', // Votre email de réception
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            phone: formData.phone || 'Non renseigné',
            company: formData.company,
            sector: sectors.find(s => s.id === formData.sector)?.label,
            surface: formData.surface,
            lighting: formData.currentLighting,
            priority: priorities.find(p => p.id === formData.priority)?.label,
            date: new Date().toLocaleString('fr-FR')
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            console.log("Email de lead envoyé avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email :", error);
        }
    };

    const callGeminiAI = async () => {
        setIsAnalyzing(true);
        setError(null);

        // Envoyer l'email
        await sendLeadEmail();

        // Simuler un court temps de traitement pour l'expérience utilisateur
        await new Promise(resolve => setTimeout(resolve, 2000));

        setAuditResult("Votre dossier a été bien reçu. Nos ingénieurs vont analyser vos données pour valider votre éligibilité aux primes CEE et établir votre plan de financement personnalisé.");
        setStep(6);
        setIsAnalyzing(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        callGeminiAI();
    };

    // --- RENDU UI ---

    const progress = (step / 5) * 100;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            {/* Modal Plein Écran - Thème PREMIUM DARK adapté à la charte graphique */}
            <DialogContent className="max-w-[100vw] w-screen h-screen p-0 border-none bg-white text-slate-900 overflow-hidden font-sans selection:bg-primary/20 rounded-none focus:outline-none flex flex-col md:flex-row">

                <VisuallyHidden.Root>
                    <DialogTitle>Audit Énergétique Square</DialogTitle>
                    <DialogDescription>Questionnaire interactif pour estimer vos économies d'énergie.</DialogDescription>
                </VisuallyHidden.Root>

                {/* Close Button Custom */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 z-[60] p-3 bg-slate-100/80 hover:bg-slate-200 text-slate-400 hover:text-slate-900 rounded-full transition-all border border-slate-200 shadow-sm"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Sidebar Stepper - Design premium clair */}
                <aside className="w-full md:w-96 bg-slate-50 p-8 md:p-16 flex flex-col border-b md:border-b-0 md:border-r border-slate-200/60 relative z-10">
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <img src={squareLogo} alt="Square Lighting Solutions" className="h-16 w-auto object-contain" />
                        </div>
                        <h2 className="text-slate-900 text-3xl font-bold tracking-tight mb-4">Audit <br /><span className="text-primary italic">Énergétique</span></h2>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Déterminez vos gains énergétiques en 5 étapes clés.</p>
                    </div>

                    <nav className="flex-1 relative">
                        {/* Vertical Line Connector */}
                        <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-200 hidden md:block" />

                        <div className="space-y-12 relative z-10 flex flex-row md:flex-col justify-between md:justify-start">
                            {[
                                { id: 1, label: "Activité", icon: <Warehouse className="w-5 h-5" /> },
                                { id: 2, label: "Surface", icon: <Ruler className="w-5 h-5" /> },
                                { id: 3, label: "Solution", icon: <Zap className="w-5 h-5" /> },
                                { id: 4, label: "Objectif", icon: <TrendingDown className="w-5 h-5" /> },
                                { id: 5, label: "Résultats", icon: <Mail className="w-5 h-5" /> }
                            ].map((s) => (
                                <div key={s.id} className="flex items-center gap-5 group cursor-default">
                                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 shadow-sm ${step === s.id
                                        ? 'bg-primary border-primary text-white scale-110 shadow-primary/20 ring-4 ring-primary/5'
                                        : (step > s.id ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-slate-200 text-slate-400 group-hover:border-primary/30 group-hover:text-primary')
                                        }`}>
                                        {step > s.id ? <CheckCircle className="w-6 h-6" /> : s.icon}
                                    </div>
                                    <div className="hidden md:block">
                                        <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${step === s.id ? 'text-primary' : 'text-slate-400'}`}>Étape {s.id}</p>
                                        <p className={`text-lg font-bold leading-none ${step === s.id ? 'text-slate-900' : 'text-slate-500'}`}>{s.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </nav>

                    <div className="mt-auto pt-12 hidden md:block">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Certifications Experts</p>
                        <div className="flex gap-6 opacity-40">
                            <span className="font-bold text-sm tracking-tighter italic text-slate-600">QualiBat</span>
                            <span className="font-bold text-sm tracking-tighter italic text-slate-600">RGE 2026</span>
                            <span className="font-bold text-sm tracking-tighter italic text-slate-600">CEE</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 bg-white relative overflow-y-auto overflow-x-hidden flex flex-col min-h-0">
                    {/* Soft Decorations */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="flex-1 w-full max-w-4xl mx-auto px-8 md:px-20 py-16 md:py-24 flex flex-col justify-center relative z-20">

                        {/* Questions Steps (1-4) */}
                        {step >= 1 && step <= 4 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <button onClick={handleBack} className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 transition-colors uppercase tracking-[0.2em] text-[10px] font-black group">
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour
                                </button>

                                {step === 1 && (
                                    <div className="space-y-12">
                                        <div>
                                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">Quel est votre <br /><span className="text-primary italic">secteur d'activité ?</span></h1>
                                            <p className="text-slate-500 text-lg max-w-xl">Cette information nous aide à calibrer les normes de lux requises pour votre audit.</p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {sectors.map(s => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => handleNext('sector', s.id)}
                                                    className="group relative p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] text-left hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col items-start gap-6"
                                                >
                                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 border border-slate-100 transition-all">
                                                        {React.cloneElement(s.icon as React.ReactElement, { className: "w-8 h-8" })}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{s.label}</h3>
                                                        <p className="text-slate-500 font-medium group-hover:text-slate-600 transition-colors">{s.desc}</p>
                                                    </div>
                                                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-primary transition-colors">
                                                        <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-primary transition-all" />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-12">
                                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-12">Quelle est la <br /><span className="text-primary italic">surface totale ?</span></h1>
                                        <div className="grid grid-cols-1 gap-4">
                                            {surfaces.map(s => (
                                                <button key={s.id} onClick={() => { handleSelect('surface', s.label); handleNextStep(); }} className="flex items-center justify-between p-8 bg-white border-2 border-slate-100 rounded-2xl hover:border-primary/30 hover:bg-slate-50/50 hover:shadow-lg transition-all group">
                                                    <div className="flex items-center gap-8">
                                                        <Ruler className="w-8 h-8 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                                                        <span className="font-bold text-2xl text-slate-800">{s.label}</span>
                                                    </div>
                                                    <ChevronRight className="w-6 h-6 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-12">
                                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">Type d'<span className="text-primary italic">éclairage actuel ?</span></h1>
                                        <p className="text-slate-500 text-lg mb-12">Identifiez la source de consommation principale de votre site.</p>
                                        <div className="grid grid-cols-1 gap-4">
                                            {lightingTypes.map(l => (
                                                <button key={l.id} onClick={() => { handleSelect('currentLighting', l.label); handleNextStep(); }} className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] text-left hover:border-primary/30 hover:bg-slate-50/50 hover:shadow-lg transition-all group">
                                                    <h3 className="font-bold text-2xl text-slate-900 mb-2 group-hover:text-primary transition-colors">{l.label}</h3>
                                                    <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">{l.desc}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step === 4 && (
                                    <div className="space-y-12">
                                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-12">Votre <span className="text-primary italic">priorité #1 :</span></h1>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {priorities.map(p => (
                                                <button key={p.id} onClick={() => { handleSelect('priority', p.id); handleNextStep(); }} className="flex flex-col p-12 bg-white border-2 border-slate-100 rounded-[3rem] text-left hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary/5 group-hover:text-primary border border-slate-100 transition-all">
                                                        {React.cloneElement(p.icon as React.ReactElement, { className: "w-10 h-10" })}
                                                    </div>
                                                    <h3 className="font-bold text-2xl leading-tight text-slate-900">{p.label}</h3>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ÉTAPE 5: FORMULAIRE DE CAPTURE */}
                        {step === 5 && (
                            <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 w-full">
                                <div className="text-center mb-16">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/5 border border-primary/10 mb-8 shadow-sm">
                                        <FileSpreadsheet className="w-10 h-10 text-primary" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">Recevoir votre <br /><span className="text-primary italic">étude confidentielle</span></h2>
                                    <p className="text-slate-500 text-lg leading-relaxed">Nos ingénieurs préparent votre chiffrage. Précisez où nous devons vous l'envoyer.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Prénom</label>
                                            <input required type="text" className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-300" placeholder="Jean" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Nom</label>
                                            <input required type="text" className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-300" placeholder="Dupont" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Société</label>
                                        <div className="relative group">
                                            <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                            <input required type="text" placeholder="Nom de votre entreprise" className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-300" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email Pro</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                            <input required type="email" placeholder="jean.dupont@finance.pro" className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-300" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="pt-10">
                                        <button disabled={isAnalyzing} type="submit" className="w-full py-6 bg-primary hover:bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-4 transition-all hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50">
                                            {isAnalyzing ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <>
                                                    <span className="uppercase tracking-[0.2em] text-sm font-bold">Générer mon audit instantané</span>
                                                    <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                                            <ShieldCheck className="w-3 h-3 inline mr-2 -mt-1" /> Données cryptées & confidentielles
                                        </p>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* ÉTAPE 6: CONFIRMATION & RÉSULTAT IA */}
                        {step === 6 && (
                            <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 max-w-[900px] mx-auto w-full py-10">
                                <div className="bg-slate-50 border-2 border-slate-100 p-10 md:p-20 rounded-[4rem] relative overflow-hidden shadow-sm">
                                    <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                                        <Sparkles className="w-64 h-64 text-primary" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center border border-green-100 mx-auto mb-10 shadow-sm">
                                            <CheckCircle className="w-12 h-12 text-green-500" />
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight text-slate-900 leading-tight underline decoration-primary decoration-8 underline-offset-8">Dossier Validé !</h2>

                                        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 mb-12 relative shadow-xl shadow-slate-200/50">
                                            <h3 className="flex items-center gap-3 text-primary font-black mb-8 text-xs uppercase tracking-[0.3em]">
                                                <Sparkles className="w-5 h-5" /> Confirmation de réception
                                            </h3>
                                            <div className="text-slate-700 italic leading-relaxed text-lg md:text-xl border-l-[6px] border-primary pl-10 py-2 whitespace-pre-wrap font-medium">
                                                {auditResult || "Nos ingénieurs préparent votre rapport complet. Un expert Square va analyser votre configuration pour optimiser les aides CEE éligibles."}
                                            </div>
                                        </div>

                                        <div className="space-y-12">
                                            <p className="text-center text-slate-500 text-lg leading-relaxed max-w-lg mx-auto">
                                                Excellente nouvelle <strong>{formData.firstName}</strong>. Votre demande pour <strong>{formData.company}</strong> est en cours de traitement prioritaire.
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-4">
                                                <button className="flex-1 py-6 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-4 shadow-xl">
                                                    <FileSpreadsheet className="w-6 h-6" /> Fiche Technique LED
                                                </button>
                                                <button onClick={() => { setOpen(false); setStep(0); }} className="flex-1 py-6 bg-slate-100 text-slate-600 font-black rounded-2xl hover:bg-slate-200 transition-all">
                                                    Quitter l'audit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </DialogContent>
        </Dialog>
    );
};

export default AuditModal;
