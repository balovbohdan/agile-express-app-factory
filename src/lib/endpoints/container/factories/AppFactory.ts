import {Application} from 'express';

import {Type} from '../../entities/entity';
import {Config} from '../../../../configs';

export class AppFactory {
    static create(core:Application) {
        const type = Type.APP;
        const name = Config.EXPRESS_APP_NAME;

        return { type, core, name };
    }
}