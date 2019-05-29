import {Component, ViewEncapsulation} from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import {
    McButtonModule,
    McIconModule
} from '@ptsecurity/mosaic';
import { McPopoverModule } from '@ptsecurity/mosaic/popover'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@Component({
    selector: 'popover-manual-trigger',
    encapsulation: ViewEncapsulation.None,
    template: `        
        <ng-template #customContent>
            <ng-container [ngSwitch]="popoverActiveStage">
                <ng-container *ngSwitchCase="1">
                    В западной традиции рыбой выступает фрагмент латинского текста из философского трактата Цицерона «О пределах добра и зла», написанного в 45 году до нашей эры. Впервые этот текст был применен для набора шрифтовых образцов неизвестным печатником еще в XVI веке.
                </ng-container>
                <ng-container *ngSwitchCase="2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </ng-container>
                <ng-container *ngSwitchCase="3">
                    Сегодня этот текст используют практически все дизайнеры, набирающие рыбу латиницей. Абзац считается каноническим во всех справочниках по типографике и предлагается к использованию в статьях, посвященных изготовлению макета верстки при отсутствии финальных текстов. В руководствах по работе с фирменным стилем крупных международных компаний именно с этих слов начинаются образцы верстки. Существуют даже издания с названием Lorem ipsum.
                </ng-container>
            </ng-container>
        </ng-template>

        <ng-template #customFooter>
            <div class="flex-100 layout-row layout-align-space-between-center">
                <button class="step"
                        mc-button
                        color="primary"
                        [disabled]="popoverActiveStage === 1"
                        (click)="changeStep(-1)">&larr; Назад</button>
                <button class="step"
                        mc-button
                        color="primary"
                        [disabled]="popoverActiveStage === 3"
                        (click)="changeStep(1)">Дальше &rarr;</button>
            </div>
        </ng-template>

        <section class="flex layout-row layout-align-center-center bottom-case">
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="manual"
                mcPopoverClass="popover-485 this-class-not-available"
                [mcPopoverVisible]="isPopoverVisibleBottomLeft"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottomLeft"
                mcPopoverSize="large"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter"
                (mcPopoverVisibleChange)="onPopoverVisibleChangeBottomLeft($event)"
                (click)="changePopoverVisibilityBottomLeft()">
                bottomLeft large
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="manual"
                mcPopoverClass="popover-485 this-class-not-available"
                [mcPopoverVisible]="isPopoverVisibleBottom"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottom"
                mcPopoverSize="small"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter"
                (mcPopoverVisibleChange)="onPopoverVisibleChangeBottom($event)"
                (click)="changePopoverVisibilityBottom()">
                bottom small
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="manual"
                mcPopoverClass="popover-485 this-class-not-available"
                [mcPopoverVisible]="isPopoverVisibleBottomRight"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottomRight"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter"
                (mcPopoverVisibleChange)="onPopoverVisibleChangeBottomRight($event)"
                (click)="changePopoverVisibilityBottomRight()">
                bottomRight default
            </button>
        </section>

        <section class="flex layout-row layout-align-stretch-center left-right-case">
            <section class="flex layout-column layout-align-space-between-start">
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="manual"
                    mcPopoverClass="popover-485 this-class-not-available"
                    [mcPopoverVisible]="isPopoverVisibleRightTop"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="rightTop"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter"
                    (mcPopoverVisibleChange)="onPopoverVisibleChangeRightTop($event)"
                    (click)="changePopoverVisibilityRightTop()">
                    rightTop
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="manual"
                    mcPopoverClass="popover-485 this-class-not-available"
                    [mcPopoverVisible]="isPopoverVisibleRight"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="right"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter"
                    (mcPopoverVisibleChange)="onPopoverVisibleChangeRight($event)"
                    (click)="changePopoverVisibilityRight()">
                    right
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="manual"
                    mcPopoverClass="popover-485 this-class-not-available"
                    [mcPopoverVisible]="isPopoverVisibleRightBottom"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="rightBottom"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter"
                    (mcPopoverVisibleChange)="onPopoverVisibleChangeRightBottom($event)"
                    (click)="changePopoverVisibilityRightBottom()">
                        rightBottom
                </button>
            </section>

            <section class="flex layout-column layout-align-space-between-end">
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="manual"
                    mcPopoverClass="popover-485 this-class-not-available"
                    [mcPopoverVisible]="isPopoverVisibleLeftTop"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="leftTop"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter"
                    (mcPopoverVisibleChange)="onPopoverVisibleChangeLeftTop($event)"
                    (click)="changePopoverVisibilityLeftTop()">
                    leftTop
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="manual"
                    mcPopoverClass="popover-485 this-class-not-available"
                    [mcPopoverVisible]="isPopoverVisibleLeft"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="left"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter"
                    (mcPopoverVisibleChange)="onPopoverVisibleChangeLeft($event)"
                    (click)="changePopoverVisibilityLeft()">
                    left
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="manual"
                    mcPopoverClass="popover-485 this-class-not-available"
                    [mcPopoverVisible]="isPopoverVisibleLeftBottom"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="leftBottom"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter"
                    (mcPopoverVisibleChange)="onPopoverVisibleChangeLeftBottom($event)"
                    (click)="changePopoverVisibilityLeftBottom()">
                    leftBottom
                </button>
            </section>
        </section>

        <section class="flex layout-row layout-align-center-center top-case">
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="manual"
                mcPopoverClass="popover-485 this-class-not-available"
                [mcPopoverVisible]="isPopoverVisibleTopLeft"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverTrigger="manual"
                mcPopoverPlacement="topLeft"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter"
                (mcPopoverVisibleChange)="onPopoverVisibleChangeTopLeft($event)"
                (click)="changePopoverVisibilityTopLeft()">
                topLeft
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="manual"
                mcPopoverClass="popover-485 this-class-not-available"
                [mcPopoverVisible]="isPopoverVisibleTop"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="top"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter"
                (mcPopoverVisibleChange)="onPopoverVisibleChangeTop($event)"
                (click)="changePopoverVisibilityTop()">
                top hover
            </button>
            <button
                class="with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="manual"
                mcPopoverClass="popover-485 this-class-not-available"
                [mcPopoverVisible]="isPopoverVisibleTopRight"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="topRight"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter"
                (mcPopoverVisibleChange)="onPopoverVisibleChangeTopRight($event)"
                (click)="changePopoverVisibilityTopRight()">
                topRight
                </button>
        </section>
    `,
    styles: [`
        popover-manual-trigger {
            height: 100%;
            width: 100%;
            display: flex;
            flex: 1 1 100%;
            flex-flow: column;
            justify-content: center;
            align-items: stretch;
            padding: 0 10%;
        }
        
        .trigger-button.with-margin {
            margin: 50px;
        }
        
        .bottom-case {
            min-height: 20%;
        }
        
        .left-right-case {
            min-height: 60%;
        }
        
        .top-case {
            min-height: 20%;
        }
    `],
})
export class PopoverManualTriggerStoriesComponent {
    private popoverActiveStage: number;

