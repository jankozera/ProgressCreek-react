import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { authService } from './api/authService';
import Footer from './components/AppLayout/Footer';
import NavbarLoggedIn from './components/AppLayout/NavbarLoggedIn';
import NavbarLoggedOut from './components/AppLayout/NavbarLoggedOut';
import useFetchCurrentUser from './hooks/auth/useFetchCurrentUser';
import CoursesPageArchive from './pages/CoursesArchivePage';
import CoursesSinglePage from './pages/CoursesSinglePage';
import LoginPage from './pages/LoginPage';

/* Theme variables */
import './theme/index.css';

const App: React.FC = () => {
  const {refetch} = useFetchCurrentUser();
  const [tokenState, setTokenState] = useState(authService.tokenValue);

  useEffect(() => {
    authService.setAccessTokenFromLocalStorage();
    authService.setRefreshTokenFromLocalStorage();
    authService.currentToken.subscribe(setTokenState);
    if (tokenState === '' || tokenState === null) {
      authService.logout();
    } else {
      refetch();
    }
  }, [tokenState, refetch]);

  const isLoggedIn = () => {
    return tokenState !== '' && tokenState != null;
  };
  
  return (
    <Router>
      <div className="relative bg-white w-full h-full min-h-screen">
        {isLoggedIn() ? <NavbarLoggedIn/> : <NavbarLoggedOut/>}
        <div className="w-full h-full pt-[88px] min-h-[calc(100vh-176px)]">
          <main className="w-full h-full max-w-container mx-auto py-8 px-4 min-h-[calc(100vh-176px)]">
            <Routes>
              <Route path="*" element={<Navigate to="/" />}/>
              <Route path="/" element={<CoursesPageArchive/>}/>
              <Route path="/course/:id" element={<CoursesSinglePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
    </Router>
  );
};

export default App;
