//Exercise Custom Hooks - Modify the `useGithubUser`
/*
import { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUserData() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [username]);

  return { userData, loading, error, fetchUserData };
}

export default useGithubUser;
*/