import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { education, styles } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent implements OnInit, AfterViewInit {
  @ViewChildren('educationCard') educationCards!: QueryList<ElementRef>;
  
  education = education;  // ✅ Using constants directly
  styles = styles;

 ngOnInit(): void {
  console.log('Education data:', this.education);
}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initAnimations();
    }, 100);
  }

  initAnimations(): void {
    this.educationCards.forEach((card, index) => {
      gsap.fromTo(
        card.nativeElement,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
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