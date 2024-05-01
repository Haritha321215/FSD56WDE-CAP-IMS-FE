import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
      <div>
          <h1>Dashboard</h1>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
              <div style={{ borderRight: '1px solid black', paddingRight: '20px'}}>
                  <nav>
                      <ul>
                            <li>
                              <Link to="/dashboard/products">Products</Link>
                          </li>
                            <li>
                              <Link to="/dashboard/profile">Profile</Link>
                            </li>
                            
                            
                      </ul>
                  </nav>
              </div>

              <div style={{marginLeft: "50px"}}>
                  <Outlet />
              </div>
          </div>
    </div>
  )
}

export default Dashboard;