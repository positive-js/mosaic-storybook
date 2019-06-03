import { Component, Inject, Input, TemplateRef, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MC_SIDEPANEL_DATA, McSidepanelPosition, McSidepanelService } from '@ptsecurity/mosaic';


@Component({
    selector: 'app',
    templateUrl: './sidepanel.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SidepanelDemoComponent implements OnDestroy {
    @Input() position: McSidepanelPosition;
    @Input() hasBackdrop: boolean;
    @Input() disableClose: boolean;

    @ViewChild(TemplateRef) template: TemplateRef<any>;

    constructor(private sidepanelService: McSidepanelService) {}

    ngOnDestroy() {
        const overlayContainer = document.querySelector('.cdk-overlay-container');
        if (overlayContainer) {
            overlayContainer.remove();
        }
    }

    openComponentSidepanel() {
        this.sidepanelService.open(ExampleSidepanelComponent, {
            position: this.position,
            hasBackdrop: this.hasBackdrop,
            disableClose: this.disableClose,
            data: {
                openComponentSidepanel: () => { this.openComponentSidepanel(); }
            }
        });
    }

    openTemplateSidepanel() {
        this.sidepanelService.open(this.template, {
            position: this.position,
            hasBackdrop: this.hasBackdrop,
            disableClose: this.disableClose
        });
    }
}

@Component({
    selector: 'example-sidepanel',
    template: `
    <mc-sidepanel-header [closeable]="false">
        Sidepanel Component Header
    </mc-sidepanel-header>
    <mc-sidepanel-body class="layout-padding">
        <div class="mc-subheading">Sidepanel Component Body</div>

        <div *ngFor="let item of array; index as i">
            {{ i + 1 }}
        </div>
    </mc-sidepanel-body>
    <mc-sidepanel-footer>
        <mc-sidepanel-actions align="right">
            <button mc-button color="primary" (click)="openComponentSidepanel()">
                <span>Open another sidepanel</span>
            </button>

            <button mc-button color="second" mc-sidepanel-close>
                <span>Close</span>
            </button>
        </mc-sidepanel-actions>
    </mc-sidepanel-footer>`,
    host: {
        class: 'layout-column flex'
    }
})
export class ExampleSidepanelComponent {
    openComponentSidepanel: () => void;

    array = new Array(60);

    constructor(@Inject(MC_SIDEPANEL_DATA) public data: any) {
        this.openComponentSidepanel = data.openComponentSidepanel;
    }
}
