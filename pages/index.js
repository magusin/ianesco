import { useEffect, useState } from "react";
import Link from "next/link";
import { actualites } from "@/data/actualites";
import Contact from "@/components/Contact";

const latestArticles = [...actualites]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <section className="relative h-[80vh] flex items-center overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#048CBB]/70 z-10"></div>

        {/* CONTENU */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-6">LABORATOIRE</h1>

          <div className="flex gap-4 items-center">
            <a className="bg-orange-400 px-6 py-3 rounded font-semibold">
              Visite virtuelle
            </a>

            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
              ▶
            </button>
          </div>

          <div className="mt-8 space-y-2 text-lg">
            <p>Prélèvements</p>
            <p>Analyses</p>
            <p>Études</p>
            <p>Conseils</p>
          </div>
        </div>

      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {latestArticles.map((actualites) => (
              <div
                key={actualites.id}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer"
              >
                <p className="text-sm text-gray-500 mb-2">
                  📅 {new Date(actualites.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <h3 className="font-bold text-lg mb-3">
                  {actualites.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {actualites.excerpt}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h6 className="text-3xl font-bold mb-2 text-[#e9ab36]">Un spécialiste de l'analyse</h6>
          <h2 className="text-4xl font-bold mb-6">
            Le laboratoire IANESCO analyse votre environnement avec précision.
          </h2>
          <p className="text-gray-600">
            Notre métier est de vous conseiller et de vous accompagner spécifiquement en vous proposant une gamme complète d’analyses et d’expertises en lien avec vos obligations réglementaires et vos enjeux de sécurité sanitaire.
          </p>
        </div>

        <img
          src="/images/analyse.jpg"
          className="rounded-xl shadow"
        />
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-6 mb-64">
        {[
          {
            title: "Analyse d'air",
            img: "/images/air.jpg",
          },
          {
            title: "Analyse d'eau",
            img: "/images/water.jpg",
          },
          {
            title: "Matériaux",
            img: "/images/materials.jpg",
          },
          {
            title: "CBD",
            img: "/images/cbd.jpg",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              src={item.img}
              className="w-full h-72 object-cover group-hover:scale-110 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </section>

      <section className="relative bg-[#0f7ea1] pt-40 pb-28">

        {/* BLOC LOGOS */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-full max-w-7xl px-6 z-20">

          <div className="bg-white rounded-2xl shadow-2xl ring py-10 overflow-hidden relative">

            {/* fade gauche */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>

            {/* fade droite */}
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* TRACK */}
            <div className="flex items-center gap-24 animate-marquee w-max">

              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-24">

                  <img src="/images/logos/seb.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/veolia.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/chu.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/basf.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/air-liquide.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/edf.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/saur.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/eiffage.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/electronics.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/engie.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/le-creuset.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/nouvelle-aquitaine.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/seb.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/stm.png" className="h-16 object-contain shrink-0" />
                  <img src="/images/logos/tefal.png" className="h-16 object-contain shrink-0" />
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Steps */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center text-white">

          {/* Step */}
          {[
            {
              num: "01",
              icon: "💬",
              title: "Préconisations",
              text: "Nous vous accompagnons en amont avec une approche globale de votre projet (élaboration du plan de surveillance, assistance technique, visite sur site…)"
            },
            {
              num: "02",
              icon: "🚚",
              title: "Logistique",
              text: "Soit nous assurons le prélèvement des échantillons en programmant l’intervention d’un de nos techniciens préleveur formé et habilité, soit nous proposons une solution logistique adaptée."
            },
            {
              num: "03",
              icon: "📊",
              title: "Analyses",
              text: "Nos analyses sont réalisées dans le cadre de nos processus Qualité avec le souci de vous apporter la plus grande fiabilité (triple vérifications des résultats) et d’optimiser vos délais."
            },
            {
              num: "04",
              icon: "👨‍💻",
              title: "Conseils & expertises",
              text: "Nos experts possèdent les connaissances techniques et réglementaires pour vous guider dans l’interprétation de vos résultats, vos démarches d’amélioration continue, vos situations de crises ou d’urgences."
            }
          ].map((step, i) => (
            <div key={i} className="relative">

              {/* numéro */}
              <span className="absolute -top-20 left-1/2 -translate-x-1/2 text-7xl text-white/10 font-bold">
                {step.num}
              </span>

              {/* cercle */}
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-5xl">
                {step.icon}
              </div>

              <h3 className="font-semibold mb-3 text-lg">{step.title}</h3>

              <p className="text-sm text-white leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="bg-gray-100 py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT IMAGES */}
    <div className="relative">

    

      {/* image secondaire */}
      <img
        src="/images/lab-machine.png"
        className="absolute bottom-[-250px] left-[120px] w-[70%] rounded-xl shadow-2xl"
      />

      {/* dots décoratifs */}
      <div className="absolute bottom-[-260px] left-[60px] grid grid-cols-6 gap-2">
        {[...Array(36)].map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 bg-[#0f7ea1] rounded-full opacity-40"
          ></span>
        ))}
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Accréditations et agréments du laboratoire IANESCO.
      </h2>

      <p className="text-gray-600 mb-6">
        IANESCO est historiquement reconnu pour ses compétences techniques et organisationnelles via :
      </p>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <span className="text-[#0f7ea1] text-lg mt-1">✔</span>
          <p className="text-gray-700">
            Accréditation COFRAC (section essais, n°1-6209, portée disponible sur www.cofrac.fr)
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-[#0f7ea1] text-lg mt-1">✔</span>
          <p className="text-gray-700">
            Agréments du ministère en charge de l’environnement
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-[#0f7ea1] text-lg mt-1">✔</span>
          <p className="text-gray-700">
            Agréments du ministère de la santé
          </p>
        </li>
      </ul>

      <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition">
        Plus d'infos
      </button>
    </div>

  </div>
</section>

      <section>
        <Contact />
      </section>
    </>
  );
}