<template lang="pug">
#adamexcerpt1
  p Adam is a tinkerer with hobbies of "making things". Sometimes those "things" are 3D printed models, but more often his "things" 
    | are in digital form. He enjoys writing code the most, but has his hands in CAD, publishing, video editing, music and more.
    
#main
  .row.center-row.gx-0.gy-4
    .col
      .container
        .row.justify-content-center.align-items-center.g-2
          .col-md(v-for="card in cards")
            card(:key='card.id' :cardTitle='card.title' :excerpt='card.excerpt' :icon='card.icon' :buttonText='card.button' :url='card.url' :lastUpdated='card.lastUpdated')
#adamexcerpt2
  p Adam is a tinkerer with hobbies of "making things". Sometimes those "things" are 3D printed models, but more often his "things" 
    | are in digital form. He enjoys writing code the most, but has his hands in CAD, publishing, video editing, music and more.
  
.col-md-8.offset-md-1#moreresources
  h3 More Stuff
.container
  .row.g-2
    .col-lg-3.col-md-4.g-1(v-for="link in links")
      minicard(:key='link.id' :cardTitle="link.title" :icon="link.icon" :excerpt="link.excerpt" :link="link.link" :isExternal="link.isExternal")
    //- .container
    //-   .row.justify-content-center.align-items-center.g-3
    //-     .col-2.g-6(v-for="link in links")
    //-       minicard(:key='link.id' :cardTitle="link.title" :icon="link.icon" :excerpt="link.excerpt")
.col.g-5#end
</template>

<style lang="scss">
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

#landing-header, .page-header {
  svg {
    max-width: 600px;
    left: 50%;
    position: relative;
    transform: translateX(-50%) translateY(20%);
  }

  @media screen and (max-width: 767px) {
    svg {
      width: 90%;
      transform: translateX(-50%) translateY(5%);
    }
  }
}

@media screen and (min-width: 768px) {
  #adamexcerpt1 {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  #adamexcerpt2 {
    display: none;
  }
}

.adamis {
  width: 50%;
  margin-right: 50em;
}
#adamexcerpt1 {
  width: 100%;
  padding: 25px;
  color: $white;
  background-color: $primary;
}

#adamexcerpt2 {
  width: 80%;
  margin: 40px auto 30px;
}
#moreresources {
  width: 50%;
  margin: 1em 0 3em 25%;
  text-align: center;
  margin-bottom: 1em;
}
#main {
  padding: 0;
  width: 100%;
}
</style>

<script>
import card from "./card";
import minicard from "./minicard";

export default {
  components: {
    card,
    minicard,
  },

  data() {
    return {
      one: "fsdfasdfasdfasdfa",
      cards: [
        {
          id: 1,
          title: "Blog",
          icon: "fas fa-feather",
          excerpt: "Thoughts on the current state of things",
          button: "Read on",
          url: "/posts/",
          lastUpdated: "Latest post: 2021-09-09"
        },
        {
          id: 2,
          title: "Current Projects",
          icon: "fas fa-pencil-ruler",
          excerpt: "Things I'm working on now",
          button: "Dive in",
          url: "/projects/",
        },
        {
          id: 3,
          title: "Past Projects",
          icon: "fas fa-archive",
          excerpt: "Old or abandoned projects",
          button: "Dig Deep",
          url: "/past_projects/",
        },
      ],
      links: [
        {
          id: 5,
          title: "Tech",
          icon: "fas fa-microchip",
          excerpt: "Some hardware, but mostly software",
          link: "/tech/"
        },
        {
          id: 6,
          title: "Design",
          icon: "fas fa-paint-brush",
          excerpt: "Drawings, websites, music",
          link: "/design/"
        },
        {
          id: 1,
          title: "GitHub",
          icon: "fas fa-code-branch",
          excerpt: "Source code",
          link: "https://github.com/aakoch/",
          isExternal: true
        },
        {
          id: 2,
          title: "Thingiverse",
          icon: "fas fa-cube",
          excerpt: "3D prints",
          link: "https://www.thingiverse.com/aakoch/designs",
          isExternal: true
        },
        { id: 3, title: "Resume", icon: "fas fa-id-card", excerpt: "CV", link: "https://aakoch.github.io/",
          isExternal: true },
        { id: 4, title: "Twitter", icon: "fab fa-twitter", excerpt: "Tweet", link: "https://twitter.com/aakoch",
          isExternal: true },
      ],
    };
  },
};
</script>
