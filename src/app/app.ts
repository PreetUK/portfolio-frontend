import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-frontend';
}