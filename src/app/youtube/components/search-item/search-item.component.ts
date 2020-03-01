import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { SearchItem } from '../../models/search-item.model';

import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public itemCard: SearchItem;
  @Input() public publicDate: number;
  @Input() public id: string;

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
