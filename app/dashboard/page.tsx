type Article = {
  id: number;
  title: string;
};

async function getArticle(): Promise<Article[]> {
  const res = await fetch('https://qiita.com/api/v2/items?page=1&per_page=24');

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
          height: '80vh',
          overflow: 'auto',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {articles?.map((article) => (
          <div
            key={article.id}
            style={{
              display: 'flex',
            }}
          >
            <p>{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
