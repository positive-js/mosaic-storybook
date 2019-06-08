import { storiesOf } from '@storybook/angular';
import { ModalDemoComponent } from './modal/modal.component';
import { McButtonModule, McIconModule, McModalModule } from '@ptsecurity/mosaic';


storiesOf('Popups & Modals|Modal', module)
    .add('Confirm Modal', () => ({
        component: ModalDemoComponent,
        moduleMetadata: {
            declarations: [ModalDemoComponent],
            imports: [McModalModule, McButtonModule, McIconModule]
        }
    }));
