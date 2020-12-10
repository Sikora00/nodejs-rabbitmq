### Bug reproduce steps
* run rabbitmq with `$ docker-compose up -d `
* serve application requesting for resources `$ npm run nx serve two`
* serve application responding for request `$ npm run nx serve three`
* open app two at http://localhost:3333/api/user multiple times and notice different responses
