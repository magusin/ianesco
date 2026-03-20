import Link from 'next/link'

export default function ServiceCard({ title, link }) {
  return (
    <Link href={link}>
      <div className="border p-6 rounded shadow hover:shadow-lg cursor-pointer">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  )
}