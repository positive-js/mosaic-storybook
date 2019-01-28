import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';


storiesOf('Indicators|Badges', module)
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
                    <span class="mc-badge mc-badge_caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge_light">New</span>
                    <span class="mc-badge mc-badge_light mc-badge_caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge_transparent">New</span>
                    <span class="mc-badge mc-badge_transparent mc-badge_caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge_primary">{{badge_text}}</span>
                    <span class="mc-badge mc-badge_primary mc-badge_caps">{{badge_text_caps}}</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge_warning">New</span>
                    <span class="mc-badge mc-badge_warning mc-badge_caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge_error">New</span>
                    <span class="mc-badge mc-badge_error mc-badge_caps">in progress</span>
                </p>
                
                <p>
                    <span class="mc-badge mc-badge_success">New</span>
                    <span class="mc-badge mc-badge_success mc-badge_caps">in progress</span>
                </p>
            </div>
        `,
        props: {
            badge_text: text('badge_text', 'New'),
            badge_text_caps: text('badge_text_caps', 'in progress'),
        }
    }));
