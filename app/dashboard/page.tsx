type Article = {
  id: number;
  title: string;
};

async function getArticle(): Promise<Article[]> {
  const res = await fetch('hoge');

  return res.json();
}

export default async function DashBoardPage() {
  const articles = await getArticle();

  return (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          height: '50vh',
        }}
      >
        {articles?.map((article) => (
          <div
            key={article.id}
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <p>{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
