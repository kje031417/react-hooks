export const useNotification = (title, options) => {
    if(!("Notification" in window)) {   // 윈도우가 아니면 notification을 지원하지 않겠다.
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
}
