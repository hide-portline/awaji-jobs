export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>淡路島の求人サイト</h1>
      <p>働く人・環境・想いが見える求人メディア</p>

      <section style={{ marginTop: "40px" }}>
        <h2>企業一覧</h2>

        <div style={{ marginTop: "20px" }}>
          <h3>株式会社サンプル</h3>
          <p>代表の想い：地域に根ざした事業を展開</p>
          <p>職種：営業・事務</p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>株式会社テスト</h3>
          <p>代表の想い：人を大切にする会社</p>
          <p>職種：製造・販売</p>
        </div>
      </section>
    </main>
  );
}