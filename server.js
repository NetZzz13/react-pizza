//импортируем именно json-server
const jsonServer = require('json-server');
const server = jsonServer.create();
//указываем БД
const router = jsonServer.router('./public/db.json');
//указываем, что json-server должен вернуть не только БД, но и само приложение
const middlewares = jsonServer.defaults({
  static: './build',
});

//в эту переменную heroku передаёт свой порт
const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
});