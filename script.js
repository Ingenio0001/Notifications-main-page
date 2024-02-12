const markAsRead = document.querySelector(".header-div.flex p");
const notificationCounter = document.querySelector("h1 span");
const individualNotification = document.querySelectorAll(".individual-notifications");
let notificationsTracker = 0;


notificationsTrackerFunction = () => {
    for (let i = 0; i < individualNotification.length; i++) {
        if (individualNotification[i].classList.contains("unread-notifications")) {
            notificationsTracker++;
        }
    }
}

notificationsTrackerFunction();

markAsRead.addEventListener("click", () => {
    for (let i = 0; i < individualNotification.length; i++) {
        if (individualNotification[i].classList.contains("unread-notifications")) {
            individualNotification[i].querySelector(".unread-dot").style.display = "none";
            individualNotification[i].classList.remove("unread-notifications");            
        }
    }
    notificationsTracker = 0;
    if (notificationsTracker === 0) {
        notificationCounter.style.display = "none"; 
    }
})

for (let i = 0; i < individualNotification.length; i++) {
    individualNotification[i].addEventListener("click", () => {
        if (individualNotification[i].classList.contains("unread-notifications")) {
            individualNotification[i].classList.remove("unread-notifications");
            individualNotification[i].querySelector(".unread-dot").style.display = "none";
            notificationsTracker--;
            notificationCounter.innerText = notificationsTracker;
            if (notificationsTracker === 0) {
                notificationCounter.style.display = "none";
            }
        }
    })
}



