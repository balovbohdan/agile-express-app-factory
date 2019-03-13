import {List} from 'immutable';

import {Type} from '../entities/entity';

export type Specifiers = List<EntitySpec>;
export type EntitySpec = RouterSpec|EndpointSpec;

export type RouterSpec = {
    type:Type;
    name:string;
    entities:EntitySpec[];
};

export type EndpointSpec = {
    type:Type;
    name:string;
};