import { Injectable } from '@angular/core'
import { Section } from './section'

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  templateList: Section[] = [
    {
      class: 'mb-4',
      templates: [] = [
        {
          name: 'Informativo',
          src: 'assets/images/plantilla-informativo.jpg',
          class: 'has-tooltip-active has-tooltip-top',
        },
        {
          name: 'Pantalla completa',
          src: 'assets/images/plantilla-pantalla-completa.jpg',
          class: 'has-tooltip-active has-tooltip-bottom',
        },
        {
          name: 'Tres columnas',
          src: 'assets/images/plantilla-tres-columnas.jpg',
          class: 'has-tooltip-active has-tooltip-left',
        },
      ]
    },
    {     
      templates: [] = [
        {
          name: 'Menú lateral',
          src: 'assets/images/plantilla-menu-lateral.jpg',
        },
        {
          name: 'Noticias',
          src: 'assets/images/plantilla-noticias.jpg',
        },
        {
          name: 'Banner',
          src: 'assets/images/plantilla-banner.jpg',
        },
      ]
    }
  ]

  getTemplateList() {
    return this.templateList
  }
}
