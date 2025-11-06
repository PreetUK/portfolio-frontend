import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { technologies } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChildren('techIcon') techIcons!: QueryList<ElementRef>;
  
  technologies = technologies;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    this.techIcons.forEach((icon, index) => {
      gsap.fromTo(
        icon.nativeElement,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tech-icons-wrapper',
            start: 'top 80%',
            end: 'bottom 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }
}