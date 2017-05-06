import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterCDFundsPackages } from './register-cd-funds-packages';

@NgModule({
  declarations: [
    RegisterCDFundsPackages,
  ],
  imports: [
    IonicPageModule.forChild(RegisterCDFundsPackages),
  ],
  exports: [
    RegisterCDFundsPackages
  ]
})
export class RegisterCDFundsPackagesModule {}
