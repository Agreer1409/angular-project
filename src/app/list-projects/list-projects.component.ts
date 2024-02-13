import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListings } from '../project-listings';


@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent {
  // ! tells the complier that the value wont be null or undefined (hence no error if you have it)
  @Input() projectInputProperty!:ProjectListings;
}
