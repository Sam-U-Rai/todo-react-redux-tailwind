import React from "react";
import { useDispatch } from "react-redux";
import { TAB_TRIGGER } from "../constants";
import { setTab } from "../store/actions/tab.actions";

const Tabs = () => {
  const dispatch = useDispatch();
  const handleSetTab = (tab) => () => dispatch(setTab(tab));
  return (
    <ul className="flex flex-wrap justify-center text-sm font-medium text-center border-b">
      {Object.keys(TAB_TRIGGER).map((filterKey) => {
        const tab = TAB_TRIGGER[filterKey];
        return (
          <li
            className="mr-2"
            key={`visibility-filter-${tab}`}
            onClick={handleSetTab(tab)}
          >
            <div
              href="#"
              aria-current="page"
              className="inline-block p-4 text-blue-600 cursor-pointer uppercase"
            >
              {" "}
              {tab}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
