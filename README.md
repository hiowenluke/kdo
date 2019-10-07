<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/logo.png" alt="Kdo logo" /></p>
# Kdo

Kdo makes the code clear, easy to read and maintain. You can easily split long code into several small functions ([why we should do this](#why)), execute them via kdo. Kdo requires Node.js 7.6+ for async/await.
<p align="center"><img width="100%" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/demo0.jpg" /></p>
<p align="center"><img width="100%" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/demo1.jpg" /></p>
Kdo itself spreads the code into multiple small functions and files too. [Noapi](https://github.com/hiowenluke/noapi) (a light API framework for Node.js, easily define apis and test cases, easily I/O) is a good usage of Kdo, it is recommended to read its source code.



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



## Examples

See [examples](./examples) to learn more.



## Why

Why we should split long code into several small functions? 



### As "[Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)" said: 

<p style='width:100%; color: #666666'>
<img src='./doc/img/double-quotes-left.png' width='50px' align='left'>
The worst large applications pitfall is maintaining a huge code base with hundreds of dependencies - such a monolith slows down developers as they try to incorporate new features. Instead, partition your code into components, each gets its own folder or a dedicated codebase, and <b>ensure that each unit is kept small and simple</b>.

Otherwise: When developers who code new features struggle to realize the impact of their change and fear to break other dependent components - deployments become slower and riskier. It's also considered harder to scale-out when all the business units are not separated. 
<img src='./doc/img/double-quotes-right.png' width='50px' align='right'>
</p>



### MURDER rule

Simply put, this can leads to **MURDER** which is a good thing (the answer comes from [stackOverflow](https://stackoverflow.com/questions/13256453/what-is-the-advantage-of-breaking-a-code-into-several-small-functions-in-c), by John Dibling):

* **M** - Maintainability. Smaller, simpler functions are easier to maintain.
* **U** - Understandability. Simpler functions are easier to understand.
* **R** - Reuseability. Encourages code reuse by moving common operations to a separate function.
* **D** - Debugability. It's easier to debug simple functions than complex ones.
* **E** - Extensibility. Code reuse and maintainability lead to functions that are easier to refactor in 6 months.
* **R** - Regression. Reuse and modularization lead to more effective regression testing.



### More good articles

* [Unix principle: "Do one thing and do it well"](https://en.wikipedia.org/wiki/Unix_philosophy) — Doug McIlroy
* [Clean Code: "The first rule of functions is that they should be small"](https://medium.com/@huytrongnguyen1985/lessons-learnt-from-the-clean-code-robert-c-martin-cecbe2b09139) — Robert C. Martin
* [Clean Code JavaScript: "Prefer small functions over classes"](https://github.com/ryanmcdermott/clean-code-javascript) — Ryan McDermott
* [The Art of Writing Small and Plain Functions](https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/) — Dmitri Pavlutin
* [12 tips for writing clean and scalable JavaScript](https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20/) — Lukas Gisder-Dubé 
* [“Function calls are expensive” vs. “Keep functions small”](https://stackoverflow.com/questions/11168939/function-calls-are-expensive-vs-keep-functions-small) — Tomasz Nurkiewicz
* [Clean Code vs. Dirty Code: React Best Practices](https://americanexpress.io/clean-code-dirty-code/) — Donavon West
* [JavaScript Best Practices: "Small functions rather than 'smart' functions"](https://www.devbridge.com/articles/javascript-best-practices/) — Tomas Kirda



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
