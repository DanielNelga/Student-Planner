import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  async askPermission() {
    let permission = await LocalNotifications.checkPermissions();

    if (permission.display !== 'granted') {
      permission = await LocalNotifications.requestPermissions();
    }

    return permission;
  }

  async sendTestNotification() {
    await this.askPermission();

    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Student Focus Hub',
          body: 'This is a test notification',
          id: 1,
          schedule: { at: new Date(Date.now() + 5000) }
        }
      ]
    });
  }

  async scheduleAssignmentReminder(title: string, dueDate: string) {
    await this.askPermission();

    let due = new Date(dueDate);
    let dayBefore = new Date(dueDate);

    dayBefore.setDate(dayBefore.getDate() - 1);
    dayBefore.setHours(18);
    dayBefore.setMinutes(0);
    dayBefore.setSeconds(0);

    due.setHours(9);
    due.setMinutes(0);
    due.setSeconds(0);

    let notifications = [];

    if (dayBefore.getTime() > Date.now()) {
      notifications.push({
        title: 'Assignment Reminder',
        body: title + ' is due tomorrow',
        id: new Date().getTime(),
        schedule: { at: dayBefore }
      });
    }

    if (due.getTime() > Date.now()) {
      notifications.push({
        title: 'Assignment Due Today',
        body: title + ' is due today',
        id: new Date().getTime() + 1,
        schedule: { at: due }
      });
    }

    if (notifications.length > 0) {
      await LocalNotifications.schedule({
        notifications: notifications
      });
    }
  }
}