import React from "react";
import NotePreview from "@/components/NotePreview";
import EditButton from "@/components/EditButton";

function Note({ noteId, note }: any) {
  const { title, content, updateTime } = note;
  return (
    <div className="w-5/6 bg-white border-r-2 my-4 ml-2  ">
      <div className="flex justify-around mt-3 items-center">
        <strong className="font-bold  text-3xl">
          {title}
        </strong>
        <small>{updateTime}</small>
        <EditButton noteId={noteId}>
          EDIT
        </EditButton>
      </div>
      <NotePreview noteId={noteId}>
        {content}
      </NotePreview>
    </div>
  );
}

export default Note;
