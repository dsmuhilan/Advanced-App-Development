// import React, { useState } from "react";
// import "..//assets/css/signup.css";
// function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignup = () => {
//     // Reset previous errors
//     setError("");

//     // Basic form validation
//     if (!username || !email || !password || !confirmPassword) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     // Email validation using a basic regex pattern
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // Password constraint: At least 8 characters
//     if (password.length < 8) {
//       setError("Password must be at least 8 characters.");
//       return;
//     }

//     // Confirm password match
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // You can add more specific constraints for username, email, and password as needed

//     // Add your signup logic here
//     console.log("Signing up with", username, email, password);
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h2>Signup</h2>
//         <form>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />

//           <p className="error-message">{error}</p>

//           <button type="button" onClick={handleSignup}>
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import axios from "axios";
import "..//assets/css/signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const handleSignup = () => {
    // Reset previous errors
    // navigate('/login')
    setError("");

    // Basic form validation
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Email validation using a basic regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password constraint: At least 8 characters
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Make a POST request to your backend signup endpoint
    axios.post("http://127.0.0.1:8081/api/v1/auth/register", {name: username, email:email, password: password,confirmPassword:confirmPassword})
    .then((response) => {
        console.log(response)
        alert("Signup successfully");
        navigate("/login")
    })
    .catch((error) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        // Handle error here, for example:
        console.error('Error registering user:', error);
        // You can also update state to display a user-friendly error message
    });
  };
  

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p className="error-message">{error}</p>
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
