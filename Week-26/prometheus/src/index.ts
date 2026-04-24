import express from 'express';
import client from 'prom-client';
import { responseDurationMiddleware } from './middlewares/responseDuration.js';
import { activeRequestMiddleware } from './middlewares/activeRequests.js';
import { requestCounterMiddleware } from './middlewares/requestCounter.js';

const app = express();
app.use(express.json());

app.get('/',responseDurationMiddleware, activeRequestMiddleware, requestCounterMiddleware, (req, res) => {
    return res.status(200).json({
        message: "Hello Word"
    })
});

app.post('/name', responseDurationMiddleware, activeRequestMiddleware, requestCounterMiddleware, (req, res) => {
    const { name } = req.body;
    return res.status(200).json({
        name
    })
})

app.get('/metrics', async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics)
});

app.listen(3000, () => {
    console.log("Listening On Port 3000");
})