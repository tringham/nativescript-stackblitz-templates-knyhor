import { Observable,
  Application, 
  Trace,
  ObservableArray, 
  GridLayout, 
  KeyedTemplate, 
  View,
  Dialogs,
  Utils
} from '@nativescript/core';

import * as camera from "@nativescript/camera";
import {} from "@nativescript/mlkit-text-recognition"


camera.requestPermissions().then(
  function success() {
  // permission request accepted or already granted 
  // ... call camera.takePicture here ...
  }, 
  function failure() {
  // permission request rejected
  // ... tell the user ...
  }
);

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;

  constructor() {
    super();

    // Initialize default values.
    this._counter = 42;
    this.updateMessage();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value);
    }
  }

  async onTap() {
    this._counter--;
    let resp = await camera.takePicture()
    console.log(resp)
    this.updateMessage();
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message =
        'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      this.message = `${this._counter} taps left`;
    }

    // log the message to the console
    console.log(this.message);
  }
}
