import Card from '@/components/Card';
import ArticleCard from '@/components/ArticleCard';
import './style.scss';
import { Article } from '@/apis/articleApi';

const articles: Article[] = [
  { title: 'sadi', content: 'Adasoijdqowij' },
  { title: 'sadi', content: 'Adasoijdqowij' },
  { title: 'sadi', content: 'Adasoijdqowij' },
  { title: 'sadi', content: 'Adasoijdqowij' },
  { title: 'sadi', content: 'Adasoijdqowij' },
  { title: 'sadi', content: 'Adasoijdqowij' }
];

// 文章卡片列表
function articleList() {
  const items = articles.map((article, index) => (
    <li key={index} style={{ marginTop: '10px' }}>
      <ArticleCard title={article.title} content={article.content} cover="" />
    </li>
  ));
  return <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{items}</ul>;
}

function Articles() {
  return (
    <div className="container">
      <div className="wrapper-main">
        <div className="left-side">
          <Card />
        </div>
        <div className="articles-wrapper">
          {/* <ArticleCard title="adoj" content="saodijqwoijfoiwqnfiqwofqj" cover="" /> */}
          {articleList()}
        </div>
      </div>
    </div>
  );
}

export default Articles;
