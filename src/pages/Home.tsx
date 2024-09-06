// // src/pages/Home.tsx
// import React, { useState, useEffect } from 'react';
// import { getUsers, deleteUser } from '../services/userService';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     getUsers()
//       .then(response => {
//         setUsers(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching users');
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = (id: number) => {
//     deleteUser(id).then(() => {
//       setUsers(users.filter(user => user.id !== id));
//     });
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Users List</h1>
//       <Link to="/create">Create New User</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>
//                 <Link to={`/edit/${user.id}`}>Edit</Link>
//                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser, User } from '../services/userService';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: number) => {
    deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    }).catch(() => setError('Error deleting user'));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Users List</h1>
      <Link to="/create">Create New User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

