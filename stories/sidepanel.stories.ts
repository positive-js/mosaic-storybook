import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { McButtonModule, McIconModule, McSidepanelModule, McSidepanelPosition } from '@ptsecurity/mosaic';
import { storiesOf } from '@storybook/angular';
import { boolean, select } from '@storybook/addon-knobs';

import { withAnyInfo } from '../.storybook/addons/ng-info';

import { ExampleSidepanelComponent, SidepanelDemoComponent } from './sidepanel/sidepanel.component';


storiesOf('Popups & Modals|Sidepanel', module)
    .add('Sidepanel', () => ({
        component: SidepanelDemoComponent,
        moduleMetadata: {
            imports: [BrowserAnimationsModule, McSidepanelModule, McButtonModule, McIconModule],
            declarations: [SidepanelDemoComponent, ExampleSidepanelComponent],
            entryComponents: [ExampleSidepanelComponent]
        },
        props: {
            position: select('position', [
                McSidepanelPosition.Left, McSidepanelPosition.Right, McSidepanelPosition.Top, McSidepanelPosition.Bottom
            ], McSidepanelPosition.Left),
            hasBackdrop: boolean('hasBackdrop', true),
            disableClose: boolean('disableClose', false)
        }
    }));
