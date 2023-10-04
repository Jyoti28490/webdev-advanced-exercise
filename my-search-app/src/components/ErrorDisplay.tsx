import { ErrorDisplayProps } from '../../types';

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <section className="userInfo">
      <div className="userInfo__box">
        <div className="newAlert error-container">
          <b>Response Error</b>
          <p>{message}</p>
        </div>
      </div>
    </section>
  );
};

export default ErrorDisplay;
