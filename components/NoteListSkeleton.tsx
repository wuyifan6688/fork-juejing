import React from "react";

function NoteListSkeleton() {
  return (
    <div className="w-full">
      <ul>
        <li>
          <div className="h-20  bg-black bg-gradient-to-r from-purple-50 to-blue-50  animate-flowWater"></div>
        </li>
      </ul>
    </div>
  );
}

export default NoteListSkeleton;
