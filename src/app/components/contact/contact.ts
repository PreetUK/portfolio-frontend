import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact';
import { Contact } from '../../models/contact';
import { styles } from '../../constants';
import * as THREE from 'three';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('earthCanvas', { static: false }) earthCanvasRef!: ElementRef<HTMLCanvasElement>;
  
  styles = styles;
  contact: Contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  error = false;
  loading = false;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initEarthAnimation();
  }

  initEarthAnimation(): void {
    const canvas = this.earthCanvasRef.nativeElement;
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Create Earth with detailed appearance
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    
    // Create a material with color and details
    const material = new THREE.MeshStandardMaterial({
      color: 0x2194ce,
      roughness: 0.5,
      metalness: 0.3,
      emissive: 0x112244,
      emissiveIntensity: 0.2,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add clouds layer
    const cloudsGeometry = new THREE.SphereGeometry(1.52, 64, 64);
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      roughness: 1,
    });
    const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    scene.add(clouds);

    // Add stars in the background
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
    });

    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate Earth
      earth.rotation.y += 0.002;
      
      // Rotate clouds slightly faster
      clouds.rotation.y += 0.003;
      
      // Subtle star movement
      stars.rotation.y += 0.0002;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
  }

  onSubmit(): void {
    this.loading = true;
    this.contactService.createContact(this.contact).subscribe({
      next: (response) => {
        console.log('Message sent successfully:', response);
        this.submitted = true;
        this.error = false;
        this.loading = false;
        // Reset form
        this.contact = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.error = true;
        this.submitted = false;
        this.loading = false;
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          this.error = false;
        }, 5000);
      }
    });
  }
}