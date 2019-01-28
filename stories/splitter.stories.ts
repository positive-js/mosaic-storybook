import { storiesOf } from '@storybook/angular';
import { boolean, radios } from '@storybook/addon-knobs';
import { McSplitterModule } from '@ptsecurity/mosaic';

storiesOf('Layout|Splitter', module)
    .add('With direction changing and disabling', () => ({
        template: `
            <style>
                mc-splitter.horizontal {
                    border: 1px solid black;
                    height: 100px;
                }
                
                mc-splitter.vertical {
                    border: 1px solid black;
                    height: 300px;
                }
            </style>
            
            <h1 class="mc-h1">With direction changing and disabling</h1>
            
            <mc-splitter 
                [class.horizontal]="direction === 'horizontal'" 
                [class.vertical]="direction === 'vertical'"
                [direction]="direction" 
                [disabled]="disabled"
            >
                <mc-splitter-area>first</mc-splitter-area>
                <mc-splitter-area>second</mc-splitter-area>
                <mc-splitter-area>third</mc-splitter-area>
            </mc-splitter>
        `,
        props: {
            direction: radios('Direction', { 'horizontal': 'horizontal', 'vertical': 'vertical'}, 'horizontal'),
            disabled: boolean('Disabled', false)
        },
        moduleMetadata: {
            imports: [McSplitterModule]
        }
    }))
    .add('With fixed width', () => ({
        template: `
            <style>
                mc-splitter.horizontal {
                    border: 1px solid black;
                    height: 100px;
                }
                
                mc-splitter.vertical {
                    border: 1px solid black;
                    height: 500px;
                }
                
                mc-splitter-area.fixed-size-horizontal {
                    min-width: 100px;
                }
                
                mc-splitter-area.fixed-size-vertical {
                    min-height: 100px;
                }
            </style>
            
            <h1 class="mc-h1">With fixed width/height of the first block</h1>
            
            <mc-splitter [direction]="direction" class="{{direction}}">
                <mc-splitter-area class="fixed-size-{{direction}}">first (with min-{{direction === 'vertical' ? 'height' : 'width'}})</mc-splitter-area>
                <mc-splitter-area>second</mc-splitter-area>
                <mc-splitter-area>third</mc-splitter-area>
            </mc-splitter>
        `,
        props: {
            direction: radios('Direction', { 'horizontal': 'horizontal', 'vertical': 'vertical'}, 'horizontal')
        },
        moduleMetadata: {
            imports: [McSplitterModule]
        }
    }))
    .add('Nested', () => ({
        template: `
            <style>
                mc-splitter.with-border {
                    border: 1px solid black;
                    height: 300px;
                }
                
                mc-splitter.without-border {
                    height: 300px;
                }
            </style>
            
            <h1 class="mc-h1">Nested splitters</h1>
            
            <mc-splitter class="with-border">
                <mc-splitter-area>left</mc-splitter-area>
                <mc-splitter-area>
                    <mc-splitter class="without-border" direction="vertical">
                        <mc-splitter-area>top</mc-splitter-area>
                        <mc-splitter-area class="layout-column">
                            <mc-splitter class="flex">
                                <mc-splitter-area>center-left</mc-splitter-area>
                                <mc-splitter-area>center</mc-splitter-area>
                                <mc-splitter-area>center-right</mc-splitter-area>
                            </mc-splitter>
                        </mc-splitter-area>
                        <mc-splitter-area>bottom</mc-splitter-area>
                    </mc-splitter>
                </mc-splitter-area>
                <mc-splitter-area>right</mc-splitter-area>
            </mc-splitter>`,
        props: {},
        moduleMetadata: {
            imports: [McSplitterModule]
        }
    }));
