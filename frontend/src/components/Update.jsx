import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state; // Retrieve userId from state
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    age: '',
    weight: '',
    height: '',
  });

  // Fetch user data when the component loads
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:8080/api/user/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data); // Set the fetched user data in state
        } else {
          toast.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error fetching user data');
      }
    }

    fetchUserData();
  }, [userId]);

  // Handle form submission
  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Send updated user data
        mode: 'cors',
      });
      if (response.ok) {
        toast.success('User updated successfully');
        navigate('/'); // Redirect back to the main page
      } else {
        toast.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error updating user');
    }
  }

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div className="flex items-center justify-center mt-[-50px] p-6">
      <form onSubmit={handleUpdate} className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-8 w-full max-w-md">
        <h2 className="text-[#b21f7f] text-2xl font-bold mb-6 text-center">Update User</h2>

        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          placeholder="Age"
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="number"
          name="weight"
          value={user.weight}
          onChange={handleChange}
          placeholder="Weight"
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="number"
          name="height"
          value={user.height}
          onChange={handleChange}
          placeholder="Height"
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />

        <button
          type="submit"
          className="w-full bg-[#b21f7f] text-white py-2 rounded-md cursor-pointer hover:bg-[#b21f7f]/90 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;