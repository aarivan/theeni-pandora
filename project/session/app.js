console.log('Session');
var app = require('../../express');

app.get('/api/project/session/:name/:value',
    function (req, res) {
    var name = req.params.name;
    var value = req.params.value;
    req.session[name] = value;
    console.log(req.session);
    res.send(req.session);
});
