import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return <h1>{error.status + " : " + error.statusText}</h1>;
};
export default Error;
