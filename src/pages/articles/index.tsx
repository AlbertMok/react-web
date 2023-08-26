import Card from '@/components/Card';
import ArticleCard from '@/components/ArticleCard';
import './style.scss';

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
          <ArticleCard title="adoj" content="saodijqwoijfoiwqnfiqwofqj" cover="" />
        </div>
      </div>
    </div>
  );
}

export default Articles;
