import { compileDeclareComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/components/footer/footer.component';
import { CompraComponent } from './components/compra/compra.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'compra', component:CompraComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: HomeComponent},
  {path: 'footer', component:FooterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
