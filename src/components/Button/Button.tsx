import "./Button.scss";

const Button = ({
  onClick,
  disabled,
  children,
  primary,
}: {
  [key: string]: any;
}) => {
  return (
    <button
      className={`ui-button ${disabled ? "ui-button--disabled" : ""}${
        primary ? "ui-button--primary" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
