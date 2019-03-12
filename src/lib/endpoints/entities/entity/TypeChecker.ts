import {Type} from './Type';
import {Entity} from './Entity';

export class TypeChecker {
    static isRouter(entity:Entity) {
        return entity.spec.type === Type.ROUTER;
    }

    static isEndpoint(entity:Entity) {
        return entity.spec.type === Type.ENDPOINT;
    }
}