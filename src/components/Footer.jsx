import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">NgodingKuy.</h3>
            <p className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate id ullam
              asperiores? Necessitatibus tempora rerum, nobis harum magni illo, distinctio.
            </p>
            <div className="no mb-1 mt-4">
              <Link to="/" className="text-decoration-none">
                <i className="fa-brands fa-whatsapp" />
                <p className="m-0">+6283-838-935-091</p>
              </Link>
            </div>
            <div className="mail">
              <Link to="/" className="text-decoration-none">
                <i className="fa-regular fa-envelope" />
                <p className="m-0">NgodingKuy@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5 ">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="/kelas">Kelas</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className='mt-lg-0 mt-5'>
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe...." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook" alt="" />
              <i className="fa-brands fa-twitter" alt="" />
              <i className="fa-brands fa-linkedin" alt="" />
              <i className="fa-brands fa-youtube" alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} by<span className='fw-bold'> NgodingKuy</span>,All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

