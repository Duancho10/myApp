import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfiPage } from './perfi.page';

describe('PerfiPage', () => {
  let component: PerfiPage;
  let fixture: ComponentFixture<PerfiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
