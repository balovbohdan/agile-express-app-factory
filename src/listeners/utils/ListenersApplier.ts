import {ListenersImporter} from './ListenersImporter';
import {Container} from '../../lib/endpoints/container';
import {EndpointSpec} from '../../lib/endpoints/specifiers';
import {Listener} from '../../lib/endpoints/entities/entity';
import {PathCreator} from '../../lib/endpoints/entities/entity/utils';

type Props = {
    container:Container;
    endpointSpec:EndpointSpec;
};

export class ListenersApplier {
    static go(props:Props) {
        const self = new ListenersApplier(props);

        return self.go();
    }

    private constructor(props:Props) {
        this.props = props;
    }

    private async go() {
        const listeners = await this.importListeners();

        for (let method in listeners)
            if (listeners.hasOwnProperty(method))
                this.applyListener(method, listeners[method]);
    }

    private applyListener(method:string, listener:Listener) {
        const {core} = this.props.container;

        const path = this.getEndpointPath();

        core[method](path, listener);
    }

    private getEndpointPath() {
        const {container, endpointSpec:entitySpec} = this.props;

        return PathCreator.create({
            container,
            entitySpec
        });
    }

    private importListeners() {
        return ListenersImporter.import(this.props);
    }

    private readonly props:Props;
}