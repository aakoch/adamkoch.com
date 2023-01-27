import { Component, OnInit } from '@angular/core';
import { MinicardComponent } from '../../minicard/minicard.component';
import { CardComponent } from '../../card/card.component';
import latestPost from "../../../../blog.json";
import { Card } from '../../card/card.model';

@Component({
  selector: 'app-landing-body',
  templateUrl: './landing-body.component.pug',
  styleUrls: ['./landing-body.component.scss']
})

export class LandingBodyComponent implements OnInit {
  public cards: Card[] = [
    {
      id: 1,
      title: "Articles",
      icon: "feather",
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
          url: "/posts",
          title: "All Articles",
        },
      ],
      tagline: "Latest article: " + latestPost.latestPost,
    },
    {
      id: 2,
      title: "Current Projects",
      icon: "pencil-ruler",
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
      icon: "archive",
      description: "Old or abandoned projects",
      url: "/past_projects",
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
      icon: "microchip",
      description: "Some hardware, but mostly software",
      link: "/tech",
    },
    {
      id: 6,
      title: "Design",
      icon: "paint-brush",
      description: "Drawings, websites, music",
      link: "/design",
    },
    {
      id: 1,
      title: "GitHub",
      icon: "code-branch",
      description: "Source code",
      link: "https://github.com/aakoch/",
      isExternal: true,
    },
    {
      id: 2,
      title: "Thingiverse",
      icon: "cube",
      description: "3D designs",
      link: "https://www.thingiverse.com/aakoch/designs",
      isExternal: true,
    },
    {
      id: 3,
      title: "Resume",
      icon: "id-card",
      description: "CV",
      link: "https://aakoch.github.io/",
      isExternal: true,
    },
    {
      id: 4,
      title: "Twitter",
      icon: ["fab", "twitter"],
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
