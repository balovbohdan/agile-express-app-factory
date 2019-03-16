import {Application} from 'express';

import {EntitySpec} from '../../specifiers';
import {factories, Container} from '../../container';
import {EntityApplierByContainer} from './EntityApplierByContainer';

export class EntityApplierByApp {
    static go(app:Application, entitySpec:EntitySpec):Promise<Application> {
        const self = new EntityApplierByApp(app, entitySpec);

        return self.go();
    }

    private constructor(app:Application, entitySpec:EntitySpec) {
        this.app = app;
        this.entitySpec = entitySpec;
    }

    private async go():Promise<Application> {
        const props = this.createApplierProps();

        const {core} = await EntityApplierByContainer.go(props);

        return <Application>core;
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