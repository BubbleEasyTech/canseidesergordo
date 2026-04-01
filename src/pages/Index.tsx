import { Youtube, Instagram, Facebook } from "lucide-react";
import logoCircular from "@/assets/logo-circular.png";
import capaYoutube from "@/assets/capa-youtube.png";

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

const LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCgvEunGXf8R8oaLghaKJLPQ",
    icon: Youtube,
    color: "bg-red-600 hover:bg-red-500",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eucanseidesergordo/",
    icon: Instagram,
    color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:opacity-90",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@eucanseidesergordo",
    icon: TikTokIcon,
    color: "bg-gray-900 hover:bg-gray-800 border border-gray-700",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/canseidesergordo",
    icon: Facebook,
    color: "bg-blue-600 hover:bg-blue-500",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Banner */}
      <div className="w-full max-w-2xl opacity-0 animate-fade-in-up">
        <img
          src={capaYoutube}
          alt="Cansei de Ser Gordo - Banner"
          className="w-full h-48 sm:h-56 object-cover rounded-b-2xl"
        />
      </div>

      {/* Main content */}
      <main className="w-full max-w-md px-6 -mt-16 flex flex-col items-center pb-12">
        {/* Avatar */}
        <div className="opacity-0 animate-scale-in animate-pulse-glow rounded-full p-1 bg-gradient-to-br from-primary to-secondary">
          <img
            src={logoCircular}
            alt="Cansei de Ser Gordo"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-background"
          />
        </div>

        {/* Name & tagline */}
        <h1 className="font-display text-4xl sm:text-5xl text-primary mt-4 opacity-0 animate-fade-in-up-delay-1 tracking-wide">
          CANSEI DE SER GORDO
        </h1>
        <p className="text-secondary font-semibold text-lg mt-1 opacity-0 animate-fade-in-up-delay-1">
          Jorge Bentes
        </p>

        {/* Bio */}
        <div className="mt-6 w-full bg-card/60 backdrop-blur-sm rounded-xl p-5 border border-border opacity-0 animate-fade-in-up-delay-2">
          <p className="text-foreground/80 text-center text-sm leading-relaxed">
            <strong className="text-primary">Cansei de Ser Gordo</strong> é um movimento na internet criado em 2013 pelo jornalista <strong className="text-secondary">Jorge Bentes</strong>, que depois de emagrecer 80 quilos, transformou sua jornada em missão de vida.
          </p>
          <p className="text-foreground/80 text-center text-sm leading-relaxed mt-3">
            Hoje, o Cansei de Ser Gordo tem mais de <strong>300 mil seguidores</strong> nas redes sociais e virou uma plataforma de luta contra a obesidade e conscientização sobre essa doença tão grave.
          </p>
          <p className="text-foreground/80 text-center text-sm leading-relaxed mt-3">
            🔥 Faça parte desse movimento e siga a gente nas redes sociais.
          </p>
          <div className="mt-3 text-center text-xs text-muted-foreground space-y-1">
            <p>Instagram e TikTok — <span className="text-foreground/70">@eucanseidesergordo</span></p>
            <p>YouTube e Facebook — <span className="text-foreground/70">Cansei de Ser Gordo</span></p>
            <p className="mt-2">📧 <a href="mailto:jobentes@gmail.com" className="text-primary hover:underline">jobentes@gmail.com</a></p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 w-full flex flex-col gap-4">
          {LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                opacity-0
                ${i === 0 ? "animate-fade-in-up-delay-2" : i === 1 ? "animate-fade-in-up-delay-3" : "animate-fade-in-up-delay-4"}
                flex items-center gap-4 w-full px-6 py-4 rounded-xl text-white font-bold text-lg
                transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
                ${link.color}
              `}
            >
              <link.icon size={24} />
              <span className="flex-1 text-center">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-muted-foreground text-xs opacity-0 animate-fade-in-up-delay-4">
          © {new Date().getFullYear()} Cansei de Ser Gordo • Todos os direitos reservados
        </footer>
      </main>
    </div>
  );
};

export default Index;
