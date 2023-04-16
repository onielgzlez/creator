import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuList: Menu[] = [
    {
      name: "Nuevo prototipo",
      href: "#",
      icon: "las la-plus-square",
    },
    {
      name: "Mis prototipos",
      href: "#",
      icon: "las la-folder",   
    },
    {
      name: "Personaliza prototipo",
      href: "#",
      icon: "las la-paint-brush",   
    },
    {
      name: "Edita tu perfil",
      href: "#",
      icon: "las la-user-circle",      
    },
    {
      name: "Organiza tu equipo",
      href: "#",
      icon: "las la-user-friends",      
    },
    {
      name: "Personaliza widgets",
      href: "#",
      icon: "las la-icons",      
    },
  ]

  constructor() {
  }

  getMenuList() {
    return this.menuList
  }
}
