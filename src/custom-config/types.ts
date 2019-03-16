import {EntitiesSpec} from '../endpoints/entities/specifiers/types';

export type Config = Readonly<{
    port:number;
    specifiers:EntitiesSpec;
}>;

export type CustomConfig = Readonly<{
    port?:number;
    specifiers:EntitiesSpec;
}>;