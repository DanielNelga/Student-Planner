# PWA Student Planner
## Overview

The PWA Student Planner is a Progressive Web App (PWA) designed to help students stay organised and keep on top of their assignments. It allows students to track their assignments, set priorities, and receive reminders about upcoming deadlines. The app also features a motivational quote that refreshes each time the homepage is loaded, and provides useful statistics to monitor progress.

Built using Angular and TypeScript, this app is lightweight, responsive, and easy to use. It works seamlessly both offline and online, making it perfect for students on the go.

## Features
1. Home Page
Assignments Link: Quickly access the list of all your assignments directly from the homepage.
Quote of the Day: Every time you load the homepage, a fresh motivational quote is fetched from an external API to help keep you inspired for the day ahead.
2. Assignment Management
Add Assignments: Add assignments by entering details such as title, description, due date, and priority.
Assignment Notes: You can attach personal notes to each assignment for extra context or reminders.
Filter by Priority: You can view your assignments based on priority (e.g., High, Medium, Low), making it easier to focus on what’s most important.
3. Stats Page
Completed Assignments: See how many assignments you’ve completed so far.
Total Assignments: Keep track of the total number of assignments you need to complete.
Upcoming Assignments: A quick view of assignments that are due soon, so you never miss a deadline.
4. Settings Page
Notification Settings: Turn notifications on or off depending on your preferences.
Test Notification: Try out the notification feature to make sure everything is working as it should before you start relying on it for reminders.
Tech Stack
Angular: The front-end framework used to build the app.
TypeScript: The programming language that powers the app’s logic.
API: The quote of the day is pulled from an external API, so you get a new one every day.
LocalStorage / IndexedDB: Used to save your assignments locally and ensure the app works offline.
Service Workers: Used to cache assets, allowing the app to function offline.
Getting Started

## To run the app locally:

### Clone the repository:

git clone https://github.com/DanielNelga/Student-Planner.git

### Install dependencies:

npm install

### Run the development server:

ng serve

## Usage

### Home Page
View Quote: A new quote will appear on the homepage each time you reload the page, fetched from the external API.
Quick Access to Assignments: Click on the "Assignments" link to view and manage your assignments.
### Assignments
You can add new assignments using the "Add Assignment" button. You’ll need to enter details like title, description, date, and priority.
Assignments can be filtered by priority (High, Medium, Low) to help you focus on the most urgent ones.
### Stats Page
On the Stats page, you can view:
How many assignments are completed
The total number of assignments
Upcoming assignments that need to be done soon
### Settings
The Settings page allows you to turn notifications on or off, depending on whether you want to be reminded about upcoming tasks.
There’s also a “Test Notification” button to make sure everything is working as it should.
## Development
Project Structure
src/app/components: This folder contains all the UI components, such as Assignment, Stats, and Settings.
src/app/services: This folder contains services like NotificationService and AssignmentService that manage assignments and data fetching.
src/app/models: Contains models for objects like Assignment, Notification, etc.
Run Tests

##  License

This project was built for educational purposes as part of a college module at ATU (Atlantic Technological University).
