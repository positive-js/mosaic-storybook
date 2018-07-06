import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';


storiesOf('Badges', module)
    .add('badges', () => ({
        template: `
            <style>
                span {
                    margin-right: 15px;
                }
            </style>
            <div>
                <p>
                    <span class="mc-badge">New</span>
                    <span class="mc-badge mc-badge__caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge__light">New</span>
                    <span class="mc-badge mc-badge__light mc-badge__caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge__transparent">New</span>
                    <span class="mc-badge mc-badge__transparent mc-badge__caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge__primary">{{badge_text}}</span>
                    <span class="mc-badge mc-badge__primary mc-badge__caps">{{badge_text_caps}}</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge__warning">New</span>
                    <span class="mc-badge mc-badge__warning mc-badge__caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge__error">New</span>
                    <span class="mc-badge mc-badge__error mc-badge__caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge__success">New</span>
                    <span class="mc-badge mc-badge__success mc-badge__caps">in progress</span>
                </p>
            </div>
        `,
        props: {
            badge_text: text('badge_text', 'New'),
            badge_text_caps: text('badge_text_caps', 'in progress'),
        }
    }));
