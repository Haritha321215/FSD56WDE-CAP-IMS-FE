import { Outlet } from "react-router-dom";
function Landing() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    textAlign: 'center'
}
  return (
    <div style={styles}>
      <h1>Inventory Management System</h1>
      <p>Welcome</p>
      <Outlet />
    </div>
  )
}
export default Landing;
