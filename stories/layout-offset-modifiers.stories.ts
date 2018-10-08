import { storiesOf } from '@storybook/angular';
import { select, radios } from '@storybook/addon-knobs';
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
            
            <h1 class="mc-h1">Base margins and paddings</h1>

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
    .add('Margins and padding modifiers', () => ({
        template: `
            <style>
                .border {
                    border: 1px solid black;
                }
                
                .block {
                    height: 200px; width: 200px;
                }
            </style>
            
            <h1 class="mc-h1">Margin and padding modifiers</h1>

            <div class="layout-row block border">
                <div class="flex layout-row">
                    <div class="flex border {{margin}} {{padding}}">{{margin}} <br> {{padding}}</div>
                </div>
            </div>
        `,
        props: {
            margin: radios(
                'Margin modifier',
                utils.toObj(['sm', 'md', 'lg', 'gt-sm', 'gt-md', 'gt-lg'], 'layout-margin-'),
                'layout-margin-md'
            ),
            padding: radios(
                'Padding modifier',
                utils.toObj(['sm', 'md', 'lg', 'gt-sm', 'gt-md', 'gt-lg'], 'layout-padding-'),
                'layout-padding-md'
            )
        }
    }));
