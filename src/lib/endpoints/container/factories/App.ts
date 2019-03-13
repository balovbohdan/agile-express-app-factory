import {Application} from 'express';

import {Container} from '../Container';
import {Type} from '../../entities/entity';
import {Config} from '../../../../configs';

export class App {
    static create(core:Application):Container {
        const path = '/';
        const type = Type.APP;
        const name = Config.EXPRESS_APP_NAME;

        return { path, type, core, name };
    }
}