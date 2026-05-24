import { useState } from "react";
import {
  Apple,
  ArrowRight,
  AtSign,
  BadgeAlert,
  Banana,
  CalendarCheck,
  Circle,
  ClipboardList,
  Clock3,
  FlameKindling,
  Gift,
  Grape,
  HeartHandshake,
  Leaf,
  MessageCircle,
  Nut,
  PackageCheck,
  PartyPopper,
  Plus,
  School,
  Send,
  Shell,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Wheat,
} from "lucide-react";

      const whatsappUrl =
        "https://wa.me/5500000000000?text=Oi!%20Quero%20entrar%20no%20piloto%20da%20PIQUI.";

      function Icon({ name, className = "h-5 w-5" }) {
  const icons = {
    apple: Apple,
    "arrow-right": ArrowRight,
    "at-sign": AtSign,
    "badge-alert": BadgeAlert,
    banana: Banana,
    "calendar-check": CalendarCheck,
    "clipboard-list": ClipboardList,
    "clock-3": Clock3,
    "flame-kindling": FlameKindling,
    gift: Gift,
    grape: Grape,
    "heart-handshake": HeartHandshake,
    leaf: Leaf,
    "message-circle": MessageCircle,
    nut: Nut,
    "package-check": PackageCheck,
    "party-popper": PartyPopper,
    plus: Plus,
    school: School,
    send: Send,
    shell: Shell,
    "shield-check": ShieldCheck,
    "shopping-bag": ShoppingBag,
    sparkles: Sparkles,
    sprout: Sprout,
    wheat: Wheat,
  };
  const LucideIcon = icons[name] || Circle;

  return <LucideIcon className={className} aria-hidden="true" strokeWidth={1.8} />;
}

      function App() {
        const [menuOpen, setMenuOpen] = useState(false);
        const [submitted, setSubmitted] = useState(false);
        const [form, setForm] = useState({
          nome: "",
          whatsapp: "",
          idade: "",
          restricoes: "",
          kit: "PIQUI Escola",
        });

        const navItems = [
          ["Como funciona", "#como-funciona"],
          ["Kits", "#kits"],
          ["Benefícios", "#beneficios"],
          ["Piloto", "#piloto"],
          ["FAQ", "#faq"],
        ];

        function updateForm(field, value) {
          setSubmitted(false);
          setForm((current) => ({ ...current, [field]: value }));
        }

        function handleSubmit(event) {
          event.preventDefault();
          setSubmitted(true);
        }

        return (
          <div className="min-h-screen overflow-hidden">
            <Header navItems={navItems} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
              <Hero />
              <HowItWorks />
              <Benefits />
              <Kits />
              <SnackExamples />
              <Pilot form={form} updateForm={updateForm} handleSubmit={handleSubmit} submitted={submitted} />
              <Testimonials />
              <FAQ />
              <FinalCTA />
            </main>
            <Footer navItems={navItems} />
          </div>
        );
      }

      function Header({ navItems, menuOpen, setMenuOpen }) {
        return (
          <header className="sticky top-0 z-50 border-b border-cocoa/10 bg-paper/88 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <a href="#" className="flex items-center gap-3" aria-label="PIQUI">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-honey text-cocoa shadow-sm">
                  <Icon name="sprout" className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-extrabold leading-none text-cocoa">PIQUI</span>
              </a>

              <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
                {navItems.map(([label, href]) => (
                  <a key={label} href={href} className="text-sm font-bold text-cocoa/75 transition hover:text-cocoa">
                    {label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-cocoa px-5 py-3 text-sm font-extrabold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-cocoa/92"
                >
                  Entrar no piloto
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              </div>

              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-lg border border-cocoa/10 bg-white text-cocoa lg:hidden"
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              >
                <Icon name={menuOpen ? "x" : "menu"} className="h-5 w-5" />
              </button>
            </div>

            {menuOpen && (
              <div className="border-t border-cocoa/10 bg-paper px-4 py-4 lg:hidden">
                <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Menu mobile">
                  {navItems.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-3 text-base font-bold text-cocoa/80 hover:bg-cream"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href={whatsappUrl}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cocoa px-5 py-3 text-sm font-extrabold text-white"
                  >
                    Entrar no piloto
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                </nav>
              </div>
            )}
          </header>
        );
      }

      function Hero() {
        return (
          <section className="grain relative isolate bg-cream">
            <div className="absolute left-6 top-20 hidden h-20 w-20 rounded-full bg-honey/75 blur-2xl sm:block"></div>
            <div className="absolute right-8 top-28 h-24 w-24 rounded-full bg-mint/70 blur-2xl"></div>
            <div className="absolute bottom-14 left-1/2 hidden h-28 w-28 rounded-full bg-lavender/60 blur-3xl lg:block"></div>

            <div className="mx-auto grid min-h-[64vh] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:py-8">
              <div className="relative z-10 max-w-2xl">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cocoa/10 bg-white/72 px-4 py-2 text-sm font-extrabold text-cocoa shadow-sm">
                  <Icon name="sparkles" className="h-4 w-4 text-cocoa" />
                  PIQUI — pequenos lanches para grandes dias.
                </p>
                <h1 className="font-display text-4xl font-extrabold leading-[1] text-cocoa sm:text-5xl lg:text-6xl">
                  Pequenos lanches naturais para grandes dias.
                </h1>
                <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-cocoa/78 sm:text-xl">
                  Kits semanais com snacks naturais, porcionados e prontos para colocar na lancheira, sem pesar na rotina.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cocoa px-7 py-4 text-base font-extrabold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-cocoa/92"
                  >
                    Entrar no piloto da PIQUI
                    <Icon name="message-circle" className="h-5 w-5" />
                  </a>
                  <a
                    href="#kits"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/12 bg-white/78 px-7 py-4 text-base font-extrabold text-cocoa shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Conhecer kits
                    <Icon name="shopping-bag" className="h-5 w-5" />
                  </a>
                </div>
                <div className="mt-8 grid gap-3 text-sm font-bold text-cocoa/72 sm:grid-cols-3">
                  <span className="inline-flex items-center gap-2">
                    <Icon name="leaf" className="h-4 w-4 text-cocoa" />
                    Natural
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="clock-3" className="h-4 w-4 text-cocoa" />
                    Leve
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="shield-check" className="h-4 w-4 text-cocoa" />
                    Pronto para a mochila
                  </span>
                </div>
              </div>

              <HeroIllustration />
            </div>
          </section>
        );
      }

      function HeroIllustration() {
        const packets = [
          ["Seg", "Banana chips", "bg-honey", "left-[6%] top-[28%] rotate-[-9deg]"],
          ["Ter", "Maçã", "bg-coral", "left-[25%] top-[18%] rotate-[7deg]"],
          ["Qua", "Mix", "bg-mint", "left-[44%] top-[25%] rotate-[-4deg]"],
          ["Qui", "Granola", "bg-skybaby", "left-[62%] top-[15%] rotate-[8deg]"],
          ["Sex", "Surpresa", "bg-lavender", "left-[76%] top-[31%] rotate-[-7deg]"],
        ];

        return (
          <div className="relative z-10 mx-auto h-[420px] w-full max-w-[620px] sm:h-[470px] lg:h-[460px]" aria-label="Caixa premium PIQUI com pequenos lanches por dia da semana">
            <div className="absolute right-6 top-4 h-16 w-16 rounded-full bg-honey/95">
              <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream"></div>
            </div>
            <div className="absolute left-6 top-12 flex h-16 w-28 items-end justify-center gap-1">
              <span className="h-8 w-5 rounded-t-full bg-coral"></span>
              <span className="h-12 w-5 rounded-t-full bg-honey"></span>
              <span className="h-16 w-5 rounded-t-full bg-mint"></span>
              <span className="h-12 w-5 rounded-t-full bg-skybaby"></span>
              <span className="h-8 w-5 rounded-t-full bg-lavender"></span>
            </div>
            <div className="absolute bottom-8 right-3 h-12 w-24 rounded-t-full rounded-bl-full bg-white/75 shadow-sm"></div>

            <div className="hero-box absolute bottom-8 left-1/2 h-[290px] w-[88%] max-w-[520px] -translate-x-1/2 sm:h-[330px]">
              <div className="hero-box-lid absolute -top-20 left-[7%] h-24 w-[86%] rounded-lg bg-[#D9B17F] shadow-soft"></div>
              <div className="absolute -top-11 left-[12%] h-24 w-[76%] rounded-lg border border-white/30 bg-[#E5C391]"></div>
              <div className="absolute inset-x-0 bottom-0 h-[260px] rounded-lg border border-cocoa/10 bg-kraft shadow-soft sm:h-[300px]">
                <div className="absolute inset-x-7 top-8 flex items-center justify-between">
                  <div>
                    <p className="font-display text-4xl font-extrabold leading-none text-cocoa">PIQUI</p>
                    <p className="mt-1 text-sm font-extrabold leading-none text-cocoa/70">pequenos lanches</p>
                  </div>
                  <span className="grid h-14 w-14 place-items-center rounded-lg bg-paper/82 text-cocoa">
                    <Icon name="sprout" className="h-7 w-7" />
                  </span>
                </div>
                <p className="absolute bottom-8 left-7 right-7 rounded-lg bg-paper/70 px-4 py-3 text-sm font-extrabold text-cocoa">
                  Pequenos gestos para uma semana mais leve.
                </p>
              </div>

              {packets.map(([day, snack, color, position]) => (
                <div
                  key={day}
                  className={`snack-packet absolute ${position} h-44 w-24 rounded-lg border border-white/60 ${color} p-3 text-cocoa shadow-soft sm:h-52 sm:w-28`}
                >
                  <span className="inline-flex rounded-full bg-white/75 px-2 py-1 text-xs font-extrabold">{day}</span>
                  <p className="mt-4 font-display text-xl font-extrabold leading-5">{snack}</p>
                  <div className="absolute bottom-4 left-3 right-3 h-8 rounded-full bg-white/50"></div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      function SectionHeading({ kicker, title, text, align = "center" }) {
        const centered = align === "center";
        return (
          <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            {kicker && <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-cocoa/58">{kicker}</p>}
            <h2 className="font-display text-4xl font-extrabold leading-tight text-cocoa sm:text-5xl">{title}</h2>
            {text && <p className="mt-4 text-lg font-semibold leading-8 text-cocoa/72">{text}</p>}
          </div>
        );
      }

      function HowItWorks() {
        const steps = [
          ["1", "Escolha o kit da semana", "Planos simples para testar, abastecer a rotina escolar ou variar mais."],
          ["2", "Receba pequenos lanches porcionados", "Cada snack chega em porções individuais, organizado para os dias da semana."],
          ["3", "Coloque na mochila sem preocupação", "Pronto para a mochila, pensado para a rotina real."],
        ];

        return (
          <section id="como-funciona" className="bg-paper pb-16 pt-10 sm:pb-24 sm:pt-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                kicker="Como funciona"
                title="Do kit à mochila sem complicar a manhã."
                text="Mais que um snack, um pequeno gesto de cuidado para a semana da criança e para o tempo da família."
              />
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {steps.map(([number, title, text]) => (
                  <article key={number} className="rounded-lg border border-cocoa/10 bg-white p-6 shadow-sm">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-honey font-display text-2xl font-extrabold text-cocoa">
                      {number}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-cocoa">{title}</h3>
                    <p className="mt-3 text-base font-semibold leading-7 text-cocoa/70">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function Benefits() {
        const benefits = [
          ["calendar-check", "Rotina mais leve", "Menos decisões pela manhã e mais previsibilidade na semana."],
          ["leaf", "Natural de verdade", "Snacks simples, selecionados com cuidado e sem linguagem fitness."],
          ["sparkles", "Experiência infantil premium", "Pacotinhos coloridos e variedade na medida certa, sem exagero."],
          ["flame-kindling", "Sem cocção", "Produtos que não exigem forno, fogão ou preparo complexo."],
          ["apple", "Ingredientes naturais", "Opções como frutas secas, chips naturais, mix e granola kids."],
          ["school", "Ideal para rotina escolar", "Porções pensadas para caber na lancheira e no dia a dia."],
        ];

        return (
          <section id="beneficios" className="bg-cream py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                kicker="Benefícios"
                title="Cuidado bonito, simples e fácil de repetir."
                text="A PIQUI combina curadoria saudável, praticidade para os pais e uma experiência acolhedora para as crianças."
              />
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map(([icon, title, text], index) => (
                  <article
                    key={title}
                    className="rounded-lg border border-cocoa/10 bg-paper p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-lg ${
                        ["bg-coral", "bg-mint", "bg-honey", "bg-skybaby", "bg-lavender", "bg-white"][index]
                      } text-cocoa`}
                    >
                      <Icon name={icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-extrabold text-cocoa">{title}</h3>
                    <p className="mt-2 text-base font-semibold leading-7 text-cocoa/70">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function Kits() {
        const kits = [
          {
            name: "PIQUI Mini",
            amount: "5 pequenos lanches",
            description: "Para sentir a experiência",
            price: "R$ 59",
            color: "bg-mint",
            featured: false,
          },
          {
            name: "PIQUI Escola",
            amount: "10 pequenos lanches",
            description: "Para a semana escolar",
            price: "R$ 99",
            color: "bg-honey",
            featured: true,
          },
          {
            name: "PIQUI Plus",
            amount: "15 pequenos lanches",
            description: "Mais variedade e surpresa",
            price: "R$ 149",
            color: "bg-lavender",
            featured: false,
          },
        ];

        return (
          <section id="kits" className="bg-paper py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                kicker="Kits"
                title="Escolha o ritmo da sua semana."
                text="Valores sugeridos para o piloto, com kits pensados para diferentes rotinas, idades e apetites."
              />
              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {kits.map((kit) => (
                  <article
                    key={kit.name}
                    className={`relative rounded-lg border p-7 shadow-sm ${
                      kit.featured
                        ? "border-cocoa/35 bg-cocoa text-white shadow-soft"
                        : "border-cocoa/10 bg-white text-cocoa"
                    }`}
                  >
                    {kit.featured && (
                      <span className="absolute right-5 top-5 rounded-full bg-honey px-3 py-1 text-xs font-extrabold text-cocoa">
                        Mais escolhido
                      </span>
                    )}
                    <span className={`grid h-14 w-14 place-items-center rounded-lg ${kit.color} text-cocoa`}>
                      <Icon name="package-check" className="h-7 w-7" />
                    </span>
                    <h3 className="mt-7 font-display text-3xl font-extrabold">{kit.name}</h3>
                    <p className={`mt-2 text-lg font-extrabold ${kit.featured ? "text-white/82" : "text-cocoa/72"}`}>
                      {kit.amount}
                    </p>
                    <p className={`mt-1 text-base font-semibold ${kit.featured ? "text-white/72" : "text-cocoa/64"}`}>
                      {kit.description}
                    </p>
                    <div className="soft-dash my-7"></div>
                    <p className="font-display text-5xl font-extrabold">{kit.price}</p>
                    <p className={`mt-2 text-sm font-bold ${kit.featured ? "text-white/60" : "text-cocoa/58"}`}>
                      preço sugerido
                    </p>
                    <a
                      href={whatsappUrl}
                      className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-base font-extrabold transition hover:-translate-y-0.5 ${
                        kit.featured ? "bg-white text-cocoa" : "bg-cocoa text-white"
                      }`}
                    >
                      Quero testar
                      <Icon name="arrow-right" className="h-5 w-5" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function SnackExamples() {
        const snacks = [
          ["Banana chips", "bg-honey", "banana"],
          ["Maçã desidratada", "bg-coral", "apple"],
          ["Mix divertido", "bg-mint", "party-popper"],
          ["Granola kids", "bg-skybaby", "wheat"],
          ["Coco chips", "bg-lavender", "shell"],
          ["Frutas secas", "bg-honey", "grape"],
          ["Castanhas selecionadas", "bg-mint", "nut"],
          ["Snack surpresa da semana", "bg-coral", "gift"],
        ];

        return (
          <section className="bg-cream py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <SectionHeading
                  align="left"
                  kicker="Exemplos de produtos"
                  title="Pequenos snacks, naturais e sem cocção."
                  text="A curadoria privilegia itens prontos, gostosos e fáceis de levar, sem exigir forno, fogão ou preparo complexo."
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  {snacks.map(([name, color, icon]) => (
                    <article key={name} className="flex items-center gap-4 rounded-lg border border-cocoa/10 bg-paper p-4 shadow-sm">
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg ${color} text-cocoa`}>
                        <Icon name={icon} className="h-6 w-6" />
                      </span>
                      <p className="text-base font-extrabold text-cocoa">{name}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      }

      function Pilot({ form, updateForm, handleSubmit, submitted }) {
        return (
          <section id="piloto" className="bg-paper py-16 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-coral/70 px-4 py-2 text-sm font-extrabold text-cocoa">
                  <Icon name="badge-alert" className="h-4 w-4" />
                  Vagas limitadas para o piloto.
                </p>
                <SectionHeading
                  align="left"
                  kicker="Projeto piloto"
                  title="Quer ajudar a construir a PIQUI desde o começo?"
                  text="Estamos abrindo poucas vagas para famílias que querem testar a primeira versão da PIQUI e ajudar a criar uma solução mais leve, saudável e bonita para a lancheira das crianças."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-cocoa/10 bg-cream p-5">
                    <Icon name="heart-handshake" className="h-7 w-7 text-cocoa" />
                    <p className="mt-4 text-lg font-extrabold text-cocoa">Feedback de verdade</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-cocoa/68">Sabores, apresentação, kits e experiência serão ajustados junto com as famílias.</p>
                  </div>
                  <div className="rounded-lg border border-cocoa/10 bg-cream p-5">
                    <Icon name="sparkles" className="h-7 w-7 text-cocoa" />
                    <p className="mt-4 text-lg font-extrabold text-cocoa">Primeiras novidades</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-cocoa/68">Quem entra na lista recebe prioridade nas próximas rodadas e novidades da PIQUI.</p>
                  </div>
                </div>
              </div>

              <InterestForm form={form} updateForm={updateForm} handleSubmit={handleSubmit} submitted={submitted} />
            </div>
          </section>
        );
      }

      function InterestForm({ form, updateForm, handleSubmit, submitted }) {
        const fields = [
          ["nome", "Nome", "Seu nome"],
          ["whatsapp", "WhatsApp", "(00) 00000-0000"],
          ["idade", "Idade da criança", "Ex.: 6 anos"],
          ["restricoes", "Restrições alimentares", "Ex.: sem lactose, alergia a castanhas"],
        ];

        return (
          <form onSubmit={handleSubmit} className="rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl font-extrabold text-cocoa">Lista de interesse</h3>
                <p className="mt-1 text-sm font-bold text-cocoa/60">Conte um pouco da sua rotina para entrarmos em contato.</p>
              </div>
              <span className="hidden h-14 w-14 place-items-center rounded-lg bg-mint text-cocoa sm:grid">
                <Icon name="clipboard-list" className="h-7 w-7" />
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {fields.map(([id, label, placeholder]) => (
                <label key={id} className={id === "restricoes" ? "sm:col-span-2" : ""}>
                  <span className="text-sm font-extrabold text-cocoa">{label}</span>
                  {id === "restricoes" ? (
                    <textarea
                      value={form[id]}
                      onChange={(event) => updateForm(id, event.target.value)}
                      placeholder={placeholder}
                      rows="4"
                      className="mt-2 w-full rounded-lg border border-cocoa/12 bg-paper px-4 py-3 text-base font-semibold text-cocoa outline-none transition placeholder:text-cocoa/38 focus:border-cocoa/35 focus:bg-white"
                    ></textarea>
                  ) : (
                    <input
                      value={form[id]}
                      onChange={(event) => updateForm(id, event.target.value)}
                      placeholder={placeholder}
                      required={id !== "restricoes"}
                      className="mt-2 w-full rounded-lg border border-cocoa/12 bg-paper px-4 py-3 text-base font-semibold text-cocoa outline-none transition placeholder:text-cocoa/38 focus:border-cocoa/35 focus:bg-white"
                    />
                  )}
                </label>
              ))}

              <label className="sm:col-span-2">
                <span className="text-sm font-extrabold text-cocoa">Kit de interesse</span>
                <select
                  value={form.kit}
                  onChange={(event) => updateForm("kit", event.target.value)}
                  className="mt-2 w-full rounded-lg border border-cocoa/12 bg-paper px-4 py-3 text-base font-extrabold text-cocoa outline-none transition focus:border-cocoa/35 focus:bg-white"
                >
                  <option>PIQUI Mini</option>
                  <option>PIQUI Escola</option>
                  <option>PIQUI Plus</option>
                  <option>Ainda quero entender melhor</option>
                </select>
              </label>
            </div>

            {submitted && (
              <div className="mt-5 rounded-lg border border-mint bg-mint/35 px-4 py-3 text-sm font-extrabold text-cocoa">
                Interesse registrado nesta simulação. Na integração real, esses dados podem ir para WhatsApp, CRM ou planilha.
              </div>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-4 text-base font-extrabold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-cocoa/92"
            >
              Enviar interesse
              <Icon name="send" className="h-5 w-5" />
            </button>
          </form>
        );
      }

      function Testimonials() {
        const testimonials = [
          ["A manhã ficou mais leve.", "Eu já deixaria os pacotinhos separados para a semana inteira.", "Marina, mãe do Theo"],
          ["Minha filha adorou escolher o lanche PIQUI do dia.", "A apresentação deixou tudo mais divertido sem virar bagunça.", "Renata, mãe da Clara"],
          ["Tem cara de cuidado, mas é muito prático.", "Passa confiança e continua simples para o dia a dia.", "Bruno, pai da Nina"],
        ];

        return (
          <section className="bg-cream py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                kicker="Depoimentos"
                title="O que famílias poderiam sentir ao testar a PIQUI."
                text="Exemplos fictícios para representar percepções esperadas durante a fase piloto."
              />
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {testimonials.map(([quote, text, author]) => (
                  <article key={quote} className="rounded-lg border border-cocoa/10 bg-paper p-6 shadow-sm">
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-extrabold text-cocoa/58">
                      exemplo fictício
                    </span>
                    <p className="mt-5 font-display text-2xl font-extrabold leading-7 text-cocoa">“{quote}”</p>
                    <p className="mt-4 text-base font-semibold leading-7 text-cocoa/70">{text}</p>
                    <p className="mt-6 text-sm font-extrabold text-cocoa">{author}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function FAQ() {
        const items = [
          ["Os pequenos lanches precisam ir à geladeira?", "A ideia do piloto é priorizar snacks secos e estáveis, que normalmente não precisam de refrigeração. Cada kit PIQUI pode trazer orientações específicas de conservação."],
          ["Tem opções sem glúten ou lactose?", "O formulário coleta restrições alimentares para entendermos a demanda. Na fase piloto, as opções podem variar conforme disponibilidade e segurança dos ingredientes."],
          ["Como funciona a entrega?", "A entrega será combinada por região e janela semanal durante o piloto. A lista de interesse ajuda a definir os primeiros bairros atendidos."],
          ["Posso escolher os snacks?", "A proposta inicial combina curadoria semanal com preferências da família. Queremos testar o equilíbrio entre praticidade, variedade e personalização."],
          ["É assinatura ou compra avulsa?", "Nesta primeira versão, a entrada pode começar como compra avulsa de teste. A assinatura semanal será validada com as famílias interessadas."],
          ["Os produtos são naturais?", "A curadoria foca em snacks naturais e simples, como frutas secas, chips naturais, mixes e granolas adequadas para a rotina infantil."],
        ];

        return (
          <section id="faq" className="bg-paper py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                kicker="FAQ"
                title="Perguntas comuns antes de entrar no piloto."
                text="Respostas iniciais para ajudar a família a entender a PIQUI com tranquilidade."
              />
              <div className="mt-10 grid gap-3">
                {items.map(([question, answer]) => (
                  <details key={question} className="group rounded-lg border border-cocoa/10 bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-cocoa">
                      {question}
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cream text-cocoa transition group-open:rotate-45">
                        <Icon name="plus" className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="mt-4 text-base font-semibold leading-7 text-cocoa/70">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function FinalCTA() {
        return (
          <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-cocoa/10 bg-cocoa p-8 text-white shadow-soft sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-honey">PIQUI</p>
                  <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">Quer testar a PIQUI?</h2>
                  <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-white/78">
                    Entre para a lista do projeto piloto e receba as primeiras novidades para pequenos grandes dias.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-7 py-4 text-base font-extrabold text-cocoa transition hover:-translate-y-0.5 hover:bg-[#FFE0A6]"
                >
                  Entrar no piloto pelo WhatsApp
                  <Icon name="message-circle" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>
        );
      }

      function Footer({ navItems }) {
        return (
          <footer className="border-t border-cocoa/10 bg-paper">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
              <div>
                <p className="font-display text-3xl font-extrabold text-cocoa">PIQUI</p>
                <p className="mt-2 text-base font-bold text-cocoa/68">Pequenos lanches para grandes dias.</p>
                <p className="mt-5 max-w-sm text-sm font-semibold leading-6 text-cocoa/58">
                  Pequenos lanches naturais, porcionados e prontos para a lancheira.
                </p>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-cocoa/55">Links rápidos</p>
                <nav className="mt-4 grid gap-2">
                  {navItems.map(([label, href]) => (
                    <a key={label} href={href} className="text-sm font-bold text-cocoa/70 hover:text-cocoa">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-cocoa/55">Contato</p>
                <div className="mt-4 grid gap-2 text-sm font-bold text-cocoa/70">
                  <a href="https://instagram.com/piqui" className="inline-flex items-center gap-2 hover:text-cocoa">
                    <Icon name="at-sign" className="h-4 w-4" />
                    @piqui
                  </a>
                  <a href={whatsappUrl} className="inline-flex items-center gap-2 hover:text-cocoa">
                    <Icon name="message-circle" className="h-4 w-4" />
                    WhatsApp placeholder
                  </a>
                </div>
              </div>
            </div>
          </footer>
        );
      }

export default App;
