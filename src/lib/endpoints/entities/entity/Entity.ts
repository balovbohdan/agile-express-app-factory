import {Request, Response} from 'express';
import {Router as CoreRouter} from 'express-serve-static-core';

import {EndpointSpec, RouterSpec} from '../../specifiers';

export type Entity = Router|Endpoint;

export type Router = {
    spec:RouterSpec;
    router:CoreRouter;
};

export type Endpoint = {
    spec:EndpointSpec;
};

export type Listeners = {[key:string]:Listener};
export type Listener = (req:Request, res:Response)=>void;