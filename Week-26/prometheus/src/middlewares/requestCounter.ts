import type { NextFunction, Request, Response } from 'express';
import client from 'prom-client';

const requestCounter = new client.Counter({
    name: "request_count",
    help: "This metric helps you monitor the number of applications",
    labelNames: ["method", "route"]
});

export const requestCounterMiddleware = (req: Request, res: Response, next:NextFunction) => {
    requestCounter.inc({
        method: req.method,
        route: req.path
    });
    next();
}