let { exec } = require('child_process');

it('is linted', (done) => {
    exec('jshint app.js', (err, stdout, stderr) => {
        expect(stdout).toBeFalsy();
        done();
    });    
})
