import * as cloneDeep from 'clone-deep';

import {Config, CustomConfig} from './types';

export const create = (config:CustomConfig):Config => {
    config = cloneDeep(config);

    const configAssigned = Object.assign({}, config, def);

    return Object.freeze(configAssigned);
};

const def = Object.freeze({
    port: 9009,
    appName: 'app'
});