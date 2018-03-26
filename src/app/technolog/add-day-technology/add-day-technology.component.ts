import {Component, EventEmitter, Output} from '@angular/core';
import {EntytyTechnology} from '../model/entyty-technology';
import {Technology} from '../model/technology';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-day-technology',
  templateUrl: './add-day-technology.component.html',
  styleUrls: ['./add-day-technology.component.scss']
})
export class AddDayTechnologyComponent {

  @Output() addTechnologDay = new EventEmitter<Technology>();
  addDay: FormGroup;
  count = 0;
  entytyTechnology: EntytyTechnology;
  technology: Technology;

  constructor(private http: HttpClient) {
    this.technology = new Technology();
    this.technology.technologys = [];
    this.addDay = new FormGroup({
      dayTechs: new FormControl('', [Validators.required])
    });
  }

  addTehnology(data: EntytyTechnology) {
    const tech = Object.assign({}, data);
    this.technology.technologys.push(tech);
    this.count = 0;
    this.technology.technologys.forEach(elem => {
      this.count += elem.percent;
    });
  }

  addNewTechnologDay() {
    const dayTech: Technology = Object.assign({}, this.technology);
    this.addTechnologDay.emit(dayTech);
    this.http.put<Technology>('http://you-site-db.com', dayTech).subscribe( // emit stub for sending the form to the database
      (data) => {
        console.log('http success');
      },
      (err) => {
        console.log('http error', err);
      });
    this.addDay = new FormGroup({
      dayTechs: new FormControl('', [Validators.required])
    });
    this.technology = new Technology();
    this.technology.technologys = [];
  }
}
