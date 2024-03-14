import React from "react";
import NoteEditor from "@/components/NoteEditor";

function Page() {
  return (
    <NoteEditor
      noteId={null}
      initialTitle="Untitled"
      initialBody=""
    ></NoteEditor>
  );
}

export default Page;
