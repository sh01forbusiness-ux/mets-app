'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import metsData from '../public/metsData.json';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type MetsItem = {
  category_large: string;
  category_medium: string;
  category_small: string;
  mets: number;
}

export type ActivityRecord = {
  id: number,
  date: string,
  gender: string,
  weight: number | null,
  mediumActivityCategory: string,
  activityTime: number | null,
  mets: number | null,
  calories: number | null,
};

export default function Home() {

  // スタイル設定
  const cardStyle = "p-4"
  const titleStyle = "border-l-8 border-orange-500 text-xl font-bold p-2"
  const paragraphStyle = "pl-5 mt-4"
  const inputStyle = "border rounded px-2 h-7 w-50 text-center"
  const itemName = "w-20 item-center inline-block"
  const unit = "ml-2"
  const buttonStyle = "px-4 mx-2 rounded-full text-orange-500 bg-white border border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer duration-300"

  // 日付の入力管理
  const getToday = () => {
    const yyyy = new Date().getFullYear();
    const mm = String(new Date().getMonth() + 1).padStart(2, '0');
    const dd = String(new Date().getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  const [date, setDate] = useState(getToday());

  // 性別の入力管理
  const [gender, setGender] = useState<"male" | "female" | "">("");

  // 体重の入力管理
  const [weight, setWeight] = useState<string>("");

  const handleWeightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let weightValue = e.target.value;
    weightValue = weightValue.replace(/[０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    );
    weightValue = weightValue.replace(/。/g, '.')
    weightValue = weightValue.replace(/[^0-9.]/g, '');
    setWeight(weightValue);
  }

  // モーダルの表示設定
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedLargeCategory, setSelectedLargeCategory] = useState<string>("");
  const [selectedMediumCategory, setSelectedMediumCategory] = useState<string>("");
  const [selectedSmallCategory, setSelectedSmallCategory] = useState<string>("");

  const largeCategories = useMemo(() => {
    return Array.from(new Set(metsData.map((item: MetsItem) => item.category_large)))
  }, []);
  const mediumCategories = useMemo(() => {
    return Array.from(new Set(metsData
      .filter((item: MetsItem) => item.category_large === selectedLargeCategory)
      .map((item: MetsItem) => item.category_medium)
    ))
  }, [selectedLargeCategory]);
  const smallCategoriesArray = useMemo(() => {
    return metsData.filter((item: MetsItem) =>
      item.category_large === selectedLargeCategory &&
      item.category_medium === selectedMediumCategory
    )
  }, [selectedLargeCategory, selectedMediumCategory]);

  // 活動時間の入力管理
  const [activityTime, setActivityTime] = useState<string>("");

  const handleActivityTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let timeValue = e.target.value;
    timeValue = timeValue.replace(/[０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    );
    timeValue = timeValue.replace(/。/g, '.')
    timeValue = timeValue.replace(/[^0-9.]/g, '');
    setActivityTime(timeValue);
  }

  // クリアボタンの設定
  const handleClear = () => {
    setDate("");
    setGender("");
    setWeight("");
    setSelectedSmallCategory("");
    setSelectedMediumCategory("");
    setSelectedLargeCategory("");
    setActivityTime("");
    setResultMets(null);
    setResultCarories(null);
  }

  // 計算結果
  const [resultMets, setResultMets] = useState<number | null>(null);
  const [resultCalories, setResultCarories] = useState<number | null>(null);
  const selectedMets = smallCategoriesArray.find(
    (item: MetsItem) => item.category_small === selectedSmallCategory
  )?.mets;

  const handleCalculate = () => {
    if (date === '') {
      alert('日付を選択してください')
      return;
    } else if (gender === '') {
      alert('性別を選択してください')
      return;
    } else if (weight === '') {
      alert('体重を選択してください')
      return;
    } else if (selectedMets === undefined) {
      alert('活動内容を選択してください')
      return;
    } else if (activityTime === '') {
      alert('活動時間を入力してください')
      return;
    } else {
      const calculatedMets = Math.round(selectedMets * Number(activityTime) / 60 * 10) / 10;
      setResultMets(calculatedMets);
      const calculatedCarories = Math.round(selectedMets * Number(weight) * Number(activityTime) / 60 * 1.05);
      setResultCarories(calculatedCarories);
    }
  }

  // 計算結果画面の動作
  const resultRef = useRef<HTMLOutputElement>(null);
  useEffect(() => {
    if (resultMets !== null && resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [resultMets]);

  // 計算結果の保存
  const saveActivityLog = () => {
    const newRecord: ActivityRecord = {
      id: Date.now(),
      date: date,
      gender: gender,
      weight: Number(weight),
      mediumActivityCategory: selectedMediumCategory,
      activityTime: Number(activityTime),
      mets: resultMets,
      calories: resultCalories,
    };
    const existingData = localStorage.getItem('metsHistory');
    let activityRecords: ActivityRecord[] = [];
    if (existingData) {
      activityRecords = JSON.parse(existingData);
    }
    activityRecords.push(newRecord);
    localStorage.setItem('metsHistory', JSON.stringify(activityRecords));
    alert('保存が完了しました。');
  }


  return (
    <>
      <div className={cardStyle}>
        <h2 className={titleStyle}>メッツとは</h2>
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
      </div>

      <div className="pt-4 pb-8 mt-4 mx-auto rounded-2xl bg-orange-100">
        <h2 className="font-bold text-center text-xl p-2">メッツ計算</h2>

        <div className="max-w-md mx-auto w-fit">
          <div className={`${paragraphStyle} flex flex-col gap-2`}>

            <div>
              <span className={itemName}>日付</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputStyle} />
            </div>


            <div className="flex gap-2">
              <span className={itemName}>性別</span>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="Gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")} />
                <span className="mx-1">男性</span>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="Gender"
                  value="female"
                  onChange={() => setGender("female")}
                  checked={gender === "female"}
                />
                <span className="mx-1">女性</span>
              </label>
            </div>


            <div>
              <span className={itemName}>体重</span>
              <input
                type="text"
                inputMode="decimal"
                className={inputStyle}
                value={weight}
                maxLength={5}
                onChange={handleWeightInput} />
              <span className={unit}>kg</span>
            </div>


            <div>
              <span className={itemName}>活動内容</span>
              <button type="button"
                className={inputStyle}
                onClick={
                  () => {
                    setIsModalOpen(true)
                  }
                } >
                {selectedSmallCategory ? selectedSmallCategory.slice(0, 10) + "..." : "選択してください 　▼"}
              </button>
            </div>

            <div>
              <span className={itemName}>活動時間</span>
              <input
                type="text"
                className={inputStyle}
                value={activityTime}
                maxLength={4}
                onChange={handleActivityTimeInput} />
              <span className={unit}>分</span>
            </div>


          </div>

          <div className="text-center mt-4">
            <button
              className={`${paragraphStyle} ${buttonStyle}`}
              onClick={handleCalculate}>
              計算
            </button>
            <button
              className={`${paragraphStyle} ${buttonStyle}`}
              onClick={handleClear}>
              クリア
            </button>
          </div>

        </div>
      </div>

      {resultMets &&
        <>
          <output className="block pt-4 pb-8 my-8 mx-auto rounded-2xl bg-white border-2 border-orange-500 shadow-md text-xl text-center"
            ref={resultRef}>
            <h2 className="font-bold text-center p-2 text-orange-500">
              計算結果
            </h2>
            <p
              className='mt-4'>
              この活動で
              <span>
                {resultMets}
              </span>
              メッツ達成！
            </p>
            <p className='mt-4'>
              消費カロリー
              <span>{resultCalories}</span>
              kcal
            </p>
            <button
              className={`${buttonStyle} mt-4 inline-block`}
              onClick={saveActivityLog}>
              活動履歴として保存する
            </button>
          </output>
          <p className={`${paragraphStyle} -xl`}>
            ※活動履歴は
            <Link
              href="/history"
              className='text-sky-950 font-bold'>
              こちら
            </Link>
          </p>
        </>
      }

      {/* モーダル画面の表示設定 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50"
          onClick={
            () => {
              setIsModalOpen(false)
              setSelectedLargeCategory("");
              setSelectedMediumCategory("");
              setSelectedSmallCategory("");
            }}>
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold text-lg mb-4 text-center">活動内容</h3>

            <div className="min-h-\[150px]\ flex flex-col gap-4 text-gray-700">

              {/* 活動内容の大分類 */}
              <div>
                <label className="block mb-1 text-sm font-bold">利用者区分</label>
                <select
                  className="w-full border rounded p-2 bg-white"
                  value={selectedLargeCategory}
                  onChange={
                    (e) => {
                      setSelectedLargeCategory(e.target.value);
                      setSelectedMediumCategory("");
                      setSelectedSmallCategory("");
                    }
                  }
                >
                  <option value="">選択してください</option>
                  {largeCategories.map((category: string) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* 活動内容の中分類 */}
              {selectedLargeCategory && (
                <div>
                  <label className="block mb-1 text-sm font-bold">活動の種類</label>
                  <select
                    className="w-full border rounded p-2 bg-white"
                    value={selectedMediumCategory}
                    onChange={
                      (e) => {
                        setSelectedMediumCategory(e.target.value);
                        setSelectedSmallCategory("");
                      }
                    }
                  >
                    <option value="">選択してください</option>
                    {mediumCategories.map((category: string) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* 活動内容の小分類 */}
              {selectedMediumCategory && (
                <div>
                  <label className="block mb-1 text-sm font-bold">活動の内容</label>
                  <select
                    className="w-full border rounded p-2 bg-white"
                    value={selectedSmallCategory}
                    onChange={(e) => setSelectedSmallCategory(e.target.value)}
                  >
                    <option value="">選択してください</option>
                    {smallCategoriesArray.map((item: MetsItem, index: number) => (
                      <option
                        key={`${item.category_small} -${index}`}
                        value={item.category_small}>
                        {item.category_small} --- {item.mets} メッツ
                      </option>
                    ))}
                  </select>
                </div>
              )}

            </div>

            <div className="flex justify-end mt-6">
              {
                selectedSmallCategory && (
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() => setIsModalOpen(false)}
                  >
                    確定
                  </button>
                )
              }
            </div>
          </div>
        </div>
      )}

    </>
  );
}
