import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
	selector: 'loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
	public timed = 0;
	private localInterval: any;
	constructor(public loadingService: LoadingService) {}

	ngOnInit() {
		let self = this;
		self.timed = 0;
		this.loadingService.loading$.subscribe({
			next: (stillLoading) => {
				if (stillLoading) {
					self.timed = 0;
					self.localInterval = setInterval(() => {
						self.timed++;
					}, 1000);
				} else {
					clearInterval(this.localInterval);
				}
			},
		});
	}
}
