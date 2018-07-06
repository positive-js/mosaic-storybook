const path = require('path');
const fs = require('fs-extra');

const { publish } = require('gh-pages');

fs.copySync('./favicon.ico', './storybook-static/favicon.ico');

const dir = path.resolve(path.join(__dirname, '../', 'storybook-static'));

publish(dir, {
        user: {
            name: 'PTSecurity'
        },
        message: '(deploy): CI'
    },
    (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('success published');
    });
