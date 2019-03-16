import * as express from 'express';

import {EntityApplierByApp} from '@entities/appliers';
import {EntitiesSpec} from '@entities/specifiers/types';

import {
    Config,
    CustomConfig,
    configFactory
} from '../../configs/custom-config';

type Application = express.Application;

export class Factory {
    static create(config:CustomConfig):Promise<Application> {
        const self = new Factory(config);

        return self.create();
    }

    private constructor(config:CustomConfig) {
        this.app = Factory.createApp();
        this.config = Factory.createConfig(config);
    }

    private async create():Promise<Application> {
        await this.applyEntities();

        return this.app;
    }

    private async applyEntities() {
        const callback = this.applyEntity.bind(this);

        const promises = this.config.specifiers.map(callback);

        await Promise.all(promises);
    }

    private async applyEntity(entitySpec:EntitiesSpec) {
        await EntityApplierByApp.go(this.app, entitySpec);
    }

    private static createConfig(config:CustomConfig):Config {
        return configFactory.create(config);
    }

    private static createApp() {
        return express();
    }

    private readonly config:Config;
    private readonly app:Application;
}