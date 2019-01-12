import { styles } from './styles-hl-github';

export const storyStyles = `
${styles}

#mrkd-root { padding: 0 18px; }

h1[id|="mrkd"] { font-size: 1.75em; }
h2[id|="mrkd"] { font-size: 1.5em; }
h3[id|="mrkd"] { font-size: 1.25em; }


#mrkd-root > .with-ng-info-example {
    border: 2px dashed #ddd;
    padding: 8px;
}

pre {
    padding: 8px;
    background: #eee;
    border-radius: 8px;
}
#mrkd-root > table th,
#mrkd-root > table td,
#mrkd-root > table {
    border-collapse: collapse;
    font-family: sans-serif;
    border: 1px solid #eee;
    text-align: left;
    padding: 12px;
}
`;
