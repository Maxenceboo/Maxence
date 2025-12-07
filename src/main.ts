import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => requestAnimationFrame(enableScrollReveal))
  .catch((err) => console.error(err));

function enableScrollReveal() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const targets = Array.from(document.querySelectorAll<HTMLElement>('.scroll-reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}
