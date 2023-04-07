import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = (props) => {
  const { children, buttonTypes, ...otherProps } = props;
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonTypes]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
