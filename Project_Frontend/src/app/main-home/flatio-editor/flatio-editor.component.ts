import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
declare var Flat: any;

@Component({
  selector: "app-flatio-editor",
  templateUrl: "./flatio-editor.component.html",
  styleUrls: ["./flatio-editor.component.scss"],
})
export class FlatioEditorComponent implements OnInit {
  scoreLoaded = false;
  @ViewChild("myInput")
  midiFile: ElementRef;
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file.type === "audio/midi") {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result?.toString().split(",")[1];
        console.log(base64String);
        this.midiFile.nativeElement.value = "";
        this.createScore(base64String);
      };
    } else {
      console.log("Please select a MIDI file.");
    }
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
        console.log("Score created:", response);
        this.loadScore(response.id);
      },
      (error) => console.error("Error creating score:", error)
    );
  }

  loadScore(scoreId: any) {
    this.scoreLoaded = true;
    var container = document.getElementById("embed-container");
    container.style.height = "500px";
    var embed = new Flat.Embed(container, {
      score: scoreId,
      embedParams: {
        appId: "63d202f3f3f8bdabcd8833e1",
        mode: "edit",
        branding: false,
        controlsPosition: "bottom",
      },
    });
  }
}
