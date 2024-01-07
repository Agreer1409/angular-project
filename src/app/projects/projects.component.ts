import { Component } from '@angular/core';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import { SearchFilterCreateComponent } from '../search-filter-create/search-filter-create.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderBarComponent, BottomNavComponent, SearchFilterCreateComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
