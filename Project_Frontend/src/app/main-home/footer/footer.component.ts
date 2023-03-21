import { Component } from '@angular/core';
import { CommonDataService } from '../../services/common-data.service';

@Component({
	selector: 'home-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	constructor(public commData: CommonDataService) {}

	ngOnInit(): void {}
}
