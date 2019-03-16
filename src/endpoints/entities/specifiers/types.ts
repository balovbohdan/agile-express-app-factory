import {List} from 'immutable';

import {Type} from '../entity';

export type Specifiers = List<EntitySpec>;
export type EntitiesSpec = EntitySpec[];
export type EntitySpec = RouterSpec|EndpointSpec;

export type RouterSpec = {
    type:Type;
    path:Path;
    name:string;
    entities:EntitySpec[];
};

export type EndpointSpec = {
    type:Type;
    path:Path;
    name:string;
};

type Path = string|RegExp;