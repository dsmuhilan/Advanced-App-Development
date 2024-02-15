import React, { useState } from 'react';
import '../assets/css/Thankyou.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    mobileNo: '',
    address: '',
    courseSelected: '', // Added the new field
  });

 const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,  
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    axios.post("http://localhost:8080/postBooking", formData)
    .then((response) => {
        console.log(response)
        alert("Your Course is Booked")
        navigate("/Ucourse")
    })
    .catch((error) => {
        // Handle error here, for example:
        console.error('Error registering user:', error);
        // You can also update state to display a user-friendly error message
    });
    console.log('Form submitted:', formData);
    // Redirect or show a success message as needed
  };

  return (
    <div className='student-form'>
      <h3>Course enrolled successfully!!</h3>
      <center>
        <h1>Student Information Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div>
            <label>Date of Birth:</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
          </div>

          <div>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <label>Mobile No:</label>
            <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
          </div>

          
          <div>
          <label>Course Selected:</label>
             <select name="courseSelected" value={formData.courseSelected} onChange={handleChange} required>
                <option value="Programming">Programming</option>
                <option value="DataScience">DataScience</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="AWS Cloud">AWS Cloud</option>
                <option value="React">React</option>
                <option value="Block chain">Block chain</option>
                <option value="Machine learning">Machine learning</option>
                
                </select> 
                
                </div>
                <div>
                  <label>Enquiry:</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} rows="4" required />
                </div>
                
                <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </center>
    </div>
  );
};

export default StudentForm;
