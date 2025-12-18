import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

export default function Navbar() {
  return (
    <nav className="w-full mt-3 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Social Icons */}
        <div className="hidden sm:flex items-center gap-3">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
          <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
          <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
        </div>

        <Link
          href="/"
          className="
    text-2xl font-extrabold
    tracking-wide
    uppercase
    transition-all
    hover:scale-[1.02]"
        >
          Readify
        </Link>

        {/* Right: Navigation */}
        <div className="hidden md:flex items-center  gap-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <AuthLinks />
        </div>
      </div>
    </nav>
  );
}
