import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="mt-4 bg-grey text-light"
      aria-expanded="lg"
      style={{ backgroundColor: "gray" }}
    >
      <Container>
        <Row>
          <Col>
            <p className="text-center">
              &copy; 2024 MyCompany. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
