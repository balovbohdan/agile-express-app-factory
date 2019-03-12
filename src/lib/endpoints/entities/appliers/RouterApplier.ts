import {Router} from '../entity';
import {Container} from '../../container';
import {RouterCreator} from '../creators';
import {RouterSpec} from '../../specifiers';
import {EntityToContainerApplier} from './EntityToContainerApplier';

type Props = {
    container:Container;
    routerSpec:RouterSpec;
};

export class RouterApplier {
    static go(props:Props) {
        const self = new RouterApplier(props);

        self.go();
    }

    private constructor(props:Props) {
        this.container = props.container;
        this.routerSpec = props.routerSpec;

        this.subRouter = RouterApplier.createSubRouter(this.routerSpec);
    }

    private go() {
        const entity = this.subRouter;
        const container = this.container;

        const props = { entity, container };

        EntityToContainerApplier.go(props);
    }

    private static createSubRouter(routerSpec:RouterSpec) {
        return RouterCreator.create(routerSpec);
    }

    private readonly subRouter:Router;
    private readonly container:Container;
    private readonly routerSpec:RouterSpec;
}