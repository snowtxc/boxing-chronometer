import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsBarSuperiorComponent } from './tabs-bar-superior.component';

describe('TabsBarSuperiorComponent', () => {
  let component: TabsBarSuperiorComponent;
  let fixture: ComponentFixture<TabsBarSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsBarSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsBarSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
