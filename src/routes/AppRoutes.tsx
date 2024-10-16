import React, { startTransition, Suspense, useState } from "react";
import BackgroundWrapper from "./BackgroundWrapper";
import { Route, Routes } from "react-router-dom";
import TaskListPage from "../pages/tasklist/TaskListPage";
import LeaderboardPage from "../pages/leaderboard/LeaderboardPage";
// import AddressPopup from "../components/LinkwithRewards/modules/AddressPopup";
import LinkWalletPage from "../pages/LinkwithAddress/LinkAddressPage";
import SignUp from "../components/SignUp/modules/SignUp";
import DashBoardPage from "../pages/DashBoard/DashBoardPage";
import TitleUpdater from "../components/DashBoard/modules/Router";
import SocialMining from "../components/SocialMining/modules/SocialMining";
import InvitePage from "../pages/Referral/InvitePage";


const AppRoutes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [titleHeader, setTitleHeader] = useState<string>("");

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
           <TitleUpdater setTitleHeader={setTitleHeader} />
            
            <Routes>
            <Route path="/" element={<SignUp />} />
              <Route path="/dashboard" element ={<SocialMining DashBoardTitle={titleHeader}/>}>
              <Route index element={<DashBoardPage/>}></Route>
              <Route path="tasks" element={<TaskListPage />} />
              <Route path="leaderboard" element={<LeaderboardPage />} />
              <Route path="linkWallet" element={<LinkWalletPage />} /> 
              <Route path="invite" element={<InvitePage/>} />
              </Route>
            </Routes>
          </BackgroundWrapper>
        )}
      </Suspense>
    </>
  );
};

export default AppRoutes;
