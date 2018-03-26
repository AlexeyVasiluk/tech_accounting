import {Component} from '@angular/core';
import {Technology} from './model/technology';
import {Statistic} from './model/statistic';

@Component({
    selector: 'app-technolog',
    templateUrl: './technolog.component.html',
    styleUrls: ['./technolog.component.scss']
})
export class TechnologComponent {

    statics: Statistic = new Statistic();
    addButton = false;
    constructor() {
        this.statics.technologyPerDay = [];
    }

    addDayTechnologiToStatistic(data: Technology) {
        const tech = Object.assign({}, data);
        this.statics.technologyPerDay.push(tech);
    }
}
