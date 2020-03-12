import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoeComponent } from './loe.component';

describe('LoeComponent', () => {
  let component: LoeComponent;
  let fixture: ComponentFixture<LoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
