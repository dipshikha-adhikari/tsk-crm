// Search.tsx
import { useState, useRef, useEffect } from "react";

interface SearchProps {
  className?: string;
  isSidebarOpen?: boolean; // Add this prop
}

const Search = ({ className = "", isSidebarOpen = false }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Dummy suggestions data
  const suggestions = [
    "Dashboard",
    "Settings",
    "User Profile",
    "Notifications",
    "Messages",
    "Help Center",
    "Documentation",
    "API Reference",
  ];

  // Filter suggestions based on search query
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close suggestions and mobile search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);

        // Hide mobile search if no suggestions are showing and sidebar is not open
        if (!showSuggestions && window.innerWidth < 768 && !isSidebarOpen) {
          setShowMobileSearch(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSuggestions, isSidebarOpen]);

  // Close mobile search when sidebar opens
  useEffect(() => {
    if (isSidebarOpen) {
      setShowMobileSearch(false);
      setShowSuggestions(false);
    }
  }, [isSidebarOpen]);

  return (
    <div className={`${className} relative`} ref={searchRef}>
      {/* Mobile Search Icon (visible on small screens) */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => {
            setShowMobileSearch(!showMobileSearch);
            if (!showMobileSearch) {
              // Focus the input when opening on mobile
              setTimeout(() => {
                const input = document.getElementById("search-input");
                input?.focus();
              }, 0);
            }
          }}
          className="p-2 rounded-full cursor-pointer focus:outline-none transition-colors"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Search Input - Always visible on desktop, conditionally on mobile */}
      <div
        className={`${
          showMobileSearch
            ? "block fixed left-0 min-w-40 z-50 mt-2 w-full px-4 md:px-0"
            : "hidden"
        } md:block md:relative`}
      >
        <div className="relative max-w-[500px] z-50 bg-background mx-auto rounded-sm">
          <input
            id="search-input"
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-sm border border-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
          />
          {/* Search icon inside input (desktop) */}
          <div className="absolute right-3 top-2.5 text-gray-500 hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && searchQuery && (
          <div className="md:absolute w-full mx-auto max-w-[500px] rounded-sm border-default py-1 max-h-60 overflow-auto z-10 bg-background">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm hover:bg-muted cursor-pointer transition-colors"
                  onClick={() => {
                    setSearchQuery(item);
                    setShowSuggestions(false);
                    if (window.innerWidth < 768) {
                      setShowMobileSearch(false);
                    }
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
