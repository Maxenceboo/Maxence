import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
    category: string;
    title: string;
    description: string;
    image: string;
    collapsedTitle: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            category: 'Front End',
            title: 'Amazing Project is website concept.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            image: 'https://placehold.co/1200x800/111/333',
            collapsedTitle: 'Amazing Project'
        },
        {
            category: 'Full Stack',
            title: 'E-Commerce Dashboard UI Kit.',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            image: 'https://placehold.co/1200x800/222/444',
            collapsedTitle: 'Dashboard UI'
        },
        {
            category: 'Mobile App',
            title: 'Finance App Dark Mode.',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            image: 'https://placehold.co/1200x800/000/333',
            collapsedTitle: 'Finance App'
        }
    ];

    selectedIndex = 0;

    setActive(index: number) {
        this.selectedIndex = index;
    }
}
