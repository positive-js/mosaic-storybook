import { makeDecorator } from '@storybook/addons';

import marked from 'marked';
import hljs from 'highlight.js';

import { storyStyles } from './styles.js';


export * from './styles.js';

const defaults = {
    markdown: ''
};

export const withAnyInfo = makeDecorator({
    name: 'withAnyInfo',
    parameterName: 'anyinfo',
    allowDeprecatedUsage: true,
    wrapper: (getStory, context, {options, parameters}) => {
        const storyOptions = parameters || options;
        const mergedOptions = {...defaults, ...options, ...storyOptions};
        return addAnyInfo(getStory, context, mergedOptions);
    }
});

const intro = `
<div id="mrkd-root">

# <!-- STORY -->

### Example

<div class="with-ng-info-example">
<!-- EXAMPLE_TEMPLATE -->
</div>

<!-- MD -->

<!-- STYLES -->

</div>
`;

function addAnyInfo(storyFn, context, infoOptions) {
    let component = storyFn(context);
    const storyTemplate = component.template;

    let result = intro
        .replace('<!-- STORY -->', context.story)
        .replace('<!-- MD -->', infoOptions.markdown);

    try {
        result = renderMarkdown(result, {
            headerPrefix: 'mrkd-',
            highlight: function (code, lang) {
                return hljs.highlight(lang || 'html', code, true).value;
            }
        })
    } catch (error) {
        console.error('Cannot render markdown', error);
    }

    // Replace with numeric code
    result = result
        .replace(/\{/gm, '&#123;')
        .replace(/\}/gm, '&#125;');

    result = result
        .replace('<!-- EXAMPLE_TEMPLATE -->', storyTemplate)
        .replace('<!-- STYLES -->', `<style>${storyStyles}</style>`);

    component.template = result;

    return component;
}

function renderMarkdown(text, options) {
    return marked(text, {...marked.defaults, ...options});
}
