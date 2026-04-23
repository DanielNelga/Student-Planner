import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonList, IonTextarea, IonSelect, IonSelectOption, IonCheckbox, IonLabel } from '@ionic/angular/standalone';
import { Assignment } from '../../models/assignment';
import { AssignmentService } from '../../services/assignment.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonLabel
  ]
})
export class AssignmentsPage {
  assignments: Assignment[] = [];

  title = '';
  module = '';
  dueDate = '';
  priority = 'Medium';
  notes = '';

  selectedPriority = 'All';

  constructor(
    private assignmentService: AssignmentService,
    private notificationService: NotificationService
  ) { }

  async ionViewWillEnter() {
    await this.assignmentService.loadAssignments();
    this.assignments = this.assignmentService.getAssignments();
  }

  async addAssignment() {
    if (this.title == '' || this.module == '' || this.dueDate == '') {
      return;
    }

    let assignment: Assignment = {
      id: Date.now().toString(),
      title: this.title,
      module: this.module,
      dueDate: this.dueDate,
      priority: this.priority,
      notes: this.notes,
      isCompleted: false
    };

    await this.assignmentService.addAssignment(assignment);
    await this.notificationService.scheduleAssignmentReminder(assignment.title, assignment.dueDate);

    this.assignments = this.assignmentService.getAssignments();

    this.title = '';
    this.module = '';
    this.dueDate = '';
    this.priority = 'Medium';
    this.notes = '';
  }

  async deleteAssignment(id: string) {
    await this.assignmentService.deleteAssignment(id);
    this.assignments = this.assignmentService.getAssignments();
  }

  async toggleAssignment(id: string) {
    await this.assignmentService.toggleAssignment(id);
    this.assignments = this.assignmentService.getAssignments();
  }

  getFilteredAssignments() {
    if (this.selectedPriority == 'All') {
      return this.assignments;
    }

    return this.assignments.filter((assignment) => assignment.priority == this.selectedPriority);
  }

  getDueStatus(dueDate: string) {
    let today = new Date();
    let due = new Date(dueDate);

    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    let difference = due.getTime() - today.getTime();
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days < 0) {
      return 'Overdue';
    }

    if (days == 0) {
      return 'Due Today';
    }

    if (days <= 3) {
      return 'Due Soon';
    }

    return 'Upcoming';
  }
}