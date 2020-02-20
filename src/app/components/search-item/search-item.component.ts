import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  private _publicDate: number;

  @Input() public itemCard: SearchItem;
  @Input()
  set publicDate(publicDate: number) {
    this._publicDate = (+new Date() - new Date(publicDate).getTime()) / (1000 * 60 * 60 * 24);
  }
  get publicDate(): number {
    return this._publicDate;
  }

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
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
  }

  public ngOnInit(): void {
  }
}
