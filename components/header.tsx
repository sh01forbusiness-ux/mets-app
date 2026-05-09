'use client'

import Image from "next/image";
import Link from "next/link";

export default function Header() {
const navItemStyle ="rounded-xl p-2 hover:bg-gray-200 duration-300 text-sky-900"

  return (
    <header>
      <div>
        <Link href="/">
        <Image src="/header-logo-ver2.png" alt="ロゴ画像" width={240} height={48} className="object-contain" />
        </Link>
      </div>
      <nav className="hidden sm:block sm:border-b-2 border-sky-900">
        <ul className="flex space-x-4 pt-4 pb-2 justify-center">
          <li>
            <Link href="/about" className={navItemStyle}>メッツの概要</Link>
          </li>
          <li>
            <Link href="/activities" className={navItemStyle}>メッツがわかる活動表</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}