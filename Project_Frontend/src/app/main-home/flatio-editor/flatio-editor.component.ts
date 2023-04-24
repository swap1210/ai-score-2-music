import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { MatSnackBar } from "@angular/material/snack-bar";
declare var Flat: any;

@Component({
  selector: "app-flatio-editor",
  templateUrl: "./flatio-editor.component.html",
  styleUrls: ["./flatio-editor.component.scss"],
})
export class FlatioEditorComponent implements OnInit {
  promptForm: FormGroup;
  loading: boolean = false;
  scores = [];
  scoreLoaded = false;
  currentScore: any;
  editor: any;
  @ViewChild("myInput")
  midiFile: ElementRef;
  accessToken =
    "ec419ca3c713761d7d3800ce79b0de2f4bde167fa76e85b8259057bfefb2fa2612dc260ef8a39b41c63fe74db1114f01e88391c2e0c31be3c98294de3a800bdb"; // Replace with your actual access token

  modalOpen = false;
  scoreTitle = "";
  instruments = [
    { group: "brass", instrument: "trumpet" },
    { group: "keyboards", instrument: "piano" },
    { group: "strings", instrument: "violin" },
    { group: "strings", instrument: "violoncello" },
    { group: "plucked-strings", instrument: "guitar-nylon" },
    { group: "plucked-strings", instrument: "electric-bass" },
    { group: "unpitched-percussion", instrument: "drumset-1" },
  ];
  selectedInstruments = {};
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.promptForm = this.fb.group({
      title: [null, []],
      selectedInstruments: [[]],
    });
  }

  onInstrumentSelect(event: MatSelectChange): void {
    this.promptForm.get("selectedInstruments").setValue(event.value);
  }

  onSubmit() {}

  ngOnInit() {
    this.getAllScores();
  }

  newEmptyScore() {
    this.createEmptyScore(this.promptForm.get("title").value);
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file.type === "audio/midi" || file.type === "audio/mid") {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result?.toString().split(",")[1];
        this.midiFile.nativeElement.value = "";
        this.createScore(base64String);
      };
    } else {
      console.log("Please select a MIDI file.");
    }
  }

  deleteScore(score: any) {
    this.loading = true;

    const url = `https://api.flat.io/v2/scores/${score}?now=true`;

    const headers = {
      Authorization:
        "Bearer ec419ca3c713761d7d3800ce79b0de2f4bde167fa76e85b8259057bfefb2fa2612dc260ef8a39b41c63fe74db1114f01e88391c2e0c31be3c98294de3a800bdb",
      "Content-Type": "application/json",
    };

    this.http.delete(url, { headers }).subscribe(
      (response: any) => {
        this.loading = false;
        this.getAllScores();
      },
      (error) => {
        this.loading = false;
        console.error("Error creating score:", error);
      }
    );
  }

  createEmptyScore(title) {
    this.loading = true;
    let score = {
      title: title,
      privacy: "public",
      builderData: {
        scoreData: {
          instruments: this.instruments,
        },
        layoutData: {
          notesSpacingCoeff: 2,
          lengthUnit: "cm",
          pageHeight: 29.7,
          pageWidth: 21,
          pageMarginTop: 1.5,
          pageMarginBottom: 1.5,
          pageMarginLeft: 2.5,
          pageMarginRight: 2.5,
        },
      },
    };

    const url = "https://api.flat.io/v2/scores";

    const headers = {
      Authorization:
        "Bearer ec419ca3c713761d7d3800ce79b0de2f4bde167fa76e85b8259057bfefb2fa2612dc260ef8a39b41c63fe74db1114f01e88391c2e0c31be3c98294de3a800bdb",
      "Content-Type": "application/json",
    };

    this.http.post(url, score, { headers }).subscribe(
      (response: any) => {
        this.loading = false;
        this.promptForm.get("title").setValue("");
        this.loadScoreById(response.id);
        this.getAllScores();
      },
      (error) => {
        this.loading = false;
        console.error("Error creating score:", error);
      }
    );
  }

  createScore(base64Data: string) {
    const url = "https://api.flat.io/v2/scores";

    const headers = {
      Authorization:
        "Bearer ec419ca3c713761d7d3800ce79b0de2f4bde167fa76e85b8259057bfefb2fa2612dc260ef8a39b41c63fe74db1114f01e88391c2e0c31be3c98294de3a800bdb",
      "Content-Type": "application/json",
    };

    const score = {
      title: "From app",
      privacy: "public",
      dataEncoding: "base64",
      data: base64Data,
    };

    this.http.post(url, score, { headers }).subscribe(
      (response: any) => {
        this.loadScoreById(response.id);
      },
      (error) => console.error("Error creating score:", error)
    );
  }

  loadScoreById(scoreId: any) {
    this.scoreLoaded = true;
    var container = document.getElementById("embed-container");
    container.style.height = "500px";
    this.editor = new Flat.Embed(container, {
      score: scoreId,
      embedParams: {
        appId: "63d202f3f3f8bdabcd8833e1",
        mode: "edit",
        branding: false,
        controlsPosition: "bottom",
      },
    });
  }

  loadScore(score: any) {
    this.scoreLoaded = true;
    document.getElementById("embed-container").innerHTML = "";
    var container = document.getElementById("embed-container");
    container.style.height = "500px";
    this.currentScore = score.id;
    this.editor = new Flat.Embed(container, {
      score: score.id,
      embedParams: {
        appId: "63d202f3f3f8bdabcd8833e1",
        sharingKey: score.sharingKey,
        mode: "edit",
        branding: false,
        controlsPosition: "bottom",
      },
    });
  }

  async addInstrumentsToExistingScore() {
    var obj = this;

    this.instruments.forEach(async (c) => {
      await this.editor.call("addPartFromTemplate", {
        groupName: c.group,
        instrumentName: c.instrument,
      });
    });
  }

  exportFile(buffer, mimeType, ext) {
    var blobUrl = window.URL.createObjectURL(
      new Blob([buffer], {
        type: mimeType,
      })
    );

    var a = document.createElement("a");
    a.href = blobUrl;
    a.download = "exported-score." + ext;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  createNewRevision(data) {
    var revisionData = {
      data: data,
      autosave: true,
      description: "New revision",
    };

    fetch(`https://api.flat.io/v2/scores/${this.currentScore}/revisions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(revisionData),
    })
      .then((response) => response.json())
      .then((data) => {
        this._snackBar.open("Changes Saved", "", {
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error(error); // this will log any errors to the console
      });
  }

  saveChanges() {
    var obj = this;
    // this.editor.getMIDI().then(function (buffer) {
    //   console.log("buffer", buffer);
    //   obj.exportFile(buffer, "audio/midi", "mid");
    // });

    this.editor.getMusicXML().then(function (buffer) {
      obj.createNewRevision(buffer);
      // obj.exportFile(buffer, "application/vnd.recordare.musicxml+xml", "mxl");
    });
  }

  getAllScores() {
    const collectionId = "63d315c5cd4e47ddfc053a80"; // Replace with the actual ID of the collection you want to retrieve scores for

    fetch(`https://api.flat.io/v2/collections/${collectionId}/scores`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("scores", data); // This will log the response data to the console
        this.scores = data;
      })
      .catch((error) => {
        console.error(error); // This will log any errors to the console
      });

    fetch("https://api.flat.io/v2/instruments", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("instruments", data.instruments);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
