import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsCategoriesComponent } from './rewards-categories.component';

describe('RewardsCategoriesComponent', () => {
  let component: RewardsCategoriesComponent;
  let fixture: ComponentFixture<RewardsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewardsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
