<template lang="pug">

.page-flex 
  #adamexcerpt
    p Adam is a tinkerer with hobbies of "making things". Sometimes those "things" are 3D printed models, but more often his "things"
      | are in digital form. He enjoys writing code the most, but has his hands in CAD, publishing, video editing, music and more.

  #main
    .row.center-row.gx-0.gy-4
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

body {
  container-type: inline-size;
}

#landing-header {
  background-color: $primary;
  $backgound-dark: $primary;

  .icon {
    position: relative;
    float: left;
    background-image: url(../img/cropped-brainscan-copy-2.jpg);
    background-size: 200px;
    width: 200px;
    border-radius: 10px;
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

#landing-header {

  display: flex;
  justify-content: center;

}

#landing-header, .page-header {
  svg {
    max-width: 600px;
    flex: 1;
    translate: 0 19%;
  }

}

.page-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.page-flex>* {
  flex: 1;
}

.adamis {
  width: 50%;
  margin-right: 50em;
}

#adamexcerpt {
  max-width: 90vw;
  min-width: 70vw;
  margin: 0 auto;

  padding: 2rem 2rem 0;
  order: 2;

  p {
    text-align: center;
  }
}

#main {
  padding-top: 24px;
  width: 100%;
  order: 1;
}


@media screen and (max-width: 767px) {

  #landing-header,
  .page-header {
    svg {
      max-width: 90cqw;
      translate: 0 5%;
    }
  }

  #adamexcerpt {
    min-width: 100%;
    padding: 1.5rem 5% 0;
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

.mini-cards-container {
  max-width: 80%;
  display: flex;
  gap: 1vh;
  flex-flow: row wrap;
  margin: 0 auto;
  // justify-content: center;
  order: 5;
}

.mini-card-container {
  flex: 1;
  min-width: 18rem;
}

.cards-container {
  width: 93vw;
  display: flex;
  gap: 1vw;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
}

.card-container {
  // flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  min-width: 16rem;
  max-width: 25rem;
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
