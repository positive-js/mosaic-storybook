import { Component, ViewEncapsulation } from '@angular/core';
import { McModalService } from '@ptsecurity/mosaic';


@Component({
    selector: 'modal-app',
    templateUrl: './modal.component.html'
})
export class ModalDemoComponent {

    constructor(private modalService: McModalService) {}

    showConfirm() {
        this.modalService.success({
            mcContent: 'Сохранить сделанные изменения в запросе "Все активы с виндой"?',
            mcOkText: 'Сохранить',
            mcCancelText: 'Отмена',
            mcOnOk: () => console.log('OK')
        });
    }
}
