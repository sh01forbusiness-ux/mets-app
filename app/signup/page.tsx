'use client'

import { useState } from 'react';

export default function Signup() {
  const inputStyle = "border rounded px-2 h-7 w-80 text-center block"

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h2 className='font-bold text-center text-xl p-2'>新規登録</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="ユーザー名" />
      <input
        type="email"
        className={inputStyle}
        placeholder="メールアドレス" />
      <input
        type="password"
        className={inputStyle}
        placeholder="パスワード" />
      <button>登録</button>
    </div>
  )
}