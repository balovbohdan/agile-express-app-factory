import {Application} from 'express';

import {Container} from '../Container';
import {Config} from '../../../configs';
import {Type} from '../../entities/entity';

export class App {
    static create(core:Application):Container {
        const path = '/';
        const type = Type.APP;
        const name = Config.APP_NAME;

        return { path, type, core, name };
    }
}