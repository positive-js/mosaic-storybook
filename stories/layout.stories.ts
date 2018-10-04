import { storiesOf } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';


storiesOf('Layout|Layout Flex', module)
    .add('Simple Layout', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    height: 100px;
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
            layoutDirection: select('Direction for child blocks', { 'layout-column': 'layout-column', 'layout-row': 'layout-row'  })
        }
    }));
