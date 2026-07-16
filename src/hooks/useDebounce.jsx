import { useEffect, useState } from "react";

function useDebounce(text) {
  const [searchInput, setSearchInput] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchInput(text);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return searchInput;
}

export default useDebounce;
