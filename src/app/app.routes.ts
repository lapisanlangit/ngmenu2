import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ContentsComponent } from './pages/contents/contents.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'comment',
    component: CommentsComponent,
  },
  {
    path: 'content',
    component: ContentsComponent,
  },
];
