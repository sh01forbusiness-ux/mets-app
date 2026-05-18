'use client'

import { useState } from "react"

export default function historyPage() {

  // スタイル設定
  const paragraphStyle = "pl-5 mt-4"
  const buttonStyle = "px-4 mx-2 rounded-full text-orange-500 bg-white border border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer duration-300"
  const inputStyle = "w-20 inline-block"

  // 履歴の表示設定
  const [mets, setMets] = useState(getResult());
  const getResult = () => {
    return 
  };

  return (
    <>
      <div className="pt-4 pb-8 mt-4 mx-auto rounded-2xl bg-orange-100">
        <h2 className="font-bold text-center text-xl p-2">履歴表示設定</h2>
        <div className="text-center mt-2">
          <p>
            <span className={inputStyle}>目標</span>：
            <input
              type="text"
              className="border rounded mx-2 w-20" />
            <span className={inputStyle}>メッツ / 週</span>
          </p>
          <p className="mt-2">
            <span className={inputStyle}>集計方法</span>：
            <select name="days" id="" className={`${inputStyle} mx-2 text-center`}>
              <option value="Monday">月曜日</option>
              <option value="Tueday">火曜日</option>
              <option value="Wednesday">水曜日</option>
              <option value="Thurthday">木曜日</option>
              <option value="Friday">金曜日</option>
              <option value="Saturday">土曜日</option>
              <option value="Sunday">日曜日</option>
            </select>
            <span className={inputStyle}>始まり</span>
          </p>
        </div>
        <div className="text-center mt-4">
          <button
            className={`${paragraphStyle} ${buttonStyle}`}
          >
            確定
          </button>
          <button
            className={`${paragraphStyle} ${buttonStyle}`}
          >
            クリア
          </button>
        </div>
      </div>
      <div>
        <p>
          <span>今週は</span>

        </p>
      </div>
    </>
  )
}