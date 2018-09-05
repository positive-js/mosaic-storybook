import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { McLinkModule, McIconModule } from '@ptsecurity/mosaic';


storiesOf('Navigation|Link', module)
    .add('Link', () => ({
        template: `
            <div style="padding: 10px;">
                <a href="#" class="mc-link mc-link_underlined" [disabled]="disabled"
                   [ngClass]="{'mc-active' : active, 'mc-focused': focus}">
                    <span class="mc-link__text">Сохранить</span>
                </a>
            </div>
            <div style="padding: 10px;">
                <a href="#" class="mc-link mc-link_underlined" [disabled]="disabled"
                   [ngClass]="{'mc-active' : active, 'mc-focused': focus}">
                    <span class="mc-link__text">Сохранить</span>
                    <i mc-icon="mc-angle-L_16" class="mc-link__icon"></i>
                </a>
            </div>
            <div style="padding: 10px;">
               <a href="#" class="mc-link mc-link_underlined" [disabled]="disabled"
                  [ngClass]="{'mc-active' : active, 'mc-focused': focus}">
                    <i mc-icon="mc-calendar_16" class="mc-link__icon"></i>
                    <span class="mc-link__text">Сохранить</span>
                    <i mc-icon="mc-angle-L_16" class="mc-link__icon"></i>
                </a>
            </div>
        `,
        props: {
            disabled: boolean('disabled', false),
            active: boolean('active', false),
            focus: boolean('focus', false)
        },
        moduleMetadata: {
            imports: [McLinkModule, McIconModule]
        }
    }))
    .add('Pseudo link', () => ({
        template: `
            <div style="padding: 10px;">
                <a class="mc-link mc-link_dashed" [disabled]="disabled"
                   [ngClass]="{'mc-active' : active, 'mc-focused': focus}">
                    <span class="mc-link__text">Сохранить</span>
                </a>
            </div>
            <div style="padding: 10px;">
                <a class="mc-link mc-link_dashed" [disabled]="disabled"
                   [ngClass]="{'mc-active :active' : active, 'mc-focused': focus}">
                    <span class="mc-link__text">Сохранить</span>
                    <i mc-icon="mc-angle-L_16" class="mc-link__icon"></i>
                </a>
            </div>
            <div style="padding: 10px;">
               <a class="mc-link mc-link_dashed" [disabled]="disabled"
                  [ngClass]="{'mc-active' : active, 'mc-focused': focus}">
                    <i mc-icon="mc-calendar_16" class="mc-link__icon"></i>
                    <span class="mc-link__text">Сохранить</span>
                    <i mc-icon="mc-angle-L_16" class="mc-link__icon"></i>
                </a>
            </div>
        `,
        props: {
            disabled: boolean('disabled', false),
            active: boolean('active', false),
            focus: boolean('focus', false)
        },
        moduleMetadata: {
            imports: [McLinkModule, McIconModule]
        }
    }));
