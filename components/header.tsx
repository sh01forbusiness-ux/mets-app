'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navItemStyle = "rounded-xl p-2 hover:bg-gray-300 duration-300 block"

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  return (
    <header className="sm:block flex justify-between px-4 py-2 text-sky-950">
      <div>
        <Link href="/">
          <Image src="/header-logo-ver2.png" alt="ロゴ画像" width={240} height={48} className="object-contain" />
        </Link>
      </div>

      <button
        className={`${navItemStyle} relative z-50 sm:hidden`}
        onClick={() => setIsNavOpen(!isNavOpen)}>
        {!isNavOpen && <Menu size={24} />}
      </button>

      {isNavOpen && (

        <div
          className="sm:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsNavOpen(false)}>

          <nav
            className="bg-white w-60 rounded-xl p-2 fixed top-8 right-8"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end">
              <button
                className={navItemStyle}
                onClick={() => setIsNavOpen(!isNavOpen)}>
                <X size={24} />
              </button>
            </div>
            <ul>
              <li>
                <Link
                  href="/about"
                  className={navItemStyle}
                  onClick={() => setIsNavOpen(false)}>
                  メッツの概要
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className={navItemStyle}
                  onClick={() => setIsNavOpen(false)}>
                  メッツがわかる活動表
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className={navItemStyle}
                  onClick={() => setIsNavOpen(false)}>
                  活動履歴
                </Link>
              </li>
              <li>
                <Link
                  href="/bibliography"
                  className={navItemStyle}
                  onClick={() => setIsNavOpen(false)}>
                  参考文献
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      )}

      <nav className="hidden sm:block sm:border-b-2 border-sky-900">
        <ul className="flex space-x-4 pt-4 pb-2 justify-center">
          <li>
            <Link href="/about" className={navItemStyle}>メッツの概要</Link>
          </li>
          <li>
            <Link href="/activities" className={navItemStyle}>メッツがわかる活動表</Link>
          </li>
          <li>
            <Link href="/history" className={navItemStyle}>活動履歴</Link>
          </li>
          <li>
            <Link href="/bibliography" className={navItemStyle}>参考文献</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}