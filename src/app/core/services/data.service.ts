import { Injectable, EventEmitter } from '@angular/core';
import { SearchItem } from '../../youtube/models/search-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private show: boolean = false;
  private itemsResp: SearchItem[];
  public response: any = {};
  public data: unknown = [];

  public userApi2: string = environment.userApi2;

  public clickChange: EventEmitter<boolean> = new EventEmitter();
  public clickSubmit: EventEmitter<SearchItem[]> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  public onClicked(): void {
    this.show = !this.show;
    this.clickChange.emit(this.show);
  }

  public onClickedResp(event: SearchItem[]): void {
    this.itemsResp = event;
    this.clickSubmit.emit(this.itemsResp);
  }

  public search(queryString: string): void {
    let baseUrl: string =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
    + queryString + '&type=video&key=' + this.userApi2;
    // this.httpClient.get(baseUrl).subscribe(value => console.log(value));
    this.httpClient.get(baseUrl)
      .subscribe(value => {
        this.response = value;
        console.log(this.data = this.response.items.forEach((element) => {
          element.id;
        }
      ));
    },
    consoleError => {
      console.log(consoleError.status + '! Количество попыток закончилось');
    });
    // console.log(this.response.items[0]);
    // this.data =  this.response.items.forEach((element, i) => element[i].id);
  }
}
