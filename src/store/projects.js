import horschamps_1 from "@/assets/img/hors_champs_1.mp4";
import horschamps_2 from "@/assets/img/hors_champs_2.mp4";
import martinedurt from "@/assets/img/martine.mp4";
import antartica_1 from "@/assets/img/antartica_1.mp4";
import antartica_2 from "@/assets/img/antartica_2.mp4";
import antartica_3 from "@/assets/img/antartica_3.mp4";
import weekday from "@/assets/img/weekday.mp4";


const projects = [

  {
    title: "Martine Durt",
    type: "website",
    image: [martinedurt],
    website_link: "https://www.martinedurt.be",
    repo_link: "https://github.com/ColinePeet/martine",
    background_color: '#c9dae5',
    description: "Martine Durt is a belgian painter. She has done many exhibitions over the years and needed a simple website to show her latest paintings and bio. Website made with HTML5, Bootstrap, CSS3/Sass and JavaScript/jQuery (personal project).",
  },
  {
    title: "Hors-Champs",
    type: "website",
    image: [horschamps_1, horschamps_2],
    website_link: "https://www.hors-champs.be",
    repo_link: "https://github.com/ColinePeet/horschamps",
    background_color: '#d7cfb7',
    description: "Hors-Champs is a gastronomic restaurant of the chef étoilé Stefan Jacobs. In addition to the restaurant, Hors-Champs proposes a beautiful event venue and several bed & breakfast rooms. The website needed to promote these three key activities. A custom theme was developed for Wordpress with HTML5, JS/jQuery, CSS3/Sass, PHP (personal project).",
  },
  {
    title: "Antartica",
    type: "website",
    image: [antartica_1, antartica_2, antartica_3],
    website_link: "https://www.antartica.io/",
    repo_link: null,
    background_color: '#cae3e8',
    description: "Antartica is a creative agency that provides digital services. Website made with HTML5, CSS3/Sass and JavaScript/jQuery as a front-end developer at Antartica agency. ",
  },
  {
    title: "Weekday",
    type: "newsletter",
    image: [weekday],
    website_link: null,
    repo_link: "https://github.com/ColinePeet/weekday-newsletter",
    background_color: '#dce3cd',
    description: "Design and development of a Newsletter for Weekday store as a training exercise. This is a typical 'weekly edit' of the Weekday brand, which puts a selection of items in value. Made as a training project with HTML5.",
  },


]


export default projects;