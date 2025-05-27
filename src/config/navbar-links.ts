// src/config/navbarLinks.ts

interface NavLink {
    label: string;
    href: string;
    icon?: string; // Optional: use with an Icon component
    authOnly?: boolean; // Optional: show only when user is logged in
}

export const navbarLinks: NavLink[] = [

    {
        label: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
    }, {
        label: "Students",
        href: "/students",
        icon: "users",
    },
    {
        label: "Teachers",
        href: "/teachers",
        icon: "users",
    },
];


export const adminLinks = [
    {
        label: "Profile",
        href: "/profile",
    }, {
        label: "Settings",
        href: "/settings",
    },
    {
        label: "Help",
        href: "/help",
    },
    {
        label: "Sign Out",
        href: "/signout",
    },
]