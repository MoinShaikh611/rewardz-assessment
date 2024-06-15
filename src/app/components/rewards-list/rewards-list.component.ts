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
  rewards$: Observable<any[]>;
  private rewardsData: any[] = [];
  private searchQuerySubject = new BehaviorSubject<string>('');
  rewardsFound:any = 0;

  constructor(private rewardService: RewardService) {
    this.rewards$ = this.searchQuerySubject.pipe(
      switchMap(query => this.filterRewards(query))
    );
  }

  ngOnInit(): void {
    this.rewardsData = Data;
    this.rewardsFound = this.rewardsData.length;
    this.rewardService.searchQuery$.subscribe(query => {
      this.searchQuerySubject.next(query);
    });
  }

  private filterRewards(query: string): Observable<any[]> {
    const filteredRewards = this.rewardsData.filter((reward: any) =>
      reward.name.toLowerCase().includes(query.toLowerCase())
    );
    this.rewardsFound = filteredRewards.length
    
    return of(filteredRewards);
  }


}
