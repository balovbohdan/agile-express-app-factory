# About
`agile-express-app-factory` is an experimental dynamic Express.js application factory.
This code based on idea of using some global configurations for assembling functional
shreds into application.

**Do notice!** This package is part of agile applications development experiments. For this reason it is
not recommended to use this one in real projects. But you can use it for your own experiments freely.

# Installation
```bash
npm i --save agile-express-app-factory
```

# Usage
```typescript
import {Matrix, Data} from 'matrix-calculus';
import {SingleColMatrixFactory} from 'matrix-calculus/factories';

const valuesRaw:number[] = [2, 5, 3, 6, 2];
const weightsRaw:number[] = [1.7364, .8255, .01672, 1.8354, .5948];

const values:Matrix = SingleColMatrixFactory.create(valuesRaw);
const weights:Matrix = SingleColMatrixFactory.create(weightsRaw);

const weightedValues:Matrix = values.multiplyTermByTerm(weights);
const weightedValuesTransposed:Matrix = weightedValues.transpose();

const serialized:Data = weightedValuesTransposed.getData();

console.log('Transposed weighted values:', serialized);
```

# GitHub repository
https://github.com/balovbohdan/matrix-calculus

# Contributing
Pull requests and forks are welcome. You can use this code freely for your own experiments.
If you have some questions or proposals feel free to write message.

# License
[MIT](https://choosealicense.com/licenses/mit/)