import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
    category: string;
    title: string;
    description: string;
    stack: string;
    link: string;
    accent: string;
    surface: string;
    badge: string;
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
            category: 'Framework',
            title: 'ClearBoot, framework web TypeScript orienté DI.',
            description: 'Framework Node.js léger inspiré de NestJS, avec injection de dépendances, décorateurs et architecture atomique. Le repo est structuré comme un vrai produit open source avec documentation, licence MIT et tests.',
            stack: 'TypeScript, Node.js, DI',
            link: 'https://github.com/Maxenceboo/ClearBoot',
            accent: 'from-orange-400/30 via-orange-500/10 to-transparent',
            surface: 'from-[#17131a] via-[#10131d] to-[#0b1020]',
            badge: 'text-orange-200 border-orange-400/20 bg-orange-400/10',
            collapsedTitle: 'ClearBoot'
        },
        {
            category: 'CLI Tool',
            title: 'schema2md, génération de documentation de base de données.',
            description: 'CLI TypeScript qui transforme un schéma SQLite, PostgreSQL ou MySQL en documentation Markdown ou LaTeX, avec diagramme ER Mermaid et génération PDF. Projet pensé pour être utilisable hors contexte scolaire.',
            stack: 'TypeScript, Node.js, CLI',
            link: 'https://github.com/Maxenceboo/schema2md',
            accent: 'from-sky-400/30 via-blue-500/10 to-transparent',
            surface: 'from-[#111827] via-[#0c1424] to-[#0a1020]',
            badge: 'text-sky-200 border-sky-400/20 bg-sky-400/10',
            collapsedTitle: 'schema2md'
        },
        {
            category: 'Microservices',
            title: 'TP07, architecture microservices complète.',
            description: 'Monorepo DevOps avec frontend Next.js, auth service FastAPI, services NestJS, Docker Compose et manifests Kubernetes. Le projet met surtout en avant l’orchestration, la communication entre services et le déploiement.',
            stack: 'Next.js, FastAPI, NestJS, Kubernetes',
            link: 'https://github.com/Maxenceboo/tp07-microservices-project',
            accent: 'from-emerald-400/25 via-cyan-400/10 to-transparent',
            surface: 'from-[#0d1715] via-[#0b1320] to-[#0a1020]',
            badge: 'text-emerald-200 border-emerald-400/20 bg-emerald-400/10',
            collapsedTitle: 'TP07'
        }
    ];

    selectedIndex = 0;

    setActive(index: number) {
        this.selectedIndex = index;
    }
}
