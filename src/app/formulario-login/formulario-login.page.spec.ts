import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioLoginPage } from './formulario-login.page';

describe('FormularioLoginPage', () => {
  let component: FormularioLoginPage;
  let fixture: ComponentFixture<FormularioLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
