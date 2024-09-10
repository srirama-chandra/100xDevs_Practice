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

app.get('/red',async (c)=>{
  return c.html(`<body style="background-color:#f18973"></body>`)
});

app.get('/blue',async (c)=>{
  return c.html(`<body style="background-color:#80ced6"></body>`)
});

app.get('/green',async (c)=>{
  return c.html(`<body style="background-color:#90EE90"></body>`)
});

export default app
