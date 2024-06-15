import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import data from '../../../../public/data.json'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  searchReward:string = '';
  rewardsData:any[] = [];
  filteredRewards:any[] = [];
  debounceTimeout:any;

  constructor(){}
  ngOnInit(): void {
    this.rewardsData = data;
    this.filteredRewards = [...this.rewardsData]
  }

  search(){

    if(this.debounceTimeout){
      clearTimeout(this.debounceTimeout)
    }

    this.debounceTimeout = setTimeout(() => {
      this.applyFilters()
    }, 500);
  }

  applyFilters(){
    let filteredRewards = [...this.rewardsData];
    console.log(this.searchReward);
    

    filteredRewards = filteredRewards.filter((obj:any) => 
      obj.name.toLowerCase().includes(this.searchReward.toLowerCase()))
    this.filteredRewards = filteredRewards
  }


  

}
