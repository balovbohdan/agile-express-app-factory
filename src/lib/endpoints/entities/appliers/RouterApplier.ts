import {Container} from '../../container';
import {RouterCreator} from '../creators';
import {RouterSpec} from '../../specifiers';
import {EntityToContainerApplier} from './EntityToContainerApplier';

type Props = {
    container:Container;
    routerSpec:RouterSpec;
};

export class RouterApplier {
    static async go(props:Props) {
        const self = new RouterApplier(props);

        await self.go();
    }

    private constructor(props:Props) {
        this.props = props;
    }

    private async go() {
        const props = await this.createApplierProps();

        await EntityToContainerApplier.go(props);
    }

    private async createApplierProps() {
        const {container} = this.props;

        const entity = await RouterApplier.createSubRouter(this.props);

        return { entity, container };
    }

    private static createSubRouter(props:Props) {
        return RouterCreator.create(props);
    }

    private readonly props:Props;
}