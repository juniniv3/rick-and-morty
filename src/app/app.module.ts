import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { SearchResultsComponent } from './components/main/search-results/search-results.component';
import { PaginatorComponent } from './components/main/paginator/paginator.component';
import { ModalComponent } from './components/utils/modal/modal.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { CompleteCharacterProfileComponent } from './components/main/complete-character-profile/complete-character-profile.component';
import { LocationProfileComponent } from './components/main/location-profile/location-profile.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoCharactersComponent } from './components/main/search-results/no-characters/no-characters.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FiltersComponent,
    SearchResultsComponent,
    PaginatorComponent,
    ModalComponent,
    ClickStopPropagationDirective,
    CompleteCharacterProfileComponent,
    LocationProfileComponent,
    TranslatePipe,
    PageNotFoundComponent,
    NoCharactersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
