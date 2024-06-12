import { Component, OnInit } from '@angular/core';
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
      title: "Projects",
      icon: "pencil-ruler",
      description: "Things I'm working on",
      buttons: [
        {
          label: "Dive in",
        },
      ],
      url: "/projects",
    },
    {
      id: 3,
      title: "The Rest",
      icon: "sink",
      description: "The kitchen sink, as they say",
      url: "/other",
      buttons: [
        {
          label: "Let it flow",
        },
      ],
    },
  ]

  ngOnInit(): void {
    Array.from(document.getElementsByTagName("path")).forEach((path: SVGPathElement) => {
      path.classList.add('clipVisible');
    })
  }
}
