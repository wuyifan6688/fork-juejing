import React from "react";
import dayjs from "dayjs";
function SiderbarNoteList({ notes }: any) {
  const arr = Object.entries(notes);
  if (arr.length == 0) return <div>no notes</div>;
  return (
    <ul>
      {arr.map(([noteId, note]) => {
        const { title, updateTime } = JSON.parse(
          note as any,
        );
        return (
          <li>
            <header>
              <strong>{title}</strong>
              <small>
                {dayjs(updateTime).format(
                  "YYYY-MM-DD hh:mm:ss",
                )}
              </small>
            </header>
          </li>
        );
      })}
    </ul>
  );
}

export default SiderbarNoteList;
