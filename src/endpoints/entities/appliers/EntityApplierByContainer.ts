import {Type} from '../entity';
import {Container} from '../../container';
import {RouterApplier} from './RouterApplier';
import {EndpointApplier} from './EndpointApplier';
import {EndpointSpec, EntitySpec, RouterSpec} from '../specifiers';

type Props = {
    container:Container;
    entitySpec:EntitySpec;
};

export class EntityApplierByContainer {
    static go(props:Props):Promise<Container> {
        const self = new EntityApplierByContainer(props);

        return self.go();
    }

    private constructor(props:Props) {
        this.container = props.container;
        this.entitySpec = props.entitySpec;
    }

    private async go():Promise<Container> {
        const {type} = this.entitySpec;

        switch (type) {
            case Type.ROUTER:
                return this.applyRouter();

            case Type.ENDPOINT:
                return this.applyEndpoint();
        }

        throw new Error(`Got invalid entity type: ${type}.`);
    }

    private applyRouter():Promise<Container> {
        const container = this.container;
        const routerSpec = <RouterSpec>this.entitySpec;

        return RouterApplier.go({ container, routerSpec });
    }

    private async applyEndpoint():Promise<Container> {
        const container = this.container;
        const endpointSpec = <EndpointSpec>this.entitySpec;

        return EndpointApplier.go({ container, endpointSpec });
    }

    private readonly container:Container;
    private readonly entitySpec:EntitySpec;
}