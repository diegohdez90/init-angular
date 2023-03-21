import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  inputAttribute: string = "";
  serverStatus = "No server added";
  isServerCreated: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  addServer = () => {
    this.isServerCreated = true;
    this.serverStatus = `Server added: ${this.inputAttribute}`;
  }

  ngOnInit() {

  }
}
