import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/AnkitPuri07')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className='text-xl text-center text-blue-700 bg-gray-200'>
        Github Followers: {data?.followers ?? 'Loading...'}
      </div>
      {data?.avatar_url && (
        <img src={data.avatar_url} alt="GitHub avatar" className="mx-auto mt-4 rounded-full w-32 h-32" />
      )}
    </>
  );
}

export default Github;