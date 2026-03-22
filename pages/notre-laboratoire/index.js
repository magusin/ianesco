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

          <h2 className="text-3xl font-bold mb-12 text-center">
            L'évolution du laboratoire
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
                <div className="font-bold text-xl min-w-[80px]">
                  {item.year}
                </div>
                <div className="opacity-90">
                  {item.text}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= ACCREDITATIONS ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Accréditations et agréments
          </h2>

          <p className="text-gray-700 mb-10">
            IANESCO garantit un haut niveau de fiabilité grâce à son système qualité,
            son personnel qualifié et ses équipements performants.
          </p>

          <div className="grid lg:grid-cols-3 gap-10 items-center">

            <img
              src="/images/labo/cofrac.png"
              alt="Cofrac"
              className="mx-auto"
            />

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Accréditation COFRAC
              </h3>

              <p className="text-gray-700 mb-4">
                Accrédité depuis 1996 selon la norme NF EN ISO/CEI 17025.
              </p>

              <div className="flex flex-col gap-3">
                <a href="#" className="bg-[#048CBB] text-white px-4 py-2 rounded">
                  Télécharger diplôme
                </a>
                <a href="#" className="border px-4 py-2 rounded">
                  Attestation
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= AGREMENTS ================= */}
      <section className="bg-[#f5f7f9] py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">

          <div className="flex flex-col gap-4">
            <img src="/images/labo/ministere1.png" alt="" />
            <img src="/images/labo/ministere2.png" alt="" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Agréments des ministères
            </h3>
            <p className="text-gray-700">
              IANESCO est agréé depuis 1973 pour le contrôle de l’eau et des analyses sanitaires.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="bg-[#048CBB] text-white px-4 py-2 rounded">
              Agrément environnement
            </a>
            <a href="#" className="border px-4 py-2 rounded">
              Agrément santé
            </a>
          </div>

        </div>
      </section>

      {/* ================= CIR ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">

          <img src="/images/labo/cir.png" alt="" />

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Crédit Impôt Recherche
            </h3>
            <p className="text-gray-700">
              Les travaux réalisés par IANESCO peuvent ouvrir droit au crédit d’impôt recherche.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <ContactSection />

    </div>
  )
}