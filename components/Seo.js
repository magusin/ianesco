import Head from 'next/head'

export default function Seo({
  title = "IANESCO",
  description = "Laboratoire d'analyse",
  image = "/images/cover.jpg"
}) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="robots" content="index, follow" />
    </Head>
  )
}