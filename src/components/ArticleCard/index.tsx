import './style.scss';

interface ArticleCardProps {
  title: string;
  cover: string;
  content: string;
}

function ArticleCard({ cover, title, content }: ArticleCardProps) {
  return (
    <div className="article-card">
      <div className="cover">{cover}</div>
      <div className="description">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
