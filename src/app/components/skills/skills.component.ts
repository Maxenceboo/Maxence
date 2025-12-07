import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
    name: string;
    icon: string;
    category: string;
    focus: string;
    accent: string;
    glow: string;
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
})
export class SkillsComponent {
    coreStack: Skill[] = [
        {
            name: 'Angular',
            icon: 'fa-brands fa-angular',
            category: 'Frontend',
            focus: 'Apps structurées et testables',
            accent: 'bg-red-500/10 text-red-300 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.35)]',
            glow: 'bg-gradient-to-br from-red-500/20 via-orange-500/10 to-transparent',
        },
        {
            name: 'Java',
            icon: 'fa-brands fa-java',
            category: 'Langage',
            focus: 'Services backend robustes',
            accent: 'bg-amber-500/10 text-amber-200 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.35)]',
            glow: 'bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-transparent',
        },
        {
            name: 'Spring Boot',
            icon: 'fa-solid fa-leaf',
            category: 'Backend',
            focus: 'Microservices et APIs REST',
            accent: 'bg-green-500/10 text-green-200 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.35)]',
            glow: 'bg-gradient-to-br from-green-400/20 via-emerald-500/10 to-transparent',
        },
    ];

    skills: Skill[] = [
        {
            name: 'TypeScript',
            icon: 'fa-solid fa-code',
            category: 'Langage',
            focus: 'Typage robuste pour apps scalables',
            accent: 'bg-blue-500/10 text-blue-300 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.35)]',
            glow: 'bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent',
        },
        {
            name: 'JavaScript',
            icon: 'fa-brands fa-js',
            category: 'Langage',
            focus: 'Front riche et dynamique',
            accent: 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/30 shadow-[0_0_30px_rgba(250,204,21,0.35)]',
            glow: 'bg-gradient-to-br from-yellow-400/20 via-orange-500/10 to-transparent',
        },
        {
            name: 'React',
            icon: 'fa-brands fa-react',
            category: 'Frontend',
            focus: 'SPA performantes et composables',
            accent: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.35)]',
            glow: 'bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent',
        },
        {
            name: 'NestJS',
            icon: 'fa-solid fa-feather',
            category: 'Backend',
            focus: 'APIs modulaires et typées',
            accent: 'bg-pink-500/10 text-pink-300 border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.35)]',
            glow: 'bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-transparent',
        },
        {
            name: 'HTML',
            icon: 'fa-brands fa-html5',
            category: 'Frontend',
            focus: 'Sémantique et accessibilité',
            accent: 'bg-orange-500/10 text-orange-300 border border-orange-500/30 shadow-[0_0_30px_rgba(234,88,12,0.35)]',
            glow: 'bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent',
        },
        {
            name: 'CSS',
            icon: 'fa-brands fa-css3-alt',
            category: 'Frontend',
            focus: 'UI propre, responsive et animée',
            accent: 'bg-blue-400/10 text-blue-200 border border-blue-400/30 shadow-[0_0_30px_rgba(96,165,250,0.35)]',
            glow: 'bg-gradient-to-br from-blue-400/20 via-cyan-400/10 to-transparent',
        },
    ];
}
