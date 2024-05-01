import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

const Login = () => {

    const navigate = useNavigate();

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        border: '1px solid #ccc',
        padding: '45px',
    }

    const itemStyle = {
        marginBottom: '10px',
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        // send the details to the API
        userServices.login(email, password)
            .then(response => {
                // clear the form
                e.target.reset();
                alert('Login successful');

                // if the login is successful, redirect to the dashboard page
                setTimeout(() => {
                    navigate('/dashboard');
                }, 500);
            })
            .catch(error => {
                // if there is an error, log the error to the console
                alert('Login failed');
            });
    }

  return (
    <div style={styles}>
        <form onSubmit={handleLogin}>
              <div style={itemStyle}>
                  <input 
                      type="email"
                      placeholder="Email..."
                  />
              </div>  
                <div style={itemStyle}>
                    <input 
                        type="password"
                        placeholder="Password..."
                  />
              </div>
              <button type="submit">Login</button>
              <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </form>      
    </div>
  )
}

export default Login;