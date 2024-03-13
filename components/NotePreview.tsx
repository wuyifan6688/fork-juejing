import React from "react";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
function NotePreview({ children }: any) {
  const allowedTags =
    sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
    ]);
  const allowedAttributes = Object.assign(
    {},
    sanitizeHtml.defaults.allowedAttributes,
    {
      img: ["alt", "src"],
    },
  );
  return (
    <div className="ml-20">
      <div
        className="text-with-markdown"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(
            marked(children || "") as string,
            {
              allowedTags,
              allowedAttributes,
            },
          ),
        }}
      />
    </div>
  );
}

export default NotePreview;
