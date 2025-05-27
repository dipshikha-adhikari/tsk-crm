import { useState } from "react";

export const useStudentListController = () => {

    const [sortConfig, setSortConfig] = useState<{
        key: string;
        order: "asc" | "desc" | null;
    }>({
        key: "name",
        order: "asc",
    });

    const handleSearch = () => {

    }

    return {
        handleSearch, sortConfig, setSortConfig
    }
}