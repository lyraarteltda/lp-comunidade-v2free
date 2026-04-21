import {
  MessageCircle,
  Check,
  Users,
  Zap,
  BookOpen,
  Radio,
  Bot,
  Shield,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5511995631610?text=MAESTROS%20FREE";

const benefits = [
  {
    icon: Radio,
    title: "Lives Semanais ao Vivo",
    desc: "Com fundadores e especialistas convidados — toda semana, conteúdo novo e atualizado.",
  },
  {
    icon: Zap,
    title: "+20h de Sistemas Prontos",
    desc: "Automação, vendas, atendimento — tudo pronto pra implementar no seu negócio.",
  },
  {
    icon: BookOpen,
    title: "7 Trilhas Completas",
    desc: "De automação a vendas autônomas com IA. Cada trilha é um atalho.",
  },
  {
    icon: Bot,
    title: "100+ Agentes de IA",
    desc: "Prontos pra copiar, colar e rodar. Sem código, sem complicação.",
  },
  {
    icon: Users,
    title: "Rede Exclusiva",
    desc: "CEOs e empreendedores que já usam IA na prática, todos os dias.",
  },
  {
    icon: Shield,
    title: "Suporte Direto",
    desc: "Tire dúvidas com quem já faturou milhões usando IA no negócio.",
  },
];

const steps = [
  {
    n: "1",
    title: "Clique no botão abaixo",
    desc: "Você vai direto pro nosso WhatsApp.",
  },
  {
    n: "2",
    title: "Responda algumas perguntas rápidas",
    desc: "Nome e email — leva 30 segundos.",
  },
  {
    n: "3",
    title: "Receba seu acesso à comunidade",
    desc: "Link + senha direto no seu WhatsApp. Pronto.",
  },
];

function WhatsAppCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] ${className}`}
    >
      <MessageCircle className="w-6 h-6" />
      <span>Entrar pelo WhatsApp</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="noise-bg">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.06] blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-6">
            100% Gratuita &bull; Acesso Imediato via WhatsApp
          </p>

          <h1
            className="font-bold tracking-[-0.03em] leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            A Maior Comunidade Brasileira de{" "}
            <span className="gradient-text-gold">IA para Negócios</span>
          </h1>

          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Lives semanais, +20 horas de sistemas prontos, 100+ agentes de IA e
            uma rede de empreendedores que já estão faturando com inteligência
            artificial.{" "}
            <span className="text-foreground font-medium">
              Tudo grátis. Sem cartão. Sem formulário.
            </span>
          </p>

          <WhatsAppCTA />

          <p className="mt-6 text-text-secondary text-sm">
            +2.000 membros ativos &bull; Conteúdo novo toda semana
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-bold tracking-tight mb-16"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            Como funciona?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative bg-surface-1 border border-white/[0.06] rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-bold text-xl mx-auto mb-5">
                  {s.n}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 px-6 bg-surface-1/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold mb-4">
              O que você recebe
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
              Tudo isso.{" "}
              <span className="gradient-text-gold">De graça.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-background border border-white/[0.06] rounded-2xl p-6 hover:border-gold/20 transition-colors"
              >
                <b.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-semibold text-base mb-2">{b.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-1 border border-white/[0.06] rounded-2xl p-8 md:p-12">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold gradient-text-gold">
                  2.000+
                </p>
                <p className="text-text-secondary text-sm mt-1">
                  membros ativos
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold gradient-text-gold">
                  50+
                </p>
                <p className="text-text-secondary text-sm mt-1">
                  lives gravadas
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold gradient-text-gold">
                  100%
                </p>
                <p className="text-text-secondary text-sm mt-1">gratuito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get checklist + CTA */}
      <section className="py-20 md:py-28 px-6 bg-surface-1/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-bold tracking-tight mb-10"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            Resumo do seu acesso gratuito
          </h2>

          <ul className="text-left space-y-4 mb-12 max-w-lg mx-auto">
            {[
              "Lives semanais ao vivo com especialistas",
              "+20h de sistemas prontos para implementar",
              "7 trilhas completas de IA para negócios",
              "100+ agentes de IA prontos para usar",
              "Rede exclusiva de empreendedores",
              "Suporte direto com quem já fatura com IA",
              "Biblioteca completa de gravações",
              "Arsenal de ferramentas, prompts e templates",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#25D366] mt-0.5 shrink-0" />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>

          <WhatsAppCTA />

          <p className="mt-6 text-text-secondary text-sm">
            Sem cartão de crédito &bull; Sem formulário &bull; Acesso em 1
            minuto
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-center font-bold tracking-tight mb-12"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "É realmente grátis?",
                a: "Sim, 100% gratuito. Sem cartão, sem pegadinha. Você acessa tudo pelo WhatsApp em menos de 1 minuto.",
              },
              {
                q: "Preciso preencher algum formulário?",
                a: "Não. Basta clicar no botão do WhatsApp, responder nome e email, e pronto — você já recebe seu acesso.",
              },
              {
                q: "Que tipo de conteúdo tem na comunidade?",
                a: "Lives semanais ao vivo, +20 horas de sistemas prontos, 7 trilhas de IA para negócios, 100+ agentes de IA e uma rede ativa de empreendedores.",
              },
              {
                q: "Preciso saber programar?",
                a: "Não. Todo o conteúdo é feito para empreendedores, não programadores. Os agentes e automações são prontos para usar, sem código.",
              },
              {
                q: "Como funciona o acesso?",
                a: "Depois de enviar seu nome e email pelo WhatsApp, você recebe automaticamente o link e senha para acessar a plataforma da comunidade.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-surface-1 border border-white/[0.06] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium hover:text-gold transition-colors">
                  {faq.q}
                  <span className="text-text-secondary group-open:rotate-45 transition-transform text-xl ml-4">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
          >
            Pronto para dominar{" "}
            <span className="gradient-text-gold">IA no seu negócio?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
            Junte-se a +2.000 empreendedores que já estão transformando seus
            negócios com inteligência artificial.
          </p>

          <WhatsAppCTA className="text-xl px-10 py-5" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center text-text-secondary text-xs">
        <p>
          © 2026 Maestros da IA — Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}
