import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface TitleUpdaterProps {
  setTitleHeader: (title: string) => void;
}

const TitleUpdater: React.FC<TitleUpdaterProps> = ({ setTitleHeader }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setTitleHeader("Dashboard");
    } 
    else if(location.pathname === "/dashboard/Tasks"){
      setTitleHeader("List of Social Mining Tasks");
    }
    else if(location.pathname === "/dashboard/LeaderBoard"){
      setTitleHeader("LearderBoard");
    }
  }, [location, setTitleHeader]);

  return null; 
};

export default TitleUpdater;