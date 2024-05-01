import { useNavigate } from "react-router-dom";

function LoginWrapper() {
  const navigate = useNavigate();

  const styles = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '70px',
      border: '1px solid #ccc',
      padding: '45px',
  }
  return (
    <div style={styles}>
          <button
            onClick={() => navigate('/register')}
          >Register</button>
          <button
            onClick={() => navigate('/login')}
          >Login</button>  
    </div>
  )
}
export default LoginWrapper;
