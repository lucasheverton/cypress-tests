# e2e tests with Cypress in version 10

## To login to the platforms, it is necessary:

- **Create a cypress.env.json file with**
```
{
  "userName": "insert",
  "password": "insert"
} 
```

- **Choose base url in cypress.config.js e2e object**

<hr/>

### Install the packages 
```
npm i
```

### Run the tests in the terminal
```
 npx cypress run
```

### Open a browser and view the tests
```
npm run test:open
```
or
```
yarn test:open
```
