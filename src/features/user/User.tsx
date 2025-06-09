import { useAppSelector } from '../../hooks';

const User = () => {
  const username = useAppSelector((state) => state.user.username);
  // if no username, don't even return jsx
  if (!username) return null;

  return (
    <div className="font-body flex flex-col items-center absolute right-20 md:right-70 lg:right-80 xl:right-90">
      Hi! <p className="font-body font-bold">{username}</p>
    </div>
  );
};

export default User;
