import { NavLink } from "react-router-dom";

interface NavItemProps {
  path: string;
  name: string;
}

export function NavItem({ path, name }: NavItemProps) {
  const linkStyle = {
    "font-size": "1.5rem",
    "text-decoration": "none",
    color: "#000",
    padding: "0.5rem",
  };

  return (
    <>
      <NavLink style={linkStyle} to={path}>
        {name}
      </NavLink>
    </>
  );
}
