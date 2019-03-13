import {Method} from '../lib/endpoints/specifiers';
import {Type} from '../lib/endpoints/entities/entity';

export const specifiers = [
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