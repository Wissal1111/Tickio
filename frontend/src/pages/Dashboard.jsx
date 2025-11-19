import SideBar from "../components/layout/SideBar.jsx";
import TopBar from "../components/layout/TopBar.jsx";
import TopDashboard from "../components/layout/TopDashboard.jsx";
import './Dashboard.css';
export default function Dashboard() {
    return (
      <>
      <div className="content-wrapper">
         <SideBar />
         <TopBar />
         <div className="content">
          <TopDashboard />
          </div>      </div>
       </>
    );
}
