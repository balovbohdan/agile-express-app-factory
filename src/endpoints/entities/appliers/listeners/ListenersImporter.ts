import {Listener} from '../../entity';
import {Container} from '../../../container';
import {EndpointSpec} from '../../specifiers';

type Props = {
    container:Container;
    endpointSpec:EndpointSpec;
};

type Response = {[key:string]:Listener};

export class ListenersImporter {
    static import(props:Props):Promise<Response> {
        const self = new ListenersImporter(props);

        return self.import();
    }

    private constructor(props:Props) {
        this.container = props.container;
        this.endpointSpec = props.endpointSpec;
    }

    private import() {
        const path = this.createPath();

        return import(path);
    }

    private createPath() {
        const {path} = this.container;
        const {name} = this.endpointSpec;

        return `../../../../listeners` + path + name;
    }

    private readonly container:Container;
    private readonly endpointSpec:EndpointSpec;
}