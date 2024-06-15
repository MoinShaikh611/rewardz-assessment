import { Component } from '@angular/core';
import { RewardService } from '../../services/reward.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private rewardService: RewardService){}

  onSearch(event:any): void {
    this.rewardService.setSearchQuery(event.target.value);
  }

}
