import Card from "react-bootstrap/Card"

const ArticleCard = ({ img, title, description, link }) => {
  return (
    <Card
      style={{ width: "20rem" }}
      bg="dark"
      text="light"
      className=" d-flex align-items-end"
    >
      <Card.Img variant="top" src={img} style={{ objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-justify">{description}</Card.Text>
        <a href={link} target="_blank" className="btn btn-outline-primary">
          Devamını Oku
        </a>
      </Card.Body>
    </Card>
  )
}

export default ArticleCard
