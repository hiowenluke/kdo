<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/logo.png" alt="Kdo logo" /></p>
# Kdo

Kdo makes the code clear, easy to read and maintain. You can easily split long code into small functions or files ([why we should do this](#why-small-functions)), execute them via kdo. Kdo requires Node.js 7.6+ for async/await.
<p align="center"><img width="100%" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/demo0.jpg" /></p>
<p align="center"><img width="100%" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/demo1.jpg" /></p>
Kdo itself spreads the code into multiple small functions and files too. [Noapi](https://github.com/hiowenluke/noapi) (a light API framework for Node.js, easily define, I/O and test) is a good usage of Kdo, it is recommended to read its source code.
<p /><p />

## Installation

```sh
npm i kdo --save
```

Test:
```sh
git clone https://github.com/hiowenluke/kdo
cd kdo
npm test
```
<p /><p />

## Examples

See [examples](./examples) to learn more.
<p /><p />

## Why kdo

There are many benefits to using kdo + flow (object or files) instead of plain JavaScript.
<p /><p />

### 1. Easily pass data

![](https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/vs-01-Easily-pass-data.jpg)

#### Left (not good)

The code in main function is complicated, multiple parameters and return values make the code look uncomfortable and not easy to read.

And, the main problem is that the main function performs data dis-assembly and transfer. When we change the input and output parameters of the sub-function, we have to modify the related code of the main function at the same time, which means that the sub-function is not completely encapsulated.
<p /><p />

#### Right (good)

Each of the functions is very concise and the logic is clear and easy to understand.
<p /><p />

#### Examples

* [pass the arguments and data](./examples/01-kdo.do()/08-pass-the-arguments-and-data.js)
* [update the arguments via this.save()](./examples/01-kdo.do()/11-update-the-arguments-via-this.save().js)
* [update the arguments via this.args](./examples/01-kdo.do()/10-update-the-arguments-via-this.args.js)
* [update the arguments via return args](./examples/01-kdo.do()/09-update-the-arguments-via-return-args.js)
<p /><p />

### 2. Clear process control

![](https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/vs-02-Clear-process-control.jpg)

#### Left (not good)

The code that handles flag === 1 is spread across two places, f2 and main. When we change the condition of flag === 1, we need to modify these two places. If the code is long, or these functions spread across many files, then we may miss something.

And, the code in main function will not elegant (yes, writing elegant code is one of my goals).
<p /><p />

#### Right (good)

The condition flag ===1 is met in f2, so the f3 will be ignored. We do not need to add redundant code in main function.
<p /><p />

#### Examples

* [execute all async functions in object](./examples/01-kdo.do()/01-execute-all-async-functions-in-object.js)
* [execute all sync functions in object](./examples/01-kdo.do()/02-execute-all-sync-functions-in-object.js)
* [nest kdo](./examples/01-kdo.do()/03-nest-kdo.js)

* [with options.order](./examples/01-kdo.do()/04-with-options.order.js)
* [with options.order by array](./examples/01-kdo.do()/05-with-options.order-by-array.js)
* [with options.order by template literals](./examples/01-kdo.do()/06-with-options.order-by-template-literals.js)
* [with options.first/last/exclude](./examples/01-kdo.do()/07-with-options.first,last,exclude.js)

* [break the flow](./examples/01-kdo.do()/16-break-the-flow.js)
* [skip if the condition is not met](./examples/01-kdo.do()/19-skip-if-the-condition-is-not-met.js)
* [do not skip if the condition is met](./examples/01-kdo.do()/20-do-not-skip-if-the-condition-is-met.js)
<p /><p />

### 3. Flexible return value

![](https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/vs-03-Flexible-return-value.jpg)

Sometimes, in order to make the code structure clear, we will classify the flow code into multiple files in a multi-level directory.

In the task flow, after a file is processed, if a non-undefined value is returned, kdo will terminate the subsequent processing and return it to the main function.

We do not need to write additional complex code. Yes, if we use plain JavaScript instead of kdo, there must be a lot of redundant code to handle the same logic.
<p /><p />

#### Examples

* [return value](./examples/05-kdo.flow()-or-kdo.dirFn()/09-return-value.js), [09-flow](./examples/05-kdo.flow()-or-kdo.dirFn()/09-flow)
* [return value via this.return](./examples/01-kdo.do()/13-return-value-via-this.return.js)
* [return the specified argument](./examples/01-kdo.do()/14-return-the-specified-argument.js)
* [return all arguments](./examples/01-kdo.do()/15-return-all-arguments.js)
<p /><p />

### 4. Powerful flow files in directories

When we spread our business flows across multiple directories, the management of flows is a big issue. This problem can be easily solved with kdo.
<p /><p />

**(1) Require a directory as a flow object**

Kdo can easily requires the entire directory (including sub-directories) as a flow object. Means, we can split the long code into multiple files in multi-levels directories, without any restrictions.

```js
// require the directory (including sub-directories) as a flow object
const flow = kdo('./01-flow');

const main = async () => {
    // execute all functions in flow object one by one
    // according to the order of the directory name and file name.
    const result = await kdo.do(flow);
    return result;
};

module.exports = main;
```

That means, if our directories and files are like following:
```
/f1
    /f12
        f121.js
        f122.js
    f11.js
    f13.js

/f2   
    f21.js
    f22.js
    
f3.js
```

Then the order of execution will be like following (cool, right?):
```
f11, f121, f122, f21, f22, f3
```

See below examples to learn more.
* [require multiple level directories](./examples/05-kdo.flow()-or-kdo.dirFn()/02-require-multiple-level-directories.js)
<p /><p />

Further more, we can specify the order of execution in index.js under directory, like below:

```js
// index.js

const options = {
    first: 'f3',
    last: ['f7', 'f4'],
    exclude: 'f5',
};

module.exports = kdo.flow(options);
```

See below examples to learn more.
* [with options.first/last/exclude](./examples/05-kdo.flow()-or-kdo.dirFn()/07-with-options.first,last,exclude.js), [07-flow/index.js](./examples/05-kdo.flow()-or-kdo.dirFn()/07-flow/index.js)
<p /><p />

**(2) Require a directory as a independent module**

Kdo can easily requires the entire directory (including sub-directories) as a independent module, the main function does not needs to care about the details of it, just call it.

```js
// index.js

const kdo = require('kdo');

// Kdo.flow() returns a function which does the following:
//         1. Requires the current directory (including sub-directories) as a flow object
//         2. Executes all functions in the flow object one by one
module.exports = kdo.flow();
```

Then require it in main function, and execute it.

```js
// Require the sub-directory as a function which wrapped by kdo.
// Means, the sub-directory is a fully independent module, the main
// function does not needs to care about the details of it, just call it.
const flow = require('./01-flow');

const fn = async () => {
    const args = {a1: 1, a2: 2, a3: 3};

    // Execute the flow function, get the result.
    const result = await flow(args);
    return result;
};

module.exports = fn;
```

See below examples to learn more.
* [require a directory as a independent module](./examples/05-kdo.flow()-or-kdo.dirFn()/01-require-a-directory-as-a-independent-module.js), [01-flow/index.js](./examples/05-kdo.flow()-or-kdo.dirFn()/01-flow/index.js)
<p /><p />

## Why small functions

Why we should split long code into small functions or files? 
<p /><p />

### As "[Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)" said: 

<p width='100%'>
<img src='./doc/img/double-quotes-left.png' width='50px' align='left'>
The worst large applications pitfall is maintaining a huge code base with hundreds of dependencies - such a monolith slows down developers as they try to incorporate new features. Instead, partition your code into components, each gets its own folder or a dedicated codebase, and <b>ensure that each unit is kept small and simple</b>.

Otherwise: When developers who code new features struggle to realize the impact of their change and fear to break other dependent components - deployments become slower and riskier. It's also considered harder to scale-out when all the business units are not separated. 
<img src='./doc/img/double-quotes-right.png' width='50px' align='right'>
</p>
<p /><p />

### MURDER rule

Simply put, this can leads to **MURDER** which is a good thing (the answer comes from [stackOverflow](https://stackoverflow.com/questions/13256453/what-is-the-advantage-of-breaking-a-code-into-several-small-functions-in-c), by John Dibling):

* **M** - Maintainability. Smaller, simpler functions are easier to maintain.
* **U** - Understandability. Simpler functions are easier to understand.
* **R** - Reuseability. Encourages code reuse by moving common operations to a separate function.
* **D** - Debugability. It's easier to debug simple functions than complex ones.
* **E** - Extensibility. Code reuse and maintainability lead to functions that are easier to refactor in 6 months.
* **R** - Regression. Reuse and modularization lead to more effective regression testing.
<p /><p />

### More good articles

* [Unix principle: "Do one thing and do it well"](https://en.wikipedia.org/wiki/Unix_philosophy) — Doug McIlroy
* [Clean Code: "The first rule of functions is that they should be small"](https://medium.com/@huytrongnguyen1985/lessons-learnt-from-the-clean-code-robert-c-martin-cecbe2b09139) — Robert C. Martin
* [Clean Code JavaScript: "Prefer small functions over classes"](https://github.com/ryanmcdermott/clean-code-javascript) — Ryan McDermott
* [The Art of Writing Small and Plain Functions](https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/) — Dmitri Pavlutin
* [12 tips for writing clean and scalable JavaScript](https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20/) — Lukas Gisder-Dubé 
* [“Function calls are expensive” vs. “Keep functions small”](https://stackoverflow.com/questions/11168939/function-calls-are-expensive-vs-keep-functions-small) — Tomasz Nurkiewicz
* [Clean Code vs. Dirty Code: React Best Practices](https://americanexpress.io/clean-code-dirty-code/) — Donavon West
* [JavaScript Best Practices: "Small functions rather than 'smart' functions"](https://www.devbridge.com/articles/javascript-best-practices/) — Tomas Kirda
<p /><p />

## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
