"use client";
import React, {
  startTransition,
  useTransition,
} from "react";

import { useRouter } from "next/navigation";

function SidebarImport() {
  const router = useRouter();
  const [isPending, startTransition] =
    useTransition();
  const change = async (e: any) => {
    const fileInput = e.target;
    if (
      !fileInput.files ||
      fileInput.files.length == 0
    ) {
      console.warn("file is empty");
      return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "/api/upload",
        {
          method: "post",
          body: formData,
        },
      );

      if (!response.ok) {
        console.error("wrong");
        return;
      }

      const data = await response.json();
      startTransition(() =>
        router.push(`/note/${data.uid}`),
      );
      startTransition(() => router.refresh());
    } catch (e) {
      console.error(e);
    }

    e.target.type = "text";
    e.target.type = "file";
  };

  return (
    <form
      method="post"
      encType="multipart/form-data"
      className="ml-10"
    >
      <div>
        <label htmlFor="file">
          Import .md File
        </label>
        <input
          id="file"
          type="file"
          name="file"
          multiple
          accept=".md"
          style={{ clipPath: "inset(100%)" }}
          onChange={change}
        />
      </div>
    </form>
  );
}

export default SidebarImport;
