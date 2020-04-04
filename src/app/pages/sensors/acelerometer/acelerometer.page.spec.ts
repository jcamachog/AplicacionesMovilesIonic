import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcelerometerPage } from './acelerometer.page';

describe('AcelerometerPage', () => {
  let component: AcelerometerPage;
  let fixture: ComponentFixture<AcelerometerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcelerometerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcelerometerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
