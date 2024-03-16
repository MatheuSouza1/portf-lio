import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal([
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Icone dotnet'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone angular'
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'Icone mysql'
    },
    {
      src: 'assets/icons/knowledge/sqlserver.svg',
      alt: 'Icone sqlserver'
    },
  ])
}
