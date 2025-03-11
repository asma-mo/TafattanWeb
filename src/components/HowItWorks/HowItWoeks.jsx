import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <Container className="how-it-works-container">
      <Row className="align-items-center">
        <h2 className="how-it-works-title">ليش تسجل معنا؟</h2>
        <Col md={6} className="text-center text-md-left">
          <Image src="https://i.ibb.co/qYFnVBSZ/3.png" alt="Coins" fluid className="main-image" />
        </Col>
        <Col md={6} className="text-center">
          <Container className="how-it-works-container my-4">
            <div className='box'>
              <div className="benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div>تقارير سوق العقار محدثة بشكل دوري</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div>توقعات أسعار مبنية على بيانات حقيقية</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div>أفضل الفرص العقارية بمختلف الأسعار</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div>إشعارات فورية بالعقارات الجديدة المناسبة لتفضيلاتك</div>
                </div>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorks;