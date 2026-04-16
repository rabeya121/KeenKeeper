import React from 'react'
import Banner from './banner/Banner';
import FriendsSection from './FriendsSection/FriendsSection';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
      document.title = "Home | Keen Keeper";
    }, []);
  return (
    <div>
      <Banner />
       <FriendsSection />
      
    </div>
  )
}

export default Home;
