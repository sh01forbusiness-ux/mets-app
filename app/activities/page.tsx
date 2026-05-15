'use client'

import { useState } from 'react';


export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'' | 'adult' | 'senior' | 'wheelchair user'>('');

  return (
    <main
      className="text-center">
      <label>
        利用者分類を選択してください 
      </label>
      <select
        name="users"
        id=""
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value as '' | 'adult' | 'senior' | 'wheelchair user')}
        className="mx-4 mb-4 px-4 py-1 border rounded  w-45">
        <option value="">--- 利用者分類 ---</option>
        <option value="adult">成人</option>
        <option value="senior">高齢者</option>
        <option value="wheelchair user">車椅子利用者</option>
      </select>

      {/* 未選択 */}
      {selectedCategory === "" &&
        <div className="w-full h-100"></div>
      }
      {/* 成人 */}
      {selectedCategory === "adult" &&
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWETANOAQcAtILYWyD383cIpg0t8G_zB799xvNCjTUH-cojLN6MsZJ_b4IUZkgNw/pubhtml?gid=2020184611&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false"
          className="w-full h-100"></iframe>
      }

      {/* 高齢者 */}
      {selectedCategory === "senior" &&
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBrbUqk4VgHG3VthqdR5yEQPquRPFjzgau8BdaBuuHWiOQKq8wk7gUF0Jsas1PNA/pubhtml?gid=1789910876&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false"
          className="w-full h-90"></iframe>
      }

      {/* 車椅子利用者 */}
      {selectedCategory === "wheelchair user" &&
        <div className='flex justify-center'>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXWtugwpZXVmBuj4lcKTmquhQz-RoCpdlgWqcBr8j-gjIP3LfrywaQo0cNmSZD8w/pubhtml?gid=1181218890&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false "
            className="w-full h-90"></iframe>
        </div>
      }
    </main>
  );
}