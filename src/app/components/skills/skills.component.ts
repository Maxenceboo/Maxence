import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
    name: string;
    icon: string;
    hoverColor: string; // Tailwind class for bg color
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
})
export class SkillsComponent {
    skills: Skill[] = [
        { name: 'Javascript', icon: 'fa-brands fa-js', hoverColor: 'group-hover:bg-orange-500' },
        { name: 'HTML', icon: 'fa-brands fa-html5', hoverColor: 'group-hover:bg-orange-600' },
        { name: 'Python', icon: 'fa-brands fa-python', hoverColor: 'group-hover:bg-yellow-500' },
        { name: 'CSS', icon: 'fa-brands fa-css3-alt', hoverColor: 'group-hover:bg-orange-600' },
        { name: 'NodeJS', icon: 'fa-brands fa-js-square', hoverColor: 'group-hover:bg-yellow-400' },
        { name: 'React', icon: 'fa-brands fa-react', hoverColor: 'group-hover:bg-blue-400' },
    ];
}
