import Image from 'next/image';
import journalImage01 from './journal-image-01.png'
import journalImage02 from './journal-image-02.png'
import journalImage03 from './journal-image-03.png'

export default function About() {
  // スタイル設定
  const cardStyle = "p-4"
  const titleStyle = "border-l-8 border-orange-500 text-xl font-bold p-2"
  const paragraphStyle = "pl-5 mt-4"
  const imageStyle = "pl-5 mt-4 w-full h-auto"
  const ulStyle = "pl-5 mt-4 space-y-2"
  const liTitleStyle = "shrink-0 text-center"


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
        <ul className={ulStyle}>
          <li className='flex'>
            <span className={`${liTitleStyle} w-16`}>身体活動</span>：
            <span>安静にしている状態よりも多くのエネルギーを消費する、骨格筋の収縮を伴う全ての活動</span>
          </li>
          <li className='flex'>
            <span className={`${liTitleStyle} w-16`}>生活活動</span>：
            <span>身体活動の一部で、日常生活における家事・労働・通勤・通学などに伴う活動</span>
          </li>
          <li className='flex'>
            <span className={`${liTitleStyle} w-16`}>運動</span>：
            <span>身体活動の一部で、スポーツやフィットネスなどの、健康・体力の維持・増進を目的として、計画的・定期的に実施する活動</span>
          </li>
          <li className='flex'>
            <span className={`${liTitleStyle} w-16`}>座位行動</span>：
            <span>座位や臥位の状態で行われる、エネルギー消費が1.5 メッツ6以下の全ての覚醒中の行動（例えば、デスクワークをすることや、座ったり寝ころんだ状態でテレビやスマートフォンを見ること）</span>
          </li>
        </ul>
      </div>

      <div className={cardStyle}>
        <h2 className={titleStyle}>なぜメッツが注目されているのか</h2>
        <p className={paragraphStyle}>
          厚生労働省が策定した健康づくりのための身体活動・運動ガイド2023ではメッツと疾患リスクに関する統計や生活への統合的なアプローチが記載されています。<br />
          メッツの特徴的な部分は<span className='font-bold'>「身体活動」と「運動」の総量を重視する</span>点です。<br />
          単なる運動習慣の促進ではなく、一回の負荷の高い運動よりも<span className='font-bold'>日常生活から少しずつ底上げする</span>ことが重要です。
        </p>
      </div>
      <div className={cardStyle}>
        <h2 className={titleStyle}>推奨値とその理由</h2>
        <p className={paragraphStyle}>
          推奨値は以下のように定められています。
        </p>
        <ul className={ulStyle}>
          <li className='flex'>
            <span className={`${liTitleStyle} w-12`}>高齢者</span>：
            <span>3メッツ以上の身体活動を週15メッツ（週2~3日の筋力トレーニングを含む）</span>
          </li>
          <li className='flex'>
            <span className={`${liTitleStyle} w-12`}>成人</span>：
            <span>3メッツ以上の身体活動を週23メッツ（週2~3日の筋力トレーニング（3メッツ以上、計週4メッツ）を含む）</span>
          </li>
        </ul>

        <p className={paragraphStyle}>
          例えば...
        </p>

        <ul className={ulStyle}>
          <li className='flex'>
            <span className={`${liTitleStyle} w-12`}>高齢者</span>：
            <span>1日40分6000歩</span>
          </li>
          <li className='flex'>
            <span className={`${liTitleStyle} w-12`}>成人</span>：
            <span>1日60分8000歩</span>
          </li>
        </ul>
        <Image
          className={imageStyle}
          src={journalImage02}
          alt='参考画像02'
          width={1437}
          height={791} />
        <p className={paragraphStyle}>
          高齢者では、身体活動をほとんど行わない高齢者と比べて総死亡及び心血管疾患死亡のリスクが約30％程度低下することが示されたことなどから、週15メッツを推奨値としました。<br />
          成人では生活習慣病の発症予防に効果のある身体活動量の低減をコホート研究からレビューした結果、週23メッツを推奨値としています。
        </p>
        <p className={paragraphStyle}>
          ただし、上記はあくまで推奨値であり、少しの身体活動を行った場合でも身体活動をほとんど行わない場合と比較すると死亡率は低下します。むしろ、身体活動の少ない人ほど、少しの身体活動で大きな健康増進効果が期待できます。
        </p>
        <p className={`${paragraphStyle} text-xl`}>
          つまり、推奨値≠あなたの目標値<br />
          無理せず少しずつ身体活動を増やすことが重要です！
        </p>

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
        <p className={paragraphStyle}>
          一方、1日60分以上の中強度以上の身体活動を行うことにより、座位行動による死亡リスクの低下が期待できると言われています。<br />
          また長時間の座位行動をできる限り頻繁に（例えば、30分ごとに）中断することが、心血管代謝疾患のリスク低下にとって重要であることも報告されています。
        </p>
      </div>

    </main>

  )

}