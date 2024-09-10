import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/demo",async (c)=>{

  const body = await c.req.json();
  const token = c.req.header("Authorization");
  const param = c.req.query("param");

  console.log(body);
  console.log(token);
  console.log(param);

  return c.text("All Done");

})

export default app
