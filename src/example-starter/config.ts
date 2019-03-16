import {CustomConfig} from '@custom-config';

import {Type} from '@entities/entity';
import {EntitiesSpec} from '@entities/specifiers/types';

export const getConfig = ():CustomConfig => ({
    port: 9009,
    specifiers: getSpecifiers()
});

const getSpecifiers = ():EntitiesSpec => ([
    {
        name: 'foo',
        path: '/fo?o',
        type: Type.ENDPOINT
    },
    {
        name: 'router',
        path: '/router',
        type: Type.ROUTER,
        entities: [
            {
                name: 'endpoint',
                path: /^\/?(end)?point\/?$/i,
                type: Type.ENDPOINT
            }
        ]
    }
]);