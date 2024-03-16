import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal([
    {
      summary:{
        strong:"Cargo e nível",
        p: "Empresa e tempo",
      },
      text: "descrição de função",
    },
    {
      summary:{
        strong:"Dev back-end .NET Core",
        p: "FBI Sistemas | 2023 - presente",
      },
      text: "Desenvolvimento e manutenção de apis ASP.NET Core",
    },
  ]);
}
