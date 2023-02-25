import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
// declare var abcjs: any;
import * as abcjs from "abcjs";

declare var ABCJS: any;

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent implements OnInit {
  midiUrl = "";
  abcString =
    "X: 1\nT: Cooley's\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\n|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|\nEBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|\n:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|\neB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|";
  visualObj = abcjs.renderAbc("paper", this.abcString);
  tune: any;
  synth: any;

  constructor() {}

  ngOnInit() {
    this.onMidi();
  }

  onMidi() {
    if (abcjs.synth.supportsAudio()) {
      var visualObj = abcjs.renderAbc("notation", this.abcString)[0];
      var synthControl = new abcjs.synth.SynthController();
      synthControl.load("#audio", null, {
        displayRestart: true,
        displayPlay: true,
        displayProgress: true,
      });
      synthControl.setTune(visualObj, false);
      this.generateMidi();
    } else {
      document.querySelector("#audio").innerHTML =
        "<div class='audio-error'>Audio is not supported in this browser.</div>";
    }
  }

  generateMidi() {
    this.midiUrl = abcjs.synth.getMidiFile(this.abcString, {
      midiOutputType: "encoded",
    });
  }
}
