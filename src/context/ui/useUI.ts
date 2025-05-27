import { useContext } from "react";
import { UIContext } from "./UIProvider";

// context/hooks/useUI.ts
export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) throw new Error('useUI must be used within UIProvider');
    return context;
};