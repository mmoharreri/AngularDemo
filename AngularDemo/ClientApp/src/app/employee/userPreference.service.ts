import { Injectable } from "@angular/core";
import { TestModule } from "../test.module";

@Injectable()
export class UserPreferenceService {

  colourPreference: string = 'orange';
}
