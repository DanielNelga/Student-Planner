import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class HomePage {
  totalAssignments = 0;
  completedAssignments = 0;

  quote = '';
  author = '';

  constructor(
    private assignmentService: AssignmentService,
    private quoteService: QuoteService
  ) { }

  async ionViewWillEnter() {
    await this.assignmentService.loadAssignments();

    let assignments: Assignment[] = this.assignmentService.getAssignments();

    this.totalAssignments = assignments.length;

    this.completedAssignments = assignments.filter(function (assignment) {
      return assignment.isCompleted;
    }).length;

    this.loadQuote();
  }

  loadQuote() {
    this.quoteService.getQuote().subscribe((data) => {
      this.quote = data.quote;
      this.author = data.author;
    });
  }
}