import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { updateName } from './userSlice';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateName(username));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Hey there! Please start by telling </p>
      <input
        type="text"
        className="text"
        placeholder="e.g.Jonas"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      {username !== '' && <button type="submit">Go!</button>}
    </form>
  );
};

export default CreateUser;
