import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={'/'} className="text-white font-bold">Homepage</Link>
      <Link href={'/AddTopic'} className="bg-white p-2 text-black" >Add topic</Link>
    </nav>
  );
}