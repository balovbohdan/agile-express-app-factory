import {Container} from '../../container';
import {ListenersApplier} from './listeners';
import {Entity, Endpoint, Router, TypeChecker} from '../entity';

type Props = {
    entity:Entity;
    container:Container;
};

export class EntityToContainerApplier {
    static go(props:Props):Promise<Container> {
        const self = new EntityToContainerApplier(props);

        return self.go();
    }

    private constructor(props:Props) {
        this.entity = props.entity;
        this.container = props.container;
    }

    private async go():Promise<Container> {
        const isEntityRouter = this.isEntityRouter();
        const isEntityEndpoint = this.isEntityEndpoint();

        if (isEntityRouter)
            return this.applyAsRouter();
        else if (isEntityEndpoint)
            return await this.applyAsEndpoint();
        else
            throw new Error(`Failed to resolve entity type.`);
    }

    private applyAsRouter():Container {
        const {router, spec:{path}} = <Router>this.entity;

        this.container.core.use(path, router);

        return this.container;
    }

    private applyAsEndpoint():Promise<Container> {
        const container = this.container;
        const {spec:endpointSpec} = <Endpoint>this.entity;

        return ListenersApplier.go({
            container,
            endpointSpec
        });
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