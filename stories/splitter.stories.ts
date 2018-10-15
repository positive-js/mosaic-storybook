import { storiesOf } from '@storybook/angular';
import { radios } from '@storybook/addon-knobs';

storiesOf('Splitter', module)
    .add('Splitter|With direction changing', () => ({
        template: `
            <style>
                mc-splitter.horizontal {
                    border: 1px solid black;
                }
                
                mc-splitter.vertical {
                    border: 1px solid black;
                    height: 300px;
                }
            </style>
            
            <mc-splitter [direction]="direction" [class.horizontal]="direction === 'horizontal" [class.vertical]="direction === 'vertical">
                <mc-splitter-area>first</mc-splitter-area>
                <mc-splitter-area>second</mc-splitter-area>
                <mc-splitter-area>third</mc-splitter-area>
            </mc-splitter>
        `,
        props: {
            direction: radios('Direction', { 'horizontal': 'horizontal', 'vertical': 'vertical'}, 'horizontal')
        }
    }))
    .add('Splitter|With fixed width', () => ({
        template: `
            <h1 class="mc-h1">With fixed width of the first block</h1>
            <style>
                mc-splitter.horizontal {
                    border: 1px solid black;
                }
                
                mc-splitter.vertical {
                    border: 1px solid black;
                    height: 300px;
                }
                
                mc-splitter-area.fixed-size-horizontal {
                    min-width: 100px;
                }
                
                mc-splitter-area.fixed-size-vertical {
                    min-height: 100px;
                }
            </style>
            
            <mc-splitter [direction]="direction" class="{{direction}}">
                <mc-splitter-area class="fixed-size-{{direction}}">first</mc-splitter-area>
                <mc-splitter-area>second</mc-splitter-area>
                <mc-splitter-area>third</mc-splitter-area>
            </mc-splitter>
        `,
        props: {
            direction: radios('Direction', { 'horizontal': 'horizontal', 'vertical': 'vertical'}, 'horizontal')
        }
    }));;
