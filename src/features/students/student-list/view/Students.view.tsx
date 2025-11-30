// src/features/students/view/StudentsPage.tsx
import PageHeader from "@/components/ui/PageHeader";
import { Table } from "@/components/ui/table/Table";
import { useStudentListController } from "../controllers/useStudentListController";
import { breadCrumbConfig, data, headers } from "./config";
import { useUI } from "@/context";

const StudentsPage = () => {
  const { handleSearch, sortConfig, setSortConfig } =
    useStudentListController();

  return (
    <div className="sm:px-sm px-xs ">
      {/* Page Header */}
      <PageHeader
        config={{
          title: "Students",
          search: {
            placeholder: "Search students...",
            onChange: handleSearch,
          },
          filter: true,
          createLabel: "New Student",
        }}
        onFilter={() => console.log("Open filter modal")}
        onAdd={() => console.log("Open create student modal")}
        breadCrumb={breadCrumbConfig}
      />
      <section className="py-xs">
        {/* Table */}
        <Table
          headers={headers}
          rows={data}
          sortConfig={sortConfig}
          onSort={(key, order) => setSortConfig({ key, order })}
        />
      </section>
    </div>
  );
};

export default StudentsPage;
