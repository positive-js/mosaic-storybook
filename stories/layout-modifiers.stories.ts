import { storiesOf } from '@storybook/angular';
import { number } from '@storybook/addon-knobs';

storiesOf('Layout|Layout Flex\/Behaviour modifiers', module)
    .add('flex', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <h1 class="mc-h1">flex</h1>
            <p class="mc-text-left">The item is sized according to its width and height properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size 0</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex block">flex</div>
                    <div class="flex block">flex</div>
                    <div class="flex block">flex</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent container width, %', 1000, { range: true, min: 20, max: 1000, step: 1}),
        }
    }))
    .add('flex-initial', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <h1 class="mc-h1">flex-initial</h1>
            <p class="mc-text-left">It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container</p>
                
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex block">flex</div>
                    <div class="flex-initial block">flex-initial</div>
                    <div class="flex-initial block">flex-initial</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent container width, %', 1000, { range: true, min: 20, max: 1000, step: 1}),
        }
    }))
    .add('flex-none', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <h1 class="mc-h1">flex-none</h1>
            <p class="mc-text-left">It is fully inflexible: it neither shrinks nor grows in relation to the flex container</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex block">flex</div>
                    <div class="flex block">flex</div>
                    <div class="flex-none block">flex-none</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent container width, %', 1000, { range: true, min: 20, max: 1000, step: 1}),
        }
    }))
    .add('flex-auto', () => ({
        template: `
            <style>
                .block {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            
            <h1 class="mc-h1">flex-auto</h1>
            <p class="mc-text-left">The item is sized according to its width and height properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container</p>
            
            <div [style.width.px]="parentWidth">
                <div class="layout-row block">
                    <div class="flex-auto block">flex-auto</div>
                    <div class="flex-auto block">flex-auto</div>
                    <div class="flex-auto block">flex-auto</div>
                </div>
            </div>
        `,
        props: {
            parentWidth: number('Parent container width, %', 1000, { range: true, min: 20, max: 1000, step: 1}),
        }
    }));
