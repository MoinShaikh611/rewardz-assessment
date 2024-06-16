import { AfterViewInit, Component,  OnInit } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrl: './applied-filters.component.css'
})
export class AppliedFiltersComponent implements OnInit,AfterViewInit{
  categories:any[] =[];

  constructor(private rewardService:RewardService){}
  ngOnInit(): void {
    
  
  }
  ngAfterViewInit(): void {
    this.rewardService.selectedCategories$.subscribe(query => {     
      this.categories = query
    })
  }

  removeItem(item:string){
   
    this.categories = this.categories.filter(category => category !== item); 
    this.rewardService.categoryRemovedSubject.next(item)
    this.rewardService.setCategories(this.categories);    
  }

  clearAll(){
    this.categories = [];
    this.rewardService.setCategories([])
    this.rewardService.clearAllCategoriesSubject.next(true)
  }


}
