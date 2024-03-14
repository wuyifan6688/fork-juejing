import React from "react";
import { getNote } from "@/lib/redis";
import NoteEditor from "@/components/NoteEditor";

async function Page({ params }: any) {
  const id = params.id;
  const note = await getNote(id);

  if (note == null) return <div>click left</div>;
  return (
    <NoteEditor
      noteId={id}
      initialTitle={note.title}
      initialBody={note.content}
    ></NoteEditor> //todo ts用的any,传参数没提示
  );
}

export default Page;
