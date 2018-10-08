import { storiesOf } from '@storybook/angular';
import { select, radios } from '@storybook/addon-knobs';
import * as utils from '../utils';

storiesOf('Layout|Layout Flex', module)
    .add('Alignment in one direction', () => ({
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

            <h1 class="mc-h1">Alignment in one direction</h1>
                        
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
                        'center',
                        'end',
                        'space-around',
                        'space-between'

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
                        'center',
                        'end',
                        'space-around',
                        'space-between'
                    ],
                    'layout-align-'
                ),
                'layout-align-center'
            )
        }
    }))
    .add('Alignment in two directions', () => ({
        template: `
            <style>
                .parent {
                    width: 1000px;
                    height: 300px;
                }
                
                .block {
                    border: 1px solid black;
                    padding: 8px;
                }
            </style>

            <h1 class="mc-h1">Alignment in two directions</h1>
            
            <div class="parent block layout-row layout-align-{{horizontalAlignment}}" *ngIf="verticalAlignment === '(none)'">
                <div class="block">layout-align-{{horizontalAlignment}}</div>
                <div class="block">layout-align-{{horizontalAlignment}}</div>
                <div class="block">layout-align-{{horizontalAlignment}}</div>
            </div>
            
            <div class="parent block layout-row layout-align-{{horizontalAlignment}}-{{verticalAlignment}}" *ngIf="verticalAlignment !== '(none)'">
                <div class="block">layout-align-{{horizontalAlignment}}-{{verticalAlignment}}</div>
                <div class="block">layout-align-{{horizontalAlignment}}-{{verticalAlignment}}</div>
                <div class="block">layout-align-{{horizontalAlignment}}-{{verticalAlignment}}</div>
            </div>
        `,
        props: {
            horizontalAlignment: radios(
                'Alignment in layout direction (horizontal)',
                utils.toObj(
                    [
                        'start',
                        'center',
                        'end',
                        'space-around',
                        'space-between',
                    ],
                    ''
                ),
                'center'
            ),
            verticalAlignment: radios(
                'Alignment in perpendicular direction (vertical)',
                utils.toObj(
                    [
                        '(none)',
                        'start',
                        'center',
                        'end',
                        'stretch'
                    ],
                    ''
                ),
                'center'
            )
        }
    }));

