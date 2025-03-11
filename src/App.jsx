// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute';
// import ForgotPassword from './components/ForgotPassword';
// import UpdateProfile from './components/UpdateProfile';
// import { AuthProvider } from './components/contexts/AuthContext';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/update-profile" element={<PrivateRoute component={UpdateProfile} />} />
//           <Route path="/" element={<PrivateRoute component={Dashboard} />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// export default App;


// 22

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import SignUp from './components/SignUp/SignUp';
// import {MainComponent} from './components/MainComponent/MainContent';
// import HowItWorks from './components/HowItWorks/HowItWoeks';
// import {Footer} from './components/Footer';
import {LandingPage} from './components/LandingPage'
import { AuthProvider } from './components/contexts/AuthContext';
import { ThankMessage } from './components/ThankMessage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="thank-you" element={<ThankMessage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;



// <BrowserRouter>
// <AuthProvider>


// <AuthProvider>
  // <MainComponent />
  // <HowItWorks />
  // <SignUp />
  // <Footer />
// </AuthProvider>

