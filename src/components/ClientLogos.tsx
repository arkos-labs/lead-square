// Client logos - Transport, Logistique, Grandes Surfaces, Bâtiment
import logoCarrefour from "@/assets/logos/carrefour.svg";
import logoLeroyMerlin from "@/assets/logos/leroy-merlin.svg";
import logoAuchan from "@/assets/logos/auchan.svg";
import logoMichelin from "@/assets/logos/michelin.svg";
import logoLeclerc from "@/assets/logos/leclerc.svg";
import logoSaintGobain from "@/assets/logos/saint-gobain.svg";
import logoDhl from "@/assets/logos/dhl.svg";
import logoTotal from "@/assets/logos/total.svg";
import logoDecathlon from "@/assets/logos/decathlon.svg";
import logoLidl from "@/assets/logos/lidl.svg";
import logoMetro from "@/assets/logos/metro.svg";
import logoGeodis from "@/assets/logos/geodis.svg";
import logoVinci from "@/assets/logos/vinci.svg";
import logoIntermarche from "@/assets/logos/intermarche.svg";
import logoCora from "@/assets/logos/cora.svg";
import logoBouygues from "@/assets/logos/bouygues.svg";
import logoChronopost from "@/assets/logos/chronopost.svg";
import logoFnac from "@/assets/logos/fnac.svg";
import logoCastorama from "@/assets/logos/castorama.svg";
import logoBricodepot from "@/assets/logos/bricodepot.svg";

const clientLogos = [
    // Grandes surfaces & Distribution
    { src: logoCarrefour, alt: "Référence Client Square - Carrefour Logistique" },
    { src: logoLeclerc, alt: "Référence Client Square - E.Leclerc Distribution" },
    { src: logoAuchan, alt: "Référence Client Square - Hypermarché Auchan" },
    { src: logoLidl, alt: "Référence Client Square - Entrepôts Lidl" },
    { src: logoMetro, alt: "Référence Client Square - Metro Cash & Carry" },
    { src: logoIntermarche, alt: "Référence Client Square - Intermarché Distribution" },
    { src: logoCora, alt: "Référence Client Square - Hypermarchés Cora" },
    { src: logoFnac, alt: "Référence Client Square - Fnac Entrepôts" },
    // Transport & Logistique
    { src: logoDhl, alt: "Référence Client Square - Logistique DHL" },
    { src: logoGeodis, alt: "Référence Client Square - Transport Geodis" },
    { src: logoChronopost, alt: "Référence Client Square - Chronopost Logistique" },
    // Bâtiment & Bricolage
    { src: logoLeroyMerlin, alt: "Référence Client Square - Magasin Leroy Merlin" },
    { src: logoCastorama, alt: "Référence Client Square - Castorama Distribution" },
    { src: logoBricodepot, alt: "Référence Client Square - Brico Dépôt" },
    { src: logoDecathlon, alt: "Référence Client Square - Centre Distribution Decathlon" },
    // Construction & Industrie
    { src: logoSaintGobain, alt: "Référence Client Square - Industrie Saint-Gobain" },
    { src: logoVinci, alt: "Référence Client Square - Construction Vinci" },
    { src: logoBouygues, alt: "Référence Client Square - BTP Bouygues" },
    { src: logoMichelin, alt: "Référence Client Square - Usines Michelin" },
    { src: logoTotal, alt: "Référence Client Square - Sites Industriels TotalEnergies" },
];

const ClientLogos = () => {
    return (
        <section className="relative w-full bg-white/95 backdrop-blur-sm py-12">
            <div className="container mx-auto">
                <h2 className="text-sm font-medium text-gray-600 mb-8 text-center uppercase tracking-wider">
                    Ils nous font confiance
                </h2>
                <div className="relative overflow-hidden">
                    {/* Gradient overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling logos */}
                    <div className="flex animate-marquee hover:[animation-play-state:paused]">
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
                            <div
                                key={`${logo.alt}-${index}`}
                                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                            >
                            <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:scale-110 transition-all duration-300"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;