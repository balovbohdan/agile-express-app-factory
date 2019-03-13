import {Router as RouterFactory} from 'express';
import {Router as CoreRouter} from 'express-serve-static-core';

import {Router} from '../entity';
import {Container, factories} from '../../container';
import {EntityApplierByContainer} from '../appliers';
import {EntitySpec, RouterSpec} from '../../specifiers';

export class RouterCreator {
    static create(routerSpec:RouterSpec):Router {
        const self = new RouterCreator(routerSpec);

        return self.create();
    }

    private constructor(routerSpec:RouterSpec) {
        this.router = RouterCreator.createRouter(routerSpec);
    }

    private create():Router {
        this.applyEntities();

        return this.router;
    }

    private applyEntities() {
        const {entities} = this.router.spec;

        for (let entitySpec of entities)
            this.applyEntity(entitySpec);
    }

    private applyEntity(entitySpec:EntitySpec) {
        const container = this.createContainer();

        EntityApplierByContainer.go({ container, entitySpec });
    }

    private createContainer():Container {
        return factories.Router.createFromEntity(this.router);
    }

    private static createRouter(spec:RouterSpec):Router {
        const router:CoreRouter = RouterFactory();

        return { spec, router };
    }

    private readonly router:Router;
}