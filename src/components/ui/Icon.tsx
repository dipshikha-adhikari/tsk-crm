import React from "react";

type IconProps = {
  id: string; // matches the symbol id (without 'icon-' prefix if you want)
  size?: number | string;
  className?: string;
  color?: string;
  title?: string;
  onClick?: any;
};

const Icon: React.FC<IconProps> = ({
  id,
  size = 24,
  className = "",
  color = "currentColor",
  title,
  onClick,
}) => {
  return (
    <div
      className="flex gap-2 items-center cursor-pointer font-medium"
      onClick={onClick}
    >
      {title && <button className="cursor-pointer">{title}</button>}
      <svg
        className={className}
        width={size}
        height={size}
        fill="none"
        stroke={color}
        aria-hidden="true"
        role="img"
      >
        <use href={`/icons.svg#icon-${id}`} />
      </svg>
    </div>
  );
};

export default Icon;
