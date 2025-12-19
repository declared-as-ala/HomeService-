import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform">
        <Image
          src="/logo.png"
          alt="HomeService Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        HomeService
      </span>
    </Link>
  );
}

