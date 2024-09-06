// src/pages/EditUser.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUsers, updateUser, User } from '../services/userService';

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Retrieve user ID from URL
  const navigate = useNavigate();  // useNavigate replaces useHistory
  const [user, setUser] = useState<Omit<User, 'id'>>({ name: '', email: '', phone: '' });

  useEffect(() => {
    // Fetch user data
    getUsers().then(response => {
      const currentUser = response.data.find((u: User) => u.id === parseInt(id!));
      if (currentUser) {
        setUser({ name: currentUser.name, email: currentUser.email, phone: currentUser.phone });
      }
    });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(parseInt(id!), user)
      .then(() => {
        navigate('/');  // Navigate back to the homepage
      })
      .catch(() => alert('Error updating user'));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
