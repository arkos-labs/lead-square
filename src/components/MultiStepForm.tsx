import React, { useState, useRef } from 'react';
import { toast } from "sonner";
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
  Plus,
  Factory,
  ArrowRight,
  Loader2,
  Check,
  MapPin
} from 'lucide-react';

const MultiStepForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    sector: '',
    surface: '',
    currentLighting: '',
    priority: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    address: ''
  });

  const sectors = [
    { id: 'logistique', label: 'Logistique', icon: <Warehouse className="w-5 h-5" />, desc: 'Entrepôts & stockage' },
    { id: 'industrie', label: 'Industrie', icon: <Factory className="w-5 h-5" />, desc: 'Production & usines' },
    { id: 'distribution', label: 'Distribution', icon: <Store className="w-5 h-5" />, desc: 'Surfaces de vente' },
    { id: 'autre', label: 'Autre', icon: <Plus className="w-5 h-5" />, desc: 'Spécifiez votre projet' }
  ];

  const surfaces = [
    { id: 'pme', label: 'Moins de 1 000 m²', value: '< 1 000 m²' },
    { id: 'eti', label: '1 000 à 5 000 m²', value: '1 000 - 5 000 m²' },
    { id: 'grand', label: '5 000 à 15 000 m²', value: '5 000 - 15 000 m²' },
    { id: 'industriel', label: 'Plus de 15 000 m²', value: '> 15 000 m²' }
  ];

  const lightingTypes = [
    { id: 'fluo', label: 'Tubes Fluorescents', desc: 'Néons traditionnels' },
    { id: 'halogene', label: 'Halogènes / Sodium', desc: 'Projecteurs haute puissance' },
    { id: 'old_led', label: 'LED > 5 ans', desc: 'Technologie dépassée' },
    { id: 'autre', label: 'Autre', desc: 'À déterminer' }
  ];

  const priorities = [
    { id: 'facture', label: 'Réduire les coûts', icon: <TrendingDown className="w-5 h-5" /> },
    { id: 'normes', label: 'Conformité', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'confort', label: 'Confort visuel', icon: <Users className="w-5 h-5" /> },
    { id: 'maintenance', label: 'Zéro maintenance', icon: <Wrench className="w-5 h-5" /> }
  ];

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const sendLeadEmail = async () => {
    const SERVICE_ID = "service_kfa7m5l";
    const TEMPLATE_ID = "template_mvrjb45";
    const PUBLIC_KEY = "0-T-0-9LG_-Q2_SuC";

    const templateParams = {
      to_email: 'pro.squaregroup@gmail.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone || 'Non renseigné',
      address: formData.address || 'Non renseigné',
      company: formData.company,
      sector: sectors.find(s => s.id === formData.sector)?.label,
      surface: formData.surface,
      lighting: formData.currentLighting,
      priority: priorities.find(p => p.id === formData.priority)?.label,
      date: new Date().toLocaleString('fr-FR')
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendLeadEmail();
      setIsSuccess(true);
      setStep(6);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitles = [
    "Secteur d'activité",
    "Surface à équiper",
    "Type d'éclairage",
    "Objectif principal",
    "Vos coordonnées"
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            Étude gratuite
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Demandez votre audit énergétique
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Répondez à quelques questions pour recevoir une étude personnalisée de votre potentiel d'économies.
          </p>
        </div>

        {/* Progress Bar */}
        {step < 6 && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-600">
                Étape {step} sur 5
              </span>
              <span className="text-sm font-medium text-primary">
                {stepTitles[step - 1]}
              </span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          
          {/* Back Button */}
          {step > 1 && step < 6 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Retour
            </button>
          )}

          {/* Step 1: Sector */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Quel est votre secteur d'activité ?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleSelect('sector', s.id)}
                    className={`relative p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.sector === s.id
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                      formData.sector === s.id 
                        ? 'bg-primary text-white' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {s.icon}
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-0.5">{s.label}</h4>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                    {formData.sector === s.id && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="pt-6">
                <button
                  onClick={handleNextStep}
                  disabled={!formData.sector}
                  className="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Continuer
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Surface */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Quelle est la surface à équiper ?
              </h3>
              <div className="space-y-3">
                {surfaces.map(s => (
                  <button
                    key={s.id}
                    onClick={() => { handleSelect('surface', s.label); handleNextStep(); }}
                    className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-between hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-100 group-hover:bg-primary/10 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                        <Ruler className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-slate-800">{s.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Lighting */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Quel type d'éclairage utilisez-vous ?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {lightingTypes.map(l => (
                  <button
                    key={l.id}
                    onClick={() => { handleSelect('currentLighting', l.label); handleNextStep(); }}
                    className="p-5 bg-white border-2 border-slate-200 rounded-xl text-left hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-slate-100 group-hover:bg-primary/10 rounded-lg flex items-center justify-center mb-3 text-slate-500 group-hover:text-primary transition-colors">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-0.5 group-hover:text-primary transition-colors">{l.label}</h4>
                    <p className="text-sm text-slate-500">{l.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Priorities */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Quel est votre objectif principal ?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {priorities.map(p => (
                  <button
                    key={p.id}
                    onClick={() => { handleSelect('priority', p.id); handleNextStep(); }}
                    className="p-5 bg-white border-2 border-slate-200 rounded-xl text-left hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-slate-100 group-hover:bg-primary/10 rounded-lg flex items-center justify-center mb-3 text-slate-500 group-hover:text-primary transition-colors">
                      {p.icon}
                    </div>
                    <h4 className="font-semibold text-slate-800 group-hover:text-primary transition-colors">{p.label}</h4>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Contact */}
          {step === 5 && (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Vos coordonnées pour recevoir l'étude
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Prénom</label>
                  <input
                    required
                    type="text"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nom</label>
                  <input
                    required
                    type="text"
                    placeholder="Dupont"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Entreprise</label>
                <input
                  required
                  type="text"
                  placeholder="Nom de votre société"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Adresse du site</label>
                <input
                  required
                  type="text"
                  placeholder="123 rue de l'Industrie, 75000 Paris"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email professionnel</label>
                  <input
                    required
                    type="email"
                    placeholder="jean@entreprise.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Téléphone</label>
                  <input
                    required
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    if (formRef.current && !formRef.current.checkValidity()) {
                      toast.error("Formulaire incomplet", {
                        description: "Merci de renseigner tous les champs obligatoires.",
                        duration: 4000,
                      });
                    }
                  }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-slate-400 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Recevoir mon étude gratuite
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 mt-3">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par nos équipes.
                </p>
              </div>
            </form>
          )}

          {/* Step 6: Success */}
          {step === 6 && (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Demande envoyée !
              </h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Merci <strong>{formData.firstName}</strong>. Un conseiller vous recontactera sous 48h pour vous présenter votre étude personnalisée.
              </p>
              <button
                onClick={() => { setStep(1); setFormData({ sector: '', surface: '', currentLighting: '', priority: '', firstName: '', lastName: '', company: '', email: '', phone: '', address: '' }); }}
                className="text-primary font-medium hover:underline"
              >
                Soumettre une nouvelle demande
              </button>
            </div>
          )}

        </div>

        {/* Trust Indicators */}
        {step < 6 && (
          <div className="max-w-2xl mx-auto mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>100% gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Réponse sous 48h</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MultiStepForm;
