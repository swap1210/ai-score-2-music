import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesStore} from '../services/courses.store';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 
import { OptionsService } from '../services/options-service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  Editor = ClassicEditor;  
  narrativeData = "";
  regiForm: FormGroup;  
  config = {
    allowedContent: false,
    forcePasteAsPlainText: true,
  }
  options: any;
  constructor(private coursesStore: CoursesStore, private fb: FormBuilder, private optionsService: OptionsService) {
    this.regiForm = fb.group({  
      'Dynamics' : [null, Validators.required],  
      'Tempo' : [null, Validators.required],  
      'TimeSignature' : [null, Validators.required],  
      'KeySignature' : [null, Validators.required],  
      'Mode' : [null, Validators.required],  
      'GeneralMusicStyle' : [null, Validators.required],  
      'SpecificMusicStyle' : [null, Validators.required],  
    });  
  }

  ngOnInit() {
      // this.reloadCourses();

      this.optionsService.getOptions().subscribe(
        data => {
          this.options = data;
          console.log("options", this.options["dynamics"])
        },
        error => {
          console.log(error);
        }
      );
  }

  onSelectionChanged(event:any){

    console.log("JJ", this.regiForm)
  }

  // reloadCourses() {

  //     this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER");

  //     this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED");
  // }

  // Executed When Form Is Submitted  
  onFormSubmit()  
  {  
    this.narrativeData = `selected values - <br/> 
      Dynamics - ${this.regiForm.get("Dynamics").value} <br/>
      Tempo - ${this.regiForm.get("Tempo").value} <br/>
      TimeSignature - ${this.regiForm.get("TimeSignature").value} <br/>
      KeySignature - ${this.regiForm.get("KeySignature").value} <br/>
      Mode - ${this.regiForm.get("Mode").value} <br/>
      GeneralMusicStyle - ${this.regiForm.get("GeneralMusicStyle").value} <br/>
      SpecificMusicStyle - ${this.regiForm.get("SpecificMusicStyle").value} <br/>
    `
  }  

}


