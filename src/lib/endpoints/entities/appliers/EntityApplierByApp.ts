import {Application} from 'express';

import {EntitySpec} from '../../specifiers';
import {factories, Container} from '../../container';
import {EntityApplierByContainer} from './EntityApplierByContainer';

export class EntityApplierByApp {
    static async go(app:Application, entitySpec:EntitySpec) {
        const self = new EntityApplierByApp(app, entitySpec);

        await self.go();
    }

    private constructor(app:Application, entitySpec:EntitySpec) {
        this.app = app;
        this.entitySpec = entitySpec;
    }

    private async go() {
        const props = this.createApplierProps();

        await EntityApplierByContainer.go(props);
    }

    private createApplierProps() {
        const container = this.createContainer();

        const entitySpec = this.entitySpec;

        return { container, entitySpec };
    }

    private createContainer():Container {
        return factories.App.create(this.app);
    }

    private readonly app:Application;
    private readonly entitySpec:EntitySpec;
}