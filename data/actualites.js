export const actualites = [
  {
    slug: "recrutement-2026-ianesco",
    title: "Rejoignez-nous en 2026, IANESCO recrute !",
    date: "02-25-2026",
    author: "IANESCO",
    category: "Recrutement",
    image: "/images/actus/recrutement.jpg",
    excerpt: "IANESCO recrute un technicien de laboratoire...",
    content: `
      <p><strong>Type de contrat :</strong> CDI</p>
      <p><strong>Localisation :</strong> Poitiers</p>

      <p>
      Notre laboratoire spécialisé en analyses environnementales recherche un technicien...
      </p>

      <h3>Vos missions :</h3>
      <ul>
        <li>Préparation des échantillons</li>
        <li>Analyses chromatographiques</li>
        <li>Maintenance équipements</li>
      </ul>

      <h3>Profil :</h3>
      <p>Bac+2 en chimie ou équivalent...</p>
    `
  },
  {
    slug: "Le 6 :2 FTS",
    title: "Le 6 :2 FTS et ses métabolites",
    date: "2026-02-20",
    type: "simple",
    image: "/images/actus/fts.jpg",
    content: `
      <p><strong>Le 6 :2 FTS et ses métabolites</strong></p>
    <br>
      <h2>1. Rappel rapide : qu’est-ce que le 6:2 FTS ?</h2>
      <br>
      <p>
        Le <strong>6:2 FTS</strong> est un <strong>PFAS de type fluorotélomère sulfonate</strong>,
        utilisé notamment comme substitut du PFOS (mousses anti-incendie, chromage, surfactant).
        Il est <strong>polyfluoré</strong> (6 C fluorés + 2 C hydrogénés), ce qui le rend
        <strong>moins persistant que le PFOS</strong>, mais <strong>loin d’être biodégradable</strong>.
      </p>
      <br>

      <h2>2. Le 6:2 FTS est un précurseur</h2>
      <br>
      <p>
        Contrairement à certains PFAS “terminaux”, le <strong>6:2 FTS est un précurseur</strong>,
        capable de se transformer en <strong>métabolites intermédiaires</strong>, puis en
        <strong>PFAS plus courts</strong>.
      </p>
      <br>
      <p>👉 <strong>On ne peut pas raisonner uniquement en "substance mère".</strong></p>
    <br>
      <h2>3. Métabolites majeurs (fluorotélomères transformés)</h2>
      <br>
      <h3>3.1 Métabolites intermédiaires</h3>
      <br>
      <p>Ils sont observés en milieux biologiques (boues activées, sols, bactéries, champignons) :</p>
      <br>
      <ul>
        <li><strong>6:2 FTCA</strong> (6:2 fluorotelomer carboxylic acid)</li>
        <li><strong>5:3 FTCA</strong></li>
        <li><strong>5:2 sFTOH</strong> (alcool secondaire)</li>
        <li><strong>5:2 Kétone</strong></li>
      </ul>
      <br>
      <p>👉 Ces composés sont <strong>transitoires</strong> parfois volatils, mais <strong>analytiquement traçables</strong> en LC-MS et GC-MS ciblée.</p>
      <br>
      <h3>3.2 Métabolites finaux</h3>
      <br>
      <p>Ce sont eux qui sont <strong>persistants et qui s’accumulent</strong> :</p>
      <br>
      <ul>
        <li><strong>PFHxA</strong> - acide perfluorohexanoïque (C6)</li>
        <li><strong>PFPeA</strong> - acide perfluoropentanoïque (C5)</li>
        <li><strong>PFBA</strong> - acide perfluorobutanoïque (C4)</li>
        <li>parfois <strong>PFPrA</strong> (C3) à plus long terme</li>
      </ul>

      <p>✅ Ces PFCA <strong>courts</strong> sont très mobiles, peu adsorbés, et <strong>fréquemment détectés dans les eaux souterraines.</strong> Ils sont difficiles à éliminer.</p>
<br>

      <h2>4. Conditions de formation des métabolites</h2>
      <ul>
        <li>Boues activées</li>
        <li>Sols aérés</li>
        <li>Milieux biologiques</li>
      </ul>

      <p>
        👉 Désulfonation microbienne → β-oxydation → PFCA courts
      </p>

      <h2>5. Enjeux réglementaires</h2>
      <ul>
        <li>Moins toxique que PFOS</li>
        <li>Mais métabolites très persistants</li>
        <li>Approche "précurseurs + métabolites"</li>
      </ul>

      <p>📌 Le risque réel est souvent porté par les métabolites.</p>

      <h2>6. Implications analytiques</h2>
      <ul>
        <li>6:2 FTS</li>
        <li>6:2 FTCA / 5:3 FTCA</li>
        <li>PFHxA, PFPeA, PFBA</li>
      </ul>

      <p>
        👉 Sinon, on <strong>sous-estime fortement la contamination</strong>.
      </p>

      <p>
        Le laboratoire IANESCO a développé <strong>2 méthodes d’analyse (LC-MSMS et GC-MS)</strong>
        pour caractériser ces composés.
      </p>
    `
  },
  // {
  //   slug: "Le 6 :2 FTS et ses métabolites",
  //   title: "Le 6 :2 FTS et ses métabolites",
  //   date: "2026-02-20",
  //   type: "document",
  //   files: [
  //     { name: "Rapport PDF", url: "/docs/rapport.pdf" }
  //   ]
  // },
  {
    slug: "Index Ega Pro 2026",
    title: "Index Ega/Pro 2026",
    date: "2026-02-17",
    type: "simple",
    images: [
      "/images/actus/Indice-EGAPRO-1-1.jpg",
      "/images/actus/Indice-EGAPRO-2-1.jpg"
    ]
  }
]