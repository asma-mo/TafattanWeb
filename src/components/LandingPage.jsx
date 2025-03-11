import React from 'react';
import SignUp from '../components/SignUp/SignUp';
import MainComponent from '../components/MainComponent/MainContent';
import HowItWorks from './HowItWorks/HowItWoeks';
import {Footer} from './Footer/Footer';
import Navbar from './Navbar/Navbar'
// import { AuthProvider } from './components/contexts/AuthContext';

export const LandingPage = ()=>{
    return(
        <>
            <Navbar />
            <MainComponent />
            <HowItWorks />
            <SignUp />
            <Footer />
        </>
    )
}