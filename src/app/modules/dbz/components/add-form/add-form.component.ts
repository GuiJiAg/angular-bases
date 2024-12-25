import { Component } from '@angular/core';
import { Constants } from '../../../../Utils/constants';

const {
  DBZ_MAIN_PAGE_FORM_TITLE_TEXT,
  DBZ_MAIN_PAGE_ADD_BUTTON_TEXT
} = new Constants();

@Component({
  selector: 'app-add-form',
  standalone: false,

  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  public addFormTitle: string = DBZ_MAIN_PAGE_FORM_TITLE_TEXT;
  public addButtonText: string = DBZ_MAIN_PAGE_ADD_BUTTON_TEXT;
}
