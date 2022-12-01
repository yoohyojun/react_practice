import React, { useReducer, useMemo, useCallback } from 'react';
import UserList from './userList';
import CreateUser from './CreateUser';
import produce from 'immer';
import Hello from "./Hello";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id == action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = state.users.findIndex(user => user.id == action.id);
        const user2 = {
          id: 5,
          username: '123123132',
          email: '123123@123123.com',
          active: false
        }
        draft.users.splice(index, 2, user2);
      });
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}
export const UserDispatch = React.createContext(null);

function App5() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;
  const { username, email } = state.inputs;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
            username={username}
            email={email}
        />
        <UserList users={users} />
        <div>활성사용자 수 : {count}</div>
        <Hello color='red' name='myname' />
      </UserDispatch.Provider>
  );
}
export default App5