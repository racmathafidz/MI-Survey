type Props = {
  className: string;
  children: string;
  onClick: () => void;
  disabled?: boolean;
};

export default function Button({
  className,
  children,
  onClick,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
