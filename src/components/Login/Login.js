import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import { Button, Container, Form, FormControl,} from 'react-bootstrap';
import './Login.css';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    <div >
      
      

     {/*  <h1>Our own Authentication</h1> */}
      <Container className="d-flex justify-content-center loginForm">
        <div >
        
          <form onSubmit={handleSubmit}>
          <h1 style={{color:'greenyellow', textAlign:'center'}} >{newUser ? 'Create an Account' : 'User Login'}</h1>
          {
            newUser && <input onBlur={handleBlur} name="name" type="text" placeholder="Your Name"  required />
              }
              <br/> <br/>

             <input onBlur={handleBlur} name="email" type="email" placeholder="Your Email"   required /> <br/> <br/>

             <input onBlur={handleBlur} name="password" type="password" placeholder="Your Password"  required /> <br/> <br/>

        {
           newUser && <input onBlur={handleBlur}  type="password" name="confirm" placeholder="Confirm Password"  required /> 
               }
<br/> <br/>
           <button className="btn-warning btn-md" type="submit">{newUser ? 'Create an Account' : 'Login'}</button>


          </form>
          
      {/* <label htmlFor="newUser">Don't have an account? </label>  <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/> */}

      <p>{newUser ? 'Already have an account?' : "Don't have an account?"} <span style={{cursor:'pointer'}} onClick={() => setNewUser(!newUser)} className='text-success'>{ newUser ? 'Login' : 'Create an account'}</span></p>


          <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
       <p style={{textAlign: 'center',textColor: 'green', weight: 'bold'}}>--------Or-----------</p>

          { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        <button className="btn btn-info" onClick={googleSignIn}>Continue With Google Sign In</button>
      }
      <br/> <br/>
      <button className="btn btn-warning" onClick={fbSignIn}>Continue With Facebook Sign In </button>
        </div>
      </Container>
      {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}!</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      } 
    </div>
  );
}

export default Login;