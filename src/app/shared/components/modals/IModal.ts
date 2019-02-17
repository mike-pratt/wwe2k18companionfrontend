import { ModalDirective } from 'ngx-bootstrap';

export interface IModal {
    // modal: ModalDirective;
    openModal(): void;
    closeModal(): void;
}