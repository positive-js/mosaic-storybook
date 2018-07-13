const path = require('path');
const fs = require('fs-extra');

const { publish } = require('gh-pages');


fs.copySync('./favicon.ico', './storybook-static/favicon.ico');

fs.copySync('./node_modules/@ptsecurity/mosaic-icons/dist/fonts/mc-icons.woff', './storybook-static/fonts/mc-icons.woff');


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
