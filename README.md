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