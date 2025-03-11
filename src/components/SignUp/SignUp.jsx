import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container, Row, Col, Modal } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import './SignUp.css';

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const experienceRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  

  // Default password for all users
  const defaultPassword = "Asd654";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   setError('Passwords do not match');
    //   return;
    // }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, defaultPassword);
      setShowThankYou(true); // Show the thank you modal on success
      // navigate('/thank-you'); // Comment out or remove if you don't want automatic navigation
    } catch (error) {
      setError(`Failed to create an account: ${error.message}`);
    } finally {
      setLoading(false);
    }
};
  return (
    <Container id="signupSection" className="signup-container my-4">
      <Card>
        <Card.Body>
          <h2 className="signup-title">سجل الآن</h2>
          <p className="signup-subtitle">
            وكن من أوائل الناس اللي توصلهم تقارير السوق وأفضل الفرص العقارية
          </p>
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group" id="name">
              <Form.Control 
                type="text" 
                ref={nameRef} 
                placeholder="الاسم الكامل" 
                required 
              />
            </Form.Group>
            
            <Form.Group className="form-group" id="email">
              <Form.Control 
                type="email" 
                ref={emailRef} 
                placeholder="البريد الإلكتروني" 
                required 
              />
            </Form.Group>
{/* 
            <Form.Group className="form-group" id="password">
                  <Form.Control type="password" ref={passwordRef} placeholder="كلمة المرور" required />
                </Form.Group>
                <Form.Group className="form-group" id="password-confirm">
                  <Form.Control type="password" ref={passwordConfirmRef} placeholder="تأكيد كلمة المرور" required />
            </Form.Group> */}

            
            <Form.Group className="form-group" id="experience">
              <Form.Select 
                ref={experienceRef}
                placeholder="هل لديك خبرة في العقار"
              >
                <option value="">هل لديك خبرة في الاستثمار العقاري؟</option>
                <option value="yes">نعم، لدي خبرة</option>
                <option value="no">لا، أنا جديد</option>
              </Form.Select>
            </Form.Group>
            
            {/* Hidden password fields with default value */}
            <input 
              type="hidden" 
              name="password" 
              value={defaultPassword} 
            />
            <input 
              type="hidden" 
              name="password-confirm" 
              value={defaultPassword} 
            />
            
            <button disabled={loading} className="w-100 main-button" type="submit">
                  تسجيل
                </button>
          </Form>
        </Card.Body>
      </Card>
      
      <Modal 
        show={showThankYou} 
        onHide={() => setShowThankYou(false)} 
        centered
        dir="rtl"
      >
        <Modal.Header>
          <Modal.Title className="modal-title">شكراً لتسجيلك</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          تم تسجيلك بنجاح! سنتواصل معك قريبًا بخصوص إطلاق المنصة وأحدث تقارير السوق العقاري
          <br />
          <b>ملاحظة: قد تصلك الرسائل في البريد المهمل، يرجى التحقق منه.</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowThankYou(false);
            window.location.reload();
          }}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SignUp;