import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './MainComponent.css';

const MainComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      title: "ودك بعقار؟",
      description: "نوفر لك أفضل العقارات أقربها وأرخصها",
      icon: <img src="https://i.ibb.co/C3TrnRcQ/1.png" width="150" height="150" alt="World map" />
    },
    {
      title: "سهلناها عليك",
      description: "نتنبأ لك كم بيكون سعر عقارك بالضبط خلال السنين الجاية..",
      icon: <img src="https://i.ibb.co/KjyV03hS/2.png" width="150" height="150" alt="AI prediction" />
    }
  ];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container className="main-container">
      <Row className="justify-content-center">
        <Col md={10} className="text-center">
          <h1 className="main-title">
            هلا ومسهلا
          </h1>
          <p className="description">
          تفطّن بعقارك
و انبسط باستثمارك
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} sm={10}>
          <Carousel 
            id="propertyCarousel" 
            interval={null} 
            controls={false} 
            indicators={false}
            className="custom-carousel"
            activeIndex={activeIndex}
            onSelect={handleSelect}
          >
            {slides.map((slide, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-slide">
                  <div className="card-image-container">
                    <div className="placeholder-image">
                      {slide.icon}
                    </div>
                  </div>
                  <h2 className="card-title">{slide.title}</h2>
                  <p className="card-description">{slide.description}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      
      {/* Custom dots */}
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <div className="custom-dots">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`custom-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <div className="button-container">
            <a href="#signupSection" className="main-button">سجل الآن</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;