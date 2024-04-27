import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useState } from 'react';
import Home from './Utils/Home';
import Survey from './Utils/Survey';
import Landing from './Utils/Landing';
import SidebarElement from './Utils/SidebarElement';
import BpmnS from './Utils/BpmnStatic'
import Result from './Utils/Result';
import Diagram from "./Utils/diagrams/diagram"
export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Check if the current route is the landing page
  const isLandingPage = useParams().page === 'landing';

  return (
    <Router>
      <div className={"w-full overflow-hidden "}>
       <SidebarElement open={isSidebarOpen} />
        <div className='p-6 text-center'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/diagram' element={<Diagram />} />
            
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
    case 'result':
      return <Result />;  
    default:
      return <Landing />;
  }
}
