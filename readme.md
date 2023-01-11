# Testes e2e com Cypress na versão 10

## To login to the platforms, it is necessary:

- **create a cypress.env.json file with**
```
{
  "userName": "insert",
  "password": "insert"
} 
```

- **choose base url in cypress.config.js e2e object**

### install the packages 
```
npm i
```

### run the tests in the terminal
```
 npx cypress run
```

### open a browser and view the tests
```
npm run test:open
```
```
yarn test:open
```
