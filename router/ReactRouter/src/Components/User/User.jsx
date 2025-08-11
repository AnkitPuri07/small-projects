import React from 'react';
import { useParams } from 'react-router'; // ✅ Use 'react-router-dom' instead of 'react-router'

function User() {
  const { id } = useParams(); // ✅ Destructure safely

  return (
    <div className="p-4 text-blue-400 bg-gray-700 text-xl text-center">
      User: {id}
    </div>
  );
}

export default User;