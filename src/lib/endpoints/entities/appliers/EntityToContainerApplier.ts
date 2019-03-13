import {Container} from '../../container';
import {ListenersApplier} from '../../../../listeners/utils';
import {Entity, Endpoint, Router, TypeChecker} from '../entity';

type Props = {
    entity:Entity;
    container:Container;
};

export class EntityToContainerApplier {
    static async go(props:Props) {
        const self = new EntityToContainerApplier(props);

        await self.go();
    }

    private constructor(props:Props) {
        this.entity = props.entity;
        this.container = props.container;
    }

    private async go() {
        const isEntityRouter = this.isEntityRouter();
        const isEntityEndpoint = this.isEntityEndpoint();

        if (isEntityRouter)
            this.applyAsRouter();
        else if (isEntityEndpoint)
            await this.applyAsEndpoint();
        else
            throw new Error(`Failed to resolve entity type.`);
    }

    private applyAsRouter() {
        const {router, spec:{name}} = <Router>this.entity;

        this.container.core.use(`/${name}`, router);
    }

    private async applyAsEndpoint() {
        const container = this.container;
        const {spec:endpointSpec} = <Endpoint>this.entity;

        await ListenersApplier.go({
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