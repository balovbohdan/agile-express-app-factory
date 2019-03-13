import {Router as CoreRouter} from 'express-serve-static-core';

import {Container} from '../Container';
import {Router as Entity, Type} from '../../entities/entity';

type BaseProps = {
    name:string;
    core:CoreRouter;
    container:Container;
};

type FromEntityProps = {
    entity:Entity;
    container:Container;
};

export class Router {
    static createFromEntity(props:FromEntityProps):Container {
        const {entity, container} = props;
        const {router:core, spec:{name}} = entity;

        return this.create({ name, core, container });
    }

    static create(props:BaseProps):Container {
        const type = Type.ROUTER;

        const {name, core, container:{path:basePath}} = props;
        const path = basePath + name + '/';

        return { path, core, type, name };
    }
}