"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import SiderbarNoteItem from "@/components/SiderbarNoteItem";

function SiderbarNoteListFilter({
  note = {},
}: any) {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("q");
  console.log(note, 11);
  return (
    <ul>
      {Object.entries(note).map(
        ([noteId, note]) => {
          const noteData = JSON.parse(
            note as string,
          );
          if (
            !searchText ||
            (searchText &&
              noteData.title
                .toLowerCase()
                .includes(
                  searchText.toLowerCase(),
                ))
          ) {
            return (
              <li key={noteId}>
                <SiderbarNoteItem
                  noteid={noteId}
                  note={JSON.parse(
                    note as string,
                  )}
                ></SiderbarNoteItem>
              </li>
            );
          }
        },
      )}
    </ul>
  );
}

export default SiderbarNoteListFilter;
