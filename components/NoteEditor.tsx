"use client";
import React, {
  useEffect,
  useState,
} from "react";
import { useFormState } from "react-dom";
import {
  deleteNote,
  saveNote,
} from "@/app/action";
import SaveButton from "@/components/SaveButton";
import DeleteButton from "@/components/DeleteButton";
import NotePreview from "@/components/NotePreview";
const initialState = { message: "" };
function NoteEditor({
  noteId,
  initialTitle,
  initialBody,
}: any) {
  const [saveState, saveFormAction] =
    useFormState(
      saveNote, //todo 如果不用any会有问题
      initialState,
    );
  const [delState, delFormAction] = useFormState(
    deleteNote as any,
    initialState,
  );

  const [title, setTitle] =
    useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  const isDraft = !noteId;

  useEffect(() => {
    if (saveState.error)
      console.log(saveState.error);
  }, [saveState]);
  return (
    <div className="w-full h-full  flex my-10 overflow-hidden">
      <form className="w-1/2 flex flex-col items-end">
        <div className="flex justify-end mb-5">
          <SaveButton
            formAction={saveFormAction}
          ></SaveButton>
          <DeleteButton
            formAction={delFormAction}
            isDraft={isDraft}
          ></DeleteButton>
        </div>

        <input
          type="text"
          name={title}
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-2/3 h-10 flex items-center ml-10 pl-3 border-blue-300 border-4"
        />
        <textarea
          name="body"
          value={body}
          onChange={(e) =>
            setBody(e.target.value)
          }
          className="w-2/3"
        ></textarea>
      </form>
      <div className="ml-20">
        <h1
          style={{ width: "200px" }}
          className="p-2 text-center    bg-amber-300 rounded-2xl text-3xl mb-3 font-bold text-blue-400  "
        >
          preview
        </h1>

        <h1 className="font-bold text-3xl overflow-hidden max-w-96 ">
          {" "}
          {title}
        </h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}

export default NoteEditor;
