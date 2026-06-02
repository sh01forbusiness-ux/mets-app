'use client';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const inputStyle = "border rounded px-2 h-7 w-80 text-center block"
  const buttonStyle = "px-4 mx-2 rounded-full text-orange-500 bg-white border border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer duration-300"
  const linkStyle = "text-orange-500 hover:underline"

  return (
    <div className="flex flex-col items-center gap-2 m-4 mx-auto">
      <h2 className='font-bold text-center text-xl p-2'>パスワードの再設定</h2>
      <p className='mb-2'>
        まだアカウントをお持ちでない方は
        <Link href="/signup" className={linkStyle}>
          こちら
        </Link>
        から新規会員登録してください。
      </p>

      <input
        type="email"
        className={`${inputStyle} mb-2`}
        placeholder="メールアドレス" />

      <button className={buttonStyle}>再設定用メールを送信</button>
    </div>
  );
}