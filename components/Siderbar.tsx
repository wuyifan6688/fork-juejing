import React from "react";
import Link from "next/link";
import SiderbarNoteList from "@/components/SiderbarNoteList";
import { getALlNotes } from "@/lib/redis";

async function Siderbar(props: any) {
  const notes = await getALlNotes();
  return (
    <section className=" w-1/3 h-full bg-white">
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
        <SiderbarNoteList
          notes={notes}
        ></SiderbarNoteList>
      </nav>
    </section>
  );
}

export default Siderbar;
