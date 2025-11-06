import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { styles } from '../../constants';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, AfterViewInit {
scrollToSection(arg0: string) {
throw new Error('Method not implemented.');
}
  @ViewChild('heroCanvas', { static: false }) heroCanvasRef!: ElementRef<HTMLCanvasElement>;
  
  styles = styles;
isMobile: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Your existing Three.js animation code
  }

  // ✅ Add this download method
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/PRIT_Resume.pdf';
    link.download = 'Prit_Ukey_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openGithub(): void {
    window.open('https://github.com/PreetUK', '_blank');
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/prit-ukey', '_blank');
  }
}