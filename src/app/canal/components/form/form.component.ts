import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form!: FormGroup;

  @Output() submitted = new EventEmitter<any>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      content: ['texte', Validators.required],
      date: [new Date().toLocaleDateString('fr-FR')],
      id:[new Date()]
    });
  }

  onSubmit(){
    console.log(this.form.value)
    // emit value
    this.submitted.emit(this.form.value);
    this.form.reset();
  }
}
