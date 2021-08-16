import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

const credentials = {
  email: '',
  password: '',
}

const Login = () => {
    const { push } = useHistory();

    const [userLogin, setUserLogin] = useState(credentials)

    const handleChange = e => {
      setUserLogin({
        userLogin: {
          ...userLogin,
          [e.target.name]: e.target.value
        }
      });
    };
  
    const login = e => {
      e.preventDefault();
      
        axios.post('', userLogin)
          .then(res=>{
          localStorage.setItem("token", res.data.token);
            push('/dashboard');
          })
            .catch(err=>{
          console.log(err);
        });
    };

  return (
    <section>
    <Header/>
      <section className="user_form">
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input className="form-control" onChange={handleChange} value={userLogin.email} name="email" id="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className="form-control" onChange={handleChange} value={userLogin.password} name="password" id="password" type="password" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>
      </section>
      <Footer/>
    </section>
  );
}

export default Login