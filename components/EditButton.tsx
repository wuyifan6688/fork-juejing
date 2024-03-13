import React from "react";
import Link from "next/link";

function EditButton({ noteId, children }: any) {
  return (
    <Link href={`/note/edit/${noteId}`}>
      <button className="font-bold text-blue-400 border-cyan-200  border-2 rounded-2xl py-2 px-3">
        {children}
      </button>
    </Link>
  );
}

export default EditButton;
