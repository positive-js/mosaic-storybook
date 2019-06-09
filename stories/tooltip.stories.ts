import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import {
    McButtonModule,
    McToolTipModule,
    McTooltip,
    McIconModule,
    McFormFieldModule,
    McInputModule
} from '@ptsecurity/mosaic';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
    selector: 'app',
    template: `
        <section class="container flex-100 layout-row layout-align-center-center">
            <div class="flex layout-row layout-align-center-center">
                <div class="flex layout-column layout-align-center-center container-item">
                    <span class="mc-title">Focus</span>
                    <button class="mc-primary container-item-button"
                            mc-button
                            color="primary"
                            mcTooltip
                            mcTitle="Удалить файл"
                            mcTrigger="focus"
                            mcPlacement="top">top
                    </button>
                    <button class="mc-primary container-item-button"
                            mc-button
                            mcTooltip="Подсказка может занимать две и более строк"
                            mcTrigger="focus"
                            mcPlacement="right"
                            mcTooltipDisabled>disabled
                    </button>
                    <button class="mc-primary container-item-button"
                            mc-button
                            mcTooltip="PDQL-запрос фильтра содержит ошибки"
                            mcTrigger="focus"
                            mcPlacement="left">left
                    </button>
                    <button class="mc-primary container-item-button"
                            mc-button
                            mcTooltip="PDQL-запрос фильтра содержит ошибки. Uncaught SyntaxError: Unexpected string"
                            mcTrigger="focus"
                            mcPlacement="bottom">bottom
                    </button>
                </div>
            </div>
        </section>

    `,
    styles: [`
        .container {
            flex: 1 1 auto;
            height: 100%;
            width: 100%;
        }
        
        .container-item {
            height: 100%;
        }

        .container-item-button {
            min-width: 85px;
            text-align: center;
            padding: 0;
            margin: 8px !important;
        }

    `],
    encapsulation: ViewEncapsulation.None
})
export class TooltipDemoComponentFocus {}

@Component({
    selector: 'app',
    template: `
        <section class="container flex-100 layout-row layout-align-center-center">
            <div class="flex layout-row layout-align-center-center">
                <div class="flex layout-column layout-align-center-center container-item">
                    <span class="mc-title">Hover buttons</span>
                    <button class="mc-primary container-item-button"
                            mc-button
                            mcTooltip="Показать\\Скрыть"
                            mcPlacement="top">top
                    </button>
                    <button class="mc-primary container-item-button"
                            mc-button
                            mcTooltip="Активировать записи"
                            mcPlacement="right">right
                    </button>
                    <button class="mc-primary container-item-button"
                            mc-button
                            mcTooltip="PDQL-запрос фильтра содержит ошибки
                                испральве запрос"
                            mcPlacement="left">left
                    </button>
                    <button class="mc-primary container-item-button"
                            mc-button
                            mcTooltip="Обновить"
                            mcPlacement="bottom">bottom
                    </button>
                </div>
                <div class="flex layout-column layout-align-center-center container-item">
                    <div style="width: 300px">
                        <span class="mc-title">Hover inputs</span>
                        <mc-form-field 
                            mcTooltip="Показать\\Скрыть"
                            mcPlacement="top">
                            <input mcInput placeholder="Tooltip on form field element">
                        </mc-form-field>

                        <br><br>

                        <mc-form-field>
                            <input 
                                mcTooltip="Активировать записи"
                                mcPlacement="right" 
                                mcInput
                                mcTooltipDisabled
                                placeholder="Tooltip on input element disabled">
                        </mc-form-field>

                        <br><br>

                        <mc-form-field>
                            <input
                                mcTooltip="PDQL-запрос фильтра содержит ошибки
                                испральве запрос"
                                mcPlacement="left"
                                mcInput placeholder="Tooltip bind to input element" [required]="required" [(ngModel)]="value">
                        </mc-form-field>

                        <br><br>

                        <mc-form-field mcFormFieldWithoutBorders>
                            <i
                                mcTooltip="Обновить"
                                mcPlacement="bottom"
                                mcPrefix mc-icon="mc-search_16"></i>

                            <input mcInput [(ngModel)]="valueIcon" placeholder="Hover icon">

                            <mc-cleaner></mc-cleaner>
                        </mc-form-field>
                    </div>
                </div>
            </div>
        </section>
        
    `,
    styles: [`
        .container {
            flex: 1 1 auto;
            height: 100%;
            width: 100%;
        }
        
        .container-item {
            height: 100%;
        }

        .container-item-button {
            min-width: 85px;
            text-align: center;
            padding: 0;
            margin: 8px !important;
        }

    `],
    encapsulation: ViewEncapsulation.None
})
export class TooltipDemoComponentHover {}

@Component({
    selector: 'app',
    template: `
        <section class="container flex-100 layout-row layout-align-center-center">
            <div class="flex layout-row layout-align-start-center">
                <span> Mouse over to </span>
                <button mc-button
                        (mouseenter)="tooltip.show()"
                        aria-label="Button that progamatically shows a tooltip on another button"
                        class="container-item-button">
                    show
                </button>
                <button mc-button
                        (mouseenter)="tooltip.hide()"
                        aria-label="Button that progamatically hides a tooltip on another button"
                        class="container-item-button">
                    hide
                </button>
            </div>

            <div class="flex">
                <button mc-button 
                        class="container-item-button" 
                        #tooltip="mcTooltip"
                        mcTooltip
                        (click)="toggleTooltip(tooltip)"
                        mcTitle="Info about the action"
                        mcTrigger="manual"
                        mcPlacement="bottom">
                    Click to toggle tooltip
                </button>
            </div>
        </section>
    `,
    styles: [`
        .container {
            flex: 1 1 auto;
            height: 100%;
            width: 100%;
        }
        
        .container-item {
            height: 100%;
        }

        .container-item-button {
            min-width: 85px;
            text-align: center;
            padding: 0;
            margin: 8px !important;
        }

    `],
    encapsulation: ViewEncapsulation.None
})
export class TooltipDemoComponentManualTrigger {
    @ViewChild('tooltip') tooltip: McTooltip;
    constructor(){}

    toggleTooltip(evt) {
        if (!this.tooltip.isTooltipOpen) {
            this.tooltip.show();
        } else {
            this.tooltip.hide();
        }
    }
}



storiesOf('Popups & Modals|Tooltip', module)
    .add('Tooltip on focus', () => ({
        component: TooltipDemoComponentFocus,
        moduleMetadata: {
            declarations: [TooltipDemoComponentFocus],
            imports: [
                McToolTipModule,
                McButtonModule,
                BrowserAnimationsModule
            ]
        }
    }))
    .add('Tooltip on hover', () => ({
        component: TooltipDemoComponentHover,
        moduleMetadata: {
            declarations: [TooltipDemoComponentHover],
            imports: [
                McToolTipModule,
                McButtonModule,
                McInputModule,
                McFormFieldModule,
                McIconModule,
                FormsModule,
                BrowserAnimationsModule
            ]
        }
    }))
    .add('Tooltip with manual trigger', () => ({
        component: TooltipDemoComponentManualTrigger,
        moduleMetadata: {
            declarations: [TooltipDemoComponentManualTrigger],
            imports: [
                McButtonModule,
                McToolTipModule,
                BrowserAnimationsModule
            ]
        }
    }));
