import React from "react";
import dayjs from "dayjs";

function SiderbarNoteItemHeader({
  title,
  updateTime,
}: any) {
  return (
    <header className="flex flex-col">
      <strong>{title}</strong>
      <small>
        {dayjs(updateTime).format(
          "YYYY-MM-DD hh:mm:ss",
        )}
      </small>
    </header>
  );
}

export default SiderbarNoteItemHeader;
