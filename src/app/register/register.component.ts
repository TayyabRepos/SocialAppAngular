import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_Services/Account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}
  model: any = [];
  @Input() userFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();

  ngOnInit() {
    this.accountService.CurrentUser$;
  }

  register() {
    this.accountService.register(this.model).subscribe((response) => {
      console.log(response);
      this.cancel();
    }),
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      };
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
