import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Function to load translations via lazy loading or direct imports
// For simplicity in this step, we'll define some basic translations here
// You can expand this by moving translations to public/locales/{lang}/translation.json

const resources = {
    en: {
        translation: {
            "nav": {
                "benefits": "Benefits",
                "simulator": "Simulator",
                "news": "News",
                "audit": "Request Free Audit"
            },
            "hero": {
                "title": "Expert in LED Relamping",
                "titleSuffix": "and Parking Lighting",
                "subtitle": "Transform your industrial lighting: up to 60% direct savings, €0 initial investment, immediate profitability.",
                "cta": "Request a free audit"
            }
        }
    },
    fr: {
        translation: {
            "nav": {
                "benefits": "Avantages",
                "simulator": "Simulateur",
                "news": "Actualités",
                "audit": "Demander un audit gratuit"
            },
            "hero": {
                "title": "Expert en Relamping LED",
                "titleSuffix": "et Éclairage de Parkings",
                "subtitle": "Transformez votre éclairage industriel : jusqu'à 60% d'économies directes, 0€ d'investissement initial, rentabilité immédiate.",
                "cta": "Demander un audit offert"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "fr", // Default to French if language not detected
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });

export default i18n;
