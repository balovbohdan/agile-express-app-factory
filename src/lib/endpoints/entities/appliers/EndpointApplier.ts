import {Endpoint} from '../entity';
import {Container} from '../../container';
import {EndpointSpec} from '../../specifiers';
import {EntityToContainerApplier} from './EntityToContainerApplier';

type Data = {
    container:Container;
    endpointSpec:EndpointSpec;
};

export class EndpointApplier {
    static async go(data:Data) {
        const self = new EndpointApplier(data);

        await self.go();
    }

    private constructor(data:Data) {
        this.container = data.container;
        this.endpointSpec = data.endpointSpec;
    }

    private async go() {
        const props = await this.createApplierProps();

        await EntityToContainerApplier.go(props);
    }

    private async createApplierProps() {
        const container = this.container;

        const entity = await this.createEndpoint();

        return { entity, container };
    }

    private async createEndpoint():Promise<Endpoint> {
        const spec = this.endpointSpec;

        return { spec };
    }

    private readonly container:Container;
    private readonly endpointSpec:EndpointSpec;
}