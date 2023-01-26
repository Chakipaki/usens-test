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

  ngOnInit() {
  }

  ngOnDestroy() {
    this._destroyed.next(null);
    this._destroyed.complete();
  }
}
