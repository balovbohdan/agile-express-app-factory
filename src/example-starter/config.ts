import {Type} from '../endpoints/entities/entity';
import {CustomConfig} from '../configs/custom-config';
import {EntitiesSpec} from '../endpoints/entities/specifiers/types';

export const getConfig = ():CustomConfig => ({
    port: 9009,
    specifiers: getSpecifiers()
});

/**
 * Creates specifiers of the routers.
 * Every router must have appropriate listener module.
 * Modules with listeners must be defined in a special directory.
 * Within this example listeners directory is '/src/example-starter/listeners/'.
 */
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