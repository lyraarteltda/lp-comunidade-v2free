import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5511995631610?text=Ol%C3%A1!%20Gostaria%20de%20entrar%20na%20Comunidade%20Aberta%20dos%20Maestros%20da%20IA!";

export default function Home() {
  return (
    <main className="noise-bg">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.06] blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1
            className="font-bold tracking-[-0.03em] leading-[1.1] mb-6 uppercase"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Comunidade Aberta{" "}
            <span className="gradient-text-gold">dos Maestros da IA</span>
          </h1>

          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            100% Grátis, Prompts, Skills e Recursos de Todos os Vídeos do
            Youtube, Kit de Ferramentas IA Completo
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Entrar Agora</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}
