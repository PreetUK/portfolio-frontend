import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navLinks, styles } from '../../constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {
  active = '';
  toggle = false;
  scrolled = false;
  navLinks = navLinks;
  styles = styles;

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = scrollTop > 100;
  }

  setActive(title: string) {
    this.active = title;
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.active = '';
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}