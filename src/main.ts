import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

registerLicense('ORg4AjUWIQA/Gnt2UlhhQlVMfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX9Tdk1jWH5WcXZcRmdV');
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebaseConfig)),
    provideHttpClient(withFetch()),
    provideRouter([])
  ],
}).catch((err) => console.error('Error bootstrapping the application:', err));