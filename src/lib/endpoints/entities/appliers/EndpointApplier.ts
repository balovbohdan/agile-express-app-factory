import {Endpoint} from '../entity';
import {Container} from '../../container';
import {EndpointSpec} from '../../specifiers';
import {EntityToContainerApplier} from './EntityToContainerApplier';

type Data = {
    container:Container;
    endpointSpec:EndpointSpec;
};

export class EndpointApplier {
    static go(data:Data) {
        const self = new EndpointApplier(data);

        self.go();
    }

    private constructor(data:Data) {
        this.container = data.container;
        this.endpointSpec = data.endpointSpec;
    }

    private go() {
        const props = this.createApplierProps();

        EntityToContainerApplier.go(props);
    }

    private createApplierProps() {
        const container = this.container;

        const entity = this.createEndpoint();

        return { entity, container };
    }

    private createEndpoint():Endpoint {
        const spec = this.endpointSpec;

        const listener = this.createListener();

        return { spec, listener };
    }

    private createListener() {
        const {name:containerName} = this.container;
        const {name:endpointName} = this.endpointSpec;

        return (req, res) => res.send(`Hello from '${containerName}/${endpointName}'.`);
    }

    private readonly container:Container;
    private readonly endpointSpec:EndpointSpec;
}