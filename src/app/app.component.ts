import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  componentTitlePropertyBinding ="Ja sam tu da pokazem property binding";

  clickHandler(){
  alert("Kliknula si-Ovo je Event handler")
  }
}
