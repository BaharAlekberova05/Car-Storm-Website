import { Cover } from "./Cover";
import { useEffect, useState } from "react";

export function CoverDemo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-white dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>
          Welcome To Car Storm {user ? user.user_metadata?.username : ""}
        </Cover>
      </h1>
    </>
  );
}
