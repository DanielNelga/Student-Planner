import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonToggle, IonButton } from '@ionic/angular/standalone';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports: [
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonToggle,
    IonButton
  ]
})
export class SettingsPage {
  notifications = true;
  showCompleted = true;

  constructor(private notificationService: NotificationService) {}

  async testNotification() {
    await this.notificationService.sendTestNotification();
  }
}