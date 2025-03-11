import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';  // Make sure to import the CSS file

export const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs={12}>
          <p className="copyright">© 2025 تفطّن، جميع الحقوق محفوظة.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;