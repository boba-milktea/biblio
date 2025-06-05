import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));

    navigate('/books');
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
      {username !== '' && <Button>Go!</Button>}
    </form>
  );
};

export default CreateUser;
