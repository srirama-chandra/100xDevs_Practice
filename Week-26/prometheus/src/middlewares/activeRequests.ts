import type { NextFunction, Request, Response } from 'express';
import client from 'prom-client';

const activeRequestGauge = new client.Gauge({
    name: "active_requests",
    help: "This Metric Helps You To Track The Current Active Requests",
    labelNames: ["method", "route"]
});

export const activeRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    activeRequestGauge.inc({
        method: req.method,
        route: req.path
    });

    res.on('finish', () => {
        setTimeout(() => {
            activeRequestGauge.dec({
                method: req.method,
                route: req.path
            })
        }, 10000);
    });
    next();
}