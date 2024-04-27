import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useState } from 'react';
import Home from './Utils/Home';
import Survey from './Utils/Survey';
import Landing from './Utils/Landing';
import SidebarElement from './Utils/SidebarElement';
import BpmnS from './Utils/BpmnStatic'
import scriptPage from './Utils/Selscript'

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Check if the current route is the landing page
  const isLandingPage = useParams().page === 'landing';

  return (
    <Router>
      <div className={isLandingPage ? 'flex' : ''}>
        {!isLandingPage && <SidebarElement open={isSidebarOpen} />}
        <div className='ml-12 w-[calc(100vw-3rem)] p-6 text-center'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/:page" element={<Page />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Define a component for dynamic pages
function Page() {
  let { page } = useParams();

  // Return the appropriate component based on the page parameter
  switch (page) {
    case 'survey':
      return <Survey />;
    case 'home':
      return <Home />;
    case 'bpmn':
      return <BpmnS />;
    case 'script':
      return <scriptPage />;  
    default:
      return <Landing />;
  }
}
