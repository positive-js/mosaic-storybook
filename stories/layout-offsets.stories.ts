import { storiesOf } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';
import * as utils from '../utils';

storiesOf('Layout|Layout Flex\/Offsets', module)
    .add('Offsets', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                }
            </style>
            
            <div>                  
                <h1 class="mc-h1">Offset</h1>
                
                <div class="layout-row block">
                    <div class="{{size}} {{offset}} block">{{size}} {{offset}}</div>
                    <div class="{{size}} {{offset}} block">{{size}} {{offset}}</div>
                    <div class="{{size}} {{offset}} block">{{size}} {{offset}}</div>
                </div>                
            </div>
        `,
        props: {
            size: select(
                'Size',
                utils.toObj([ 0, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 ], 'flex-'),
                'flex-20'
            ),
            offset: select(
                'Offset',
                utils.toObj([ 0, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 ], 'flex-offset-'),
                'flex-offset-0'
            )
        }
    }));
