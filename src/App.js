import { default as appDI } from "./AppDI";

class App {
    start() {
        const appContainer = document.getElementById("app");
        todoComponent = new TodoComponent(appContainer);
    }
}

onDomReady(() => new App().start());

const onDomReady = (callBack) => {
    if (document.readyState === "loading") {
        document.addEventListener('DOMContentLoaded', callBack);
    } else {
        callBack();
    }
}