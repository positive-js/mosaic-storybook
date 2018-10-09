import { storiesOf } from '@storybook/angular';
import { number, radios } from '@storybook/addon-knobs';
import * as utils from "../utils";

storiesOf('Layout|Layout Flex\/Behaviour modifiers', module)
    .add('flex', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 8px;
                    margin: 8px;
                }
            </style>
            
            <h1 class="mc-h1">flex</h1>
            <p class="mc-text-left">The item is sized according to its width and height properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size 0</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex block">flex</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
        }
    }))
    .add('flex-initial', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 8px;
                    margin: 8px;
                }
            </style>
            
            <h1 class="mc-h1">flex-initial</h1>
            <p class="mc-text-left">It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container. The same as <strong>flex-nogrow</strong></p>
                
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex-initial block">flex-initial</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
        }
    }))
    .add('flex-none', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 8px;
                    margin: 8px;
                }
            </style>
            
            <h1 class="mc-h1">flex-none</h1>
            <p class="mc-text-left">It is fully inflexible: it neither shrinks nor grows in relation to the flex container</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex-none block">flex-none</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
        }
    }))
    .add('flex-auto', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 8px;
                    margin: 8px;
                }
            </style>
            
            <h1 class="mc-h1">flex-auto</h1>
            <p class="mc-text-left">The item is sized according to its width and height properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex-auto block">flex-auto</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
        }
    }))
    .add('flex-grow', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 8px;
                    margin: 8px;
                }
            </style>
            
            <h1 class="mc-h1">flex-grow</h1>
            <p class="mc-text-left">The item is sized according to its width and height properties. Initially absorbs all available space in the flex container, and shrinks to its minimum size to fit the container</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex-grow block">flex-grow</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
        }
    }))
    .add('flex-nogrow', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 8px;
                    margin: 8px;
                }
            </style>
            
            <h1 class="mc-h1">flex-nogrow</h1>
            <p class="mc-text-left">It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container. The same as <strong>flex-initial</strong></p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex-nogrow block">flex-nogrow</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
        }
    }))
    .add('flex-noshrink', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 8px;
                    margin: 8px;
                }
            </style>
            
            <h1 class="mc-h1">flex-noshrink</h1>
            <p class="mc-text-left">It initially absorbs any extra free space in the flex container but it shrinks to container size.</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex-noshrink block">flex-noshrink</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
        }
    }))
    .add('with wrapping', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 5px;
                    margin: 5px;
                }
            </style>
            
            <h1 class="mc-h1">All modifiers on one page</h1>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row {{wrapping}} block">
                    <div class="flex block">flex</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
                
                <div class="layout-row {{wrapping}} block">
                    <div class="flex-initial block">flex-initial</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
                
                <div class="layout-row {{wrapping}} block">
                    <div class="flex-none block">flex-none</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
                
                <div class="layout-row {{wrapping}} block">
                    <div class="flex-auto block">flex-auto</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
                
                <div class="layout-row {{wrapping}} block">
                    <div class="flex-grow block">flex-grow</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
                
                <div class="layout-row {{wrapping}} block">
                    <div class="flex-nogrow block">flex-nogrow</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
                
                <div class="layout-row {{wrapping}} block">
                    <div class="flex-noshrink block">flex-noshrink</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent width', 1000, { range: true, min: 20, max: 1000, step: 10}),
            wrapping: radios('Wrapping', utils.toObj(['wrap', 'nowrap'], 'layout-'), 'layout-nowrap')
        }
    }));
