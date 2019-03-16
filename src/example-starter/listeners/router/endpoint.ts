import {Request, Response} from 'express';

export const get = (req:Request, res:Response) => {
    res.send('Hello from `listeners/router/endpoint.ts`. Method: GET.');
};

export const post = (req:Request, res:Response) => {
    res.send('Hello from `listeners/router/endpoint.ts`. Method: POST.');
};