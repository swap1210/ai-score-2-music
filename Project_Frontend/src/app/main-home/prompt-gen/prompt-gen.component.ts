import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterModel } from '../../model/filter.model';
import { OptionsService } from '../../services/options-service';

@Component({
	selector: 'app-prompt-gen',
	templateUrl: './prompt-gen.component.html',
	styleUrls: ['./prompt-gen.component.scss'],
})
export class PromptGenComponent implements OnInit {
	narrativeData = '';
	promptForm: FormGroup;
	filters: FilterModel[] = [];
	config = {
		allowedContent: false,
		forcePasteAsPlainText: true,
	};
	constructor(private fb: FormBuilder, public optionsService: OptionsService) {
		this.promptForm = this.fb.group({
			dynamics: [null, Validators.required],
			tempo: [null, Validators.required],
			timeSignature: [null, Validators.required],
			keySignature: [null, Validators.required],
			mode: [null, Validators.required],
			generalMusicStyle: [null, Validators.required],
			specificMusicStyle: [null, Validators.required],
		});
	}

	ngOnInit() {
		this.optionsService.getOptionsWithLabel().subscribe(
			(data: FilterModel[]) => {
				this.filters = data;
			},
			(error) => {
				console.log(error);
			}
		);

		this.promptForm.valueChanges.subscribe({
			next: (val) => {
				console.log(val);
				this.onFormChange();
			},
		});
	}

	// Executed When Form Is Submitted
	onFormChange() {
		this.narrativeData = `Generate a musicXML with`;
		Object.keys(this.promptForm.getRawValue()).forEach((key: string) => {
			if (this.promptForm.get(key).value) {
				this.narrativeData +=
					' ' +
					this.filters.filter((val) => val.controlName == key)[0].label +
					' as ' +
					this.promptForm.get(key).value;
			}
		});
	}
}
