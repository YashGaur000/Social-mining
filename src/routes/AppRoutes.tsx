import React, { startTransition, Suspense, useState } from "react";
import BackgroundWrapper from "./BackgroundWrapper";
import { Route, Routes } from "react-router-dom";
import TaskListPage from "../pages/tasklist/TaskListPage";
import LeaderboardPage from "../pages/leaderboard/LeaderboardPage";
import LinkWalletPage from "../pages/LinkwithAddress/LinkAddressPage";
import SignUp from "../components/SignUp/modules/SignUp";
import DashBoardPage from "../pages/DashBoard/DashBoardPage";
import SocialMining from "../components/SocialMining/modules/SocialMining";

const AppRoutes: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    React.useEffect(() => {
      startTransition(() => {
        setIsLoading(false);
      });
    }, []);
  
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          {!isLoading && (
            <BackgroundWrapper>
              <Routes>
                {/* <Route path="/Tasks" element={<TaskListPage/>} />
                <Route path="/Leaderboard" element={<LeaderboardPage/>} />
                <Route path="/Linkwallet" element={<LinkWalletPage/>} /> */}
                <Route path="/" element={<SignUp />} />
                  <Route path="Dashboard" element ={<SocialMining DashBoardTitle={"DashBoard"}/>}>
                  <Route index element={<DashBoardPage/>}></Route>
                  <Route path="Tasks" element={<TaskListPage />} />
                  <Route path="Leaderboard" element={<LeaderboardPage />} />
                  <Route path="LinkWallet" element={<LinkWalletPage />} /> 
                  </Route>
                  </Routes>
            </BackgroundWrapper>
          )}
        </Suspense>
        </>
          );
        };

        export default AppRoutes;
    
