import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import errorImg from '../assets/error-monster.png';

interface errorType {
  data: string;
  error: string;
  message: string;
}

const Error = () => {
  const error = useRouteError() as errorType;

  return (
    <div className="mx-auto w-10/12 border-2 border-black mt-24 p-12 flex shadow-md shadow-muted-text">
      <img className="w-32" src={errorImg} alt="a big oops to show error" />
      <div>
        <h1>Aye! There's something wrong</h1>
        <p>{error.data || error.message}</p>
      </div>
      <LinkButton to="-1">Go Back</LinkButton>
    </div>
  );
};

export default Error;
