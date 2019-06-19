# Whitebox Challenge React Client
[![Netlify Status](https://api.netlify.com/api/v1/badges/570c35dc-0ba8-47b7-9465-c0979a1f1dab/deploy-status)](https://app.netlify.com/sites/whitebox-react-client/deploys)

## Instructions for client portion of challenge
1. Create a SPA which wires up the static HTML given in the repo (You can use (or not) any framework you're comfortable with).
2. Wire up includes any search, sort or filters you see
3. The SPA should have 2 pages, a list all products, and an individual product page. Both HTML templates are provided.

All of the static html and css files were provided in this [repo](https://github.com/whitebox-co/code-challenge). I've focused on client/server javascript interaction and functionality so I have not updated any html structure unless it was necessary to convert it to a react component. I'm planning to refactor some of this html but that will require changing css as well. I've separated the client and server into individual repos so that I could use the same server to practice different client side frameworks in the future. The code for the server is in this [repo](https://github.com/asasmith/whitebox-challenge-server)

I avoided using [create-react-app](https://github.com/facebook/create-react-app) for this project opting instead to use and learn more about webpack.

### Install
```
npm install
```

### Run dev enviroment (requires running [server](https://github.com/asasmith/whitebox-challenge-server) locally)
```
npm run start
```
[http://localhost:8080/products](http://localhost:8080/products)

### Todos
- [X] project brief
- [ ] add tests
- [ ] fix css dependencies
- [ ] check eslint a11y errors
- [ ] add loading indicator
- [ ] refactor webpack config