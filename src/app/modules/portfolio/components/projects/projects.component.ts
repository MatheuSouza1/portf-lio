import { Component, signal } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src: "assets/icons/projects/apiMessage.jpg",
      alt: "Imagem da Api de menssagens",
      title: "Api menssagem",
      width: "160px",
      height: "80px",
      description:"",
      links: [
        {
          name: "Api Menssagem",
          href: "https://github.com/MatheuSouza1/ApiMessageDDD"
        }
      ]
    },
    {
      src: "assets/icons/projects/apiMessage.jpg",
      alt: "Imagem da Api de menssagens",
      title: "Api menssagem",
      width: "160px",
      height: "80px",
      description:"",
      links: [
        {
          name: "Api Menssagem",
          href: "https://github.com/MatheuSouza1/ApiMessageDDD"
        }
      ]
    },
  ])
}
