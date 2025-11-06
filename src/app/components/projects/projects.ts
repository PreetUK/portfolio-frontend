import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, styles } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;
  
  projects = projects;
  styles = styles;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    this.projectCards.forEach((card, index) => {
      gsap.fromTo(
        card.nativeElement,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card.nativeElement,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }
}