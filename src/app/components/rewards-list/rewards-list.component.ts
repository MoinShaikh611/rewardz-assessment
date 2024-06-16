import { AfterViewInit, Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, of, switchMap } from 'rxjs';
import { RewardService } from '../../services/reward.service';
import Data from '../../../../public/data.json'

@Component({
  selector: 'app-rewards-list',
  templateUrl: './rewards-list.component.html',
  styleUrl: './rewards-list.component.css'
})
export class RewardsListComponent  implements AfterViewInit{
  
  private rewardsData: any[] = [];
  rewardsFound:number = 0;

  currentSearchQuery: string = '';
  currentCategories:string[] = [];

  sidebarOpen = false;
  isOrderAsc = true;


  constructor(public rewardService: RewardService) { }

  ngOnInit(): void {
    this.rewardsData = structuredClone(Data);
    this.rewardService.rewards$ = this.getFilteredRewards();
    this.rewardsFound = this.rewardsData.length;

  }

  ngAfterViewInit(): void {
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
    });
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

  sort(order:string){
    if(order === 'asc'){
      this.isOrderAsc = true
    }else{
      this.isOrderAsc = false
    }
  }

  sortRewardsList(){
    if(this.isOrderAsc){
      const sortedByName =  this.rewardsData.sort((a,b) => a.name.localeCompare(b.name))
      this.rewardService.rewards$ = of(sortedByName);
    }else{
      const sortedByName =  this.rewardsData.sort((a,b) => b.name.localeCompare(a.name))
      this.rewardService.rewards$ = of(sortedByName);
    }      
  }

  showSortSideBar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  resetAll(){
    this.rewardService.rewards$ = of(structuredClone(Data))
    this.showSortSideBar()
  }



}
