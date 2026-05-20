'use client'

import { useEffect, useState, useRef } from "react"
import { ActivityRecord } from "../page"

export default function HistoryPage() {

  // スタイル設定
  const cardStyle = "p-4"
  const titleStyle = "border-l-8 border-orange-500 text-xl font-bold p-2"
  const paragraphStyle = "pl-5 mt-4"
  const buttonStyle = "px-4 mx-2 rounded-full text-orange-500 bg-white border border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer duration-300"
  const inputStyle = "w-20 inline-block"
  const recordStyle = "inline-block w-30 font-bold text-gray-700 mr-4"

  // 入力値の管理
  const [inputValue, setInputValue] = useState<string>("23");
  useEffect(() => {
    const savedTargetValue = localStorage.getItem('savedTargetValue');
    if (savedTargetValue) {
      setInputValue(savedTargetValue);
    }
  }, []);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = e.target.value;
    num = num.replace(/[０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    );
    num = num.replace(/[^0-9.]/g, '');
    if (num.length > 2) {
      num = num.slice(0, 2);
    }
    setInputValue(num);
    localStorage.setItem('savedTargetValue', num);
  }

  // 確定ボタンの動作管理
  const [targetValue, setTargetValue] = useState<number | null>(null);
  const handleSubmit = () => {
    const num = Number(inputValue);
    if (num <= 0) {
      alert('目標値は1〜99を入力してください。');
      return;
    } else {
      setTargetValue(num);
    }
  }

  // クリアボタンの動作管理
  const handleClear = () => {
    setTargetValue(null);
    setInputValue("");
    setAnimatedWidth(0);
    localStorage.removeItem('savedTargetValue');
  }

  // 履歴の管理
  const [historyData, setHistoryData] = useState<ActivityRecord[]>([]);
  useEffect(() => {
    const existingData = localStorage.getItem('metsHistory');
    if (existingData) {
      setHistoryData(JSON.parse(existingData));
    }
  }, []);

  // 履歴表示用の準備
  const sevenDaysRecords = historyData.filter(record => {
    const recordTime = new Date(record.date).getTime();
    const currentTime = Date.now();
    return (currentTime - recordTime) <= 7 * 24 * 60 * 60 * 1000;
  })

  const totalMets = Math.round(sevenDaysRecords.reduce((sum, record) => {
    return sum + (record.mets || 0);
  }, 0) * 10) / 10;
  const achievementRatio = targetValue !== null ? Math.round((totalMets / targetValue) * 100) : null;

  // ステータスバーの動作
  const resultRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (achievementRatio !== null && resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [achievementRatio]);
  const statusBarWidth = achievementRatio !== null ? Math.min(achievementRatio, 100) : 0;

  const [animatedWidth, setAnimatedWidth] = useState(0);
  useEffect(() => {
    if (achievementRatio !== null) {
      setTimeout(() => setAnimatedWidth(statusBarWidth), 100);
    } else {
      setAnimatedWidth(0);
    }
  }, [statusBarWidth]);

  // 削除ボタンの動作設定
  const handleDelete = (id: number) => {
    if (window.confirm('削除しますか？')) {
      const updatedData = historyData.filter((record) => id !== record.id);
      setHistoryData(updatedData);
      localStorage.setItem('metsHistory', JSON.stringify(updatedData));
    }
  }

  return (
    <>
      <section className={cardStyle}>
        <h2 className={titleStyle}> 活動履歴の表示について</h2>
        <p className={paragraphStyle}>
          過去１週間〜本日までの履歴が確認できます。<br />
          ご自身の目標メッツを設定することで、現在の達成度を計測します。<br />
          ※キャッシュクリアなどにより過去データが削除されてしまう可能性があります。
        </p>
      </section>
      <section className={cardStyle}>
        <h2 className={titleStyle}>メッツの週目標基準</h2>
        <p className={paragraphStyle}>
          厚生労働省が健康日本21で取り決めた健康づくりの基準を公表しています。その基準としてメッツが使用されており、目標値は以下の通り定められています。
        </p>
        <ul className={paragraphStyle}>
          <li>高齢者：身体活動 15メッツ以上 / 週</li>
          <li>成人  ：身体活動 23メッツ以上 / 週（うち運動4メッツ以上）</li>
          <li>こども：身体活動 毎日3メッツ（参考）</li>
        </ul>
        <p className={paragraphStyle}>
          ※上記は統計学的な目安であり、実際には運動習慣や疾病などに合わせた目標設定が推奨されています。<br />
          まずは無理のない目標設定をしていきましょう。
        </p>
      </section>
      <section className={`${cardStyle} mt-4 mx-auto rounded-2xl bg-orange-100`}>
        <h2 className="font-bold text-center text-xl p-2">履歴表示設定</h2>
        <div className="text-center mt-2">
          <p>
            <span className={inputStyle}>目標</span>：
            <input
              type="string"
              value={inputValue}
              onChange={handleInputValue}
              className="border rounded mx-2 p-1 text-center w-20" />
            <span className={inputStyle}>メッツ / 週</span>
          </p>
          {/* 登録会員用 */}
          {/* <p className="mt-2">
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
          </p> */}
        </div>
        <div className="text-center mt-4">
          <button
            className={`${paragraphStyle} ${buttonStyle}`}
            onClick={handleSubmit}
          >
            確定
          </button>
          <button
            className={`${paragraphStyle} ${buttonStyle}`}
            onClick={handleClear}
          >
            クリア
          </button>
        </div>
      </section>
      {achievementRatio !== null && sevenDaysRecords.length !== 0 &&
        (<div
          className="my-6"
          ref={resultRef}>
            <div className="flex justify-between">
              <p>Start</p>
              <p>Goal</p>
            </div>
          <div className="w-full h-5 border rounded-full overflow-hidden bg-gray-300">
            {achievementRatio < 100 && (
              <div
                className="h-full  bg-orange-500"
                style={{ width: `${animatedWidth}%`, transition: 'width 1s ease-out' }}>
              </div>
            )}
            {achievementRatio >= 100 && (
              <div
                className="h-full  bg-red-500"
                style={{ width: `${animatedWidth}%`, transition: 'width 1s ease-out' }}>
              </div>
            )}
          </div>
          <div className=" w-full text-center text-xl mt-4 ">
            {achievementRatio < 100 && sevenDaysRecords.length !== 0 && (
              <p>目標達成まであと{Math.round((Number(targetValue) - totalMets) * 10) / 10}メッツ！</p>
            )}
            {achievementRatio >= 100 && (
              <p>
                おめでとうございます！<br />
                目標を達成しました！
              </p>
            )}
          </div>
        </div>
      )}
      <section>
        {sevenDaysRecords.length === 0 ? (
          <p className="font-bold text-center p-8">
            該当データがありません。
          </p>) : (

          <ul className="flex flex-col gap-2 mt-4">
            {sevenDaysRecords.map((record) => (
              <li key={record.id} className="bg-white p-4 rounded shadow-sm flex justify-between items-center border">
                <div>
                  <span className={recordStyle}>{record.date}</span>
                  <span className={recordStyle}>{record.mediumActivityCategory}</span>
                  <span className={`${recordStyle} text-red-500`}>{record.mets} メッツ</span>
                </div>

                <button
                  className="text-sm bg-red-100 text-red-500 px-3 py-1 rounded hover:bg-red-200"
                  onClick={() => handleDelete(record.id)}>
                  削除
                </button>
              </li>
            ))}
          </ul>
        )

        }
      </section>
    </>
  )
}