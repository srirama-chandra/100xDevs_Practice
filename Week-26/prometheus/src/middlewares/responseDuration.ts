import type { NextFunction, Request, Response } from 'express';
import client from 'prom-client';

const responseDuration = new client.Histogram({
    name: "request_duration",
    help: "This Metric Helps You Track The Duration Of A Request",
    labelNames: ["method", "route", "statusCode"],
    buckets: [0.1, 5, 10, 30, 50, 100, 1000]
});

export const responseDurationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const endTime = Date.now();

        responseDuration.observe({
            method: req.method,
            route: req.path,
            statusCode: res.statusCode
        }, endTime-startTime);

    })
    next();
}