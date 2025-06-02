import { useAppSelector } from '../../hooks';

const User = () => {
  const username = useAppSelector((state) => state.user.username);
  // if no username, don't even return jsx
  if (!username) return null;

  return <div>{username}</div>;
};

export default User;
