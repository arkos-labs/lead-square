import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, state } = useLocation();

    useEffect(() => {
        // Si on a un état "scrollTo", on laisse le composant cible gérer le défilement
        if (state && (state as any).scrollTo) {
            return;
        }

        // Sinon, on remonte en haut de la page lors d'un changement de route
        window.scrollTo(0, 0);
    }, [pathname, state]);

    return null;
};

export default ScrollToTop;
