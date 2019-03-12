import {Router as CoreRouter} from 'express-serve-static-core';

import {EndpointSpec, RouterSpec} from '../../specifiers';

export type Entity = Router|Endpoint;

export type Router = {
    spec:RouterSpec;
    router:CoreRouter;
};

export type Endpoint = {
    spec:EndpointSpec;
    listener:(req, res)=>void;
};