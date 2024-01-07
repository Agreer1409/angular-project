import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterCreateComponent } from './search-filter-create.component';

describe('SearchFilterCreateComponent', () => {
  let component: SearchFilterCreateComponent;
  let fixture: ComponentFixture<SearchFilterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFilterCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchFilterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
