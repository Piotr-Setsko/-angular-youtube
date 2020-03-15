import { Injectable, EventEmitter } from '@angular/core';
import { SearchItem } from '../../youtube/models/search-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { error } from 'protractor';
import { map } from 'rxjs/operators';
import { SearchListResponse } from '../../youtube/models/search-list.model';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable()

export class DataService {

  private show: boolean = false;
  private itemsResp: SearchItem[];
  public newData: string[] = [];

  private readonly userApi: string = environment.TOKEN;
  private listUrl: string;


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

  public searchYoutube(queryString: string): void {
    this.listUrl =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
    + queryString + '&type=video&key=' + this.userApi;

    this.httpClient.get<SearchListResponse>(this.listUrl)
      .pipe(
        map(value => {
          const {items} = value;
          return items.map(item => item.id.videoId);
        })
      ).subscribe(data => {
        this.newData = data;
        this.searchYoutubeVideo(this.newData);
      });
  }

  public searchYoutubeVideo(newData: string[]): void {
    let req: string = newData.join(',');

    this.listUrl =
    'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
    + req + '&key=' + this.userApi;

    this.httpClient.get<SearchResponse>(this.listUrl)
      .pipe(
        map(value => {
          const { items } = value;
          return items;
        }))
        .subscribe(
          data => this.itemsResp2.next(data)
        );
  }
}
