import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-layout-admin',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export default class LayoutAdminComponent {
  isSidebarActive = true;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
