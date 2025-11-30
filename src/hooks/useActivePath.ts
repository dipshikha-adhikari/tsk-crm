// hooks/useActivePath.ts
import { useLocation } from "react-router-dom";

export const useActivePath = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => pathname === path;

    return { isActive }; // More concise than `isCurrentPage`
};