// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import FeatureBox from '../components/FeatureBox';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Dashboard() {
  const navigate = useNavigate();
  const handleTrackBallClick = () => {
    navigate('/track-ball');
  };

  const handleCounterClick = () => {
    navigate('/counter');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out successfully");
      navigate('/'); // Redirect to home page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Dashboard</h1>
        <FeatureBox
          title="Track Ball"
          description="Analyze ball trajectory and speed."
          buttonText="Track Ball"
          onClick={handleTrackBallClick}
        />
        <FeatureBox
          title="Counter"
          description="Keep track of score, balls, and wickets."
          buttonText="Open Counter"
          onClick={handleCounterClick}
        />
         <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;