<template>
  <section class="row misc-row">
    <CurrentStep :append="currentStep"></CurrentStep>

    <div class="row-inner">
      <ul class="misc-list">
        <li 
          v-for="_ in miscs"
          class="misc-item" 
          :class="_.categ">
          <div class="misc-presentator">
            <header class="misc-categ-wrapper">
              <h1 class="misc-categ-name">{{ _.name }}</h1>
              <p class="misc-categ-entries">
                <a 
                  v-for="__ in _.entries"
                  class="misc-categ-item" 
                  href="`https://${__.dataURL}`">{{ __.name }}</a>
              </p>
            </header>
          </div>

          <div class="misc-scene">
            <ul class="misc-scenes-list">
              <li v-for="__ in _.scenes" class="misc-scene-item" v-bind:style="__.style">
                <a 
                  :href="`http://${__.dataURL}`" 
                  target="_blank" 
                  class="misc-scene-item-link"></a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import CurrentStep from '@/components/CurrentStep'
  
  export default {
    name: 'Misc',

    // Required components
    components: { CurrentStep },

    // data
    data: () => ({
      // currentStep
      currentStep: {
        text: 'Miscellanous'
      },

      // miscs
      miscs: [
        {
          name: 'Fav. musics',
          categ: 'misc-musics',
          scenes: [
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/music_1.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/music_2.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/music_3.jpg\')'
              }
            }
          ],
          entries: [
            {
              name: 'Pop',
              dataURL: 'youtube.com'
            },
            {
              name: 'Rock',
              dataURL: 'youtube.com'
            },
            {
              name: 'EDM',
              dataURL: 'youtube.com'
            },
            {
              name: 'RAP FR',
              dataURL: 'youtube.com'
            }
          ]
        },
        {
          name: 'Fav. games',
          categ: 'misc-game',
          scenes: [
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/gaming_1.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/gaming_2.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/gaming_3.jpg\')'
              }
            }
          ],
          entries: [
            {
              name: 'FPS',
              dataURL: 'website.com'
            },
            {
              name: 'Foot',
              dataURL: 'website.com'
            },
            {
              name: 'Open World',
              dataURL: 'website.com'
            }
          ]
        },
        {
          name: 'Fav. movies',
          categ: 'misc-videos',
          scenes: [
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/movies_1.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/movies_2.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/movies_3.jpg\')'
              }
            }
          ],
          entries: [
            {
              name: 'High-tech',
              dataURL: 'youtube.com'
            },
            {
              name: 'Comedy',
              dataURL: 'youtube.com'
            }
          ]
        },
        {
          name: 'Fav. places',
          categ: 'misc-places-tobe',
          scenes: [
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/places_1.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/places_2.jpg\')'
              }
            },
            {
              dataURL: 'youtube.com',
              style: {
                backgroundImage: 'url(\'img/places_3.jpg\')'
              }
            }
          ],
          entries: [
            {
              name: 'SFO',
              dataURL: 'youtube.com'
            },
            {
              name: 'MIA',
              dataURL: 'youtube.com'
            },
            {
              name: 'YMQ',
              dataURL: 'youtube.com'
            }
          ]
        }
      ]
    }),

    // methods
    methods: {},
  }
</script>

<style lang='scss' scoped>
  @import './../assets/styles/components/misc.scss';
</style>
