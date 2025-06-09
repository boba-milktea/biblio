import { useRouteError } from 'react-router-dom';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import errorImg from '../assets/error-monster.png';

interface errorType {
  data: string;
  error: string;
  message: string;
}

const Error = () => {
  const error = useRouteError() as errorType;
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <div className="message-card">
      <Button onClick={handleGoBack} type="btn-link">
        &larr; Go Back
      </Button>

      <div className="flex flex-col items-center mt-8 gap-4">
        <img
          className="w-32 lg:w-48"
          src={errorImg}
          alt="a big oops to show error"
        />
        <h2>Aye! There's something wrong...</h2>
        <p className="text-lg lg:text-xl font-bold">
          {error.data || error.message}
        </p>
      </div>
    </div>
  );
};

export default Error;
