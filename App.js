//Exercise Custom Hooks - useCounter
/*
import React from "react";
import useCounter from "./useCounter";

function App() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
*/
//=========================================================================================================================================
//Exercise Custom Hooks - Custom hook for a controlled form
/*
import React from "react";
import useForm from "./useForm";

function App() {
  const [values, handleChange] = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.username, values.password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
*/
//=========================================================================================================================================
//Exercise Custom Hooks - useGithubUser
/*
import React, { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [username]);

  return { userData, loading, error };
}

function GithubUser({ username }) {
  const { userData, loading, error } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <a href={userData.html_url}>{userData.html_url}</a>
    </div>
  );
}

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernames([...usernames, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {usernames.map((username) => (
        <GithubUser key={username} username={username} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <GithubUserList />
    </div>
  );
}

export default App;
*/
//=========================================================================================================================================
//Exercise Custom Hooks - Modify the `useGithubUser`
/*
import React, { useState } from 'react';
import GithubUserList from './GithubUserList';
import useGithubUser from './useGithubUser';

function App() {
  const [usernames, setUsernames] = useState([]);

  const handleAddUser = (username) => {
    setUsernames([...usernames, username]);
  };

  return (
    <div className="App">
      <h1>Github User List</h1>
      <input type="text" placeholder="Enter a Github username" />
      <button onClick={() => handleAddUser(username)}>Add User</button>
      <GithubUserList usernames={usernames} useGithubUser={useGithubUser} />
    </div>
  );
}

export default App;
*/
//=========================================================================================================================================
//Exercise useRef - Create a `CarDetails` uncontrolled form
/*
import CarDetails from './CarDetails';

function App() {
  const initialData = {
    model: '',
    year: '',
    color: '',
  };

  return (
    <div>
      <h1>Car Details</h1>
      <CarDetails initialData={initialData} />
    </div>
  );
}

export default App;
*/
//=========================================================================================================================================
//Exercise useContext
/*
import React, { useState } from 'react';
import LanguageContext from './LanguageContext';
import DisplayLanguage from './DisplayLanguage';

function App() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <h1>Language Selector</h1>
      <label>
        Select a language:
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Tr">Türkçe</option>
          <option value="فا">فارسی</option>
          <option value="Ru">Россия</option>
        </select>
      </label>
      <LanguageContext.Provider value={{ language }}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
*/
//=========================================================================================================================================
//Exercise useCallback
/*
import React from 'react';
import useCounter from './useCounter';

function App() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
*/
//=========================================================================================================================================
//Exercise useMemo
/*
import React, { useState } from 'react';
import FilteredList from './FilteredList';

function App() {
  const [list, setList] = useState([
    { id: 1, name: 'Omer', age: 25 },
    { id: 2, name: 'Arshya', age: 23 },
    { id: 3, name: 'Alberto', age: 28 },
    { id: 4, name: 'Nuri', age: 25 },
  ]);

  const handleAddItem = () => {
    setList(prevList => [
      ...prevList,
      { id: prevList.length + 1, name: `Item ${prevList.length + 1}`, age: Math.floor(Math.random() * 50) },
    ]);
  };

  return (
    <div>
      <h1>Filtered List</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <FilteredList list={list} />
    </div>
  );
}

export default App;
*/
