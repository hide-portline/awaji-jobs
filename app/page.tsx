export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen p-10">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-4xl font-bold text-gray-900">
          淡路島の求人サイト
        </h1>
        <p className="mt-2 text-gray-600">
          働く人・環境・想いが見える求人メディア
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">企業一覧</h2>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">株式会社サンプル</h3>
              <p className="mt-2 text-gray-600">
                代表の想い：地域に根ざした事業を展開
              </p>
              <p className="mt-2 text-sm text-gray-500">
                職種：営業・事務
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">株式会社テスト</h3>
              <p className="mt-2 text-gray-600">
                代表の想い：人を大切にする会社
              </p>
              <p className="mt-2 text-sm text-gray-500">
                職種：製造・販売
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}