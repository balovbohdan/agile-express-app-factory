import {Router as RouterFactory} from 'express';
import {Router as CoreRouter} from 'express-serve-static-core';

import {Router} from '../entity';
import {Container, factories} from '../../container';
import {EntityApplierByContainer} from '../appliers';
import {EntitySpec, RouterSpec} from '../specifiers';

type Props = {
    container:Container;
    routerSpec:RouterSpec;
};

export class RouterCreator {
    static create(props:Props):Promise<Router> {
        const self = new RouterCreator(props);

        return self.create();
    }

    private constructor(props:Props) {
        this.container = props.container;

        this.router = RouterCreator.createRouter(props.routerSpec);
    }

    private async create():Promise<Router> {
        await this.applyEntities();

        return this.router;
    }

    private async applyEntities() {
        const {entities} = this.router.spec;

        const callback = entitySpec => this.applyEntity(entitySpec);

        const promises = entities.map(callback);

        await Promise.all(promises);
    }

    private async applyEntity(entitySpec:EntitySpec) {
        const container = this.createContainer();

        await EntityApplierByContainer.go({ container, entitySpec });
    }

    private createContainer():Container {
        const props = {
            entity: this.router,
            container: this.container
        };

        return factories.Router.createFromEntity(props);
    }

    private static createRouter(spec:RouterSpec):Router {
        const router:CoreRouter = RouterFactory();

        return { spec, router };
    }

    private readonly router:Router;
    private readonly container:Container;
}