import CreateWorkspaceIcon from '../../assets/icons/CreateWorkspaceIcon';
import StickyNote from '../../assets/icons/StickyNote';
import './TopDashboard.css';
export default function TopDashboard() {
    return (
        <header className="top-dashboard">
            <StickyNote />
            <div className="welcome-message">
                <h1>Manage tasks with your team!</h1>
                <p>Build your workspace, add your team, and stay on top of every task.</p>
            </div>
            <button className='create-btn'><CreateWorkspaceIcon/> Create Workspace</button>
        </header>
    );
}