import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  assignments: Assignment[] = [];

  constructor(private storageService: StorageService) { }

  async loadAssignments() {
    let savedAssignments = await this.storageService.getData('assignments');

    if (savedAssignments) {
      this.assignments = savedAssignments;
    } else {
      this.assignments = [];
      await this.saveAssignments();
    }
  }

  async saveAssignments() {
    await this.storageService.saveData('assignments', this.assignments);
  }

  getAssignments() {
    return this.assignments;
  }

  getAssignmentById(id: string) {
    return this.assignments.find(function (assignment) {
      return assignment.id === id;
    });
  }

  async addAssignment(assignment: Assignment) {
    this.assignments.push(assignment);
    await this.saveAssignments();
  }

  async deleteAssignment(id: string) {
    this.assignments = this.assignments.filter(function (assignment) {
      return assignment.id !== id;
    });

    await this.saveAssignments();
  }

  async toggleAssignment(id: string) {
    for (let i = 0; i < this.assignments.length; i++) {
      if (this.assignments[i].id === id) {
        this.assignments[i].isCompleted = !this.assignments[i].isCompleted;
      }
    }

    await this.saveAssignments();
  }
}