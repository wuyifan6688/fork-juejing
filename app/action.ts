"use server";
import { z } from "zod";
import {
  addNote,
  delNote,
  updataNote,
} from "@/lib/redis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const sleep = (ms: any) =>
  new Promise((r) => setTimeout(r, ms));
const schema = z.object({
  title: z.string(),
  content: z
    .string()
    .min(1, "请写内容")
    .max(100, "字数最多100"),
});
export async function saveNote(
  prevState: any,
  formData: any,
) {
  const noteId = formData.get("noteId");
  const data = {
    title: formData.get("title"),
    content: formData.get("body"),
    updateTime: new Date(),
  };

  const validated = schema.safeParse(data);
  if (!validated.success)
    return { error: validated.error.issues };
  await sleep(2000);
  console.log(noteId, "pp");
  if (noteId) {
    await updataNote(
      noteId,
      JSON.stringify(data),
    );
    revalidatePath("/", "layout");
  } else {
    await addNote(JSON.stringify(data));
    revalidatePath("/", "layout");
  }

  return {
    message: "add success",
  };
}

export async function deleteNote(
  prevState: any,
  formData: any,
) {
  const noteId = formData.get("noteId");
  delNote(noteId);
  revalidatePath("/", "layout");
  redirect("/");
}
