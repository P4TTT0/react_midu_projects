import { EventType } from "../types/eventType";

export const navigateTo = (href: string) => {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(EventType.PushState);
  window.dispatchEvent(navigationEvent);
}