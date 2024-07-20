import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [userData, setUserData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/', {
        headers: {
          'Encryption-Key': 'FtmJ7frzTyWOzintybbqIWzwwclcPtaI',
          'Access-Token': '0e186445-0647-417c-ae27-8098533f1914',
          'Campaign-ID': '6a0fa162-fb4c-4074-a6d4-402744e3590b'
        }
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Submitted phone number:', phoneNumber);
    // TODO: Implement Google Ads conversion tracking
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to MobiBox</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your Iraq phone number"
          className="w-full p-2 mb-4 border rounded"
          pattern="\+964[0-9]{9}"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      {userData && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">User Data:</h2>
          <pre className="bg-white p-4 rounded shadow-md">{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LandingPage;