import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LearnappSharedModule } from 'app/shared/shared.module';
import { LearnappCoreModule } from 'app/core/core.module';
import { LearnappAppRoutingModule } from './app-routing.module';
import { LearnappHomeModule } from './home/home.module';
import { LearnappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    LearnappSharedModule,
    LearnappCoreModule,
    LearnappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LearnappEntityModule,
    LearnappAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class LearnappAppModule {}
