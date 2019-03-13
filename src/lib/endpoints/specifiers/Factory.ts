import {List} from 'immutable';

import {specifiers} from '../../../configs';
import {EntitySpec, Specifiers} from './types';

export class Factory {
    static create():Specifiers {
        return List<EntitySpec>(specifiers);
    }
}