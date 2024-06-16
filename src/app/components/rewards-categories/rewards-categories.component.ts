import { AfterViewInit, Component,  OnInit,    QueryList,  ViewChildren } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import Data from '../../../../public/data.json';
import { getUniqueValuesAsPerProperty } from '../../utility/getUniqueValues';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rewards-categories',
  templateUrl: './rewards-categories.component.html',
  styleUrl: './rewards-categories.component.css'
})
export class RewardsCategoriesComponent implements OnInit,AfterViewInit{
  rewardsData = Data;
  categories:string[] = [];
  selectedCategories:any = new Set();
  constructor(private rewardService:RewardService){ }

  @ViewChildren('categoryCheckbox') categoryCheckboxes!:QueryList<any>;

  ngOnInit(): void {
    this.categories = getUniqueValuesAsPerProperty(Data,'category');
  }
  ngAfterViewInit():void {
     this.rewardService.categoryRemovedSubject.subscribe(item => {      
      this.categoryCheckboxes.forEach((checkbox:any) => {
        if(checkbox.nativeElement.value == item){          
          checkbox.nativeElement.checked = false;
          this.selectedCategories.delete(checkbox.nativeElement.value)
          this.rewardService.setCategories(Array.from(this.selectedCategories));
        }
      })
    })   

    this.rewardService.clearAllCategories$.subscribe(value => {
      if(value){
        this.selectedCategories.clear();
        this.categoryCheckboxes.forEach((checkbox:any) => {
            checkbox.nativeElement.checked = false;
            this.rewardService.setCategories(Array.from(this.selectedCategories));
        })
      }
    })
  }

  onCategoryChange(event:Event){
    let inputElement = event.target as HTMLInputElement;
    const category = inputElement.value;
    if(inputElement.checked){
      
      this.selectedCategories.add(category)      
      this.rewardService.setCategories(Array.from(this.selectedCategories));
      
    }else{
      this.selectedCategories.delete(category)
      this.rewardService.setCategories(Array.from(this.selectedCategories));
    }  
  }


}
