import { slugify } from '@@/illuminate/utils'

export const state = () => ({
  items: [
    {
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      imageURL: 'music_2.jpg',
      desc: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      `,
      techs: ['Java Android', 'XML', 'Firebase', 'Photoshop'],
      name: 'Fast Foud'
    },
    {
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      imageURL: 'gaming_3.jpg',
      desc: `
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      techs: ['Wordpress', 'CSS', 'Javascript', 'PHP'],
      name: 'Ushuaïa Beauté'
    },
    {
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      imageURL: 'gaming_2.jpg',
      desc: `
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
      `,
      techs: ['Intégration', 'Bootstrap', 'Javascript'],
      name: 'Groupe Carrere'
    },
    {
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      imageURL: 'movies_2.jpg',
      desc: `
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur:
      `,
      techs: ['Intégration', 'Bootstrap', 'Javascript'],
      name: 'Ackes'
    },
    {
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      imageURL: 'gaming_2.jpg',
      desc: `
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
      `,
      techs: ['Intégration', 'VueJS'],
      name: 'Yokosushi'
    },
    {
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      imageURL: 'movies_2.jpg',
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      techs: ['Java Android', 'XML', 'Firebase', 'VueJS', 'PHP', 'Photoshop'],
      name: 'Nkeleo'
    },
  ],
})

export const actions = {}

export const getters = {

  // Get a single item
  item: state => {
    return slug => {
      return state.items.filter(item => item.slug() === slug)[0] || state.items[0]
    }
  },

  // Get all items
  items: state => {
    return () => {
      return state.items
    }
  },
}

export const mutations = {}
