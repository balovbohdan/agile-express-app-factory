import {Container} from '../../../container';
import {EntitySpec} from '../../../specifiers';

type Props = {
    container:Container;
    entitySpec:EntitySpec;
};

export class PathCreator {
    static create(props:Props) {
        const {name} = props.entitySpec;
        const {path} = props.container;

        return path + name;
    }
}