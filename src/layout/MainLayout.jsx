import React from 'react'
import { useState } from "react";
import Navbar from '../components/shared/navbar/Navbar'
import Footer from '../components/shared/footer/Footer'
import { Outlet } from 'react-router-dom'

export const TimelineContext = React.createContext();


const MainLayout = () => {

  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };
  return (
    <div>
      <TimelineContext.Provider value={{ timeline, addToTimeline }}>
        <Navbar />
        <Outlet />
        <Footer />
      </TimelineContext.Provider>

    </div>
  )
}

export default MainLayout;
