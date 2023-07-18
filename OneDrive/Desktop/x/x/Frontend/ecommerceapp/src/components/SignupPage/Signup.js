import React, { useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { getAuth } from "firebase/auth";

// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlM7dACgX8QSRPU8PsZe7UVtvTqD4saeY",
    authDomain: "ecommerce-e81ca.firebaseapp.com",
    projectId: "ecommerce-e81ca",
    storageBucket: "ecommerce-e81ca.appspot.com",
    messagingSenderId: "518888859936",
    appId: "1:518888859936:web:39d1cacdc4abbbf37e0f45",
    measurementId: "G-QS80JQYRL6"
};


firebase.initializeApp(firebaseConfig);

const SignUpForm = () => {
    
    const auth=getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [role, setRole] = useState('customer');
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };



    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;

        if (value.length === 0 || (value.length <= 10 && /^\d*$/.test(value))) {
            setPhoneNumber(value);
        }
    };
 



    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };



    const handleSignUpWithEmail = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/usersignup",{email,password,number:phoneNumber,role}).then(
            alert("ser added")
   )  .catch((error) => {
    // Handle sign up errors
   
    alert(error);
});
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Sign up successful, access the user data with: userCredential.user
                console.log('Signing up with email:', userCredential.user, 'Role:', role);
                // Clear the input fields
                setEmail('');
                setPassword('');
               setPhoneNumber();
               navigate("/login")
            })
            .catch((error) => {
                // Handle sign up errors
               
                alert(error);
            });
    };

    const handleSignUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
     
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((userCredential) => {
                // Sign up successful, access the user data with: userCredential.user
                console.log('Signing up with Google:', userCredential.user, 'Role:', role);
                console.log( "🔥w",userCredential.user.email)
             
                axios.post("http://localhost:3001/usersignup",{email: userCredential.user.email,role,number:phoneNumber}).then(
                  
                    console.log("🔥",userCredential.user.email)
           )
                navigate("/login")
            })
            .catch((error) => {
                // Handle sign up errors
                alert( error);
            });
    };

    const handleSignUpWithPhoneNumber = (e) => {
        e.preventDefault();

        const phoneNumberWithCountryCode = `+91${phoneNumber}`;

        // Check if the reCAPTCHA container is already populated
        const recaptchaContainer = document.getElementById('recaptcha-container');
        if (recaptchaContainer.innerHTML !== '') {
            // reCAPTCHA has already been rendered, do nothing
            return;
        }

        const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaContainer, {
            size: 'invisible',
        });

        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumberWithCountryCode, recaptchaVerifier)
            .then((confirmationResult) => {
                // SMS verification code sent successfully
                const verificationCode = window.prompt('Please enter the verification code sent to your phone:');

                confirmationResult
                    .confirm(verificationCode)
                    .then((userCredential) => {
                        // Sign up successful, access the user data with: userCredential.user
                        console.log('Signing up with phone number:', userCredential.user, 'Role:', role);
                        // Clear the input field
                        setPhoneNumber('');
                    })
                    .catch((error) => {
                        // Handle sign up errors
                        alert(error);
                    });
            })
            .catch((error) => {
                // Handle phone number sign-in errors
                console.log('Error signing in with phone number:', error);
                alert(error)
            });
    };

    return (
        <div className="container">
            <div className="form-container">
                <form action="http://localhost:3001/usersignupwithemail" method="post" onSubmit={handleSignUpWithEmail}>
                    <div id="role-container">
                        <label className="role-label">Important! Select User Role </label>
                        <br></br>
                        <select className="role-select" name="role" value={role} onChange={handleRoleChange}>
                            <option value="customer">Customer</option>
                            <option value="vendor">Vendor</option>
                        </select>
                    </div>
                    <div>
                        <input type="email" name="email" value={email} onChange={handleEmailChange} required placeholder="Email" />
                    </div>
                    <div>
                        <div className="password-input">
                            <input

                                value={password}
                                onChange={handlePasswordChange}
                                required
                                name="password"
                                placeholder="Password"
                            />

                        </div>
                        <div className='password-input'>
                        <input 
                            type="number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            
                            style={{ width: "103%", marginTop:"10px",height:"20px" }}
                            placeholder="Number"
                            min={1000000000}
                            max={9999999999}
                        />
                        </div>
                        </div>
                    
                    <div>
                        <button type="submit" className="signup-button" >
                            Sign Up with Email
                        </button>
                    </div>
                    <div>
                        <button className="google-button" onClick={handleSignUpWithGoogle}>
                            Sign Up with Google
                        </button>
                    </div>
                    <p>OR</p>
                   
                    <div>
                        <button className="phone-button" onClick={handleSignUpWithPhoneNumber}>
                            Sign Up with Otp 
                        </button>
                    </div>
                    <div>
                        <button className="google-button" onClick={()=>{navigate("/login")}}>
                           Already a user?Login
                        </button>
                    </div>
                </form>
                <div id="recaptcha-container"></div>
            </div>
            <div className="image-container">
                <img
                    src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?size=626&ext=jpg"
                    alt="Login"
                />
            </div>
        </div>
    );
};

export default SignUpForm;



