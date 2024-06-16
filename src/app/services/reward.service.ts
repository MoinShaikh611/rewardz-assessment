import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor() { }

  rewards$!: Observable<any[]>;

  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();

  private categoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  selectedCategories$:Observable<string[]> = this.categoriesSubject.asObservable();

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);    
  }

  setCategories(categories:string[]):void{
    this.categoriesSubject.next(categories);
  }
}
