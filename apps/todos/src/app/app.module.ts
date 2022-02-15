import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderModule, FooterModule } from './modules';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StorageService, AuthService, UserService, TodoService, ValidationService} from './core/services';
import { AuthInterceptor } from './core/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StorageService,
    AuthService,
    UserService,
    TodoService,
    ValidationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
