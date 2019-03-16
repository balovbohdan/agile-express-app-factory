import {Type} from '../../endpoints/entities/entity/index';
import {EntitiesSpec} from '../../endpoints/entities/specifiers/types';

export const specifiers:EntitiesSpec = [
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