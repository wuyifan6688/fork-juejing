import React, { Suspense } from "react";
import Link from "next/link";
import SiderbarNoteList from "@/components/SiderbarNoteList";
import { getALlNotes } from "@/lib/redis";
import NoteListSkeleton from "@/components/NoteListSkeleton";

async function Siderbar(props: any) {
  const notes = await getALlNotes();
  return (
    <section className=" w-1/5 h-full bg-white">
      <Link
        href={"/"}
        className="flex items-center mt-3 ml-2 "
      >
        <img
          src="/logo.svg"
          width={50}
          className="mr-3"
        ></img>{" "}
        <strong>react notes</strong>
      </Link>
      <section></section>
      <nav>
        <Suspense fallback={<NoteListSkeleton />}>
          {" "}
          <SiderbarNoteList
            notes={notes}
          ></SiderbarNoteList>
        </Suspense>
      </nav>
    </section>
  );
}

export default Siderbar;
