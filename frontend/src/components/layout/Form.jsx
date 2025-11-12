import Logo from '../../assets/icons/Logo.jsx';
import BigButton from '../common/BigButton.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css'

export default function Form({ type }) {
  const [SignUpformData, setSignUpFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [LoginformData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const navigate = useNavigate();

  // ---------- Handlers ----------
  const SignUphandleChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear field error
    setBackendError(''); // clear backend error on input
  };

  const LoginhandleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setBackendError('');
  };

  // ---------- Validation ----------
  const validateSignUp = () => {
    const newErrors = {};
    if (!SignUpformData.name) newErrors.name = true;
    if (!SignUpformData.email) newErrors.email = true;
    if (!SignUpformData.password) newErrors.password = true;
    else if (SignUpformData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!SignUpformData.confirmPassword) newErrors.confirmPassword = true;
    else if (SignUpformData.confirmPassword !== SignUpformData.password) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!LoginformData.email) newErrors.email = true;
    if (!LoginformData.password) newErrors.password = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- Submit ----------
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateSignUp()) return;

    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', SignUpformData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (error) {
      setBackendError(error.response?.data?.error || 'Signup failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', LoginformData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (error) {
      setBackendError(error.response?.data?.error || 'Login failed');
    }
  };

  // ---------- Render ----------
  return (
    <form className="form-container">
      <div className="form-header">
        <Logo />
        {type === 'login' ? (
          <>
            <h2>Welcome Back!</h2>
            <span>Glad to see you again! <br />Login to your account below</span>
          </>
        ) : (
          <>
            <h2>Create an Account</h2>
            <span>Join us today! <br />Sign up to create your account</span>
          </>
        )}
      </div>

      {type === 'login' ? (
        <>
          {/* Login Form */}
          <div className='input-container'>
            <label className={errors.email ? 'error-label' : 'label'}>
              Email {errors.email && <p className="required-star">*</p>}
            </label>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={LoginformData.email}
              onChange={LoginhandleChange}
            />
          </div>

          <div className='input-container'>
            <label className={errors.password ? 'error-label' : 'label'}>
              Password {errors.password && <p className="required-star">*</p>}
            </label>
            <input
              type="password"
              name="password"
              placeholder='Enter your password'
              value={LoginformData.password}
              onChange={LoginhandleChange}
            />
          </div>
          <div>
             {backendError && <div className="backend-error">{backendError}</div>} 
          <span>Don't have an account? <a href="/signup">Sign up free</a></span>
          </div>
          <BigButton onClick={handleLogin}>Login</BigButton>
        </>
      ) : (
        <>
          {/* Signup Form */}
          <div className='input-container'>
            <label className={errors.name ? 'error-label' : 'label'}>
              Name {errors.name && <p className="required-star">*</p>}
            </label>
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              value={SignUpformData.name}
              onChange={SignUphandleChange}
            />
          </div>

          <div className='input-container'>
            <label className={errors.email ? 'error-label' : 'label'}>
              Email {errors.email && <p className="required-star">*</p>}
            </label>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={SignUpformData.email}
              onChange={SignUphandleChange}
            />
          </div>

          <div className='input-container'>
            <label className={errors.password && typeof errors.password === 'boolean' ? 'error-label' : 'label'}>
              Password {errors.password && typeof errors.password === 'boolean' && <p className="required-star">*</p>}
            </label>
            <input
              type="password"
              name="password"
              placeholder='Enter your password'
              value={SignUpformData.password}
              onChange={SignUphandleChange}
            />
            {errors.password && typeof errors.password === 'string' && (
              <small className="error-text">{errors.password}</small>
            )}
          </div>

          <div className='input-container'>
            <label className={errors.confirmPassword && typeof errors.confirmPassword === 'boolean' ? 'error-label' : 'label'}>
              Confirm Password {errors.confirmPassword && typeof errors.confirmPassword === 'boolean' && <p className="required-star">*</p>}
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder='Confirm your password'
              value={SignUpformData.confirmPassword}
              onChange={SignUphandleChange}
            />
            {errors.confirmPassword && typeof errors.confirmPassword === 'string' && (
              <small className="error-text">{errors.confirmPassword}</small>
            )}
          </div>
          <div> {backendError && <div className="backend-error">{backendError}</div>}
          <span>Already have an account? <a href="/login">Login</a></span></div>
          <BigButton onClick={handleSignUp}>Sign Up</BigButton>
        </>
      )}

     
    </form>
  );
}
