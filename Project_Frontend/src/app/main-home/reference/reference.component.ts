import { Component } from '@angular/core';
import { Reference } from '../../model/comm.data.model';
import { CommonDataService } from '../../services/common-data.service';

@Component({
	selector: 'app-reference',
	templateUrl: './reference.component.html',
	styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
	public dat: Reference;
	constructor(public commData: CommonDataService) {
		this.dat = commData.getData().reference;
	}

	ngOnInit(): void {}
}
