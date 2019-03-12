import {Container} from './Container';
import {Type} from '../entities/entity';

export class TypeChecker {
    static isRouter(container:Container):boolean {
        return container.type === Type.ROUTER;
    }

    static isApp(container:Container) {
        return container.type === Type.APP;
    }
}