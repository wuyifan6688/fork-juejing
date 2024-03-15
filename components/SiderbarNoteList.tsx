import React from "react";
import dayjs from "dayjs";
import SiderbarNoteItem from "@/components/SiderbarNoteItem";
import SiderbarNoteListFilter from "@/components/SiderbarNoteListFilter";

interface noteType {
  title: string;
  content: string;
  updateTime: string;
}
async function SiderbarNoteList({ notes }: any) {
  const sleep = (ms: any) =>
    new Promise((r) => setTimeout(r, ms));
  await sleep(100);
  const arr = Object.entries(notes);
  if (arr.length == 0) return <div>no notes</div>;

  return <SiderbarNoteListFilter note={notes} />;
}

export default SiderbarNoteList;
