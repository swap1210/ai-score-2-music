import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { AuthStore } from './services/auth.store';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	constructor(
		public auth: AuthStore,
		private load: LoadingService,
		private error: MessagesService
	) {}

	ngOnInit() {
		// this.load.loadingOn();
		// this.error.showErrors('fgdfgd');
	}

	logout() {
		this.auth.logout();
	}
}
