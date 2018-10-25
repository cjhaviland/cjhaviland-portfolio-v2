import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    styles: {
      background: {
        primary: "#DAA520", // Goldenrod
        secondary: "#FFEDC1",
        accent: "#8C7D58",
        error: "#FF5252",
        info: "#FFFFFF",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      skills: {
        primary: "#ECEBE4", // Alabaster
        secondary: "#A3A08F",
        accent: "#474539",
        error: "#FF5252",
        info: "#5B5A4E",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      portfolio: {
        primary: "#B4C8FF", // Baby Blue Eyes
        secondary: "#9FA8C4",
        accent: "#62656D",
        error: "#FF5252",
        info: "#3F4554",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      about: {
        primary: "#4CAF50", // Blueberry
        secondary: "#86D889",
        accent: "#ACC4AD",
        error: "#FF5252",
        info: "#243324",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      contact: {
        primary: "#031927", // Maastricht Blue
        secondary: "#424242",
        accent: "#C4DFEF",
        error: "#FF5252",
        info: "#465660",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    },
    portfolioExamples: [
      {
        title: "Portfolio v1",
        contents: {
          objective: `I needed a place to show off my development work as I was learning and continue to grow as a Software Developer.`,
          process: `Started with a full design comprised of layout, typography, and color scheme. Utilized CodePen's online editor to see the design come to life.`,
          result: `<iframe height='400' scrolling='no' title='CJ Haviland Portfolio' src='//codepen.io/cjhaviland/embed/preview/KqxLdd/?height=404&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/cjhaviland/pen/KqxLdd/'>CJ Haviland Portfolio</a> by CJ Haviland (<a href='https://codepen.io/cjhaviland'>@cjhaviland</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>`
        },
        pills: ["HTML", "JavaScript", "jQuery", "Bootstrap"]
      },
      {
        title: "Interactive Bingo Board",
        contents: {
          objective: `After seeing an image of "Conference Call Bingo" going around on the internet I decided to code it for fun!`,
          process: `Created an array of entries for the Bingo boxes that are then randomized each time the table is loaded. Made each box clickable, which highlights the selection.`,
          result: `<iframe height='400' scrolling='no' title='GoToBingo' src='//codepen.io/cjhaviland/embed/preview/MoxMYN/?height=402&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/cjhaviland/pen/MoxMYN/'>GoToBingo</a> by CJ Haviland (<a href='https://codepen.io/cjhaviland'>@cjhaviland</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>`
        },
        pills: ["HTML", "JavaScript"]
      },
      {
        title: "Snowball Debt Repayment Calculator",
        contents: {
          objective: `To create a web app for my wife and I to use to determine our monthly credit card payments using the "snowball" repayment method.`,
          process: `This payment method involves putting as much as you can toward your lowest balance, while paying the minimums on off of your other debts. Once the lowest balance is paid off, you then add that payment amount PLUS the minimum payment toward the next lowest balance. Your monthly payments remain the same overall, but the amount you are putting toward a single balance grows as you minimize your debt. I have created a simple JavaScript prototype to test the equation and functionality. Next I plan on porting to a python web app that will allow us to enter credit cards balances and APRs into a database. Once that is set up I will factor in the interest accumulation in order to get a more accurate monthly balance and payment schedule.`,
          result: `<iframe height='400' scrolling='no' title='Snowball Debt Calculator' src='//codepen.io/cjhaviland/embed/preview/yXdREP/?height=265&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/cjhaviland/pen/yXdREP/'>Snowball Debt Calculator</a> by CJ Haviland (<a href='https://codepen.io/cjhaviland'>@cjhaviland</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>`
        },
        pills: ["HTML", "JavaScript", "Python", "jQuery"]
      },
      {
        title: "Timestamp Microservice",
        contents: {
          objective: `When user passes either parameter, return both UNIX and natural English timestamp in JSON format.`,
          process: `Used node.js to check which parameter was used and if it was valid. Utilized Express library to return JSON object. This was all the original user story asked but I wanted to go a step further so I found a third party library which also accepts strings like “today” or “tomorrow” or “December” as possible input.`,
          result: `<div class="glitch-embed-wrap" style="height: 287px; width: 100%;"><iframe src="https://glitch.com/embed/#!/embed/cj-fcc-timestamp-microservice?path=README.md&previewSize=100" alt="cj-elderly-innocentfcc-timestamp-microservice on glitch" style="height: 100%; width: 100%; border: 0;"></iframe></div>`
        },
        pills: ["Node.js", "Express"]
      },
      {
        title: "IP Restriction",
        contents: {
          objective:
            "Create IP restrictions that deter users from accessing patient data outside of the facility.",
          process:
            "Utilizing my networking background I was assigned to create a new feature to Sigmund’s web version, Aura. I used C# to create a backend IP restriction which allows some of our clients to regulate where their users log into the software in order to comply with HIPAA regulations."
        },
        pills: ["C#", "SQL", "MVC"]
      },
      {
        title: "Superbowl Box Manager",
        contents: {
          objective: `Create an single place to easily manage an office Superbowl Box game that allows players to follow along as the game progresses.`,
          process: `The main task is to allow a manager to easily keep track of which boxes are assigned to which player. Along with that a player should be able to leave the website open and see updated results as the game progresses. Utilizing the MySportsFeed API and simple JSON objects to hold the player data I was able to create a grid and update it in timely intervals.`,
          result: `<div class="glitch-embed-wrap" style="height: 287px; width: 100%;"><iframe src="https://glitch.com/embed/#!/embed/superbowl-box-app?path=public/client.js&previewSize=100" alt="superbowl-box-app on glitch" style="height: 100%; width: 100%; border: 0;"></iframe></div>`
        },
        pills: ["Node.js", "Express", "MySportsFeed API"]
      }
    ]
  },
  getters: {
    getPageStyles: state => page => {
      return state.styles[page];
    },
    getPortfolioExamples: state => {
      return state.portfolioExamples;
    }
  },
  mutations: {},
  actions: {}
});
