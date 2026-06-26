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
            category: 'ERP Artisans',
            name: 'Boorise',
            subtitle: 'Gestion clients, matériaux et devis sans friction.',
            description: 'Application SaaS pensée pour les artisans, avec CRM simple, chiffrage chantier, factures et suivi des documents de vente dans une interface claire.',
            stack: 'SaaS, CRM, Devis, Facturation',
            link: 'https://www.boorise.fr/',
            themeClass: 'project-showcase-card--pink',
        },
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
