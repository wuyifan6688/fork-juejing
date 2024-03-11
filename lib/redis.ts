import Redis from "ioredis";
import exp from "node:constants";
const redis = new Redis();
const initalData = {
  "1702459181837":
    '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837":
    '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837":
    '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}',
};

export async function getALlNotes() {
  const data = await redis.hgetall("notes");
  if (Object.keys(data).length == 0)
    await redis.hset("notes", initalData);
  return await redis.hgetall("notes");
}

export async function updataNote(
  uuid: any,
  data: any,
) {
  await redis.hset("notes", [uuid], data);
}

export async function getNote(
  uuid: any,
  data: any,
) {
  let result = await redis.hget("notes", uuid);
  return JSON.parse(result as string);
}

export async function delNote(uuid: any) {
  return redis.hdel("notes", uuid);
}

export default redis;
