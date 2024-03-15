"use client";
import React, {
  Children,
  ReactElement,
  ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";
import SiderbarNoteItem from "@/components/SiderbarNoteItem";

interface filterInterface {
  children: ReactElement[];
}
function SiderbarNoteListFilter({
  children,
}: filterInterface) {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("q");

  return (
    <ul>
      {Children.map(
        children,
        (child: ReactElement, index) => {
          const title = child!.props.title;
          if (
            !searchText ||
            (searchText &&
              title
                .toLowerCase()
                .includes(
                  searchText.toLowerCase(),
                ))
          ) {
            return <li key={index}>{child}</li>;
          }
          return null;
        },
      )}
    </ul>
  );
}

export default SiderbarNoteListFilter;
