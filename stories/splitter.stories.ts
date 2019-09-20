import { storiesOf } from '@storybook/angular';
import { boolean, radios } from '@storybook/addon-knobs';
import { McSplitterModule } from '@ptsecurity/mosaic';

storiesOf('Layout|Splitter', module)
    .add('With direction changing and disabling', () => ({
        template: `
            <style>
                mc-splitter {
                    border: 1px solid black;
                    height: 100px;
                    margin: 2px;
                }
                
                div[mc-splitter-area] {
                    background: #f0f0f0
                }
            </style>
            
            <h1 class="mc-h1">With direction changing and disabling</h1>
            
            <mc-splitter [disabled]="disabled">
                <div mc-splitter-area>first</div>
                <div mc-splitter-area class="flex">second</div>
                <div mc-splitter-area>third</div>
            </mc-splitter>
        `,
        props: {
            disabled: boolean('Disabled', false)
        },
        moduleMetadata: {
            imports: [McSplitterModule]
        }
    }))
    .add('With fixed width', () => ({
        template: `
            <style>
                mc-splitter {
                    display: flex;
                    border: 1px solid black;
                    height: 100px;
                    margin: 2px;
                }

                .mc-splitter-area_fixed-width {
                    min-width: 200px;
                }
                                
                div[mc-splitter-area] {
                    background: #f0f0f0
                }
            </style>
            
            <h1 class="mc-h1">With fixed width/height of the first block</h1>
            
            <mc-splitter>
                <div mc-splitter-area class="mc-splitter-area_fixed-width">first (with min-width)</div>
                <div mc-splitter-area class="flex">second</div>
                <div mc-splitter-area>third</div>
            </mc-splitter>
        `,
        props: {},
        moduleMetadata: {
            imports: [McSplitterModule]
        }
    }))
    .add('Vertical', () => ({
        template: `
            <style>
                mc-splitter {
                    display: flex;
                    border: 1px solid black;
                    height: 400px;
                    margin: 2px;
                }

                .mc-splitter-area_fixed-height {
                    min-height: 100px;
                }
                
                div[mc-splitter-area] {
                    background: #f0f0f0
                }
            </style>
            
            <h1 class="mc-h1">With fixed width/height of the first block</h1>
            
            <mc-splitter [direction]="'vertical'">
                <div mc-splitter-area class="mc-splitter-area_fixed-height">first (with min-height)</div>
                <div mc-splitter-area class="flex">second</div>
                <div mc-splitter-area>third</div>
            </mc-splitter>
        `,
        props: {},
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
                    margin: 2px;
                }
                
                mc-splitter.without-border {
                    height: 300px;
                }
                
                .with-border > div[mc-splitter-area] {
                    background: #f0f0f0
                }
                                
                .without-border > div[mc-splitter-area] {
                    background: #b3b3b3;
                }
                                
                .nested-splitter > div[mc-splitter-area] {
                    background: #9f9f9f;
                }
            </style>
            
            <h1 class="mc-h1">Nested splitters</h1>
            
            <mc-splitter class="with-border">
                <div mc-splitter-area>left</div>
                <div mc-splitter-area class="flex">
                    <mc-splitter class="without-border flex" [direction]="'vertical'">
                        <div mc-splitter-area>top</div>
                        <div mc-splitter-area class="layout-column flex">
                            <mc-splitter class="flex nested-splitter">
                                <div mc-splitter-area>center-left</div>
                                <div mc-splitter-area class="flex">center</div>
                                <div mc-splitter-area>center-right</div>
                            </mc-splitter>
                        </div>
                        <div mc-splitter-area>bottom</div>
                    </mc-splitter>
                </div>
                <div mc-splitter-area>right</div>
            </mc-splitter>`,
        props: {},
        moduleMetadata: {
            imports: [McSplitterModule]
        }
    }));
