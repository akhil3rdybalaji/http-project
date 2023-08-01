  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HttpClientModule } from '@angular/common/http';
  import { GetDataComponent } from './get/get.component';
  import { FormsModule } from '@angular/forms';
  import { GetComponent } from './get-and-post/get-and-post.component';
import { CrudComponent } from './crud/crud.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterComponent } from './router/router.component';
import { RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule


const routes:Routes = [
  {
    path:'',component:RouterComponent
  },
  {
    path:'createrecord',component:GetComponent
  },
  {
    path:'updaterecord',component:CrudComponent
  },
  {
    path:'deleterecord',component:DeleteComponent
  },
  {
    path:'viewrecord',component:GetDataComponent
  }

]

  @NgModule({
    declarations: [
      AppComponent,
      GetDataComponent,
      GetComponent,
      CrudComponent,
      DeleteComponent,
      RouterComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      CommonModule,
      RouterModule.forRoot(routes)

    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
