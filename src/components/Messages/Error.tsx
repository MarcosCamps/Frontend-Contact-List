import { IError } from 'interfaces/IError';

export function ErrorHandler({ error, message }: IError) {
  return (
    <span className="error-handler">
      {error && <p className="error">{message}</p>}
    </span>
  );
}
