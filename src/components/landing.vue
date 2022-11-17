<template lang="pug">

.page-flex 
  #adamexcerpt
    p Adam is a tinkerer with hobbies of "making things". Sometimes those "things" are 3D printed models, but more often his "things"
      | are in digital form. He enjoys writing code the most, but has his hands in CAD, publishing, video editing, music and more.

  #main
    .row.center-row.gx-0.gy-4
      //- .col
      //-   .container
      //-     .row.justify-content-center.align-items-center.g-2
      .cards-container
        .card-container(v-for="card in cards")
          card(
            :key="card.id",
            :cardTitle="card.title",
            :excerpt="card.description",
            :icon="card.icon",
            :url="card.url",
            :tagline="card.tagline",
            :buttons="card.buttons"
          )
  //- #adamexcerpt2
  //-   p Adam is a tinkerer with hobbies of "making things". Sometimes those "things" are 3D printed models, but more often his "things" are in digital form. He enjoys writing code the most, but has his hands in CAD, publishing, video editing, music and more.

  #moreresources
    h3 More Stuff
  .mini-cards-container
    .mini-card-container(v-for="link in links")
      minicard(
        :key="link.id",
        :cardTitle="link.title",
        :icon="link.icon",
        :description="link.description",
        :link="link.link",
        :isExternal="link.isExternal"
      )
    //- .container
    //-   .row.justify-content-center.align-items-center.g-3
    //-     .col-2.g-6(v-for="link in links")
    //-       minicard(:key='link.id' :cardTitle="link.title" :icon="link.icon" :excerpt="link.excerpt")
#end.col.g-5
</template>

<style lang="scss">
:active {
  filter: invert(white, 50)
}
$primary: #406275;
$secondary: #b89160;
$light: #dee3e6;
$white: #f5f7f8;
$dark: #43464a;
$success: #448261;
$info: #406275;
$warning: #b89060;
$danger: #b87460;

#landing-header {
  background-color: $primary;
  // height: 270px;
  // position: relative;

  // padding-top: 20px;

  $backgound-dark: $primary;
  // background: $backgound-dark; /* Old browsers */
  // background: -moz-linear-gradient(top, $backgound-dark 1%, $backgound-dark 50%, $white 51%, $white 100%); /* FF3.6-15 */
  // background: -webkit-linear-gradient(top, $backgound-dark 1%,$backgound-dark 50%,$white 51%,$white 100%); /* Chrome10-25,Safari5.1-6 */
  // background: linear-gradient(to bottom, $backgound-dark 1%,$backgound-dark 50%,$white 51%,$white 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$backgound-dark', endColorstr='$white',GradientType=0 ); /* IE6-9 */

  // height: 200px;

  .icon {
    position: relative;
    float: left;
    background-image: url(../img/cropped-brainscan-copy-2.jpg);
    // background-color: $backgound-dark;
    background-size: 200px;
    width: 200px;
    // height: 200px;
    border-radius: 10px;
    // clip-path: inset(0 0 60% 0);
    transform: skewX(0deg);
    transition: transform 1s;
    margin: 20px;

    &:hover {
      transform: skewX(10deg);
    }

    div {
      color: $primary;
      position: absolute;
      bottom: 0px;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  nav {
    color: $dark;
  }
}

#landing-header,
.page-header {
  
  display: flex;
  justify-content: center;

  svg {
    max-width: 600px;
    flex: 1;

    // left: 50%;
    // position: relative;
    translate: 0 19%;
  }

}

// @media screen and (max-width: 767px) {
//   #adamexcerpt2 {
//     display: none;
//   }
// }

.page-flex {
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.page-flex > * {
  flex: 1;
}

.adamis {
  width: 50%;
  margin-right: 50em;
}

#adamexcerpt {
  max-width: 90vw;
  // min-width: 70vh;
  margin: 0 auto;

  padding: 2rem;
  order: 2;
}

#main {
  padding-top: 24px;
  width: 100%;
  order: 1;
}


@media screen and (max-width: 767px) {
  // #adamexcerpt {
  //   order: 1;
  //   color: $white;
  //   background-color: $primary;
  // }
  // #main {
  //   order: 2;
  // }
#landing-header,
.page-header {
    svg {
      width: 90cqw;
      translate: 0 5%;
    }
  }

#adamexcerpt {
  min-width: 100%;
  padding: 0 5%;
  order: 1;
  color: $white;
  background-color: $primary;
}

  #main {
    order: 2;
  }
  .cards-container {
    flex-direction: column;
    flex-wrap: wrap;
  }

}

// #adamexcerpt2 {
//   width: 80%;
//   margin: 40px auto 30px;
//   order: 2;
// }

.mini-cards-container {
  max-width: 80%;
  // columns: 33vh;
  display: flex;
  gap: 1vh;
  flex-flow: row wrap;
  margin: 0 auto;
  // justify-content: center;
  order: 5;
// //   grid-auto-flow: row;
// //   grid-auto-columns: 1fr;
  
// // /*   justify-content: center; */
// //   margin: 0 auto;

// //   grid-template-columns: repeat(3, 1fr);
// //   grid-auto-columns: minmax(400px, 1000px);
// border: 1px solid blue;
}

.mini-card-container {
  // grid-column: 1 / 3;
  // grid-row: 1;
  // border: 1px solid red;
  // flex-grow: 1;
  // flex-shrink: max-content;
  // // flex-shrink: 1;
  // flex-basis: 0%; 
  // // min-width: 35vh;
  flex: 1;
  min-width: 18rem;
}

@media (max-width: 768px) {
  .mini-cards-container {
    // grid-auto-flow: row;
  }
}

.cards-container {
  width: 93vw;
  display: flex;
  gap: 1vh;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;

//   grid-auto-flow: row;
//   grid-auto-columns: 1fr;
  
// /*   justify-content: center; */
//   margin: 0 auto;

//   grid-template-columns: repeat(3, 1fr);
//   grid-auto-columns: minmax(400px, 1000px);
// border: 1px solid blue;
  // width: 80%;
  // display: grid;
  // grid-auto-flow: column;
  // grid-auto-columns: 1fr;
  // gap: 1vh;
  // margin: 0 auto;
}

.card-container {

  // grid-column: 1 / 3;
  // grid-row: 1;
  // border: 1px solid red;
  flex-grow: 1;
  flex-shrink: 1;
  // flex-shrink: 1;
  flex-basis: 0%; 
  min-width: 16rem;
  max-width: 35rem;
}

#moreresources {
  // width: 50%;
  margin: 1em 3em;
  text-align: center;
  // margin-bottom: 1em;
  min-width: 90%;

  order: 3;
}
</style>

<script>
import card from "./card";
import minicard from "./minicard";
import { latestPost } from "../posts/blog.json";

export default {
  components: {
    card,
    minicard,
  },

  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Blog Posts",
          icon: "fas fa-feather",
          description: "Thoughts on the current state of things",
          url: "/posts/",
          buttons: [
            {
              label: "Latest",
              url: "/posts/" + latestPost.replaceAll('-', '/') + '/',
              title: "Latest Post",
            },
            {
              label: "All",
              url: "/posts/",
              title: "All Posts",
            },
          ],
          tagline: "Latest post: " + latestPost,
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
          url: "/projects/",
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
      ],
      links: [
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
      ],
    };
  },
};
</script>
