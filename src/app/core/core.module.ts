import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { UiModule } from '../ui/ui.module';
import { CanalModule } from '../canal/canal.module';
import { FormComponent } from '../canal/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    NavComponent,
    CanalModule,
    PageNotFoundModule,
    UiModule,
    IconsModule,
  ],
})
export class CoreModule {}
