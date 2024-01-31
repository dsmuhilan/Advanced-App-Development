import React, { useState } from 'react';
import '..//assets/css/Sidebar.css'



const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      
    
      <li><a href="/" >Home</a></li>
      <li><a href="/editcourse" >Edit courses</a></li>
      <li><a href="/staffregister" >Register</a></li>
    
       
    </aside>
  );
};

export default Sidebar;