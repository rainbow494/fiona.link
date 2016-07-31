var express = require('express');
var app = express();

var exec = require('child_process').exec;
var path = require('path');

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.post('/payload', function(req, res) {
    console.log('payload');
    res.send('payload');

});

app.get('/pull', function(req, res) {
    console.log('pull');

    var cmd = 'pull';
    var projectPath = path.resolve('f:/gthub/fiona.link-mirror');
    git(cmd, projectPath);

    res.send('payload');
});

function git(cmd, projectPath) {

    console.log('-----------------------------------------');

    cmd = "git " + cmd + " -v --progress origin";
    execCmd(cmd, projectPath);
}

function execCmd(cmd, projectPath) {
    var execPath = path.relative(process.cwd(), projectPath);

    var child = exec(cmd, { cwd: execPath });

    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.stderr.on('data', function(data) {
        console.log('stdout: ' + data);

    });
    child.on('close', function(code) {
        console.log('closing code: ' + code);
    });
}


// app.get('/payload', function(req, res) {
//     console.log('payload');
//     res.send('payload');
// });

// app.put('/payload', function(req, res) {
//     console.log('payload');
//     res.send('payload');
// });

app.listen(4041);