import {Type} from '../lib/endpoints/entities/entity';

export const specifiers = [
    {
        name: 'foo',
        type: Type.ENDPOINT
    },
    {
        name: 'router',
        type: Type.ROUTER,
        entities: [
            {
                name: 'endpoint',
                type: Type.ENDPOINT
            }
        ]
    }
];