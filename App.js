import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import image3 from "./asset/images/image3.webp";
import image1 from "./asset/images/image1.jpg";
import image2 from "./asset/images/image2.jpg";
// import bg2 from "./asset/images/bg2.jpeg";
import menu1 from "./asset/images/menu1.jpg";
import menu2 from "./asset/images/menu2.jpg";
import menu3 from "./asset/images/menu3.webp";
import menu4 from "./asset/images/menu4.webp";
import menu5 from "./asset/images/menu5.jpg";
import menu6 from "./asset/images/menu6.jpg";
import menu7 from "./asset/images/menu7.jpg";
import menu8 from "./asset/images/menu8.jpg";
import InputGroup from "react-bootstrap/InputGroup";
import { CardBody } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App " style={{ backgroundColor: "black" }}>
        <Container
          fluid
          style={{ borderBottom: "2px solid rgb(252, 245, 237)" }}
        >
          <Row>
            <Col md={12}>
              <Navbar
                expand="lg"
                style={{
                  height: "75px",
                  backgroundColor: "black",
                  borderBottom: "2px solid rgb(252, 245, 237)",
                }}
              >
                <Container
                  fluid
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  <Navbar.Brand
                    className="fw-bold"
                    href="#"
                    style={{
                      fontFamily: "cursive",
                      fontSize: "30px",
                      marginLeft: "40px",
                      color: "rgb(249, 190, 91)",
                    }}
                  >
                    Malabar Restaurant
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0 "
                      style={{ maxHeight: "100px", marginLeft: "30px" }}
                      navbarScroll
                    >
                      <Nav.Link
                        href="#home"
                        style={{ marginRight: "30px", color: "#fff" }}
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        href="#order"
                        style={{ marginRight: "30px", color: "#fff" }}
                      >
                        Orders
                      </Nav.Link>
                      <Nav.Link
                        href="#Deals"
                        style={{ marginRight: "30px", color: "#fff" }}
                      >
                        Deals
                      </Nav.Link>
                      <Nav.Link
                        href="#contact"
                        style={{ marginRight: "30px", color: "#fff" }}
                      >
                        Contact
                      </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 bg-light"
                        aria-label="Search"
                      />
                      <Button variant="light">search</Button>{" "}
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

              <Carousel
                style={{ width: "100%", fontFamily: "cursive" }}
                id="home"
              >
                <Carousel.Item>
                  <Row>
                    <Col>
                      <img
                        src={image3}
                        className="w-100"
                        style={{ height: "672px", objectFit: "scale-down" }}
                      />
                    </Col>
                  </Row>
                  <Carousel.Caption>
                    <h3>Chinese Foods</h3>
                    <p>Malabar Tasty Foods.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col>
                      <img
                        className="w-100"
                        style={{ height: "672px", objectFit: "scale-down" }}
                        src={image1}
                      />
                    </Col>
                  </Row>
                  <Carousel.Caption>
                    <h3>Non Veg Items</h3>
                    <p>Malabar Tasty Foods.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col>
                      <img
                        className="w-100 "
                        style={{ height: "672px", objectFit: "scale-down" }}
                        src={image2}
                      />
                    </Col>
                  </Row>
                  <Carousel.Caption>
                    <h3>Veg Options</h3>
                    <p>Malabar Tasty Foods.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>

        <div className="bg w-100 h-100" id="order">
          <h1
            className="text-center mt-3"
            style={{ fontFamily: "cursive", color: "rgb(251, 240, 178)" }}
          >
            Order Your Foods Now
          </h1>
          <Container
            fluid
            style={{
              fontFamily: "cursive",
              borderBottom: "2px solid rgb(252, 245, 237)",
            }}
          >
            <Row className="mt-4">
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    className="rounded-bottom"
                    style={{
                      height: "191px",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src={menu1}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Chicken Biryani</Card.Title>
                    <Card.Text>Tasty Malabar Chicken Biryani..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    className="rounded-bottom"
                    style={{ height: "191px", objectFit: "cover" }}
                    variant="top"
                    src={menu2}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Beef Fry</Card.Title>
                    <Card.Text>Tasty Malabar Beef Fry..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    className="rounded-bottom"
                    style={{ height: "191px", objectFit: "cover" }}
                    variant="top"
                    src={menu3}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Dosa</Card.Title>
                    <Card.Text>Tasty Malabar Dosa..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    className="rounded-bottom"
                    style={{ height: "191px", objectFit: "cover" }}
                    variant="top"
                    src={menu4}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Chicken Mandi</Card.Title>
                    <Card.Text>Tasty Malabar Chicken Mandi..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container
            fluid
            style={{
              fontFamily: "cursive",
              borderBottom: "2px solid rgb(252, 245, 237)",
            }}
          >
            <Row className="mt-4 mb-4">
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    style={{ height: "191px", objectFit: "cover" }}
                    className="rounded-bottom"
                    variant="top"
                    src={menu5}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Sadya</Card.Title>
                    <Card.Text>Tasty Malabar Sadya..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    style={{ height: "191px", objectFit: "cover" }}
                    className="rounded-bottom"
                    variant="top"
                    src={menu6}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Salad</Card.Title>
                    <Card.Text>Tasty Salad..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    style={{ height: "191px", objectFit: "cover" }}
                    className="rounded-bottom"
                    variant="top"
                    src={menu7}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Chinese Noodles</Card.Title>
                    <Card.Text>Tasty Chinese Noodles..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="mb-4"
                sm={6}
                md={3}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(251, 240, 178)",
                  }}
                >
                  <Card.Img
                    style={{ height: "191px", objectFit: "cover" }}
                    className="rounded-bottom"
                    variant="top"
                    src={menu8}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Chinese Sushi</Card.Title>
                    <Card.Text>Tasty Sushi..</Card.Text>
                    <h5>Rs:199</h5>
                    <Button variant="warning">Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container
            fluid
            style={{ borderBottom: "2px solid rgb(252, 245, 237)" }}
          >
            <Container
              style={{
                marginBottom: "60px",
                marginTop: "20px",
              }}
            >
              <div>
                <Card.Title
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgb(251, 240, 178)",
                    display: "flex",
                    marginBottom: "25px",
                    fontFamily: "monospace",
                  }}
                  id="contact"
                >
                  CONTACT US
                </Card.Title>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <Form
                    style={{
                      display: "flex",
                      width: "80%",
                      backgroundColor: "rgb(44 51 51 / 54%)",
                    }}
                  >
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                      <div class="mapouter">
                        <div class="gmap_canvas">
                          <iframe
                            style={{
                              width: "500px",
                              height: "500px",
                            }}
                            class="gmap_iframe"
                            src="https://www.google.com/maps?q=University%20of%20Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;&output=embed"
                            frameborder="0"
                            scrolling="no"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>{" "}
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <h2
                        className="mb-4"
                        style={{ color: "#F1C376" }}
                        id="contact"
                      >
                        GET IN TOUCH
                      </h2>
                      <InputGroup className="mb-4" style={{ width: "85%" }}>
                        <Form.Control
                          style={{ height: "50px" }}
                          placeholder="name"
                          aria-label="name"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4" style={{ width: "85%" }}>
                        <Form.Control
                          style={{ height: "50px" }}
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4 " style={{ width: "85%" }}>
                        <Form.Control
                          style={{
                            height: "50px",
                          }}
                          placeholder="Number"
                          aria-label="Number"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <Button
                        style={{
                          backgroundColor: "rgb(249 190 91)",
                          border: "1px solid rgb(249 190 91)",
                          width: "160px",
                          height: "45px",
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        Contact Now
                      </Button>
                    </Col>
                  </Form>
                </Row>
              </div>
            </Container>
          </Container>

          <Container
            fluid
            style={{
              borderRadius: "6px",
              backgroundColor: "#212529",
              color: "#fff",
            }}
          >
            <Row
              style={{
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "monospace",
                backgroundColor: "rgb(249 190 91)",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "40px",
                  color: "black",
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "400",
                  fontFamily: "-moz-initial",
                }}
                id="Deals"
              >
                DEALS
              </Card.Title>
              <Col
                className="text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "25px",
                  marginBottom: "40px",
                }}
              >
                <Card
                  style={{
                    width: "80%",
                    backgroundColor: "#2C3333",
                  }}
                >
                  <CardBody
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <h5
                      style={{ color: "#FBF0B2", fontFamily: "-moz-initial" }}
                    >
                      Kerala
                    </h5>
                    <h5 style={{ color: "#FBF0B2", fontFamily: "inherit" }}>
                      kozhikode
                    </h5>
                    <h5 style={{ color: "#FBF0B2", fontFamily: "inherit" }}>
                      7012127378
                    </h5>
                    <h5 style={{ color: "#FBF0B2", fontFamily: "inherit" }}>
                      Malabar@gmail.com
                    </h5>
                    <h5 style={{ color: "#FBF0B2", fontFamily: "inherit" }}>
                      www.Malabar.com
                    </h5>
                  </CardBody>
                </Card>
              </Col>
              <h5
                style={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "cursive",
                  textAlign: "center",
                }}
              >
                © Copyright. Designed And Developed By Udaif Roshan{" "}
              </h5>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
