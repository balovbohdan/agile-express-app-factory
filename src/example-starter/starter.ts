import {Application} from 'express';

import {getConfig} from './config';
import {Factory} from '../app/factory';
import {CustomConfig} from '../configs/custom-config';

export const start = () => {
    doStart()
        .catch(console.error);
};

const doStart = async () => {
    const config = getConfig();

    const app = await createApp(config);

    app.listen(config.port);
};

const createApp = (config:CustomConfig):Promise<Application> =>
    Factory.create(config);