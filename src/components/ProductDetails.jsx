import { Card, Button, Carousel, Container, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    description: "This is a great product.",
    reviews: "★★★★☆",
    images: [
      "https://picsum.photos/seed/{seed}picsum/200/300",
      "https://picsum.photos/seed/{tom}picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
    ],
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 3,
    name: "Product 3",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 4,
    name: "Product 4",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 5,
    name: "Product 5",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 6,
    name: "Product 6",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 7,
    name: "Product 7",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 8,
    name: "Product 8",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 9,
    name: "Product 9",
    price: "$19.99",
    description: "This is a great product.",
    reviews: "★★★★☆",
    images: [
      "https://picsum.photos/seed/{seed}picsum/200/300",
      "https://picsum.photos/seed/{tom}picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
    ],
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id == parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" >
          <Container fluid style={{marginLeft:"70px", marginRight:"70px"}}>
            <Navbar.Brand href="#home" onClick={()=>navigate(`/`)}>{"Home"}</Navbar.Brand>
          </Container>
        </Navbar>
    <Container style={{width:"40rem", marginTop:"2rem"}}>
      <Card >
        <Carousel>
          {product.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index}`}
                style={{ width: "400px", height: "300px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body style={{ cursor: "pointer" }}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                      <strong>Price: </strong>
                      {product.price}
                    </Card.Text>
                    <Card.Text>
                      <strong>Reviews: </strong>
                      {product.reviews}
                    </Card.Text>
                    <Card.Text>
                        All Costumers Reviews<br/>
                        Coming soon.............
                    </Card.Text>
                    <Button variant="warning" >Add To Cart</Button>
                  </Card.Body>
      </Card>
    </Container>
    </>
  );
}
