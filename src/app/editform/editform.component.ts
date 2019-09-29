import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Client from '../client';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})

export class EditformComponent implements OnInit {

  updateForm: FormGroup;
  submitted = false;
  success = false;
  selectedClientId: String;

  get firstName() {
    return this.updateForm.get('firstname');
  }

  get surName() {
    return this.updateForm.get('surname');
  }


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.updateForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength, Validators.pattern]],
      surname: ['', [Validators.required, Validators.maxLength, Validators.pattern]],
    });
    const clientId = this.route.snapshot.paramMap.get('id');

    return await this.http.get('api/v1/clients/' + clientId).subscribe(
      (data: Client) => {
        this.selectedClientId = data.id;
        this.updateForm.setValue({ firstname: data.firstname, surname: data.surname });
      });
  }
  updateOne() {
    this.submitted = true;
    if (this.updateForm.invalid) {
      return;
    }

    this.success = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.patch(`api/v1/clients/${this.selectedClientId}`, {
      'firstname': this.updateForm.value.firstname,
      'surname': this.updateForm.value.surname,
    }, httpOptions).subscribe((data) => console.log(data));
  }
}

