import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { SearchItem } from '../../models/search-item.model';

import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  private _publicDate: number;
  private routeSubscription: Subscription;

  @Input() public itemCard: SearchItem;
  @Input() public id: string;

  @Input()
  set publicDate(publicDate: number) {
    this._publicDate = (+new Date() - new Date(publicDate).getTime()) / (1000 * 60 * 60 * 24);
  }
  get publicDate(): number {
    return this._publicDate;
  }

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.iconRegistry.addSvgIcon(
      'viewed',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/viewed.svg'));
    this.iconRegistry.addSvgIcon(
      'liked',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/liked.svg'));
    this.iconRegistry.addSvgIcon(
      'dislike',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/dislike.svg'));
    this.iconRegistry.addSvgIcon(
      'comments',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/comments.svg'));

      this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
      console.log(this.id);
  }

  public ngOnInit(): void {
  }
}
