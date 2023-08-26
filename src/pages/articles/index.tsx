import Card from '@/components/Card';
import ArticleCard from '@/components/ArticleCard';
import './style.less';

function Articles() {
  return (
    <div className="container">
      <div className="wrapper-main">
        <div className="left-side">
          <div className="info-card">
            <Card />
          </div>
        </div>
        <div className="articles-wrapper">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard /> <ArticleCard /> <ArticleCard /> <ArticleCard /> <ArticleCard /> <ArticleCard />
          <ArticleCard /> <ArticleCard />
        </div>
      </div>
    </div>
  );
}

export default Articles;
