import ContactSection from "@/components/Contact"
import useCountUp from "@/hooks/useCountUp"
import useInView from "@/hooks/useInView"

function StatCard({ end, label, start, suffix = "" }) {
  const value = useCountUp(end, start)

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <p className="text-3xl font-bold text-[#048CBB]">
        {value}{suffix}
      </p>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  )
}

export default function NotreLaboratoire() {
    const [ref, isVisible] = useInView()

  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="bg-[#048CBB] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">
            Notre laboratoire
          </h1>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#F8AE29] font-semibold mb-2">
              Qui sommes-nous ?
            </p>

            <h2 className="text-3xl font-bold mb-6">
              IANESCO, laboratoire d'analyse depuis 1952
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L’Institut d’Analyses et d’Essais en Chimie de l’Ouest a été créé en 1952 par le regroupement de 3 laboratoires.
              </p>
              <p>
                En 1995, IANESCO se sépare de sa branche céréales. En 1998, fusion avec le CRITT Chimie.
              </p>
              <p>
                En 2006, installation dans de nouveaux locaux de 2500m² garantissant des conditions optimales.
              </p>
              <p>
                Aujourd’hui, le laboratoire s’appuie sur un personnel qualifié et des équipements performants (LC/MS/MS, GC/MS/MS, ICP-MS).
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/team.png"
              alt="Equipe"
              className="rounded-xl shadow"
            />
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section ref={ref} className="bg-[#f5f7f9] py-16">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

    <StatCard end={70} label="Années d'existence" suffix="+" start={isVisible} />
    <StatCard end={300000} label="Analyses/an" suffix="" start={isVisible} />
    <StatCard end={50000} label="Échantillons/an" suffix="" start={isVisible} />
    <StatCard end={1200} label="Clients" suffix="+" start={isVisible} />

  </div>
</section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-[#048CBB] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center text-white">
          L'évolution du laboratoire depuis 1952
          </h2>

          <div className="space-y-8">

            {[
              { year: "1952", text: "Création d’IANESCO par regroupement de laboratoires." },
              { year: "1995", text: "Séparation du site de La Rochelle." },
              { year: "1998", text: "Fusion avec CRITT Chimie." },
              { year: "2006", text: "Nouveaux locaux." },
              { year: "2012-13", text: "Changement de direction." },
              { year: "2014", text: "Installation de CREATMOS." },
              { year: "2016", text: "IANESCO devient une SAS." },
              { year: "2021", text: "Rachat par la direction." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="font-bold text-2xl min-w-[80px]">
                  {item.year}
                </div>
                <div className="opacity-90 text-2xl">
                  {item.text}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= ACCREDITATIONS ================= */}
{/* ================= INTRO ================= */}
<section className="py-24 bg-[#f5f7f9]">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-[#048CBB] mb-10 uppercase tracking-wide">
      Accréditations et agréments
    </h2>

    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
      <p>
        IANESCO est un laboratoire possédant des reconnaissances nécessaires pour garantir à ses clients un haut niveau de fiabilité et d’expertise.
      </p>
      <p>
        Pour ce faire et obtenir des résultats d’analyses le plus exact possible, dans des délais les plus courts, il est nécessaire d’utiliser des méthodes d’analyses adaptées, du personnel formé et qualifié, et du matériel étalonné.
      </p>
      <p>
        Le système qualité mis en place au laboratoire permet de s’assurer que ces critères sont bien respectés.
      </p>
      <p>
        Nous plaçons nos clients au centre de nos préoccupations pour maintenir leur satisfaction.
      </p>
    </div>

  </div>
</section>


{/* ================= COFRAC ================= */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-16">
      Accréditation COFRAC
    </h2>

    <div className="grid lg:grid-cols-3 gap-16 items-center">

      {/* LOGO */}
      <div className="flex justify-center">
        <img src="/images/cofrac.png" className="max-w-[220px]" />
      </div>

      {/* TEXTE */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Depuis 1996, le laboratoire est accrédité par le COFRAC (Comité Français d’accréditation).
        </p>
        <p>
          Conforme à la norme NF EN ISO/CEI 17025 : 2017 pour les analyses et essais.
        </p>
        <p>
          Cette accréditation est reconnue internationalement grâce aux accords multilatéraux.
        </p>
      </div>

      {/* BOUTONS */}
      <div className="flex flex-col gap-6">
        <a className="bg-[#F8AE29] hover:bg-[#e79d1f] text-white px-6 py-4 rounded-lg text-center font-semibold transition hover:scale-[1.02]">
          📄 Télécharger notre diplôme COFRAC
        </a>
        <a className="bg-[#F8AE29] hover:bg-[#e79d1f] text-white px-6 py-4 rounded-lg text-center font-semibold transition hover:scale-[1.02]">
          📄 Attestation et annexe technique
        </a>
      </div>

    </div>
  </div>
</section>


{/* ================= MINISTERES ================= */}
<section className="py-24 bg-[#f5f7f9]">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-16">
      Agréments des ministères
    </h2>

    <div className="grid lg:grid-cols-3 gap-16 items-center">

      {/* LOGOS */}
      <div className="flex flex-col items-center gap-10">
        <img src="/images/ministere1.png" className="max-w-[220px]" />
        <img src="/images/ministere2.png" className="max-w-[220px]" />
      </div>

      {/* TEXTE */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Depuis 1973, IANESCO est agréé par les ministères en charge de l’environnement et de la santé.
        </p>
      </div>

      {/* BOUTONS */}
      <div className="flex flex-col gap-6">
        <a className="bg-[#F8AE29] text-white px-6 py-4 rounded-lg text-center font-semibold hover:scale-[1.02] transition">
          📄 Agrément environnement
        </a>
        <a className="bg-[#F8AE29] text-white px-6 py-4 rounded-lg text-center font-semibold hover:scale-[1.02] transition">
          📄 Agrément santé
        </a>
      </div>

    </div>
  </div>
</section>


{/* ================= CIR ================= */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-16">
      Crédit Impôt Recherche
    </h2>

    <div className="grid lg:grid-cols-3 gap-16 items-center">

      {/* LOGO */}
      <div className="flex justify-center">
        <img src="/images/cir.png" className="max-w-[300px]" />
      </div>

      {/* TEXTE */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          IANESCO est agréé Crédit Impôt Recherche.
        </p>
        <p>
          Les travaux réalisés peuvent ouvrir droit au crédit d’impôt en faveur de la recherche (C.I.R).
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ================= CONTACT ================= */}
      <ContactSection />

    </div>
  )
}