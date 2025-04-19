import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";

const app = new Hono();
const kv = await Deno.openKv();


app.get("/", async (c) => {
  console.log(c.req.body)
});

app.get("/foo/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  console.log({ id });

  return c.json({ id });
});
