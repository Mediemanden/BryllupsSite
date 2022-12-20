import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaComponent } from '../components/agenda/agenda.component';
import {MockComponent} from 'ng-mocks';

import { HomeComponent } from './home.component';
import { LocationComponent } from '../components/location/location.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        MockComponent(AgendaComponent),
        MockComponent(LocationComponent)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
