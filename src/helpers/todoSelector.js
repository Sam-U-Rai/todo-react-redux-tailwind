const { TAB_TRIGGER } = require("../constants");

export const todoSelector = (list, tabTrigger) => {
  switch (tabTrigger) {
    case TAB_TRIGGER.COMPLETED:
      return list.filter((todo) => todo.completed);
    case TAB_TRIGGER.INCOMPLETE:
      return list.filter((todo) => !todo.completed);
    case TAB_TRIGGER.ALL:
    default:
      return list;
  }
};
