import DashboardIcon from '../../assets/icons/DashboardIcon';
import SideLogo from '../../assets/icons/SideLogo';
import MytasksIcon from '../../assets/icons/MytasksIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import WorkspaceAcademicIcon from '../../assets/icons/WorkspaceAcademicIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

export default function SideBar() {
    const navigate=useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    return(
        <aside className="sidebar">
           <div className="sidelogo">
             <SideLogo />
           </div>
           <div className="line"></div>
           <label htmlFor="menu">Menu</label>
            <nav>
                <ul className="menu-list">
                    <li className='this-page' onClick={() => navigate('/dashboard')}><DashboardIcon color="yellow"/>Dashboard</li>
                    <li onClick={() => navigate('/my-tasks')}><MytasksIcon color="grey"/>My tasks</li>
                </ul>
            </nav>
            <div className="workspaces-header">
           <label htmlFor="workspaces">Workspaces</label>
           <div className="options">
            <SearchIcon onClick={() => setShowSearch(!showSearch)} />
            <PlusIcon />
           </div>
           </div>
           <ul className="workspaces-list">
           {showSearch && (<div className='search'> <input type="text" name='search' placeholder='Search workspace..' />
            <SearchIcon/></div>)}

               <li><WorkspaceAcademicIcon />Workspace 1</li>
               <li><WorkspaceAcademicIcon />Workspace 2</li>
               <li><WorkspaceAcademicIcon />Workspace 3</li>
           </ul>
            
        </aside>
    );
}