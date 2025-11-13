interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function PrimaryButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
}: PrimaryButtonProps) {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variantClass} ${fullWidth ? 'btn--full' : ''}`}
    >
      {children}
    </button>
  );
}
