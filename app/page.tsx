"use client";

import React from "react";

type Benefit = {
  title: string;
  description: string;
};

type Testimonial = {
  name: string;
  goal: string;
  result: string;
  quote: string;
  image?: string;
};

type Tip = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "Pérdida de grasa corporal",
    description:
      "Un sistema de alimentación inteligente diseñado para ayudarte a reducir grasa corporal de forma práctica y sostenible.",
  },
  {
    title: "Mantén tu masa muscular",
    description:
      "La estructura del sistema busca favorecer una mejor composición corporal mientras acompañas tu proceso con guía adecuada.",
  },
  {
    title: "Más energía y menos inflamación",
    description:
      "Muchas personas reportan sentirse con más energía, mejor digestión y menos pesadez desde los primeros días.",
  },
  {
    title: "Se adapta a tu rutina",
    description:
      "Ideal para personas con poco tiempo, horarios exigentes o dificultad para sostener planes complejos.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Caso 1",
    goal: "Bajar de peso",
    result: "Reducción de grasa corporal en 10 días",
    quote:
      "Me sentí acompañada en todo el proceso y fue mucho más práctico de lo que imaginaba.",
    image: "/images/caso1.jpeg",
  },
  {
    name: "Caso 2",
    goal: "Aumentar masa muscular",
    result: "Mejor estructura nutricional para apoyar su objetivo",
    quote:
      "Lo que más me gustó fue que el sistema se adaptó a mi rutina y entendí mejor cómo alimentarme.",
    image: "/images/caso2.jpeg",
  },
  {
    name: "Caso 3",
    goal: "Mantenimiento saludable",
    result: "Más energía y mejor adherencia a hábitos sostenibles",
    quote:
      "No solo se trató del peso, también mejoró mi organización y mi relación con la alimentación.",
    image: "/images/caso3.png",
  },
];

const tips: Tip[] = [
  {
    title: "No te enfoques solo en el peso",
    description:
      "La composición corporal importa más: reducir grasa y cuidar masa muscular puede hacer una gran diferencia.",
  },
  {
    title: "La grasa visceral sí importa",
    description:
      "Es una de las más relevantes para la salud metabólica y cardiovascular, por eso no todo es solo estética.",
  },
  {
    title: "La practicidad mejora la constancia",
    description:
      "Mientras más fácil sea seguir un sistema, más probabilidades tienes de sostener resultados.",
  },
];

const faqs = [
  {
    question: "¿Esto es solo una asesoría nutricional?",
    answer:
      "No. Es un kit de nutrición inteligente compuesto por 3 productos, una guía nutricional y acompañamiento personalizado.",
  },
  {
    question: "¿El sistema sirve solo para bajar de peso?",
    answer:
      "No necesariamente. Puede adaptarse según el objetivo de la persona: pérdida de grasa, apoyo para aumento de masa muscular o mantenimiento saludable.",
  },
  {
    question: "¿Voy a estar acompañado durante el proceso?",
    answer:
      "Sí. El sistema incluye asesoría personalizada y acompañamiento grupal para orientar cada caso según su rutina y necesidades.",
  },
  {
    question: "¿Los resultados son iguales para todos?",
    answer:
      "No. Cada cuerpo responde diferente. Los resultados pueden variar según punto de partida, adherencia, rutina y objetivo individual.",
  },
];