    private isPopoverVisibleLeft: boolean = false;
    private isPopoverVisibleLeftTop: boolean = false;
    private isPopoverVisibleLeftBottom: boolean = false;
    private isPopoverVisibleBottom: boolean = false;
    private isPopoverVisibleBottomRight: boolean = false;
    private isPopoverVisibleBottomLeft: boolean = false;
    private isPopoverVisibleRight: boolean = false;
    private isPopoverVisibleRightTop: boolean = false;
    private isPopoverVisibleRightBottom: boolean = false;
    private isPopoverVisibleTop: boolean = false;
    private isPopoverVisibleTopRight: boolean = false;
    private isPopoverVisibleTopLeft: boolean = false;

    constructor() {
        this.popoverActiveStage = 1;
    }

    changeStep(direction: number) {
        this.popoverActiveStage += direction;
    }

    changePopoverVisibilityLeft() {
        this.isPopoverVisibleLeft = !this.isPopoverVisibleLeft;
    }

    changePopoverVisibilityLeftTop() {
        this.isPopoverVisibleLeftTop = !this.isPopoverVisibleLeftTop;
    }

    changePopoverVisibilityLeftBottom() {
        this.isPopoverVisibleLeftBottom = !this.isPopoverVisibleLeftBottom;
    }

    changePopoverVisibilityBottom() {
        this.isPopoverVisibleBottom = !this.isPopoverVisibleBottom;
    }

    changePopoverVisibilityBottomRight() {
        this.isPopoverVisibleBottomRight = !this.isPopoverVisibleBottomRight;
    }

    changePopoverVisibilityBottomLeft() {
        this.isPopoverVisibleBottomLeft = !this.isPopoverVisibleBottomLeft;
    }

    changePopoverVisibilityRight() {
        this.isPopoverVisibleRight = !this.isPopoverVisibleRight;
    }

    changePopoverVisibilityRightTop() {
        this.isPopoverVisibleRightTop = !this.isPopoverVisibleRightTop;
    }

    changePopoverVisibilityRightBottom() {
        this.isPopoverVisibleRightBottom = !this.isPopoverVisibleRightBottom;
    }

