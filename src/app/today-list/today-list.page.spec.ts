import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayListPage } from './today-list.page';

describe('TodayListPage', () => {
  let component: TodayListPage;
  let fixture: ComponentFixture<TodayListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
