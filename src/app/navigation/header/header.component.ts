import { AuthService } from './../../auth/auth.service';
import { Subscription, Observable } from 'rxjs';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  authSubscription: Subscription | undefined;

  constructor(private store: Store<fromRoot.State>, private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
