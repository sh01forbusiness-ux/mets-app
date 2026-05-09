'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const navItemStyle = "rounded-xl p-2 hover:bg-gray-200 duration-300 text-sky-900"

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div>
        <Link href="/">
          <Image src="/header-logo-ver2.png" alt="ロゴ画像" width={240} height={48} className="object-contain" />
        </Link>
      </div>

<button onClick={() =>setIsNavOpen(!isNavOpen)}>icon</button>
      {if (isNavOpen === true) {
        <nav className="sm:hidden" >
        <ul>
          <li className={navItemStyle}>
            <Link href="/about" >メッツの概要</Link>
          </li>
          <li className={navItemStyle}>
            <Link href="/activities">メッツがわかる活動表</Link>
          </li>
        </ul>
      </nav>}}

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