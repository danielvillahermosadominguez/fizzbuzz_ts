# Environment configuration Typescript and Visual Studio
First of all you need the same than in the configuration for javascript. You can
see the Kata fizzbuzz for js. A summary:
- Create the virtual environment
- Create the package.json
- Install jasmine


On the second hand, we need to configurate typescript.

## Typescript configuration
You need to install typescript in nodejs.
```
npm init 

npm install --save-dev typescript // este es el compilador de linea de comandos
npm i -g typescript // si lo que quieres es instalar a nivel global de maquina

```

You could install the extension in visual code for typescript.

To check if this configurations is working we can create a file main.ts and transpilate it.

```
npx tsc main.ts
```

You could execute the main.js which is result of the transpilation with "node main.js"

## Typescript project configuration

In the next step we're going to configurate a project:
```
npx tsc --init
```

The result will be a file tsconfig.json

``` json
{
"compilerOptions": {
    "target": "es5", <-- you are configurating the type of js. we are going tu use es5 (es5->es6->es2016)
    "module": "commonjs",
    "lib": ["es2015","dom"],
    "allowJs": true,
    "sourceMap": true,
    "rootDir": "./src", <- El directorio donde estará tus .ts
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
    }
}
```

create a "src" folder for the production code.
NOTE: You'll need to exclude some files in your tsconfig.json. If you don't do this change, your tsconfig.json will showed with errors.
  
``` json
  },
  "exclude": ["./dist/**/*", "webpack.config.js"]
}
```

## Install web pack
* webpack is a bundler. it will convert your module and dependencies in a single file.
* webpack-cli is a tool with commands to manage webpack
* webpack-dev-server. It is only for developers. It is a server which group your project if you change code
* ts-loader. This tool tranform your typescript code into javascript code.
```
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev ts-loader
```

At the end, you must create a file "webpack.config.js" to configurate webpack.
``` typescript
const path = require('path');
module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "src")
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```

How you can see, we are using as entry point the file "index.ts". You can create it with for example this example code.
``` ts
function hi( nombre: string){
    console.log("Hello " + nombre);
}

hi("Dani");
```

Now you could write in the console:
``` console
npx webpack --config=webpack.config.js

```
Then it will apeair a new folder with the javascript transpilation.

If you execute this bundle, you can see same result:
Si lo ejecutas, verás que funcoina igual
```
node dist/bundle.js   
```

We can configurate in the file package.json a script to build and make a build easier ( the test script, we will configurate it in other step)

```
...
  "scripts": {
        "build": "npx webpack --config=webpack.config.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
...
```
You can run the script with the following command: npm run build. 
Remember:
npx => to execute tools in your environment
npm run=> to execute scripts defined in the package.json
node => to execute javascript code
## Install jasmine

```
npm install --save-dev jasmine-core
npm install --save-dev jasmine @types/jasmine
npm install --save-dev ts-node jasmine-ts
npm install --save-dev jasmine-spec-reporter
```
- jasmine is the framework for tests
- @types/jasmine contains the definition of jamsine to use with typescript
- ts-node. It is the "node" for typescript.
- jasmine-ts. Enables the use of jasmine with ts-node
- jasmine-spec-reporter: enables a best reporting for the output in jasmine

After install it, you need to initialize jasmine and you will have a new configuration file.
```
npx jasmine init
```
This new configuraiton file will be created in spec/support/jasmine.json. You should to include a new reporter and a correct way to find the specs. You have an example:
``` json
{
    "reporters": [
      {
        "name": "jasmine-spec-reporter#SpecReporter",
        "options": {
          "displayStacktrace": "all"
        }
      }
    ],
    "spec_dir": "spec",
    "spec_files": ["**/*[sS]pec.ts"]
  }
```

Now you could execute jasmine.

```
npx ts-node ./node_modules/jasmine/bin/jasmine  

```

And include it in the Script test in package.json

``` json
...
 "scripts": {
    "build": "npx webpack --config=webpack.config.js",
    "test": "npx ts-node ./node_modules/jasmine/bin/jasmine  "
  },
  ...

```
Writing "npm test" you can execute the jasmine tests in your project

## Configure Visual Studio Code
We can add a configuration with Run->Add configuration->
``` json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "type": "node-terminal",
            "request": "launch",
            "name": "Run Jasmine Tests",
           "command": "npm test",
        }
    ]
}
```