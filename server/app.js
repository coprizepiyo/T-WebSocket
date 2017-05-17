var app = require('express')(),
		http = require('http').Server(app),
		io = require('socket.io')(http);

app.get('/', function (req, res) {
	res.send('<h1>Welcome Realtime Server</h1>')
});

io.on('connection', function (socket) {
	socket.on('message', function (obj) {
		//io.emit('message', obj);
		console.log(obj);
	});
	socket.emit('news', { hello: 'world' });
});

app.listen(2222, function () {
	console.log('server is running on port 2222');
}) 