export const headers = [
  { label: "Name", key: "name", sortable: true },
  { label: "Email", key: "email", sortable: true },
  { label: "Phone", key: "phone" },
];

export const data = [
  { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { name: "Bob", email: "bob@example.com", phone: "234-567-8901" },
];

export const handleTableSorting = (key: string, direction: "asc" | "desc") => {
  console.log("Sort by:", key, direction);
  // Make your server call here
};

export const breadCrumbConfig = [
  { title: "Dashboard", id: 1, href: "" },
  { title: "Students", id: 2, href: "" },
];
