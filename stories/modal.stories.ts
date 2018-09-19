import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import { ModalDemoComponent } from './modal/modal.component';
import { McButtonModule, McIconModule, McModalModule } from '@ptsecurity/mosaic';


storiesOf('Popups & Modals|Modal', module)
    .add('Confirm Modal', () => ({
        component: ModalDemoComponent,
        moduleMetadata: {
            imports: [McModalModule, McButtonModule, McIconModule]
        }
    }));
