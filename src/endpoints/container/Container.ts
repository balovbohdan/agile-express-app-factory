import {Application} from 'express';
import {Router} from 'express-serve-static-core';

import {Type} from '@entities/entity';

export type Container = {
    core:Core;
    type:Type;
    name:string;
    path:string;
};

type Core = Application|Router;