import { NgModule } from '@angular/core';
import { RouterModule,  } from '@angular/router';
import { routers } from 'src/router/router';

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
