import { storiesOf } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';
import * as utils from '../utils';

storiesOf('Layout|Layout Flex\/Offsets', module)
    .add('Base margins and paddings', () => ({
        template: `
            <style>
                .border {
                    border: 1px solid black;
                }
                
                .block {
                    height: 200px; width: 200px;
                }
            </style>
            
            <h1 class="mc-h1">Offset Modifiers</h1>

            <div class="layout-row block border">
                <div class="flex {{modifier}} border">{{modifier}}</div>
            </div>
        `,
        props: {
            modifier: select(
                'Modifier',
                {
                    'layout-margin': 'layout-margin',
                    'layout-padding': 'layout-padding',
                    'layout-fill': 'layout-fill',
                    'layout-margin layout-padding': 'layout-margin layout-padding',
                    'layout-margin layout-padding layout-fill': 'layout-margin layout-padding layout-fill',
                },
                'layout-margin'
            )
        }
    }))
    .add('Margins and paddings with modifiers', () => ({
        template: `
            <style>
                .border {
                    border: 1px solid black;
                }
                
                .block {
                    height: 200px; width: 200px;
                }
            </style>
            
            <h1 class="mc-h1">Offset Modifiers</h1>

            <div class="layout-row block border">
                <div class="flex layout-padding layout-margin{{margin}} border">
                    layout-margin{{margin}}
                </div>
            </div>
        `,
        props: {
            margin: select('Margin', utils.toObj([8, 16, 24, 32, 40, 48], '-'), '_8')
        }
    }));
