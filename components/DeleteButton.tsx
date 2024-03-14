import React from "react";

function DeleteButton({
  isDraft,
  formAction,
}: any) {
  if (!isDraft)
    return (
      <button
        formAction={formAction}
        className="ml-2 p-2 bg-amber-600 font-bold text- xl text-white rounded-lg px-5  "
      >
        DELETE
      </button>
    );
}

export default DeleteButton;
