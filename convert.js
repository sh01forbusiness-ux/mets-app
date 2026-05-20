import xlsx from 'xlsx';
import fs from 'fs';

// 読み込むエクセルファイルと、アプリで表示する「大分類」の名前を定義
const targetFiles = [
  { fileName: './メッツ表成人版.xlsx', categoryLarge: '成人' },
  { fileName: './メッツ表高齢者版.xlsx', categoryLarge: '高齢者' },
  { fileName: './メッツ表車椅子利用者版.xlsx', categoryLarge: '車椅子利用者' }
];

let finalJsonData = [];

console.log('変換を開始します...');

targetFiles.forEach(target => {
  try {
    const workbook = xlsx.readFile(target.fileName);
    const sheet = workbook.Sheets['身体活動＋運動'];
    const rawData = xlsx.utils.sheet_to_json(sheet, {header : 1});

    rawData.slice(1).forEach(row => {
      const categoryMedium = row[0] ? String(row[0]) : '';
      const metsValue = row[2] ? Number(row[2]) : 0;
      const categorySmall = row[3] ? String(row[3]).replace(/[\r\n]+/g, '') : '';

      finalJsonData.push({
        category_large: target.categoryLarge,
        category_medium: categoryMedium　,
        category_small: categorySmall,
        mets: metsValue,
      });
    }
    );
  } catch (error) {
    console.error(`${target.fileName}の読み込みに失敗しました`, error);
  }
});

const outputPath = './public/metsData.json';
fs.writeFileSync(outputPath, JSON.stringify(finalJsonData, null, 2));
console.log(`変換完了！${finalJsonData.length}件のデータを書き出しました`); 