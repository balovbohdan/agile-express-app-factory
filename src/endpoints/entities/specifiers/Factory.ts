import {List} from 'immutable';

import {EntitiesSpec, EntitySpec, Specifiers} from './types';

export class Factory {
    static create(raw:EntitiesSpec):Specifiers {
        return List<EntitySpec>(raw);
    }
}