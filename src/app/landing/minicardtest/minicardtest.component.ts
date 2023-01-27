import { Component } from '@angular/core';

@Component({
  selector: 'app-minicardtest',
  templateUrl: './minicardtest.component.html',
  styleUrls: ['./minicardtest.component.scss']
})
export class MinicardtestComponent {

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
}
