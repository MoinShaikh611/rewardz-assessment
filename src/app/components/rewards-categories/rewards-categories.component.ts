import { Component, OnInit } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import Data from '../../../../public/data.json';
import { getUniqueValuesAsPerProperty } from '../../utility/getUniqueValues';

@Component({
  selector: 'app-rewards-categories',
  templateUrl: './rewards-categories.component.html',
  styleUrl: './rewards-categories.component.css'
})
export class RewardsCategoriesComponent implements OnInit{
  rewardsData = Data;
  categories:string[] = [];
  selectedCategories:string[] = []
  constructor(private rewardService:RewardService){ }


  ngOnInit(): void {
    this.categories = getUniqueValuesAsPerProperty(Data,'category')    
  }

  onCategoryChange(event:Event){
    const inputElement = event.target as HTMLInputElement;
    const category = inputElement.value;

    if(inputElement.checked){
      this.selectedCategories.push(category)
    }else{
      const index = this.selectedCategories.indexOf(category);
      if(index > -1){
        this.selectedCategories.splice(index,1)
      }
    }
    this.rewardService.setCategories(this.selectedCategories);
  }

}
