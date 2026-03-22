import Seo from '@/components/Seo'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFlask,
  faTrash,
  faSwimmer
} from "@fortawesome/free-solid-svg-icons"
import Contact from '@/components/Contact'

export default function Eau() {
  return (
    <>
      <Seo
        title="Analyse de l’eau | IANESCO"
        description="IANESCO réalise des analyses d’eau : potable, industrielle et résiduaire. Méthodes accréditées et résultats fiables."
      />

      {/* HERO */}
      <section className="bg-[#048CBB] text-white py-12 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Prélèvements et analyses d’eau
        </h1>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto p-10 space-y-6">

        <h2 className="text-4xl font-bold mb-10 text-center">Analyses d'eau dans la France entière</h2>

        <p>
          Vous souhaitez faire <b>analyser de l’eau</b> ? Faites appel au <b>laboratoire IANESCO</b>, nous sommes un véritable <b>laboratoire d’analyse d’eau</b>.
          Nous effectuons les <b>prélèvements directement sur place</b> et nous apportons un soin tout particulier pour résoudre vos problématiques. Nous vous indiquerons les solutions les plus adaptées.
        </p>

      </section>

      {/* IMAGES */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">

        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <Image src="/images/eau1.jpg" alt="Analyse eau laboratoire" fill className="object-cover" />
        </div>

        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <Image src="/images/eau2.jpg" alt="Prélèvement eau professionnel" fill className="object-cover" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold mb-10 text-center">
          Nos prestations d'analyse d'eau
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* COLONNE 1 */}
          <div className="bg-[#f5f7f9] rounded-xl p-6 space-y-6">

            {[
              "Surveillance des eaux souterraines",
              "Potabilité des eaux",
              "Gestion du risque légionelles",
              "Études des nappes souterraines en partenariat avec des bureaux d’études spécialisés",
              "Essai de performance des usines de traitement",
              "Impact sur les milieux récepteurs"
            ].map((item, i) => (
              <div key={i} className="border-b last:border-none pb-4">

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>

                  <div>
                    <h3 className="font-semibold">
                      {item}
                    </h3>

                    {item === "Gestion du risque légionelles" && (
                      <p className="text-sm text-gray-600 mt-1">
                        Prélèvements et analyses ECS – TAR, carnet sanitaire
                      </p>
                    )}
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* COLONNE 2 */}
          <div className="bg-[#f5f7f9] rounded-xl p-6 space-y-6">

            <div className="border-b pb-4">
              <div className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
                <div>
                  <h3 className="font-semibold">Analyses physico-chimiques</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    pH, MES, SO4, NH4, NO3, NO2, NTK, Phosphore, COT, DCO, DBO5, AOX…
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
                <div>
                  <h3 className="font-semibold">Analyses microbiologiques</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    légionelles, Pseudomonas, E. coli, salmonelles…
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
                <div>
                  <h3 className="font-semibold">Analyses de micropolluants minéraux</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Plus de 60 métaux et autres éléments…
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
                <h3 className="font-semibold">
                  Tests de toxicité vis-à-vis des Daphnies
                </h3>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
                <h3 className="font-semibold">
                  Essais de biodégradabilité
                </h3>
              </div>
            </div>

            <div>
              <div className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
                <div>
                  <h3 className="font-semibold">Micropolluants organiques</h3>
                  <p className="text-sm text-gray-600 mt-1">
                  Hydrocarbures, solvants chlorés, BTEX,alcools, HAP, PCB, pesticides, perturbateurs endocriniens, résidus médicamenteux, phénols, anilines, phtalates…
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/liste-de-nos-prestations#eau"
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg transition"
          >
            Voir toutes nos prestations d'analyse d'eau
          </a>
        </div>

      </section>


      {/* POURQUOI */}
      <section className="bg-[#048CBB] text-white py-20">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
      Pourquoi effectuer une analyse d'eau ?
    </h2>

    <div className="grid md:grid-cols-3 gap-12">

      {/* INDUSTRIELS */}
      <div className="flex flex-col items-center text-center">

        <FontAwesomeIcon
          icon={faFlask}
          className="text-5xl mb-6 opacity-90"
        />

        <h3 className="text-xl font-semibold mb-4">
          Industriels
        </h3>

        <p className="text-sm leading-relaxed opacity-90">
        Parmi leurs prérogatives, les industriels doivent pouvoir s’assurer rapidement et de manière fiable que leurs rejets aqueux respectent les normes en vigueur et soient conformes aux valeurs limites de leurs arrêté d’exploitation. Nous intervenons dans tous les secteurs industriels aussi bien dans le domaine de la chimie, que de la pharmacie, l’agroalimentaire, la papeterie, les fonderies…
        </p>

      </div>

      {/* EAUX */}
      <div className="flex flex-col items-center text-center">

        <FontAwesomeIcon
          icon={faTrash}
          className="text-5xl mb-6 opacity-90"
        />

        <h3 className="text-xl font-semibold mb-4">
          Eaux résiduaires
        </h3>

        <p className="text-sm leading-relaxed opacity-90">
        Les eaux résiduaires – ou eaux usées – sont des eaux dont la composition a été modifiée en conséquence des activités humaines, domestiques ou industrielles.

Leurs charges en pollutions organiques et minérales nécessitent un traitement grâce à des stations d’épuration et un suivi analytique 2 grâce à des laboratoires. Ces analyses sont nécessaires afin de garantir l’abattement de pollution qui permettra le rejet de l’eau traitée dans l’environnement.
        </p>

      </div>

      {/* PARTICULIERS */}
      <div className="flex flex-col items-center text-center">

        <FontAwesomeIcon
          icon={faSwimmer}
          className="text-5xl mb-6 opacity-90"
        />

        <h3 className="text-xl font-semibold mb-4">
          Particuliers
        </h3>

        <p className="text-sm leading-relaxed opacity-90">
        Dans le cas de l’utilisation d’eau de puits, un contrôle sanitaire est nécessaire pour caractériser cette eau et s’assurer de l’absence de toute contamination. Dans le cas des piscines, l’analyse de l’eau va permettre de contrôler son équilibre ionique, sa dureté et sa neutralité.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* MATERIEL */}
      <section className="bg-[#f5f7f9] py-20">
  <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

    {/* IMAGE */}
    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow">
      <Image
        src="/images/labo.jpg"
        alt="Matériel analyse laboratoire"
        fill
        className="object-cover"
      />
    </div>

    {/* CARTE */}
    <div className="bg-[#e9edf1] rounded-xl p-8 md:p-10">

      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Matériel d'analyse
      </h2>

      <div className="space-y-6">

        {/* ITEM */}
        <div className="border-b pb-5">
          <div className="flex gap-3 items-start">
            <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
            <div>
              <h3 className="font-semibold">Chromatographie</h3>
              <p className="text-gray-600 text-sm mt-1">
                LC/MS/MS, GC/MS et MS-MS, HS-GC/MS, flux continu
              </p>
            </div>
          </div>
        </div>

        <div className="border-b pb-5">
          <div className="flex gap-3 items-start">
            <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
            <h3 className="font-semibold">Chromatographie ionique</h3>
          </div>
        </div>

        <div className="border-b pb-5">
          <div className="flex gap-3 items-start">
            <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
            <div>
              <h3 className="font-semibold">Spectrométrie d’émission optique</h3>
              <p className="text-gray-600 text-sm mt-1">ICP/OES</p>
            </div>
          </div>
        </div>

        <div className="border-b pb-5">
          <div className="flex gap-3 items-start">
            <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
            <div>
              <h3 className="font-semibold">Spectrométrie de masse</h3>
              <p className="text-gray-600 text-sm mt-1">ICP/MS</p>
            </div>
          </div>
        </div>

        <div className="border-b pb-5">
          <div className="flex gap-3 items-start">
            <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
            <h3 className="font-semibold">
              Digesteur micro-ondes sous pression
            </h3>
          </div>
        </div>

        <div>
          <div className="flex gap-3 items-start">
            <span className="w-2 h-2 mt-2 bg-[#048CBB] rounded-full"></span>
            <div>
              <h3 className="font-semibold">
                Matériel de prélèvements et de mesures
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                débitmètres, préleveurs, multimètres …
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* CONTACT */}
      <Contact />
    </>
  )
}