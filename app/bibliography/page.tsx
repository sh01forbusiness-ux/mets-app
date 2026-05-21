export default function BibliographyPage() {
  // スタイル設定
  const cardStyle = "p-4"
  const titleStyle = "border-l-8 border-orange-500 text-xl font-bold p-2"
  const paragraphStyle = "pl-5 mt-4"
  const liStyle = "border border-orange-500 ml-5 rounded-xl overflow-hidden"
  const liTitleStyle = "border-b border-orange-500 bg-orange-100 py-2 px-4 text-center"
  const liContentStyle = "py-2 text-center"
  const linkStyle = "text-blue-600 underline block"

  return (
    <>
      <section className={cardStyle}>
        <h2 className={titleStyle}>
          参考・引用資料について
        </h2>
        <p className={paragraphStyle}>
          本サイト作成時に使用した文献・資料は以下のとおりです。<br />
          一部資料は部分的に改変を加えて使用しています。
        </p>
      </section>
      <ul className="flex flex-col gap-4">
        <li className={liStyle}>
          <p className={liTitleStyle}>
            改訂第 2 版『身体活動のメッツ(METs)表』成人版
          </p>
          <div className={liContentStyle}>
            <p>国立研究開発法人医薬基盤・健康・栄養研究所</p>
            [参照2026-05-02]
            <a
              href="https://www.nibn.go.jp/activities/documents/2024Compendium_table_adult_ver1_1_5.pdf"
              className={linkStyle}>
              https://www.nibn.go.jp/activities/documents/2024...
            </a>
          </div>
        </li>
        <li className={liStyle}>
          <p className={liTitleStyle}>
            『身体活動のメッツ(MET60+)表』高齢者版
          </p>
          <div className={liContentStyle}>
            <p>国立研究開発法人医薬基盤・健康・栄養研究所</p>
            [参照2026-05-02]
            <a
              href="https://www.nibn.go.jp/activities/documents/2024Compendium_table_OA_ver1_1_3.pdf"
              className={linkStyle}>
              https://www.nibn.go.jp/activities/documents/2024...
            </a>
          </div>
        </li>
        <li className={liStyle}>
          <p className={liTitleStyle}>
            『身体活動のメッツ(METWC)表』車いす利用者版
          </p>
          <div className={liContentStyle}>
            <p>国立研究開発法人医薬基盤・健康・栄養研究所</p>
            [参照2026-05-02]
            <a
              href="https://www.nibn.go.jp/activities/documents/2024Compendium_table_WC_ver1_1_3.pdf"
              className={linkStyle}>
              https://www.nibn.go.jp/activities/documents/2024...
            </a>
          </div>
        </li>
        <li className={liStyle}>
          <p className={liTitleStyle}>
            健康づくりのための身体活動・運動ガイド 2023
          </p>
          <div className={liContentStyle}>
            <p>厚生労働省</p>
            [参照2026-05-02]
            <a
              href="https://www.mhlw.go.jp/content/001194020.pdf"
              className={linkStyle}>
              https://www.mhlw.go.jp/content/001194020.pdf
            </a>
          </div>
        </li>
        <li className={liStyle}>
          <p className={liTitleStyle}>
            運動で消費するエネルギー量 腹囲の測定方法
          </p>
          <div className={liContentStyle}>
            <p>厚生労働省</p>
            [参照2026-05-05]
            <a
              href="https://www.mhlw.go.jp/shingi/2006/07/dl/s0725-9f-21.pdf"
              className={linkStyle}>
              https://www.mhlw.go.jp/shingi/2006/07/dl/s0725...
            </a>
          </div>
        </li>
      </ul>
    </>
  )
} 