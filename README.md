To reproduce this webpack issue:

```
npm i
npm run build
npm run test
```

To run the same test with commonjs output from Babel for comparison:
```
npm i
npm run build:babel
npm run test
```

File `main.bundle.js` contains the webpack output after running a build command.

To run `index.js` as a native ES6-module in the browser, use [http-server](https://www.npmjs.com/package/http-server) or a similar tool to serve the root folder and open
`index.html` in Chrome.
