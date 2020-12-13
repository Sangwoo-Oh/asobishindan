import { Component, OnInit } from '@angular/core';
import { Basic } from '../../shared/models/basic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      sex : new FormControl('', Validators.required),
      howtoenjoy : new FormControl('', Validators.required),
      trend : new FormControl('', Validators.required),
      normal : new FormControl('', Validators.required),
      unique : new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  register(form: any) {
    console.log(form.value)
    this.router.navigate(['/test/essence'])
  }
}
