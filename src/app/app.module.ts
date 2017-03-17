import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Tawseel } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { ApiManager} from '../providers/api-manager';

@NgModule({
  declarations: [
    Tawseel,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(Tawseel)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Tawseel,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,ApiManager]
})
export class AppModule {}
