import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.page.html',
  styleUrls: ['./assignment-detail.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class AssignmentDetailPage {
  assignment: Assignment | undefined;

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService
  ) {}

  async ionViewWillEnter() {
    await this.assignmentService.loadAssignments();

    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.assignment = this.assignmentService.getAssignmentById(id);
    }
  }
}