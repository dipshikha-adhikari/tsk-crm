import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

interface BreadcrumbProps {
  config: { title: string; id: number; href: string }[];
}

const Breadcrumb = ({ config }: BreadcrumbProps) => {
  return (
    <nav className={cn("text-sm text-muted-foreground")}>
      <ol className="flex flex-wrap gap-4 items-center space-x-1 md:space-x-2">
        {config?.map((item, idx) => (
          <li key={idx} className="flex  items-center">
            {item.href ? (
              <Link to={item.href} className="hover:underline text-foreground">
                {item.title}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.title}</span>
            )}
            {idx < config.length - 1 && (
              <svg
                className="mx-1 h-4 w-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
