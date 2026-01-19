import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoRge from "@/assets/rge-qualibat.png";
import logoCee from "@/assets/cee-cert.png";

import squareLogo from "@/assets/square-logo-new.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-6 border-t border-border bg-slate-950">
      <div className="container px-4">
        <div className="grid md:grid-cols-6 gap-6">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 -ml-4">
              <img src={squareLogo} alt="Square Lighting Solutions" className="h-16 w-auto object-contain" loading="lazy" />
            </div>
            <p className="text-muted-foreground text-sm max-w-xs mb-4 leading-relaxed opacity-80">
              Solutions d'éclairage LED industriel. Nous intervenons partout en France pour réduire votre empreinte carbone et vos factures.
            </p>

          </div>

          {/* Column A: Solutions */}
          <div className="md:col-span-1">
            <h4 className="font-display font-bold mb-4 text-white uppercase text-[10px] tracking-widest">Solutions</h4>
            <ul className="space-y-2 text-[13px] text-muted-foreground font-medium">
              <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection("benefits"); }} className="hover:text-primary transition-colors">Relamping</a></li>
              <li><a href="#simulator" onClick={(e) => { e.preventDefault(); scrollToSection("simulator"); }} className="hover:text-primary transition-colors">Simulateur</a></li>
              <li><a href="#audit-form" onClick={(e) => { e.preventDefault(); scrollToSection("audit-form"); }} className="text-primary font-bold">Audit Offert</a></li>
            </ul>
          </div>

          {/* Column B: Actualités */}
          <div className="md:col-span-1">
            <h4 className="font-display font-bold mb-4 text-white uppercase text-[10px] tracking-widest">Actualités</h4>
            <ul className="space-y-2 text-[13px] text-muted-foreground font-medium">
              <li><Link to="/expertise/decret-tertiaire" className="hover:text-primary transition-colors">Décret Tertiaire</Link></li>
              <li><Link to="/expertise/financement-cee" className="hover:text-primary transition-colors">Aides CEE</Link></li>
              <li><Link to="/expertise" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column C: Contact */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold mb-4 text-white uppercase text-[10px] tracking-widest">Contact</h4>
            <ul className="grid grid-cols-1 gap-3 text-[13px] text-muted-foreground font-medium">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <a href="tel:+33635880886" className="hover:text-primary">+33 6 35 88 08 86</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <a href="mailto:contact@square-solutions.fr" className="hover:text-primary">contact@square-solutions.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5" />
                <span>Paris • France Entière</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Row - Plus compacte */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-80">
            <img src={logoRge} alt="RGE" className="h-7 w-auto grayscale brightness-200" loading="lazy" />
            <img src={logoCee} alt="CEE" className="h-7 w-auto grayscale brightness-200" loading="lazy" />
            <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">Qualifelec</span>
            <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">RT 2020</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-muted-foreground/50">
            <p>© 2026 Square Lighting</p>
            <div className="flex gap-4">
              <Link to="/mentions-legales" className="hover:text-white transition-colors">Légal</Link>
              <Link to="/plan-du-site" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
