import React from 'react';
import './App.css';

interface User {
  name: string;
  id: number;
  description?: string;
}

const App = () => {

  /**
   * type applied as user to a local field
   */
  const user1: User = {
    name: 'test-name-1',
    id: 1,
    description: 'some description'
  }

  const user2: User = {
    name: 'test-name-2',
    id: 2, 
    description: 'some description'
  }

  const user3: User = {
    name: 'test-name-3',
    id: 3,
    description: 'some description'
  }

  /**
   * types applied to local state i.e. Array of User
   */
  const [users, setUsers] = React.useState<Array<User>>([user1, user2, user3]);

  /**
   * types applied to a arrow function parameters
   */
  const displayUser = (user: User) => {
    alert(user.name);
  }

  return (
    <div className="App">
      <div>Typescript Implementation</div>
      <br />
      
      {/* Mapping through the users list */}
      {users.map((user: User) => {
        console.log(user)
        return <div key={user.id}>
          <div 
            style={{cursor: 'pointer'}}
            onClick={() => displayUser(user)}
          >
            <b>{user.name}</b>
          </div>
          <div>{user.description ? user.description : ''}</div>
        </div>
      })}
    </div>
  );
}

export default App;
