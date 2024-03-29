import React from "react";
import axios from "axios";

const Logout = () => {
  const logOutUrl = 'http://localhost:8000/api/token/logout/';

  const logoutFunc = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      await axios.post(
        logOutUrl,
        { refresh_token: refreshToken },
        {
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );

      // Clear local storage and remove Authorization header
      localStorage.clear();
      delete axios.defaults.headers.common['Authorization'];

      // Redirect to the login page
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
      // Handle errors here, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <button className="btn btn-blue" onClick={logoutFunc}>
        Logout
      </button>
    </div>
  );
};

export default Logout;