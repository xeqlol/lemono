import * as path from "path";

import { IIcons, ITimings, IPeriods } from "./constants.types";

const ASSETS = path.join(__dirname, "../assets");

export const ICONS: IIcons = {
  default: path.join(ASSETS, "lemon.png"),
  work: path.join(ASSETS, "work.png"),
  coffee: path.join(ASSETS, "coffee.png"),
  social: path.join(ASSETS, "social.png"),
  lunch: path.join(ASSETS, "soup.png")
};

export const TIMINGS: ITimings = {
  // minutes
  work: 25,
  coffee: 5,
  social: 15,
  lunch: 60
};

/*
For TARGET_AMOUNT_COUNT of work periods should be 
TARGET_AMOUNT_COUNT * 2 period of work and some kinds of pauses.
*/
export const PERIODS: IPeriods = [
  "work",
  "coffee",
  "work",
  "coffee",
  "work",
  "coffee",
  "work",
  "social",
  "work",
  "coffee",
  "work",
  "lunch",
  "work",
  "social",
  "work",
  "coffee",
  "work",
  "social",
  "work",
  "coffee",
  "work",
  "lunch",
  "work",
  "coffee",
  "work",
  "coffee"
];

export const NOTIFICATIONS = {
  coffee: {
    title: "Have a break",
    body: "How about a cup of coffee?"
  },
  work: {
    title: "Time to work",
    body: "It's sad, but the job won't do itself."
  },
  social: {
    title: "Time for socal life",
    body: "It's time to put likes on the instagram."
  },
  lunch: {
    title: "Food fetish time",
    body: "Time for a little refreshment, I think."
  },
  default: {
    title: "You're great!",
    body: " Have a rest! See you tomorrow!"
  }
};