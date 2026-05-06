import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div>
        <Image src="/header-logo-ver2.png" alt="ロゴ画像" width={240} height={48} className="object-contain" />
      </div>
    </header>
  );
}