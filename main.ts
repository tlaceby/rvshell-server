import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello from root!");
});

app.get("/foo/:id", (c) => {
  const id = parseInt(c.req.param("id"));
  console.log({ id });

  return c.json({ id });
});

Deno.serve(app.fetch);
