import {
	ChangeDetectorRef,
	Component,
	Input,
	NgZone,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
// declare var abcjs: any;
import * as abcjs from 'abcjs';

declare var ABCJS: any;

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
	midiUrl = '';
	@Input() abcString: string = '';
	visualObj = abcjs.renderAbc('paper', this.abcString);
	tune: any;
	synth: any;

	constructor() {}

	ngOnInit() {
		this.onMidi();
	}

	onMidi() {
		if (abcjs.synth.supportsAudio()) {
			var visualObj = abcjs.renderAbc('notation', this.abcString)[0];
			var synthControl = new abcjs.synth.SynthController();
			synthControl.load('#audio', null, {
				displayRestart: true,
				displayPlay: true,
				displayProgress: true,
			});
			synthControl.setTune(visualObj, false);
			this.generateMidi();
		} else {
			document.querySelector('#audio').innerHTML =
				"<div class='audio-error'>Audio is not supported in this browser.</div>";
		}
	}

	generateMidi() {
		this.midiUrl = abcjs.synth.getMidiFile(this.abcString, {
			midiOutputType: 'encoded',
		});
	}
}
