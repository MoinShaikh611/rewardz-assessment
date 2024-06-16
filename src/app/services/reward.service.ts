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

  private categoriesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  selectedCategories$:Observable<any[]> = this.categoriesSubject.asObservable();

  categoryRemovedSubject:BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  clearAllCategoriesSubject:BehaviorSubject<any> = new BehaviorSubject<any>(false);
  clearAllCategories$:Observable<any[]> = this.clearAllCategoriesSubject.asObservable();

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);    
  }

  setCategories(categories:any[]):void{
    this.categoriesSubject.next(categories);
  }
}
