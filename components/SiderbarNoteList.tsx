import React from "react";
import dayjs from "dayjs";
import SiderbarNoteItem from "@/components/SiderbarNoteItem";

interface noteType {
  title: string;
  content: string;
  updateTime: string;
}
async function SiderbarNoteList({ notes }: any) {
  const sleep = (ms: any) =>
    new Promise((r) => setTimeout(r, ms));
  await sleep(5000);
  const arr = Object.entries(notes);
  if (arr.length == 0) return <div>no notes</div>;

  return (
    <ul>
      {arr.map(([noteId, note]) => {
        return (
          <li key={noteId}>
            <SiderbarNoteItem
              noteId={noteId}
              note={JSON.parse(note as any)}
            ></SiderbarNoteItem>
          </li>
        );
      })}
    </ul>
  );
}

export default SiderbarNoteList;
