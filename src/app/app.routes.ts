import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { AboutPage } from './+pages/about-page/about-page';
import { ContactPage } from './+pages/contact-page/contact-page';
import { InterestsPage } from './+pages/interests-page/interests-page';
import { SkillsPage } from './+pages/skills-page/skills-page';
import { PublicTemplate } from './+pages/public-template/public-template';
import { LoginPage } from './+pages/login-page/login-page';

export const routes: Routes = [
  { path: 'public', component: PublicTemplate,children: [
      { path: 'home', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'contact', component: ContactPage },
      { path: 'interests', component: InterestsPage },
      { path: 'skills', component: SkillsPage },
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: '**', redirectTo: 'home' }
    ]},
  { path: 'login', component: LoginPage },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
