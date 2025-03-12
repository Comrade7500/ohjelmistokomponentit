import React, { useState, useEffect } from "react";

const UserFetcher = () => {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId < 1 || userId > 10) return;
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  return (
    <div>
      <h2>Fetch User Data</h2>
      <input
        type="number"
        min="1"
        max="10"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      {userData && (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>City:</strong> {userData.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default UserFetcher;
