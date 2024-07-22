import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ProjectDetail } from "./components";

const AppContent = () => {
  const location = useLocation();
  const isProjectDetailPage = location.pathname.startsWith("/projects");

  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      {!isProjectDetailPage && (
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
      )}
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Works />
            <Experience />
            <Tech />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      {isProjectDetailPage && (
        <StarsCanvas />
      )}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
