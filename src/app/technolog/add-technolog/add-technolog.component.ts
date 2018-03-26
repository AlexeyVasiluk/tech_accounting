import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EntytyTechnology} from '../model/entyty-technology';

@Component({
    selector: 'app-add-technolog',
    templateUrl: './add-technolog.component.html',
    styleUrls: ['./add-technolog.component.scss']
})
export class AddTechnologComponent {

    @Output() addTechnolog = new EventEmitter<EntytyTechnology>();
    addForm: FormGroup;
    technology: EntytyTechnology = new EntytyTechnology();

    constructor() {
        this.createForm();
    }

    clear() {
        this.createForm();
    }

    createForm() {
        this.addForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            percent: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)]),
        });
    }

    addTechnologies() {
        this.technology.name = this.addForm.controls.name.value;
        this.technology.percent = this.addForm.controls.percent.value;
        const tech = Object.assign({}, this.technology);
        this.technology =  new EntytyTechnology();
        this.addTechnolog.emit(tech);
        this.createForm();
    }
}
