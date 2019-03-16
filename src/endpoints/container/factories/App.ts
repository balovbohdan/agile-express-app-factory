import {Application} from 'express';

import {Config} from '@sewn-configs';
import {Type} from '@entities/entity';

import {Container} from '../Container';

export class App {
    static create(core:Application):Container {
        const path = '/';
        const type = Type.APP;
        const name = Config.APP_NAME;

        return { path, type, core, name };
    }
}