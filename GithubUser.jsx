//Exercise Custom Hooks - Modify the `useGithubUser`
/*
import useGithubUser from './useGithubUser';

function GithubUser(props) {
  const { username } = props;
  const { userData, loading, error, fetchUserData } = useGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        {userData.html_url}
      </a>
    </div>
  );
}

export default GithubUser;
*/