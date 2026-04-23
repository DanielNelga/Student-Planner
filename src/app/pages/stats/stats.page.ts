import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class StatsPage {
  total = 0;
  completed = 0;
  pending = 0;

  constructor(private assignmentService: AssignmentService) {}

  async ionViewWillEnter() {
    await this.assignmentService.loadAssignments();

    let assignments: Assignment[] = this.assignmentService.getAssignments();

    this.total = assignments.length;

    this.completed = assignments.filter(function (assignment) {
      return assignment.isCompleted;
    }).length;

    this.pending = this.total - this.completed;
  }
}