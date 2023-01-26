import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit, OnDestroy {
  private _destroyed = new Subject();
  password: string = '';
  passwordStrength: {
    letter: boolean,
    number: boolean,
    symbol: boolean,
    message: string
  } = {
    letter: true,
    number: true,
    symbol: true,
    message: ''
  };

  ngOnInit() {}

  parsePasswordStrength(error: any): void {
    const value = this.password;

    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]+/.test(value);
    const hasSymbol = /[^a-zA-Z0-9\-]/g.test(value);
    const strengthList = [hasLetter, hasNumber, hasSymbol].filter(item => item);

    this.passwordStrength = {
      ...this.passwordStrength,
      letter: hasLetter,
      number: hasNumber,
      symbol: hasSymbol,
    }

    if (error?.required) {
      this.passwordStrength.message = 'Required';
      return;
    }

    if (error?.minlength) {
      this.passwordStrength.message = 'Min Length 8';
      return;
    }

    switch (strengthList.length) {
      case 1:
        this.passwordStrength.message = 'Easy';
        break;
      case 2:
        this.passwordStrength.message = 'Medium';
        break;
      case 3: {
        this.passwordStrength.message = 'Strong';
        break;
      }
    }
  }

  ngOnDestroy() {
    this._destroyed.next(null);
    this._destroyed.complete();
  }
}
