import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  reactiveFormGroup:FormGroup | any;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.reactiveFormGroup = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]]
    })
  }
  onSubmitTemplate(formValues: NgForm){
    formValues.reset();
    console.log(formValues.value)
  }
  onSubmitReactive(){

  }
}
