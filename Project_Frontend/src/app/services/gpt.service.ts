import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class GptService {
	private testMode = false;
	constructor(private http: HttpClient) {}

	getGPTResponse = (chabby: string, prompt: string): Observable<string> => {
		if (!this.testMode && chabby != '' && prompt != '') {
			return this.http
				.post(
					'https://api.openai.com/v1/chat/completions',
					{
						model: 'gpt-3.5-turbo',
						messages: [{ role: 'user', content: prompt }],
					},
					{
						headers: {
							Authorization: 'Bearer ' + chabby,
						},
					}
				)
				.pipe(
					map((res) => {
						console.log(res);
						return res['choices'][0]['message']['content'];
					})
				) as Observable<string>;
		} else {
			return of(
				'\n\nIntro:\nD Bm A G D\nD A G F# Bm\nVerse:\nD Bm A G D\nD A G F# Bm\nChorus:\nD A Bm G\nD A G F#\nBridge:\nEm Bm G A\nEm Bm G A\nChorus:\nD A Bm G\nD A G F#\nOutro:\nD Bm A G D\nD A G F# Bm\n\nDynamics: The piece starts in piano (soft), gradually crescendoing (getting louder) towards the end.\nTempo: Adagio, meaning slow and stately.\nTime Signature: 3/4, a waltz-like rhythm.\nKey Signature: D, giving the piece a warm and folksy sound.'
			);
		}
	};
}
