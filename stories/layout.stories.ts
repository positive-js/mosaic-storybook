import { storiesOf } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';


storiesOf('Layout|Layout Flex', module)
    .add('1. Simple Layout', () => ({
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
            layoutDirection: select('Direction for child blocks', { 'layout-column': 'layout-column block', 'layout-row': 'layout-row block'  })
        }
    }))
    .add('2. Nested Layout', () => ({
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
                    <div class="layout-column block">
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
                [ 0, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 60, 65, 66, 70, 75, 80, 85, 90, 95, 99, 100 ].reduce(
                    (accumulator, current) => {
                        accumulator[`flex-${current}`] = `flex-${current}`;
                        return accumulator;
                    },
                    {}
                ),
                
                'flex-5'
            )
        }
    }));