export default function Page() {
  const whatsappUrl =
    "https://wa.me/573136142113?text=Hola%2C%20quiero%20agendar%20una%20asesor%C3%ADa%20para%20conocer%20el%20sistema";
  const formUrl = "#formulario";

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-white to-emerald-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Pierde de 2 a 6 kilos de grasa en{" "}
              <span className="text-fuchsia-600">solo 10 días</span>{" "} con un 
              Sistema de Nutrición Inteligente
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Nuestro sistema lo componen <strong>3 productos que son categoría alimento liofilizado</strong>,
              por tanto puedes <strong>reemplazar comidas principales</strong> sin pasar hambre y sin efecto rebote.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-fuchsia-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-fuchsia-700"
              >
                Asesoría por WhatsApp
              </a>
              <a
                href={formUrl}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Quiero que analicen mi caso
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">3 productos</p>
                <p className="mt-1 text-sm text-slate-600">
                  Elaborados con alimentos liofilizados.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Guía nutricional</p>
                <p className="mt-1 text-sm text-slate-600">
                  Paso a paso según el objetivo.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Acompañamiento</p>
                <p className="mt-1 text-sm text-slate-600">
                  Asesoría personalizada y comunidad.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <img 
                src="/images/testmay.png" 
                alt="Kit nutricional completo" 
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl">
              <p className="text-sm font-semibold text-emerald-700">
                Ideal para pérdida de grasa
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Desinflama y detoxifica tu organismo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROBLEMA / EDUCACIÓN */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              ¿Por qué este sistema?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              No se trata solo de bajar kilos, sino de mejorar tu composición corporal
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Muchas personas hacen dietas extremas, reducen demasiado la comida o
              viven contando calorías sin lograr sostener resultados. El problema
              no siempre es la falta de disciplina, sino que el método no se adapta
              a su vida real.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Este sistema busca simplificar el proceso con una estructura clara,
              práctica y acompañada, para que la persona pueda seguirlo según su
              rutina y necesidades.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border-2 border-fuchsia-200 bg-gradient-to-br from-white to-fuchsia-50 p-6 hover:border-fuchsia-400 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-fuchsia-700">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              Cómo funciona
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Un kit de nutrición inteligente diseñado para la vida real
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              El sistema está compuesto por tres elementos clave para facilitar la
              adherencia y ayudar a cada persona según su objetivo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-100 text-lg font-bold text-fuchsia-700">
                1
              </div>
              <h3 className="text-xl font-semibold">3 productos nutricionales</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Elaborados con alimentos liofilizados para ofrecer practicidad,
                estructura y una forma más sencilla de seguir el plan.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-100 text-lg font-bold text-fuchsia-700">
                2
              </div>
              <h3 className="text-xl font-semibold">Guía nutricional</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Una estructura clara para saber cómo usar el sistema según el
                objetivo: bajar grasa, ganar masa muscular o mantener un peso saludable.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-100 text-lg font-bold text-fuchsia-700">
                3
              </div>
              <h3 className="text-xl font-semibold">Acompañamiento personalizado</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Asesoría individual, seguimiento y grupo de acompañamiento
                multidisciplinario para orientar el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img 
              src="/images/ernesto.jpeg" 
              alt="Transformación con el sistema" 
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              Se adapta a cada caso
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Un mismo sistema, diferentes objetivos
            </h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">Bajar de peso y reducir grasa</h3>
                <p className="mt-2 text-slate-600">
                  Para personas que quieren desinflamarse, mejorar su composición
                  corporal y comenzar un cambio real con estructura.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">Aumentar masa muscular</h3>
                <p className="mt-2 text-slate-600">
                  Para quienes buscan un mejor soporte nutricional dentro de una
                  estrategia orientada al desarrollo muscular.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">Mantener un peso saludable</h3>
                <p className="mt-2 text-slate-600">
                  Para personas que quieren sostener hábitos, cuidar su alimentación
                  y mantener resultados en el tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS / VALOR */}
      <section className="bg-fuchsia-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              Información de valor
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Tips que ayudan a entender mejor tu proceso
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-semibold">{tip.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                Asesoría personalizada
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Descubre cuál es la mejor forma de usar el sistema según tu caso
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Antes de empezar, analizamos tu objetivo, tu rutina y tus
                necesidades para orientarte correctamente y explicarte cómo puedes
                beneficiarte del sistema.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-fuchsia-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-fuchsia-700"
              >
                Agendar por WhatsApp
              </a>
              <a
                href={formUrl}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Llenar formulario
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              Testimonios
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Casos reales, objetivos distintos
            </h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            Aquí pueden cargar testimonios de personas con metas diferentes:
            pérdida de peso, aumento de masa muscular y mantenimiento saludable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${testimonial.goal}-${index}`}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] w-full">
                <img 
                  src={testimonial.image} 
                  alt={`Testimonio de ${testimonial.name}`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-700">
                  {testimonial.goal}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {testimonial.result}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FORMULARIO / LEADS - AHORA CON WHATSAPP */}
      <section id="formulario" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
                Agenda tu asesoría
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Déjanos tus datos y te orientamos según tu objetivo
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Completa el formulario y serás redirigido a WhatsApp para continuar la conversación.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li>✔ Análisis básico de tu objetivo</li>
                <li>✔ Explicación del sistema y cómo funciona</li>
                <li>✔ Recomendación según tu rutina</li>
                <li>✔ Contacto inmediato por WhatsApp</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <form 
                className="space-y-5" 
                onSubmit={(e) => {
                  e.preventDefault();
                  
                  // Recoger datos del formulario
                  const formData = new FormData(e.currentTarget);
                  const nombre = formData.get('nombre');
                  const telefonoUsuario = formData.get('telefono');
                  const objetivo = formData.get('objetivo');
                  const mensaje = formData.get('mensaje');
                  
                  // Validar campos requeridos
                  if (!nombre || !telefonoUsuario || !objetivo) {
                    alert('Por favor completa los campos requeridos');
                    return;
                  }

                  // TU NÚMERO DE WHATSAPP
                  const miNumero = "573136142113";
                  
                  // Crear mensaje para WhatsApp
                  const textoWhatsApp = `Hola, soy ${nombre}. Mi objetivo es: ${objetivo}. Mi WhatsApp es: ${telefonoUsuario}. ${mensaje ? 'Consulta adicional: ' + mensaje : ''}`;
                  
                  // Crear URL de WhatsApp
                  const url = `https://wa.me/${miNumero}?text=${encodeURIComponent(textoWhatsApp)}`;
                  
                  // Abrir WhatsApp en nueva pestaña
                  window.open(url, '_blank');
                  
                  // Mostrar mensaje de éxito
                  alert('¡Gracias! Serás redirigido a WhatsApp para continuar.');
                  
                  // Limpiar formulario
                  e.currentTarget.reset();
                }}
              >
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="mb-2 block text-sm font-medium">
                    WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"
                  />
                </div>

                <div>
                  <label htmlFor="objetivo" className="mb-2 block text-sm font-medium">
                    ¿Cuál es tu objetivo? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="objetivo"
                    name="objetivo"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="bajar_grasa">⚖️ Bajar grasa / peso</option>
                    <option value="masa_muscular">💪 Aumentar masa muscular</option>
                    <option value="mantenimiento">🌱 Mantenimiento saludable</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">
                    Cuéntanos un poco de tu caso (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Ejemplo: quiero bajar grasa abdominal, tengo poco tiempo y busco algo práctico..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-fuchsia-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-fuchsia-700"
                >
                  Contactar por WhatsApp
                </button>

                <p className="text-xs leading-6 text-slate-500 text-center">
                  Al enviar, serás redirigido a WhatsApp para continuar la conversación.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Resolvemos las dudas más comunes
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={`faq-${index}`}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="rounded-[2rem] bg-gradient-to-r from-fuchsia-600 to-pink-600 px-8 py-14 text-white md:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Empieza con una asesoría y descubre si este sistema es para ti
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/90">
                Tu objetivo no tiene que vivirse con confusión ni con planes imposibles.
                Con una estrategia práctica, acompañamiento y un sistema claro, todo se vuelve más fácil.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-semibold text-fuchsia-700 transition hover:bg-slate-100"
                >
                  Hablar por WhatsApp
                </a>
                <a
                  href={formUrl}
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Ir al formulario
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}