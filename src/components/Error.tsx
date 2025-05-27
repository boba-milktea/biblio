import { useNavigate, useRouteError } from 'react-router-dom';
// const errorImg = '../assets/error.png';
interface errorType {
  data: string;
  error: string;
  message: string;
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as errorType;

  console.log(error);

  return (
    <div className="">
      <img src="src\assets\error.png" alt="a big oops to show error" />
      <h1>Oops!There's something wrong</h1>
      <p>{error.data || error.message}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
