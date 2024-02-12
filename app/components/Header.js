import Link from "next/link";

export default function Header () {
  return(
    <section className="w-full h-16 grid grid-cols-2 p-2 items-center">
      <Link href="/" className="font-serif text-lg">
        Home
      </Link>
      <Link href="/" className="justify-self-end">
      Login
      </Link>
    </section>
  )
}