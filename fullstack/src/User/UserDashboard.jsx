// import React, { useState } from 'react';
import "../User/Userdashboard.css";

// function UserDashboard() {
//   // Sample upcoming events data
//   const [upcomingEvents, setUpcomingEvents] = useState([
//     {
//       id: 1,
//       title: 'Event 1',
//       date: '2024-02-15',
//       description: 'Description for Event 1',
//     },
//     {
//       id: 2,
//       title: 'Event 2',
//       date: '2024-02-16',
//       description: 'Description for Event 2',
//     },
//     {
//       id: 3,
//       title: 'Event 3',
//       date: '2024-02-17',
//       description: 'Description for Event 3',
//     },
//     {
//       id: 4,
//       title: 'Event 4',
//       date: '2024-02-18',
//       description: 'Description for Event 4',
//     },
//     {
//       id: 5,
//       title: 'Event 5',
//       date: '2024-02-19',
//       description: 'Description for Event 5',
//     },
//   ]);

//   const [editId, setEditId] = useState(null);

//   const handleEdit = (id) => {
//     setEditId(id);
//   };

//   const handleSave = (id) => {
//     setEditId(null);
//     // You can add logic here to save the edited data, e.g., make an API call
//   };

//   const handleInputChange = (id, field, value) => {
//     const updatedEvents = upcomingEvents.map((event) =>
//       event.id === id ? { ...event, [field]: value } : event
//     );
//     setUpcomingEvents(updatedEvents);
//   };

//   return (
//     <div className="admin-container">
//       <div className="admin-sidebar-active">

//       </div>
//       <div className="admin-content">
//         <h1>User Dashboard</h1>
//         {/* Upcoming Events Table */}
//         <div className="upcoming-events-box">
//           <h2>Upcoming Events</h2>
//           {upcomingEvents.length === 0 ? (
//             <p>No upcoming events</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Date</th>
//                   <th>Description</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {upcomingEvents.map((event) => (
//                   <tr key={event.id}>
//                     <td>
//                       {editId === event.id ? (
//                         <input
//                           type="text"
//                           value={event.title}
//                           onChange={(e) => handleInputChange(event.id, 'title', e.target.value)}
//                         />
//                       ) : (
//                         event.title
//                       )}
//                     </td>
//                     <td>
//                       {editId === event.id ? (
//                         <input
//                           type="text"
//                           value={event.date}
//                           onChange={(e) => handleInputChange(event.id, 'date', e.target.value)}
//                         />
//                       ) : (
//                         event.date
//                       )}
//                     </td>
//                     <td>
//                       {editId === event.id ? (
//                         <input
//                           type="text"
//                           value={event.description}
//                           onChange={(e) => handleInputChange(event.id, 'description', e.target.value)}
//                         />
//                       ) : (
//                         event.description
//                       )}
//                     </td>
//                     <td>
//                       {editId === event.id ? (
//                         <button onClick={() => handleSave(event.id)}>Save</button>
//                       ) : (
//                         <button onClick={() => handleEdit(event.id)}>Edit</button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//         {/* Add the rest of your admin content here */}
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import Header from './Header'
// import '..//assets/css/my_book.css'

export default function UserDashboard() {

  const [users, setUsers] = useState([]);
  // const { user } = useSelector((state) => state.master);

  const { type } = useParams();
  // console.log(type);

  useEffect(() => {

    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/getBooking",users);
    setUsers(result.data);
    console.log(result);
  };



  return (
    <>
    {/* <Header/> */}
    {/* <Navbar/> */}
    <div className='book_head'>
      <h2>Booking List</h2>
      {/* <h2>Selected Option:</h2>
      <p>{selectedOption}</p> */}
    </div>
    <div className="my_booking_details">
      <table>
          <thead>
            <tr>
              <th scope="col">Booking ID</th>
              <th scope="col">Full name</th>
              <th scope="col">DOB</th>
               <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile NUmber</th>
              <th scope="col">Enquriy</th>
               <th scope="col">Course</th>
               {/* <th scope="col">Event Type</th> */}
            </tr>
          </thead>
  
    

          <tbody>
          {users.map((user,index) => (
            <tr key={index}>
              <td>{index+1 }</td>
              <td>{user.fullName}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.mobileNo}</td>
              <td>{user.address}</td>
              <td>{user.courseSelected}</td>


             
        
            </tr>
          ))}
        </tbody>

        </table>
    </div>
    </>
  )
}