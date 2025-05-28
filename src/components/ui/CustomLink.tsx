import { Link } from "react-router-dom";

export const CustomLink = ({
  href,
  onClick,
  children,
  className = "",
  ...props
}) => {
  const baseClass =
    "flex items-center gap-2 cursor-pointer text-sm font-medium text-foreground hover:text-accent hover:underline transition-colors";

  if (href === "/signout") {
    return (
      <button
        onClick={onClick}
        {...props}
        className={`${baseClass} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={href} {...props} className={`${baseClass} ${className}`}>
      {children}
    </Link>
  );
};
