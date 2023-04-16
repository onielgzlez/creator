import { Component, OnInit } from '@angular/core'
import { TemplateService } from './template.service'
import { Section } from './section'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})

export class TemplateComponent implements OnInit {
 
  templateList: Section[] = []

  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.templateList = this.templateService.getTemplateList()
  }
}
