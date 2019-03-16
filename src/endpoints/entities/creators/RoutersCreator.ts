import {Container} from '../../container';
import {RouterSpec} from '../specifiers';
import {RouterCreator} from './RouterCreator';

type Props = {
    container:Container;
    routersSpec:RouterSpec[];
};

export class RoutersCreator {
    static create(props:Props) {
        const {container, routersSpec} = props;

        const callback = this.createRouter.bind(this, container);

        return routersSpec.map(callback);
    }

    private static createRouter(container:Container, routerSpec:RouterSpec) {
        return RouterCreator.create({
            container,
            routerSpec
        });
    }
}