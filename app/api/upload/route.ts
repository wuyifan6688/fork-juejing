import {
  stat,
  mkdir,
  writeFile,
} from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import mime from "mime";
import dayjs from "dayjs";
import { addNote } from "@/lib/redis";
import * as process from "process";

export async function POST(request: any) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file)
    return NextResponse.json(
      {
        error: "file is required",
      },
      { status: 400 },
    );

  const buffer = Buffer.from(
    await file.arrayBuffer(),
  );
  const relativeUploadDir = `/uploads/${dayjs().format("YY-MM-DD")}`;
  const uploadDir = join(
    process.cwd(),
    "public",
    relativeUploadDir,
  );

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code == "ENOENT")
      await mkdir(uploadDir, { recursive: true });
    else {
      console.error(e);
      return NextResponse.json(
        {
          error: "wrong",
        },
        {
          status: 500,
        },
      );
    }
  }

  try {
    const uniqueSuffix = `${Math.random().toString(36).slice(-6)}`;
    const filename = file.name.replace(
      /\.[^/.]+$/,
      "",
    );
    const uniqueFilename = `${filename}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
    await writeFile(
      `${uploadDir}/${uniqueFilename}`,
      buffer,
    );

    const res = await addNote(
      JSON.stringify({
        title: filename,
        content: buffer.toString("utf-8"),
      }),
    );

    revalidatePath("/", "layout");
    return NextResponse.json({
      fileUrl: `${relativeUploadDir}/${uniqueFilename}`,
      uid: res,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "wrong" },
      { status: 500 },
    );
  }
}
