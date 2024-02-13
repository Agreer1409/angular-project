import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import { SearchFilterCreateComponent } from '../search-filter-create/search-filter-create.component';
import { ListProjectsComponent } from '../list-projects/list-projects.component';
import { ProjectListings } from '../project-listings';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderBarComponent, BottomNavComponent, SearchFilterCreateComponent, ListProjectsComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  // making a variable called 'projects' of type 'ProjectListings'.
  // this is where the dummy data is gonna be at
  projectsList:ProjectListings[] = [
    {
      "title": "New Test Project",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "John Blackaby (is lame)"
    },
    {
      "title": "New Test Project2",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "Jack Arndt"
    },
    {
      "title": "New Test Project3",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "Micah Ownes"
    },
    {
      "title": "New Test Project4",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "Tully Fitzpatrick"
    },
    {
      "title": "New Test Project5",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "Riley Crockett"
    },
    {
      "title": "New Test Project6",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "Dr. Ruoti"
    },
    {
      "title": "New Test Project7",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "Patrick Treese"
    },
    {
      "title": "New Test Project8",
      "startdate":"01/05/2023",
      "enddate": "12/25/2024",
      "owner": "Austin Greer"
    },



  ];
}
