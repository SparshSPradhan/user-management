

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createUser, User } from '../services/userService';
// import './CreateUser.css';

// const CreateUser: React.FC = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<Omit<User, 'id'>>({ name: '', email: '', phone: '' });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createUser(user)
//       .then(() => {
//         navigate('/');
//       })
//       .catch(() => alert('Error creating user'));
//   };

//   return (
//     <div className="form-container">
//       <h1>Create User</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="text"
//             value={user.phone}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//           />
//         </div>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, User } from '../services/userService';
import './CreateUser.css';

const CreateUser: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Omit<User, 'id'>>({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createUser(user)
      .then(() => {
        navigate('/');
      })
      .catch(() => alert('Error creating user'));
  };

  return (
    <div className="form-container">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <div className="actions">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;


