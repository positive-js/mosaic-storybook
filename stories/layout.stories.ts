import { storiesOf } from '@storybook/angular';
import { select, number } from '@storybook/addon-knobs';
import * as utils from '../utils';

storiesOf('Layout|Layout Flex', module)
    .add('Layout Directions', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <div>                  
                <h1 class="mc-h1">Single direction (use knobs on the bottom to change direction)</h1>
                
                <div [class]=layoutDirection>
                    <div class="flex block">first</div>
                    <div class="flex block">second</div>
                    <div class="flex block">third</div>
                </div>                
            </div>
        `,
        props: {
            layoutDirection: select('Direction for child blocks', { 'layout-column': 'layout-column block', 'layout-row': 'layout-row block' }, 'layout-column block')
        }
    }))
    .add('Nested Layout', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <div>
                <h1 class="mc-h1">Nested layout</h1>
                
                <div class="layout-row block">
                    <div class="flex layout-column block">
                        <div class="flex block">first</div>
                        <div class="flex block">second</div>
                    </div>
                    
                    <div class="flex block">third</div>
                </div>
            </div>
        `,
        props: {}
    }))
    .add('Size of child container', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <h1 class="mc-h1">Size of child container</h1>
            
            <div class="layout-row block">
                <div class="flex-5 block">flex-5</div>
                <div class="{{blockSize}} block">{{blockSize}}</div>
                <div class="flex-5 block">flex-5</div>
            </div>
        `,
        props: {
            blockSize: select(
                'Central container size',

                // numbers from 0 to 100 which divide on 5 (0, 5, 10, ... ) plus 33, 66, 99
                // and convert them into object { 'flex-0: 'flex-0', ..., 'flex-100': 'flex-100' }
                utils.toObj([ 0, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 ], 'flex-'),

                'flex-5'
            )
        }
    }))
    .add('Order', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <h1 class="mc-h1">Order of child containers</h1>
            
            <div class="layout-row block">
                <div class="flex {{firstContainerOrder}} block">first</div>
                <div class="flex {{secondContainerOrder}} block">second</div>
                <div class="flex {{thirdContainerOrder}} block">third</div>
            </div>
        `,
        props: {
            firstContainerOrder: select('First container', utils.toObj([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'flex-order-'), 'flex-order-0'),
            secondContainerOrder: select('Second container', utils.toObj([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'flex-order-'), 'flex-order-1'),
            thirdContainerOrder: select('Third container', utils.toObj([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'flex-order-'), 'flex-order-2')
        }
    }))
    .add('With all properties', () => ({
        template: `
            <style>
                .block { border: 1px solid black; }
            </style>
            
            <h1 class="mc-h1">With all properties</h1>
            
            <div class="flex layout-column block" [style.width.px]="parentWidth" [style.height.px]="parentHeight">
                <div class="flex layout-row layout-align-space-between panel-container">
                    <div class="flex-none flex-order-3 layout-padding layout-margin block"><h2 class="mc-h2">Right Panel</h2></div>
                    <div class="flex-grow flex-order-2 layout-padding layout-margin block"><h2 class="mc-h2">Content</h2></div>
                    <div class="flex-none flex-order-1 layout-padding layout-margin block"><h2 class="mc-h2">Left Panel</h2></div>
                </div>
                
                <div class="flex-20 layout-padding layout-margin block"><h2 class="mc-h2">Footer</h2></div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 580, max: 1000, step: 10}),
            parentHeight: number('Parent height', 500, { range: true, min: 300, max: 500, step: 10}),
        }
    }));
