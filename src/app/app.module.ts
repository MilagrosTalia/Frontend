import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPeluqueroComponent } from './components/list-peluquero/list-peluquero.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AgregarEditarPeluqueroComponent } from './components/agregar-editar-peluquero/agregar-editar-peluquero.component';

//Modulos
import { SharedModule } from './shared/shared.module.js';

@NgModule({
  declarations: [
    AppComponent,
    ListPeluqueroComponent,
    AgregarEditarPeluqueroComponent
  ],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
