import Image from 'next/image';
import journalImage01 from './journal-image-01.png'
import journalImage02 from './journal-image-02.png'
import journalImage03 from './journal-image-03.png'

export default function About() {
  // スタイル設定
  const cardStyle = "p-4"
  const titleStyle = "border-l-8 border-orange-500 text-xl font-bold p-2"
  const paragraphStyle = "pl-5 mt-4"
  const imageStyle = "pl-5 mt-4 w-full w-auto"

  return (
    <main>
      <div className={cardStyle}>
        <h2 className={titleStyle}>メッツ（Mets）</h2>
        <p className={paragraphStyle}>メッツとは身体活動の強度を表し、安静座位時を1メッツとし、その何倍のエネルギーを消費するかという指標です。</p>
        <Image
          className={imageStyle}
          src={journalImage01}
          alt='参考画像01'
          width={1551}
          height={911} />
        <ul className={`${paragraphStyle} text-sm`}>
          <li>
            身体活動：安静にしている状態よりも多くのエネルギーを消費する、骨格筋の収縮を伴う全ての活動
          </li>
          <li className='mt-2'>
            生活活動：身体活動の一部で、日常生活における家事・労働・通勤・通学などに伴う活動
          </li>
          <li className='mt-2'>
            運動：身体活動の一部で、スポーツやフィットネスなどの、健康・体力の維持・増進を目的として、計画的・定期的に実施する活動
          </li>
          <li className='mt-2'>
            座位行動：座位や臥位の状態で行われる、エネルギー消費が1.5 メッツ6以下の全ての覚醒中の行動（例えば、デスクワークをすることや、座ったり寝ころんだ状態でテレビやスマートフォンを見ること）
          </li>
        </ul>
      </div>

      <div className={cardStyle}>
        <h2 className={titleStyle}>なぜメッツが注目されているのか</h2>
        <p className={paragraphStyle}>
          厚生労働省が策定した健康づくりのための身体活動・運動ガイド2023ではメッツと疾患リスクに関する統計や生活への統合的なアプローチが記載されています。<br />
          メッツの特徴的な部分は「身体活動」と「運動」の総量を重視する点です。<br />
          単なる運動習慣の促進ではなく、日常生活から少しずつ底上げすることが不可の高い運動を一回するよりも重要です。
        </p>
      </div>
      <div className={cardStyle}>
        <h2 className={titleStyle}>目標値とその理由</h2>
        <p className={paragraphStyle}>

        </p>
        <Image
          className={imageStyle}
          src={journalImage02}
          alt='参考画像02'
          width={1437}
          height={791} />
      </div>

      <div className={cardStyle}>
        <h2 className={titleStyle}>座位行動とは</h2>
        <p className={paragraphStyle}>
          座位や臥位の状態で行われる、エネルギー消費が1.5 メッツ以下の行動を座位行動と呼びます。<br />
          座位時間と死亡リスクの関係を検討した34件のコホート研究のメタ解析では、座位時間の増加に伴い死亡リスクが増加することが報告されています。
        </p>
        <Image
          className={imageStyle}
          src={journalImage03}
          alt='参考画像03'
          width={1661}
          height={821} />
      </div>

    </main>

  )

}