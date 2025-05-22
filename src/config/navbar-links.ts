// src/config/navbarLinks.ts

interface NavLink {
    label: string;
    href: string;
    icon?: string; // Optional: use with an Icon component
    authOnly?: boolean; // Optional: show only when user is logged in
}

export const navbarLinks: NavLink[] = [
    {
        label: "Students",
        href: "/students",
        icon: "users",
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
    },
];
