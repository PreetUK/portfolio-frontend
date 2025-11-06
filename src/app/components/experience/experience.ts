import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences, styles } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChildren('timelineCard') timelineCards!: QueryList<ElementRef>;
  
  experiences = experiences;
  styles = styles;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    // Animate heading
    gsap.fromTo(
      '.experience-heading',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate timeline cards
    this.timelineCards.forEach((card) => {
      gsap.fromTo(
        card.nativeElement,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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