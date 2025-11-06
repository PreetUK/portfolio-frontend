import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PreetUK',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prit-ukey',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/pritukey',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Email',
      url: 'mailto:pritukey@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];
}