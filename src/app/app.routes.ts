import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { AboutPage } from './+pages/about-page/about-page';
import { ContactPage } from './+pages/contact-page/contact-page';
import { InterestsPage } from './+pages/interests-page/interests-page';
import { SkillsPage } from './+pages/skills-page/skills-page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage },
  { path: 'interests', component: InterestsPage },
  { path: 'skills', component: SkillsPage },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
