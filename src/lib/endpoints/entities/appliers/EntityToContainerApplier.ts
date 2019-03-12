import {Container} from '../../container';
import {Entity, Endpoint, Router, TypeChecker} from '../entity';

type Props = {
    entity:Entity;
    container:Container;
};

export class EntityToContainerApplier {
    static go(props:Props) {
        const self = new EntityToContainerApplier(props);

        self.go();
    }

    private constructor(props:Props) {
        this.entity = props.entity;
        this.container = props.container;
    }

    private go() {
        const isEntityRouter = this.isEntityRouter();
        const isEntityEndpoint = this.isEntityEndpoint();

        if (isEntityRouter)
            this.applyAsRouter();
        else if (isEntityEndpoint)
            this.applyAsEndpoint();
        else
            throw new Error(`Failed to resolve entity type.`);
    }

    private applyAsRouter() {
        const {router, spec:{name}} = <Router>this.entity;

        this.container.core.use(`/${name}`, router);
    }

    private applyAsEndpoint() {
        const {listener, spec:{name, methods}} = <Endpoint>this.entity;

        const callback = method => this.container.core[method](`/${name}`, listener);

        methods.forEach(callback);
    }

    private isEntityRouter() {
        return TypeChecker.isRouter(this.entity);
    }

    private isEntityEndpoint() {
        return TypeChecker.isEndpoint(this.entity);
    }

    private readonly entity:Entity;
    private readonly container:Container;
}