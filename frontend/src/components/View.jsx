import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const View = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]); // All users fetched from the server
  const [filteredUsers, setFilteredUsers] = useState([]); // Users filtered based on search criteria
  const [searchName, setSearchName] = useState(''); // Search input for names
  const [bmiStatus, setBmiStatus] = useState(''); // Search input for BMI status

  // Function to fetch user data from the server
  async function fetchUserData() {
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Initially, all users are displayed
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Function to delete a user
  async function deleteUser(id) {
    try {
      const response = await fetch(`http://localhost:8080/api/remove/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      if (response.ok) {
        toast.success('User deleted successfully');
        fetchUserData(); // Refresh the user list after deletion
      } else {
        toast.error('Failed to delete user');
      }
    } catch (error) {
      toast.error('Error: ', error);
    }
  }

  // Filter users based on search criteria
  useEffect(() => {
    const filtered = users.filter((user) => {
      const fullName = `${user.fname} ${user.lname}`.toLowerCase();
      const matchesName = fullName.includes(searchName.toLowerCase());
      const matchesBmiStatus = bmiStatus ? user.bmi_status === bmiStatus : true;
      return matchesName && matchesBmiStatus;
    });
    setFilteredUsers(filtered);
  }, [searchName, bmiStatus, users]);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-3xl text-center text-[#b21f7f] mb-[30px] font-bold">User List</h1>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row  items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="w-full shadow-lg md:w-1/3 p-3 mb-4 md:mb-0 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
          />
          <select
            value={bmiStatus}
            onChange={(e) => setBmiStatus(e.target.value)}
            className="w-full md:w-1/3 shadow-lg p-3 rounded-md bg-white/40 text-gray-900 focus:outline-[#b21f7f]"
          >
            <option value="">Filter by BMI Status</option>
            <option value="Underweight">Underweight</option>
            <option value="Normal weight">Normal weight</option>
            <option value="Overweight">Overweight</option>
            <option value="Obese">Obese</option>
          </select>
        </div>

        {/* User Table */}
        <table className="min-w-full text-sm text-left text-gray-700 backdrop-blur-md bg-white/20 border border-white/30 shadow-lg mt-[-10px] rounded-xl overflow-hidden">
          <thead className="text-xs uppercase text-white">
            <tr className="border-b border-[#b21f7f]/20">
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">First Name</th>
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">Last Name</th>
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">Age</th>
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">Weight (kg)</th>
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">Height (M)</th>
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">BMI</th>
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">Status</th>
              <th scope="col" className="px-6 py-3 text-[#b21f7f]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="bg-white/30 border-b border-white/20 hover:bg-[gray-600]/40">
                <td className="px-6 py-4">{user.fname}</td>
                <td className="px-6 py-4">{user.lname}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td className="px-6 py-4">{user.weight}</td>
                <td className="px-6 py-4">{user.height}</td>
                <td className="px-6 py-4">{user.bmi.toFixed(2)}</td>
                <td
                  className={`px-6 py-4 ${
                    user.bmi_status === 'Obese'
                      ? 'text-purple-900'
                      : user.bmi_status === 'Normal weight'
                      ? 'text-green-600'
                      : user.bmi_status === 'Underweight'
                      ? 'text-yellow-600'
                      : 'text-red-700'
                  } font-medium`}
                >
                  {user.bmi_status}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => navigate('/update-user', { state: { userId: user.id } })}
                    className="px-3 py-1 text-white cursor-pointer bg-[#b21f7f] rounded hover:bg-[#b21f7f]/90"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="px-3 py-1 text-white cursor-pointer bg-gray-400 rounded hover:bg-gray-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
