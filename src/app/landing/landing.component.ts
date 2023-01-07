import { Component, OnInit } from '@angular/core';
import { MinicardComponent } from '../minicard/minicard.component';
import { CardComponent } from '../card/card.component';
import latestPost from "../../posts/blog.json";
import { Card } from '../card/card.model';

console.dir(latestPost);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.pug',
  styleUrls: ['./landing.component.scss']
})



// import card from "./card";
// import minicard from "./minicard";
// import { latestPost } from "../posts/blog.json";

// export default {
//   components: {
//     card,
//     minicard,
//   },

//   mounted() {
//     Array.from(document.querySelectorAll('path')).forEach(el => el.classList.add('clipVisible'))
//   }
// };


export class LandingComponent implements OnInit {
  public cards: Card[] = [
    {
      id: 1,
      title: "Articles",
      icon: "fas fa-feather",
      description: "My attempt at making informative content",
      url: "/posts",
      buttons: [
        {
          label: "Latest",
          url: "/posts/" + latestPost.latestPost.replaceAll('-', '/') + '/',
          title: "Latest article",
        },
        {
          label: "All",
          url: "/po",
          title: "All Articles",
        },
      ],
      tagline: "Latest article: " + latestPost.latestPost,
    },
    {
      id: 2,
      title: "Current Projects",
      icon: "fas fa-pencil-ruler",
      description: "Things I'm working on now",
      buttons: [
        {
          label: "Dive in",
        },
      ],
      url: "/projects",
    },
    {
      id: 3,
      title: "Past Projects",
      icon: "fas fa-archive",
      description: "Old or abandoned projects",
      url: "/past_projects/",
      buttons: [
        {
          label: "Dig Deep",
        },
      ],
    },
  ]
  public links: any[] = [
    {
      id: 5,
      title: "Tech",
      icon: "fas fa-microchip",
      description: "Some hardware, but mostly software",
      link: "/tech/",
    },
    {
      id: 6,
      title: "Design",
      icon: "fas fa-paint-brush",
      description: "Drawings, websites, music",
      link: "/design/",
    },
    {
      id: 1,
      title: "GitHub",
      icon: "fas fa-code-branch",
      description: "Source code",
      link: "https://github.com/aakoch/",
      isExternal: true,
    },
    {
      id: 2,
      title: "Thingiverse",
      icon: "fas fa-cube",
      description: "3D designs",
      link: "https://www.thingiverse.com/aakoch/designs",
      isExternal: true,
    },
    {
      id: 3,
      title: "Resume",
      icon: "fas fa-id-card",
      description: "CV",
      link: "https://aakoch.github.io/",
      isExternal: true,
    },
    {
      id: 4,
      title: "Twitter",
      icon: "fab fa-twitter",
      description: "Tweet",
      link: "https://twitter.com/aakoch",
      isExternal: true,
    },
  ]

  ngOnInit(): void {
    Array.from(document.getElementsByTagName("path")).forEach((path: SVGPathElement) => {
      path.classList.add('clipVisible');
    })
  }
}
