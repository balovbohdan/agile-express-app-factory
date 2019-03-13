import {Router as CoreRouter} from 'express-serve-static-core';

import {Container} from '../Container';
import {Router as Entity, Type} from '../../entities/entity';

type Props = {
    name:string;
    core:CoreRouter;
};

export class Router {
    static createFromEntity(entity:Entity):Container {
        const {router:core, spec:{name}} = entity;

        return this.create({ name, core });
    }

    static create(props:Props):Container {
        const type = Type.ROUTER;

        const {name, core} = props;

        return { core, type, name };
    }
}