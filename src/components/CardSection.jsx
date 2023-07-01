import ArticleCard from "./ArticleCard"
import { articleCards } from "../data/cards.js"
const CardSection = () => {
  return (
    <div
      id="articles"
      className="card-section container d-flex justify-content-between rounded-3"
    >
      {articleCards.map((item) => (
        <ArticleCard
          img={item.img}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  )
}

export default CardSection
