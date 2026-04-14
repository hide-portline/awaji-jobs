export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-bold text-lg">淡路島求人</h1>
          <button className="text-sm text-blue-600 font-semibold">
            掲載を希望する
          </button>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="bg-black text-white py-24 text-center">
        <h2 className="text-4xl font-bold leading-tight">
          淡路島で働くという選択
        </h2>
        <p className="mt-4 text-gray-300">
          人・環境・想いから選ぶ、新しい求人のかたち
        </p>

        <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
          求人を見る
        </button>
      </section>

      {/* 特徴 */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg">人が見える</h3>
          <p className="text-gray-600 mt-2 text-sm">
            実際に働く人のリアルな声を掲載
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">環境がわかる</h3>
          <p className="text-gray-600 mt-2 text-sm">
            職場の雰囲気や働き方を可視化
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">想いに共感</h3>
          <p className="text-gray-600 mt-2 text-sm">
            経営者のビジョンから選べる
          </p>
        </div>
      </section>

      {/* 企業一覧 */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">注目の企業</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">株式会社サンプル</h3>
            <p className="text-sm text-gray-600 mt-2">
              地域密着で成長を続ける企業
            </p>
            <button className="mt-4 text-blue-600 text-sm font-semibold">
              詳しく見る →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">株式会社テスト</h3>
            <p className="text-sm text-gray-600 mt-2">
              人を大切にする文化が根付く
            </p>
            <button className="mt-4 text-blue-600 text-sm font-semibold">
              詳しく見る →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">株式会社未来</h3>
            <p className="text-sm text-gray-600 mt-2">
              新しい挑戦を続けるスタートアップ
            </p>
            <button className="mt-4 text-blue-600 text-sm font-semibold">
              詳しく見る →
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}