    changePopoverVisibilityTop() {
        this.isPopoverVisibleTop = !this.isPopoverVisibleTop;
    }

    changePopoverVisibilityTopRight() {
        this.isPopoverVisibleTopRight = !this.isPopoverVisibleTopRight;
    }

    changePopoverVisibilityTopLeft() {
        this.isPopoverVisibleTopLeft = !this.isPopoverVisibleTopLeft;
    }

    onPopoverVisibleChangeLeft(update: boolean) {
        this.isPopoverVisibleLeft = update;
    }

    onPopoverVisibleChangeLeftTop(update: boolean) {
        this.isPopoverVisibleLeftTop = update;
    }

    onPopoverVisibleChangeLeftBottom(update: boolean) {
        this.isPopoverVisibleLeftBottom = update;
    }

    onPopoverVisibleChangeBottom(update: boolean) {
        this.isPopoverVisibleBottom = update;
    }

    onPopoverVisibleChangeBottomRight(update: boolean) {
        this.isPopoverVisibleBottomRight = update;
    }

    onPopoverVisibleChangeBottomLeft(update: boolean) {
        this.isPopoverVisibleBottomLeft = update;
    }

    onPopoverVisibleChangeRight(update: boolean) {
        this.isPopoverVisibleRight = update;
    }

    onPopoverVisibleChangeRightTop(update: boolean) {
        this.isPopoverVisibleRightTop = update;
    }

    onPopoverVisibleChangeRightBottom(update: boolean) {
        this.isPopoverVisibleRightBottom = update;
    }

    onPopoverVisibleChangeTop(update: boolean) {
        this.isPopoverVisibleTop = update;
    }

    onPopoverVisibleChangeTopRight(update: boolean) {
        this.isPopoverVisibleTopRight = update;
    }

    onPopoverVisibleChangeTopLeft(update: boolean) {
        this.isPopoverVisibleTopLeft = update;
    }
}

@Component({
    selector: 'popover-focus-trigger',
    encapsulation: ViewEncapsulation.None,
    template: `        
        <ng-template #customContent>
            <ng-container [ngSwitch]="popoverActiveStage">
                <ng-container *ngSwitchCase="1">
                    В западной традиции рыбой выступает фрагмент латинского текста из философского трактата Цицерона «О пределах добра и зла», написанного в 45 году до нашей эры. Впервые этот текст был применен для набора шрифтовых образцов неизвестным печатником еще в XVI веке.
                </ng-container>
                <ng-container *ngSwitchCase="2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </ng-container>
                <ng-container *ngSwitchCase="3">
                    Сегодня этот текст используют практически все дизайнеры, набирающие рыбу латиницей. Абзац считается каноническим во всех справочниках по типографике и предлагается к использованию в статьях, посвященных изготовлению макета верстки при отсутствии финальных текстов. В руководствах по работе с фирменным стилем крупных международных компаний именно с этих слов начинаются образцы верстки. Существуют даже издания с названием Lorem ipsum.
                </ng-container>
            </ng-container>
        </ng-template>

        <ng-template #customFooter>
            <div class="flex-100 layout-row layout-align-space-between-center">
                <button class="step"
                        mc-button
                        color="primary"
                        [disabled]="popoverActiveStage === 1"
                        (click)="changeStep(-1)">&larr; Назад</button>
                <button class="step"
                        mc-button
                        color="primary"
                        [disabled]="popoverActiveStage === 3"
                        (click)="changeStep(1)">Дальше &rarr;</button>
            </div>
        </ng-template>

        <section class="flex layout-row layout-align-center-center bottom-case">
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="focus"
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottomLeft"
                mcPopoverSize="large"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                bottomLeft large
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="focus"
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottom"
                mcPopoverSize="small"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                bottom small
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="focus"
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottomRight"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                bottomRight default
            </button>
        </section>

        <section class="flex layout-row layout-align-stretch-center left-right-case">
            <section class="flex layout-column layout-align-space-between-start">
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="focus"
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="rightTop"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    rightTop
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="focus"
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="right"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    right
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="focus"
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="rightBottom"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                        rightBottom
                </button>
            </section>

            <section class="flex layout-column layout-align-space-between-end">
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="focus"
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="leftTop"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    leftTop
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="focus"
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="left"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    left
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverTrigger="focus"
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="leftBottom"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    leftBottom
                </button>
            </section>
        </section>

        <section class="flex layout-row layout-align-center-center top-case">
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="focus"
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="topLeft"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                topLeft
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="focus"
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="top"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                top hover
            </button>
            <button
                class="with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverTrigger="focus"
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverTrigger="manual"
                mcPopoverPlacement="topRight"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                topRight
                </button>
        </section>
    `,
    styles: [`
        popover-focus-trigger {
            height: 100%;
            width: 100%;
            display: flex;
            flex: 1 1 100%;
            flex-flow: column;
            justify-content: center;
            align-items: stretch;
            padding: 0 10%;
        }

        .trigger-button.with-margin {
            margin: 50px;
        }
        
        .bottom-case {
            min-height: 20%;
        }
        
        .left-right-case {
            min-height: 60%;
        }
        
        .top-case {
            min-height: 20%;
        }
    `],
})
export class PopoverFocusTriggerStoriesComponent {
    private popoverActiveStage: number;

