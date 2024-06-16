import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.router';
import { RewardsListComponent } from './components/rewards-list/rewards-list.component';
import { RewardsCategoriesComponent } from './components/rewards-categories/rewards-categories.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { RewardService } from './services/reward.service';
import { AppliedFiltersComponent } from './components/applied-filters/applied-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RewardsListComponent,
    RewardsCategoriesComponent,
    CardComponent,
    SearchComponent,
    AppliedFiltersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    
  ],
  providers: [RewardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
