import classNames from 'classnames';

const Button = ({ className, onClick, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button-outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
