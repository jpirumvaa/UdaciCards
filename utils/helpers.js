import { AsyncStorage } from "react-native";
import * as Notifications  from "expo-notifications";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "Flashcard:notifications";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: "Take your Quiz!",
    body: "👋 Don't forget to take quiz today!",
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(18);
            tomorrow.setMinutes(30);
            try{
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });            
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }catch(e){
            console.log("Something went wrong when scheduling notifications. Reload your app to try again if you are eager to enjoy this feature")
          }
          }
        });
      }
    });
}
