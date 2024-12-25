import { Component } from '@angular/core';
import { Constants } from '../../../../Utils/constants';;

const {
  DBZ_MAIN_PAGE_TITLE_TEXT,
  DBZ_MAIN_PAGE_SUBTITLE_TEXT
} = new Constants();

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public title: string = DBZ_MAIN_PAGE_TITLE_TEXT;
  public subtitle: string = DBZ_MAIN_PAGE_SUBTITLE_TEXT;
}
