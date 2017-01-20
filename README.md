# run-default

run command, with default args if none given

```shell
npm install --save run-default
```

## example

the reason i wrote this module: when i run my [tape](https://www.npmjs.com/package/tape) tests, i either want to run a specific test (or tests), or i want to run all the tests.

so, with this module my `npm test` script is:

```json
{
  "scripts": {
    "test": "run-default tape **/*.test.js --"
  }
}
```

then to run all the tests:

```shell
npm test
````

and to run a specific test:

```shell
npm test -- my-file.test.js
````

## usage

```shell
run-default command ...defaultArgs -- ...args
```

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
