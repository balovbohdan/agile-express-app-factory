import {RouterSpec} from '../../specifiers';
import {RouterCreator} from './RouterCreator';

export class RoutersCreator {
    static create(routersSpec:RouterSpec[]) {
        return routersSpec.map(this.createRouter);
    }

    private static createRouter(routerSpec:RouterSpec) {
        return RouterCreator.create(routerSpec);
    }
}