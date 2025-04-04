import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-secure',
  imports: [RouterModule, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './secure.component.html',
  styleUrl: './secure.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecureComponent {

}
