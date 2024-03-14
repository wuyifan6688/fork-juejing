import React from "react";
import { useFormStatus } from "react-dom";
function SaveButton({ formAction }: any) {
  const { pending } = useFormStatus();
  return (
    <button
      formAction={formAction}
      type="submit"
      disabled={pending}
      className=" p-2 bg-amber-600 font-bold text- xl text-white rounded-lg px-5  "
    >
      {pending ? "saving" : "done"}
    </button>
  );
}

export default SaveButton;
