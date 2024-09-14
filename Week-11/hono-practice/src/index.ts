import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/welcome', (c) =>{
    const queryParam = c.req.query("name");
    return c.text('Welcome '+queryParam);
});

app.post('/postrequest',async (c) => {
    const body = await c.req.json();
    return c.json({body,});
})

export default app
