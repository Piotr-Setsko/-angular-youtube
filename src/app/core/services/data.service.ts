import { Injectable, EventEmitter } from '@angular/core';
import { SearchItem } from '../../youtube/models/search-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { error } from 'protractor';
import {response} from '../../youtube/response';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private show: boolean = false;
  private itemsResp: SearchItem[];
  //private itemsResp2;
  public response: any = {};
  public response2: any = {};
  public data: Array<string> = [];
  newData: string;

  public userApi: string = environment.userApi2;

  public clickChange: EventEmitter<boolean> = new EventEmitter();
  public clickSubmit: EventEmitter<SearchItem[]> = new EventEmitter();
  
  public itemsResp2: BehaviorSubject<SearchItem[] | null> = new BehaviorSubject([]);
  public currentItemResp: Observable<SearchItem[] | null> = this.itemsResp2.asObservable();

  constructor(private httpClient: HttpClient) { }

  public onClicked(): void {
    this.show = !this.show;
    this.clickChange.emit(this.show);
  }

  public onClickedResp(event: SearchItem[]): void {
    this.itemsResp = event;
    this.clickSubmit.emit(this.itemsResp);
  }

  public searchYoutube(queryString): void {
    let baseUrl: string =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
    + queryString + '&type=video&key=' + this.userApi;

    // this.httpClient.get(baseUrl).subscribe(value => console.log(value));
    this.httpClient.get(baseUrl)
      .subscribe(value => {
        this.response = value;
        this.response.items.forEach((element) => {
          this.data.push(element.id.videoId);
        }
      );
      this.newData = this.data.join('%2C');
      //console.log(this.newData);
    },
    consoleError => {
      console.log(consoleError.status + '! Количество попыток закончилось !');
    });

    let resultUrl =
    'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
    + this.newData + '&key=' + this.userApi;
    this.httpClient.get(resultUrl)
    .subscribe(value => {
      this.response2 = value;
      //this.itemsResp2.next(this.response2.items);
      //console.log(this.itemsResp2);
    },
    consoleError => {
      console.log(consoleError.status + '! Количество попыток закончилось');
    })
    this.itemsResp2.next(queryString);
    //console.log(queryString);
    //return of(this.itemsResp2);
  }
}
