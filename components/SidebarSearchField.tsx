"use client";
import React, { useTransition } from "react";
import {
  usePathname,
  useRouter,
} from "next/navigation";

function SidebarSearchField() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] =
    useTransition();

  function handleSearch(term: any) {
    const params = new URLSearchParams(
      window.location.search,
    );
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }
  return (
    <div>
      <input
        placeholder="search"
        type="text"
        onChange={(e) =>
          handleSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SidebarSearchField;
