import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FilterModel, OptionModel } from '../../model/filter.model';
import { OptionsService } from '../../services/options-service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { GptService } from '../../services/gpt.service';
import { LoadingService } from '../../loading/loading.service';
import { Subject } from 'rxjs';
import { CommonDataService } from '../../services/common-data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-prompt-gen',
	templateUrl: './prompt-gen.component.html',
	styleUrls: ['./prompt-gen.component.scss'],
})
export class PromptGenComponent implements OnInit {
	public chatShh: string;
	narrativeData = '';
	promptForm: FormGroup;
	filters: FilterModel[] = [];
	instrumentsData: OptionModel[] = [];
	selectedInstrumentsData: OptionModel[] = [];
	filteredInstrumentsData: OptionModel[] = [];
	currentScore$: Subject<string> = new Subject();
	@ViewChild('instrumentCtrlId') instrumentInput: ElementRef<HTMLInputElement>;

	config = {
		allowedContent: false,
		forcePasteAsPlainText: true,
	};

	separatorKeysCodes: number[] = [ENTER, COMMA];

	constructor(
		private fb: FormBuilder,
		public commData: CommonDataService,
		public optionsService: OptionsService,
		public gptService: GptService,
		private ls: LoadingService,
		private router: Router
	) {
		this.promptForm = this.fb.group({
			dynamics: [null, []],
			tempo: [null, []],
			timeSignature: [null, []],
			keySignature: [null, []],
			mode: [null, []],
			generalMusicStyle: [null, []],
			trackComplexity: [null, []],
			specificMusicStyle: [null, []],
			instrumentCtrl: [null, []],
			instrumentAutocompleteCtrl: [[], []],
		});
	}

	ngOnInit() {
		this.filters = this.optionsService.getOptionsWithLabel();

		this.instrumentsData = this.optionsService.getInstruments();
		this.filteredInstrumentsData = this.instrumentsData;

		this.promptForm.valueChanges.subscribe({
			next: (val) => {
				this.onFormChange();
			},
		});
		this.chatShh = localStorage.getItem('GPT_TOK');
	}

	callGPT = () => {
		this.ls.loadingOn();
		this.gptService.getGPTResponse(this.chatShh, this.narrativeData).subscribe({
			next: (resScore: string) => {
				console.log(resScore);
				this.currentScore$.next(resScore);
			},
			error: (err) => {
				localStorage.setItem('GPT_TOK', '');
				this.commData.currentState$.next({ apiFound: false });
				this.ls.loadingOff();
				this.router.navigate(['/']);
			},
			complete: () => {
				this.ls.loadingOff();
			},
		});
	};

	// Executed When Form Is Submitted
	onFormChange() {
		this.narrativeData = `Generate a ABC format 2 minutes long score with`;
		let count = Object.keys(this.promptForm.getRawValue()).length;
		Object.keys(this.promptForm.getRawValue()).forEach((key: string) => {
			if (
				key != 'trackComplexity' &&
				this.promptForm.get(key).value &&
				this.filters.filter((val) => val.controlName == key)[0]
			) {
				this.narrativeData +=
					' ' +
					this.filters.filter((val) => val.controlName == key)[0].label +
					' as ' +
					this.promptForm.get(key).value;
			} else if (
				key == 'trackComplexity' &&
				this.promptForm.get(key).value &&
				this.filters.filter((val) => val.controlName == key)[0]
			) {
				this.narrativeData +=
					' and make notes ' + this.promptForm.get(key).value;
			} else {
				count--;
			}
		});
		if (count) {
			if (this.selectedInstrumentsData.length) {
				this.narrativeData +=
					' add instruments like ' +
					this.selectedInstrumentsData.map<string>((inst) => inst.label);
			}
		} else {
			this.narrativeData = '';
		}
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();

		// Add our instrument
		if (value) {
			this.selectedInstrumentsData.push({ label: value } as OptionModel);
		}

		// Clear the input value
		event.chipInput!.clear();

		// this.promptForm.get(['instrumentCtrl']).setValue(null);
	}

	remove(instrument: OptionModel): void {
		const index = this.selectedInstrumentsData.indexOf(instrument);

		if (index >= 0) {
			this.selectedInstrumentsData.splice(index, 1);
			this.filteredInstrumentsData.push(instrument);
		}
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		// console.log('Here to see ', event.option.viewValue);
		this.selectedInstrumentsData.push({
			label: event.option.viewValue,
		} as OptionModel);
		this.filteredInstrumentsData = event.option.viewValue
			? this._filter(event.option.viewValue)
			: this.instrumentsData.slice();
		this.instrumentInput.nativeElement.value = '';
		this.promptForm.get(['instrumentCtrl']).setValue(null);
	}

	private _filter(value: string): OptionModel[] {
		const filterValue = value;

		return this.filteredInstrumentsData.filter(
			(instrument) => !instrument.label.includes(filterValue)
		);
	}
}
