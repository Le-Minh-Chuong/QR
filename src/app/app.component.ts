import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'QR';
  baseInfo = 'https://graph.facebook.com/me';
  name = '';
  age = 0;
  width = 400;
  QRdata = this.baseInfo;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((v) => {
      console.log('queryParams: ', v);
      if (v && v['data']) {
        const data = v['data'];
        console.log('query params=', data);
        console.log('name=', data.name);
        console.log('age=', data.age);

        const obj = JSON.parse(data);
        console.log('query params=', obj);
        console.log('name=', obj.name);
        console.log('age=', obj.age);
      }
    });
  }

  changeBase(event: any) {
    this.baseInfo = event.target.value;
    this.QRdata = event.target.value;
    this.combine();
  }
  changeName(event: any) {
    this.name = event.target.value;
    this.combine();
  }
  changeAge(event: any) {
    this.age = event.target.value;
    this.combine();
  }
  combine() {
    const data = JSON.stringify({ name: this.name, age: this.age });
    this.QRdata = this.baseInfo + '?data=' + data;
    console.log('QRdata=', this.QRdata);
  }
}
