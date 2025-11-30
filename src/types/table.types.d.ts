// components/Table.tsx
import React from "react";

type SortOrder = "asc" | "desc" | null;

export interface TableHeaderItem {
    key: string;
    label: string;
    sortable?: boolean;
}

export interface TableProps {
    headers: TableHeaderItem[];
    rows: Record<string, React.ReactNode>[]; // each row is an object with keys matching headers
    sortConfig?: { key: string; order: SortOrder };
    onSort?: (key: string, order: SortOrder) => void;
}