    constructor() {
        this.popoverActiveStage = 1;
    }

    changeStep(direction: number) {
        this.popoverActiveStage += direction;
    }
}

@Component({
    selector: 'popover-default-trigger',
    encapsulation: ViewEncapsulation.None,
    template: `        
        <ng-template #customContent>
            Some text information can be placed inside main content container, i.e.
            <span><i class="mc-alert__icon"></i> </span>
        </ng-template>

        <ng-template #customFooter>
            <div class="flex-100 layout-row layout-align-space-between-center">
                Footer text goes here...
            </div>
        </ng-template>

        <section class="flex layout-row layout-align-center-center bottom-case">
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottomLeft"
                mcPopoverSize="large"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                bottomLeft large
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottom"
                mcPopoverSize="small"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                bottom small
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="bottomRight"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                bottomRight default
            </button>
        </section>

        <section class="flex layout-row layout-align-stretch-center left-right-case">
            <section class="flex layout-column layout-align-space-between-start">
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="rightTop"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    rightTop
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="right"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    right
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="rightBottom"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                        rightBottom
                </button>
            </section>

            <section class="flex layout-column layout-align-space-between-end">
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="leftTop"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    leftTop
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="left"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    left
                </button>
                <button
                    class="trigger-button with-margin"
                    mc-button
                    color="second"
                    mcPopover
                    mcPopoverClass="popover-485 this-class-not-available"
                    mcPopoverHeader="Lorem ipsum"
                    mcPopoverPlacement="leftBottom"
                    [mcPopoverContent]="customContent"
                    [mcPopoverFooter]="customFooter">
                    leftBottom
                </button>
            </section>
        </section>

        <section class="flex layout-row layout-align-center-center top-case">
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="topLeft"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                topLeft
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="top"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                top hover
            </button>
            <button
                class="trigger-button with-margin"
                mc-button
                color="second"
                mcPopover
                mcPopoverClass="popover-485 this-class-not-available"
                mcPopoverHeader="Lorem ipsum"
                mcPopoverPlacement="topRight"
                [mcPopoverContent]="customContent"
                [mcPopoverFooter]="customFooter">
                topRight
                </button>
        </section>
    `,
    styles: [`
        popover-default-trigger {
            height: 100%;
            width: 100%;
            display: flex;
            flex: 1 1 100%;
            flex-flow: column;
            justify-content: center;
            align-items: stretch;
            padding: 0 10%;
        }

        .trigger-button.with-margin {
            margin: 50px;
        }
        
        .bottom-case {
            min-height: 20%;
        }
        
        .left-right-case {
            min-height: 60%;
        }
        
        .top-case {
            min-height: 20%;
        }
    `],
})
export class PopoverDefaultTriggerStoriesComponent {
    private popoverActiveStage: number;

    constructor() {
        this.popoverActiveStage = 1;
    }

    changeStep(direction: number) {
        this.popoverActiveStage += direction;
    }
}

storiesOf('Popups & Modals|Popover', module)
    .add('Popover Manual Trigger', () => ({
        component: PopoverManualTriggerStoriesComponent,
        moduleMetadata: {
            imports: [
                BrowserAnimationsModule,
                McPopoverModule,
                McButtonModule,
                McIconModule,
            ]
        }
    }))
    .add('Popover Default Trigger', () => ({
        component: PopoverDefaultTriggerStoriesComponent,
        moduleMetadata: {
            imports: [
                BrowserAnimationsModule,
                McPopoverModule,
                McButtonModule,
                McIconModule,
            ]
        }
    }))
    .add('Popover Focus Trigger', () => ({
        component: PopoverFocusTriggerStoriesComponent,
        moduleMetadata: {
            imports: [
                BrowserAnimationsModule,
                McPopoverModule,
                McButtonModule,
                McIconModule,
            ]
        }
    }));
