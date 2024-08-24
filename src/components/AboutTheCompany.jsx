// src/AboutBlogger.js
import { Container, Card, Button } from 'react-bootstrap';

const company = {
  name: "MyCompany",
  bio: "At MyCompany, we believe in the power of quality products and exceptional customer service. Our journey began with a simple idea: to provide our customers with the best shopping experience possible. Today, we are proud to be a leading online retailer, offering a wide range of products to meet all your needs Our mission is to make online shopping easy, enjoyable, and accessible for everyone. We are committed to offering high-quality products at competitive prices, backed by excellent customer service. Whether you’re looking for the latest fashion trends, cutting-edge electronics, or everyday essentials, we’ve got you covered. ",
  socialMedia: [
    { platform: "Twitter", url: "" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/saroj-kumar-mohanty-431a07254" },
    { platform: "Instagram", url: "https://www.instagram.com/sarojkumarmohantyjaga" }
  ]
};

function AboutTheCompany() {
  return (
    <Container className="mt-3 d-flex justify-content-center align-items-center">
          <Card>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <h3>Welcome to {company.name}</h3>
            <Card.Title>{}</Card.Title>
              <Card.Text>{company.bio}</Card.Text>
              <div className="d-flex">
                {company.socialMedia.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    href={social.url}
                    target="_blank"
                    className="me-2"
                  >
                    {social.platform}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
    </Container>
  );
}

export default AboutTheCompany;
