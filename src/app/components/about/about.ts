import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services, styles } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;
  
  services = services;
  styles = styles;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initAnimations();
    this.initTilt();
  }

  initAnimations(): void {
    // Animate heading
    gsap.fromTo(
      '.about-heading',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      '.about-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate service cards
    this.serviceCards.forEach((card, index) => {
      gsap.fromTo(
        card.nativeElement,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

  initTilt(): void {
    this.serviceCards.forEach((card) => {
      VanillaTilt.init(card.nativeElement, {
        max: 45,
        speed: 450,
        glare: true,
        'max-glare': 0.5,
      });
    });
  }
}