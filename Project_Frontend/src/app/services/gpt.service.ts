import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GptService {
	constructor(private http: HttpClient) {}

	getGPTResponse = (prompt: string): Observable<string> => {
		if (prompt != '') {
			// return this.http.get(
			// 	'http://localhost:8080/myapp/api/model/'
			// ) as Observable<string>;
			return of(
				'X:1\nT:Country Serenade\nM:4/4\nL:1/4\nQ:1/4=60\nK:D\n%%MIDI program 25 % Acoustic Guitar (nylon)\n%%MIDI program 73 % Flute\n[V:V1] |:D2 F2|A2 A2 A2 F2|G2 G2 G2 F2|E2 E2 E2 F2|\nD2 F2|A2 A2 A2 F2|G2 G2 G2 F2|E2 E2 E2 F2|\n[V:V2 clef=treble] d2 B2|d2 d2 d2 B2|c2 B2 A2 G2|F2 G2 A2 B2|\nd2 B2|d2 d2 d2 B2|c2 B2 A2 G2|F2 G2 A2 B2|\n[V:V1] D2 F2|A2 A2 A2 F2|G2 G2 G2 F2|E2 E2 E2 F2|\nD2 F2|A2 A2 A2 F2|G2 G2 G2 F2|E2 E2 E2 F2|\n[V:V2] d2 B2|d2 d2 d2 B2|c2 B2 A2 G2|F2 G2 A2 B2|\nd2 B2|d2 d2 d2 B2|c2 B2 A2 G2|F2 G2 A2 B2|\n[V:V1] D2 F2|A2 A2 A2 F2|G2 G2 G2 F2|E2 E2 E2 F2|\nD2 F2|A2 A2 A2 F2|G2 G2 G2 F2|E2 E2 E2 F2|\n[V:V2] d2 B2|d2 d2 d2 B2|c2 B2 A2 G2|F2 G2 A2 B2|\nd2 B2|d2 d2 d2 B2|c2 B2 A2 G2|F2 G2 A2 B2|\n'
			);
		} else {
			return of(
				"X: 1\nT: Cooley's\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\n|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|\nEBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|\n:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|\neB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|"
			);
		}
	};
}
