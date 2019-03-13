import {Type} from '../entity';
import {Container} from '../../container';
import {RouterApplier} from './RouterApplier';
import {EndpointApplier} from './EndpointApplier';
import {EndpointSpec, EntitySpec, RouterSpec} from '../../specifiers';

type Props = {
    container:Container;
    entitySpec:EntitySpec;
};

export class EntityApplierByContainer {
    static async go(props:Props) {
        const self = new EntityApplierByContainer(props);

        await self.go();
    }

    private constructor(props:Props) {
        this.container = props.container;
        this.entitySpec = props.entitySpec;
    }

    private async go() {
        const {type} = this.entitySpec;

        switch (type) {
            case Type.ROUTER:
                await this.applyRouter();
                break;

            case Type.ENDPOINT:
                await this.applyEndpoint();
                break;

            default:
                EntityApplierByContainer.throwInvalidEntityType(type);
        }
    }

    private async applyRouter() {
        const container = this.container;
        const routerSpec = <RouterSpec>this.entitySpec;

        await RouterApplier.go({ container, routerSpec });
    }

    private async applyEndpoint() {
        const container = this.container;
        const endpointSpec = <EndpointSpec>this.entitySpec;

        await EndpointApplier.go({ container, endpointSpec });
    }

    private static throwInvalidEntityType(type:Type):never {
        throw new Error(`Got invalid entity type: ${type}.`);
    }

    private readonly container:Container;
    private readonly entitySpec:EntitySpec;
}