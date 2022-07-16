import horschamps_1 from "@/assets/img/hors_champs_1.mp4";
import horschamps_2 from "@/assets/img/hors_champs_2.mp4";
import martinedurt from "@/assets/img/martine.mp4";
import antartica_1 from "@/assets/img/antartica_1.mp4";
import antartica_2 from "@/assets/img/antartica_2.mp4";
import antartica_3 from "@/assets/img/antartica_3.mp4";
import weekday from "@/assets/img/weekday.mp4";
import follaw_1 from "@/assets/img/follaw_1.mp4";
import follaw_2 from "@/assets/img/follaw_2.mp4";
import follaw_3 from "@/assets/img/follaw_3.mp4";

const projects = [
  {
    title: "Martine Durt",
    type: "website",
    image: [martinedurt],
    website_link: "https://www.martinedurt.be",
    repo_link: "https://github.com/ColinePeet/martine",
    background_color: '#c9dae5',
    description: "Simple showcase website for the belgian painter Martine Durt to show her latest paintings and bio. Personal project designed and built with HTML5, Bootstrap, CSS3/Sass and JavaScript/jQuery.",
  },
  {
    title: "Follaw.sv",
    type: "platform",
    image: [follaw_1, follaw_2, follaw_3],
    website_link: "https://www.saper-vedere.eu/follaw-sv-un-outil-de-monitoring-pour-la-veille-legislative-et-la-veille-institutionnelle/",
    repo_link: null,
    background_color: '#d2daf7',
    description: "Follaw is a monitoring platform for all public affairs issues. Platform developed as lead front-end at Saper Vedere with the team of developers. Made with the framework Vue.js",
  },
  {
    title: "Hors-Champs",
    type: "website",
    image: [horschamps_1, horschamps_2],
    website_link: "https://www.hors-champs.be",
    repo_link: "https://github.com/ColinePeet/horschamps",
    background_color: '#d7cfb7',
    description: "Custom wordpress theme designed and developed for Hors-Champs, a gastronomic restaurant who also proposes a beautiful event venue and several bed & breakfast rooms. The website needed to promote their three key activities. Personal project made with HTML5, JS/jQuery, CSS3/Sass and PHP (WordPress integration and custom post type).",
  },
  {
    title: "Antartica",
    type: "website",
    image: [antartica_1, antartica_2, antartica_3],
    website_link: "https://www.antartica.io/",
    repo_link: null,
    background_color: '#cae3e8',
    description: "Antartica's showcase website made as a front-end developer at Antartica agency with HTML5, CSS3/Sass and JavaScript/jQuery.",
  },
  {
    title: "Weekday",
    type: "newsletter",
    image: [weekday],
    website_link: null,
    repo_link: "https://github.com/ColinePeet/weekday-newsletter",
    background_color: '#dce3cd',
    description: "Newsletter of a typical 'weekly edit' of the Weekday brand,  which puts a selection of items in value. Project designed and developed as a training exercise with HTML5.",
  },
]


export default projects;