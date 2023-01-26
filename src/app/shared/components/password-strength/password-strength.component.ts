import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl} from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit, OnDestroy {
  private _destroyed = new Subject();
  password: FormControl = new FormControl('');

  ngOnInit() {
    this.password.valueChanges
      .pipe(
        takeUntil(this._destroyed)
      ).subscribe(value => {
        console.log(value)
      })
  }

  ngOnDestroy() {
    this._destroyed.next(null);
    this._destroyed.complete();
  }
}
