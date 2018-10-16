let { exec } = require('child_process');

it('linting works', (done) => {
    exec('jshint app.js', (err, stdout, stderr) => {
        expect(stdout).toBeFalsy();
        done();
    });
});
