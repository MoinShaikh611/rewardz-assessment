import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { RewardService } from '../../services/reward.service';
import Data from '../../../../public/data.json'

@Component({
  selector: 'app-rewards-list',
  templateUrl: './rewards-list.component.html',
  styleUrl: './rewards-list.component.css'
})
export class RewardsListComponent {
  
  private rewardsData: any[] = [];
  rewardsFound:number = 0;

  currentSearchQuery: string = '';
  currentCategories:string[] = [];


  constructor(public rewardService: RewardService) { }

  ngOnInit(): void {
    this.rewardsData = Data;
    this.rewardService.rewards$ = this.getFilteredRewards();
    this.rewardService.rewards$ = this.getFilteredRewardsAsPerCategories();
    this.rewardsFound = this.rewardsData.length;


    this.rewardService.searchQuery$.subscribe(query => {
      this.currentSearchQuery = query;
      this.rewardService.rewards$ = this.getFilteredRewards();
    });
    this.rewardService.selectedCategories$.subscribe(query => {
      this.currentCategories = query;
      if(query.length){
        this.rewardService.rewards$ = this.getFilteredRewardsAsPerCategories();
      }else{
        this.rewardService.rewards$ = this.getFilteredRewards();
      }
    })
  }

   getFilteredRewards(): Observable<any[]> {
    const filteredRewards = this.rewardsData.filter((reward: any) => reward.name.toLowerCase().includes(this.currentSearchQuery.toLowerCase()));
    this.rewardsFound = filteredRewards.length;
    return of(filteredRewards);
  }

  getFilteredRewardsAsPerCategories():Observable<any[]>{
    const filteredRewards = this.rewardsData.filter(reward => this.currentCategories.includes(reward['category']));
    this.rewardsFound = filteredRewards.length;    
    return of(filteredRewards)
  }


}
