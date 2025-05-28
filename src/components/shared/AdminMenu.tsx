import { adminLinks } from "@/config/navbar-links";
import { useAuth } from "@/context/auth/AuthProvider";
import { CustomLink } from "../ui/CustomLink";

const AdminMenu = () => {
  const { logout } = useAuth();
  return (
    <div className="absolute right-0 top-12 grid gap-4 p-xs bg-muted rounded-md min-w-40 z-50">
      {adminLinks.map((link) => (
        <CustomLink
          key={link.href}
          href={link.href}
          onClick={link.href === "/signout" ? logout : undefined}
          className="flex items-center gap-2 text-sm font-medium text-foreground"
        >
          {link.label}
        </CustomLink>
      ))}
    </div>
  );
};

export default AdminMenu;
