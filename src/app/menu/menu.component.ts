import { Component, OnInit } from '@angular/core'
import { Menu } from './menu'
import { MenuService } from './menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})

export class MenuComponent implements OnInit  {

  menuList: Menu[] = []

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuList = this.menuService.getMenuList()
  }
}
