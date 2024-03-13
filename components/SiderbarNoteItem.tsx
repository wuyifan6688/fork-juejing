import React from "react";
import SiderbarNoteItemContent from "@/components/SiderbarNoteItemContent";
import SiderbarNoteItemHeader from "@/components/SiderbarNoteItemHeader";

function SiderbarNoteItem({
  nodeId,
  note = {},
}: any) {
  const {
    title,
    content = "",
    updateTime,
  } = note;

  return (
    <SiderbarNoteItemContent
      id={nodeId}
      title={note.title}
      expandChildren={
        <p>
          {content.substring(0, 20) || (
            <i>(No Content)</i>
          )}
        </p>
      }
    >
      <SiderbarNoteItemHeader
        title={title}
        updateTime={updateTime}
      ></SiderbarNoteItemHeader>
    </SiderbarNoteItemContent>
  );
}

export default SiderbarNoteItem;
