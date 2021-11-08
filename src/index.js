import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import About from './components/about/About';
import ServiceBlock from './components/services/ServiceBlock';
import Photos from './components/photos/Photos';
import ReviewBlock from './components/reviews/ReviewBlock'
import RegistrationForm from './components/registrationForm/RegistrationForm'
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <About />
      <ServiceBlock />
      <Photos />
      <ReviewBlock />
      <RegistrationForm />
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);