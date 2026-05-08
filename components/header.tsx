import Image from "next/image";

export default function Header() {
const navItemStyle ="rounded-xl p-2 hover:bg-gray-200 duration-300"

  return (
    <header>
      <div>
        <Image src="/header-logo-ver2.png" alt="ロゴ画像" width={240} height={48} className="object-contain" />
      </div>
      <nav className="hidden sm:block sm:border-b-2">
        <ul className="flex space-x-4 pt-4 pb-2 justify-center text-xl">
          <li>
            <a href="#" className={navItemStyle}>メッツの概要</a>
          </li>
          <li>
            <a href="#" className={navItemStyle}>メッツがわかる活動表</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}