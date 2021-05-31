import { Component } from '@angular/core';
import { UserPreferenceService } from '../employee/userPreference.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private _userPreferenceService: UserPreferenceService) {
    
  }
  get colour(): string {
    return this._userPreferenceService.colourPreference;
  }
  set colour(value: string) {
    this._userPreferenceService.colourPreference = value;
  }
}
