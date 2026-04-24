import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
    category: string;
    name: string;
    subtitle: string;
    description: string;
    stack: string;
    link: string;
    themeClass: string;
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
            name: 'ClearBoot',
            subtitle: 'Framework web TypeScript orienté DI.',
            description: 'Framework Node.js léger inspiré de NestJS, avec DI, décorateurs et une structure pensée pour rester propre.',
            stack: 'TypeScript, Node.js, DI',
            link: 'https://github.com/Maxenceboo/ClearBoot',
            themeClass: 'project-showcase-card--orange',
        },
        {
            category: 'CLI Tool',
            name: 'schema2md',
            subtitle: 'Génération de documentation de base de données.',
            description: 'CLI TypeScript qui transforme un schéma SQL en documentation Markdown ou LaTeX avec diagramme ER.',
            stack: 'TypeScript, Node.js, CLI',
            link: 'https://github.com/Maxenceboo/schema2md',
            themeClass: 'project-showcase-card--blue',
        },
        {
            category: 'Microservices',
            name: 'TP07',
            subtitle: 'Architecture microservices complète.',
            description: 'Monorepo DevOps avec frontend, services, conteneurisation et déploiement Kubernetes.',
            stack: 'Next.js, FastAPI, NestJS, Kubernetes',
            link: 'https://github.com/Maxenceboo/tp07-microservices-project',
            themeClass: 'project-showcase-card--green',
        },
        {
            category: 'SaaS Product',
            name: 'Boorise',
            subtitle: 'ERP SaaS modulaire pour PME et TPE.',
            description: 'Projet produit autour d’un ERP pensé pour la facturation, le CRM et la gestion des stocks.',
            stack: 'Angular, API, PostgreSQL, SaaS',
            link: 'https://github.com/Maxenceboo/Boorise',
            themeClass: 'project-showcase-card--pink',
        },
        {
            category: 'Portfolio',
            name: 'Maxence',
            subtitle: 'Portfolio frontend Angular.',
            description: 'Portfolio Angular/Tailwind conçu pour présenter les projets publics avec une direction visuelle claire.',
            stack: 'Angular, Tailwind, TypeScript',
            link: 'https://github.com/Maxenceboo/Maxence',
            themeClass: 'project-showcase-card--amber',
        }
    ];
}
