import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface TitleUpdaterProps {
  setTitleHeader: (title: string) => void;
}

const TitleUpdater: React.FC<TitleUpdaterProps> = ({ setTitleHeader }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setTitleHeader("DashBoard");
    } 
  }, [location, setTitleHeader]);

  return null; 
};

export default TitleUpdater;