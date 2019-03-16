import {ListenersImporter} from './ListenersImporter';
import {Container} from '../../lib/endpoints/container';
import {EndpointSpec} from '../../lib/endpoints/specifiers';
import {Listener} from '../../lib/endpoints/entities/entity';

type Props = {
    container:Container;
    endpointSpec:EndpointSpec;
};

export class ListenersApplier {
    static go(props:Props):Promise<Container> {
        const self = new ListenersApplier(props);

        return self.go();
    }

    private constructor(props:Props) {
        this.props = props;
    }

    private async go():Promise<Container> {
        await this.doGo();

        return this.props.container;
    }

    private async doGo() {
        const listeners = await this.importListeners();

        for (let method in listeners)
            if (listeners.hasOwnProperty(method))
                this.applyListener(method, listeners[method]);
    }

    private applyListener(method:string, listener:Listener) {
        const {container:{core}, endpointSpec:{name}} = this.props;

        core[method](`/${name}`, listener);
    }

    private importListeners() {
        return ListenersImporter.import(this.props);
    }

    private readonly props:Props;
}