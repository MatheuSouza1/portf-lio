import { Component, inject, signal } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { IProjects } from '../../interfaces/IProjects';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
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
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
