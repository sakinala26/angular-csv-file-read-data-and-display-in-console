import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fileContent: string = '';

  public onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const fileList = target.files as FileList;
    let file = fileList[0];
    let fileReader = new FileReader();
    fileReader.onload = this._handleReaderLoadedPro.bind(this);
    fileReader.readAsText(file);
  }
  _handleReaderLoadedPro(e: any) {
    let reader = e.target;
    let csvData = reader.result;
    let csv = (<string>csvData).split(/\r\n|\n/);
    this.fileContent = reader.result as string;
    console.table(JSON.stringify(csv));
  }
}
