import {List} from 'immutable';

import {Method} from './Method';
import {Type} from '../entities/entity';

export type EntitySpec = RouterSpec|EndpointSpec;

export type RouterSpec = {
    type:Type;
    name:string;
    entities:EntitySpec[];
};

export type EndpointSpec = {
    type:Type;
    name:string;
    methods:Method[];
};

const raw = [
    {
        name: 'foo',
        type: Type.ENDPOINT,
        methods: [Method.GET]
    },
    {
        name: 'browser',
        type: Type.ROUTER,
        entities: [
            {
                name: 'main',
                type: Type.ENDPOINT,
                methods: [Method.GET]
            },
            {
                name: 'home',
                type: Type.ROUTER,
                entities: [
                    {
                        name: 'base-data',
                        type: Type.ROUTER,
                        entities: [
                            {
                                name: 'getter',
                                type: Type.ENDPOINT,
                                methods: [Method.GET]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const specifiers = List<EntitySpec>(raw);