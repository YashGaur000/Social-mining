import React, { startTransition, Suspense, useState } from "react";
import BackgroundWrapper from "./BackgroundWrapper";
import { Route, Routes } from "react-router-dom";
import TaskListPage from "../pages/tasklist/TaskListPage";
import LeaderboardPage from "../pages/leaderboard/LeaderboardPage";

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
                <Route path="/Tasks" element={<TaskListPage/>} />
                <Route path="/Leaderboard" element={<LeaderboardPage/>} />
              </Routes>
            </BackgroundWrapper>
          )}
        </Suspense>
        </>
          );
        };

        export default AppRoutes;
    
