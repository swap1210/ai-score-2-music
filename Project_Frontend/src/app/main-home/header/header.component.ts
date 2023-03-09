import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Header } from '../../model/header';
import { CommonDataService } from '../../services/common-data.service';

@Component({
	selector: 'home-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	destroy$: Subject<boolean> = new Subject<boolean>();
	header: Header;
	constructor(public commData: CommonDataService) {}
	ngOnInit(): void {
		this.header = this.commData.getHeader().header;
	}

	//prefer active unsubscribing from all the hotpatch data from firebase
	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.complete();
	}

	switchTheme = (): void => {
		//send new value to app component
		this.commData.themeState$.next({
			darkmode: !this.commData.themeState$.getValue().darkmode,
		});
	};
}
