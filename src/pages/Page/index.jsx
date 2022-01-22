import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeedBack from '../../components/FeedBack'

import './styles.css';

const Page = () => {
    
  return (
    <div>
      <Header/>
        <FeedBack/>
      <Footer/>
    </div >
  );
};

export default Page;