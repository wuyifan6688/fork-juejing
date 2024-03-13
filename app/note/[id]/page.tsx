import React from "react";
import { getNote } from "@/lib/redis";
import Note from "@/components/Note";

async function Page({ params }: any) {
  const noteId = params.id;
  const note = await getNote(noteId);

  const sleep = (ms: any) =>
    new Promise((r) => setTimeout(r, ms));
  await sleep(5000);
  if (note == null) {
    return (
      <div>
        <span>click a note</span>
      </div>
    );
  }

  return (
    <Note noteId={noteId} note={note}></Note>
  );
}

export default Page;
