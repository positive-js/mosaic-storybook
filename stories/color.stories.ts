import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import '@ptsecurity/mosaic/_theming.scss';

const COLORS = [
    'blue',
    'green',
    'red',
    'grey',
    'yellow'
];

const SHADES = [
    '40',
    '60',
    '100',
    '200',
    '300',
    '400',
    '500',
    '560',
    '600',
    '700',
    '800',
    'A40',
    'A60',
    'A100',
    'A200',
    'A300',
    'A500',
];

storiesOf('Styles|Palette', module)
    .add('Text colors', () => ({
        styleUrls: [
            './color/color.scss'
        ],
        template: `
        <div>
            <h2 class="mc-display-1">Text colors</h2>

            <div class="mc-body">
            
                <div class="mc-subheading">Example usage:</div>
                <pre>color: $dark-text-disabled;</pre>

                <table>
                    <tbody>
                        <tr *ngFor="let name of basicColors">
                            <td [ngClass]="name">{{'$'}}{{name}}</td>
                            <td [ngClass]="name">&bull;</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
                    
        </div>
            
        `,
        props: {
            basicColors: [
                'black-12-opacity',
                'black-6-opacity',
                'white-12-opacity',
                'dark-text-default',
                'dark-text-secondary',
                'dark-text-disabled',
                'dark-icon-secondary',
                'light-text-default',
                'light-text-secondary',
                'light-text-disabled',
                'light-icon-secondary'
            ]
        }
    }))
    .add('Colors with shades', () => ({
        styleUrls: [
            './color/color.scss'
        ],
        template: `
        <div>
            <h2 class="mc-display-1">Colors with shades</h2>

            <div class="mc-body">

                <div class="mc-subheading">Example usage:</div>
                <pre>color: map-set($mc-blue, 40);</pre>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th *ngFor="let shade of shades">{{shade}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let color of colors">
                            <th class="cell-header">$mc-{{color}}</th>
                            <td *ngFor="let shade of shades"
                                [ngClass]="'cell '+ color + '-' + shade"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
                    
        </div>
            
        `,
        props: {
            shades: SHADES,
            colors: COLORS
        }
    }))
    .add('Contrast colors', () => ({
        styleUrls: [
            './color/color.scss'
        ],
        template: `
        <div>
        
            <h3 class="mc-display-1">Contrast colors with shades</h3>
        
            <div class="mc-body">

                <div class="mc-subheading">Example usage:</div>
                <pre>color: mc-contrast($mc-blue, 40);</pre>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th *ngFor="let shade of shades">{{shade}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let color of colors">
                            <th class="cell-header">$mc-{{color}}</th>
                            <td *ngFor="let shade of shades"
                                [ngClass]="'cell ' + color + '-contrast-' + shade"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
                    
        </div>
            
        `,
        props: {
            shades: SHADES,
            colors: COLORS
        }
    }));
