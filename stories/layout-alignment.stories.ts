import { storiesOf } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';
import * as utils from '../utils';

storiesOf('Layout|Layout Flex', module)
    .add('Alignment', () => ({
        template: `
            <style>
                .parent {
                    width: 1000px; 
                }
                
                .child {
                    height: 300px;
                }
                
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>

            <h1 class="mc-h1">Alignment</h1>
                        
            <div class="parent block">
                <div class="flex layout-row {{rowAlignment}}">
                    <div class="flex-15 child block">first</div>
                    
                    <div class="flex-15 layout-column {{columnAlignment}}">
                        <div class="flex-initial block">1.1</div>
                        <div class="flex-initial block">2.1</div>
                        <div class="flex-initial block">3.1</div>
                    </div>
                    
                    <div class="flex-15 layout-column {{columnAlignment}}">
                        <div class="flex-initial block">1.2</div>
                        <div class="flex-initial block">2.2</div>
                        <div class="flex-initial block">3.2</div>
                    </div>
                    
                    <div class="flex-15 layout-column {{columnAlignment}}">
                        <div class="flex-initial block">1.3</div>
                        <div class="flex-initial block">2.3</div>
                        <div class="flex-initial block">3.3</div>
                    </div>
                </div>                
            </div>
        `,
        props: {
            rowAlignment: select(
                'Row alignment',
                utils.toObj(
                    [
                        'start',
                        /* is required?
                        'start-start',
                        'start-center',
                        'start-end',
                        'start-stretch',
                        */
                        'center',
                        /* is required?
                        'center-start',
                        'center-center',
                        'center-end',
                        'center-stretch',
                        */
                        'end',
                        /* is required?
                        'end-start',
                        'end-center',
                        'end-end',
                        'end-stretch',
                        */
                        'space-around',
                        /* is required?
                        'space-around-start',
                        'space-around-center',
                        'space-around-end',
                        'space-around-stretch',
                        */
                        'space-between',
                        /* is required?
                        'space-between-start',
                        'space-between-center',
                        'space-between-end',
                        'space-between-stretch',
                        */
                    ],
                    'layout-align-'
                ),
                'layout-align-center'
            ),
            columnAlignment: select(
                'Column alignment',
                utils.toObj(
                    [
                        'start',
                        /* is required?
                        'start-start',
                        'start-center',
                        'start-end',
                        'start-stretch',
                        */
                        'center',
                        /* is required?
                        'center-start',
                        'center-center',
                        'center-end',
                        'center-stretch',
                        */
                        'end',
                        /* is required?
                        'end-start',
                        'end-center',
                        'end-end',
                        'end-stretch',
                        */
                        'space-around',
                        /* is required?
                        'space-around-start',
                        'space-around-center',
                        'space-around-end',
                        'space-around-stretch',
                        */
                        'space-between',
                        /* is required?
                        'space-between-start',
                        'space-between-center',
                        'space-between-end',
                        'space-between-stretch',
                        */
                    ],
                    'layout-align-'
                ),
                'layout-align-center'
            )
        }
    }));

