import Logo from '../../assets/icons/Logo.jsx';
import BigButton from '../common/BigButton.jsx';
import './Form.css'
export default function Form({type,onClick}) {
    return (
        <form className="form-container">
         <div className="form-header"> 
             <Logo/>
              {type === 'login' ? 
              <>
              <h2>Welcome Back!</h2>
              <span>Glad to see you again! <br />
              Login to your account below</span>
              </> :<>
              <h2>Create an Account</h2>
                <span>Join us today! <br />
                Sign up to create your account</span></> }
        </div>
            { type === 'login'?
            //login from 
            <> <div className='input-container'> <label htmlFor="Email">Email</label>
              <input type="email" id="Email" name="Email" placeholder='Enter your email'/></div>
              <div className='input-container'> <label htmlFor="Password">Password</label>
              <input type="password" id="Password" name="Password" placeholder='Enter your password' /></div>
                <span>Dont have an account? <a href="/signup">Sign up free</a></span></> :
            //signup form
                <>
                <div className='input-container'> 
                <label htmlFor="Email">Email</label>
              <input type="email" id="Email" name="Email" placeholder='Enter your email'/>
              </div>
              <div className='input-container'> 
                <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" placeholder='Enter your name' />
              </div>
              
              <div className='input-container'> <label htmlFor="Password">Password</label>
              <input type="password" id="Password" name="Password" placeholder='Enter your password' /></div>
              <div className='input-container'>
                   <label htmlFor="Confirm">Confirm password</label>
            <input type="password" id="Confirm" name="Confirm" placeholder='Confirm your password'/>
              <span>Already have an account? <a href="/login">Login</a></span>
            </div>
              </>}
                <BigButton onClick={onClick}>{type === 'login' ? 'Login' : 'Sign Up'}</BigButton>
        </form>
    );}