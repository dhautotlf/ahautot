/* eslint-disable import/no-dynamic-require */
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-avatar
          size="200"
        >

        <img
        :src="require('../assets/ahautot.jpeg')"
        alt="Ambre Hautot"
        >
        </v-avatar>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{title}}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" v-for="item in projects" :key="item.name" lg="4" md="4">
        <v-card
            class="mx-auto"
          >
            <v-img
              :src="getImgUrl(item.image)"
              height="200px"
            ></v-img>

            <v-card-title>
              {{item.name}}
            </v-card-title>

            <v-card-text>
              <v-chip-group
                          column
                        >
              <v-chip>
                {{item.caption}}
              </v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
                @click="navigate(item.path)"
              >
                View
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="item.show = !item.show"
              >
                <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="item.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{item.description}}
                  <div>
                    <a v-if="item.externalLink" :href="item.externalLink" target="_blank">Link</a>
                  </div>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Router from '../router';

export default {
  name: 'Main',
  data: () => ({
    title: 'Welcome to my portfolio',
    projects: [
      {
        name: 'Todpole',
        image: 'todpole_app_icon.png',
        caption: 'Project from scratch',
        description: 'Project of a new App allowing parents to find new activities for their todlers',
        show: false,
        path: '/project/todpole',
      },
      {
        name: 'Group feature - Airbnb',
        image: 'airbnb.jpg',
        caption: 'New feature',
        description: 'Adding a new feature for group bookings to Airbnb',
        show: false,
        path: '/project/abnb',
      },
      {
        name: 'Sketching',
        image: 'sketching.jpeg',
        caption: 'Sketching challenge',
        description: 'UX sketching challenge: 100 days of visual library building.',
        externalLink: 'https://uxdesign.cc/ux-sketching-challenge-100-days-of-visual-library-building-580d5b102df6',
        show: false,
        path: '/project/sketching',
      },
      {
        name: 'Project 3',
        image: 'project1.jpeg',
        caption: 'Project from scratch',
        description: 'Tbd',
        show: false,
        path: '/',
      },
      {
        name: 'Project 4',
        image: 'project2.jpeg',
        caption: 'Project from scratch',
        description: 'Tbd',
        show: false,
        path: '/',
      },
    ],
  }),
  methods: {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    getImgUrl: (pic) => require(`../assets/${pic}`),
    navigate: (path) => {
      Router.push(path);
    },
  },
};
</script>
