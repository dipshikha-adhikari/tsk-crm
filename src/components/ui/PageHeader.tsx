import { Input } from "./Input";
import { PlusIcon, FilterIcon } from "lucide-react"; // or from your own Icon component
import { Button } from "./Button";
import Breadcrumb from "./BreadCrumb";

interface SearchConfig {
  placeholder?: string;
  onChange?: (value: string) => void;
}

interface PageHeaderConfig {
  title?: string;
  search?: SearchConfig | boolean;
  filter?: boolean;
  createLabel?: string;
  create?: boolean;
  edit?: boolean;
}

interface PageHeaderProps {
  config?: PageHeaderConfig;
  onAdd?: () => void;
  onFilter?: () => void;
  breadCrumb?: { title: string; id: number; href: string }[]; // or any breadcrumb structure you use
}

const PageHeader = ({
  config,
  onAdd,
  onFilter,
  breadCrumb,
}: PageHeaderProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // config?.search &&
    //   typeof config.search !== "boolean" &&
    //   config.search.onChange?.(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between py-xs items-start md:items-center gap-xs ">
      {/* Left */}
      <div className="space-y-1">
        {config?.title && (
          <h2 className="text-2xl font-semibold">{config?.title}</h2>
        )}
        {breadCrumb && <Breadcrumb config={breadCrumb} />}
      </div>

      {/* Right */}
      <div className="flex flex-wrap gap-xs items-center  ">
        {config?.search && (
          <Input
            placeholder={
              typeof config.search === "object"
                ? config.search.placeholder ?? "Search..."
                : "Search..."
            }
            onChange={handleSearchChange}
            className="w-full md:w-64"
          />
        )}
        {config?.filter && (
          <Button
            variant="outline"
            onClick={onFilter}
            className="cursor-pointer bg-white"
          >
            <FilterIcon className="w-4 h-4 mr-2 " />
            Filter
          </Button>
        )}
        {onAdd && (
          <Button onClick={onAdd} className="cursor-pointer">
            <PlusIcon className="w-4 h-4 mr-2" />
            {config?.createLabel ?? "Add"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
