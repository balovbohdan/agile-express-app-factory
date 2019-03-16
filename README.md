# About
`agile-express-app-factory` is an experimental dynamic Express.js application factory.
This code based on idea of using some global configurations for assembling functional
shreds into application.

**Do notice!** This package is part of agile applications development experiments. For this reason it is
not recommended to use this one in real projects. But you can use it for your own experiments freely.

Represented module has lots of lacks. For example, you can't specify built-in Express.js middlewares.
Theoretically it is possible to add more functionality to `agile-express-app-factory` to fit
all Express.js features. But you can find out this task to be too tough.

So, considering all defects, is there reason to develop so intricate application factory?
Maybe is it better to create application traditional way, without defining independent shreds?
To answer these questions we have to conduct such experiments.

# Installation
```bash
npm i --save agile-express-app-factory
```

# Usage
This example can be found at `/src/example-starter/` package directory.
To start example code run `npm run dev` at your terminal in root directory.

Let's go through example code.

There is directories structure:

```
.
├── index.ts
├── config.ts
├── starter.ts
└── listeners
    ├── foo.ts
    └── router
        └── endpoint.ts
```

```typescript
// config.ts

// Configurations factory.

import {CustomConfig} from '@custom-config';

import {Type} from '@entities/entity';
import {EntitiesSpec} from '@entities/specifiers/types';

export const getConfig = ():CustomConfig => ({
    port: 9009,
    specifiers: getSpecifiers()
});

/**
 * Creates specifiers of the routers.
 * Every router must have appropriate listener module.
 * Modules with listeners must be defined in a special directory.
 * Within this example listeners directory is 'listeners'.
 * 
 * Make notice it is allowed to define route path as string,
 * string pattern and regular expression.
 */
const getSpecifiers = ():EntitiesSpec => ([
    {
        name: 'foo',
        path: '/fo?o',
        type: EntityType.ENDPOINT
    },
    {
        name: 'router',
        path: '/router',
        type: EntityType.ROUTER,
        entities: [
            {
                name: 'endpoint',
                path: /^\/?(end)?point\/?$/i,
                type: EntityType.ENDPOINT
            }
        ]
    }
]);
```

```typescript
// starter.ts

// Creates and starts Express.js application.

import {Application} from 'express';

import {Factory} from '@app-factory';
import {CustomConfig} from '@custom-config';

import {getConfig} from './config';

export const start = () => {
    doStart()
        .catch(console.error);
};

const doStart = async () => {
    const config = getConfig();

    const app = await createApp(config);

    app.listen(config.port);
};

const createApp = (config:CustomConfig):Promise<Application> =>
    AppFactory.create(config);
```

```typescript
// index.ts

import * as starter from './starter';

starter.start();
```

Next step is to create listeners modules for the specified routes.

```typescript
// listeners/foo.ts

// Route path for these listeners is defined as string pattern:
// 'fo?o'

import {Request, Response} from 'express';

export const get = (req:Request, res:Response) => {
    res.send('Hello from `listeners/foo.ts`. Method: GET.');
};

export const post = (req:Request, res:Response) => {
    res.send('Hello from `listeners/foo.ts`. Method: POST.');
};
```

```typescript
// listeners/router/endpoint.ts

// Route path for these listeners is defined as regular expression:
// /^\/?(end)?point\/?$/i

import {Request, Response} from 'express';

export const get = (req:Request, res:Response) => {
    res.send('Hello from `listeners/router/endpoint.ts`. Method: GET.');
};

export const post = (req:Request, res:Response) => {
    res.send('Hello from `listeners/router/endpoint.ts`. Method: POST.');
};
```

# GitHub repository
https://github.com/balovbohdan/agile-express-app-factory

# Contributing
Pull requests and forks are welcome. You can use this code freely for your own experiments.
If you have some questions or proposals feel free to write message.

# License
[MIT](https://choosealicense.com/licenses/mit/)
