// components/Table.tsx
import { SortOrder, TableProps } from "@/types/table.types";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  sortConfig,
  onSort,
}) => {
  const handleSort = (key: string) => {
    if (!onSort) return;

    const isSameKey = sortConfig?.key === key;
    const nextOrder: SortOrder = !isSameKey
      ? "asc"
      : sortConfig.order === "asc"
      ? "desc"
      : sortConfig.order === "desc"
      ? null
      : "asc";

    onSort(key, nextOrder);
  };

  const renderSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key)
      return <ChevronsUpDown className="w-4 h-4 text-muted-foreground" />;
    return sortConfig.order === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : sortConfig.order === "desc" ? (
      <ChevronDown className="w-4 h-4" />
    ) : (
      <ChevronsUpDown className="w-4 h-4 text-muted-foreground" />
    );
  };
  return (
    <div className="relative ">
      {" "}
      {/* Added z-0 to ensure proper stacking */}
      <div className="">
        <div className="[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-muted/50 [&::-webkit-scrollbar-thumb]:bg-muted-foreground/50 [&::-webkit-scrollbar-thumb]:rounded-full">
          <table className={`w-full border-collapse text-sm min-w-[500px]  `}>
            <thead className="bg-muted/40 sticky top-0 ">
              {" "}
              {/* Added z-10 for header */}
              <tr>
                {headers.map(({ key, label, sortable }) => (
                  <th
                    key={key}
                    onClick={() => sortable && handleSort(key)}
                    className={cn(
                      "text-left px-4 py-2 bg-muted font-semibold",
                      sortable && "cursor-pointer select-none"
                    )}
                  >
                    <div className="flex items-center gap-1">
                      {label}
                      {sortable && renderSortIcon(key)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="text-center p-4 text-muted-foreground"
                  >
                    No data available.
                  </td>
                </tr>
              ) : (
                rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="">
                    {headers.map(({ key }) => (
                      <td key={key} className="px-4 py-2">
                        {row[key]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
