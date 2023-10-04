import { ButtonProps } from '../../types';

const Button = ({ onClick, text, className, type }: ButtonProps) => {
  // Combine the custom class with the default button class
  const buttonClasses = `button ${className || ''}`;

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
