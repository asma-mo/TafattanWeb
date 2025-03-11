import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Verify Your Email</h2>
        <p>
          A verification email has been sent to your email address. Please check your inbox and click the verification link to verify your email before logging in.
        </p>
        <Button onClick={() => navigate('/login')} className="w-100 mt-3">
          Go to Login
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VerifyEmail;
