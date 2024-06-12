import { Component } from '@angular/core';
import { Card } from '../card/card.model'
import latestPost from '../../../blog.json'

@Component({
  selector: 'app-other',
  templateUrl: './other.component.pug',
  styleUrl: './other.component.scss'
})
export class OtherComponent {

  public cards: Card[] = [
    {
      id: 5,
      title: "Tech",
      icon: "microchip",
      description: "Some hardware, but mostly software",
      url: "/tech",
      buttons: [
        {
          label: "Nerd out"
        }
      ]
    },
    {
      id: 6,
      title: "Design",
      icon: "paint-brush",
      description: "Drawings, websites, music",
      url: "/design",
      buttons: [
        {
          label: "Dive in",
          url: "test"
        }
      ],
    },
  ]

    public links: any[] = [
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
    // {
    //   id: 4,
    //   title: "Twitter",
    //   icon: ["fab", "twitter"],
    //   description: "Tweet",
    //   link: "https://twitter.com/aakoch",
    //   isExternal: true,
    // },
  ]
}
