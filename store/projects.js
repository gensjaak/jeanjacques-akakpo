import { slugify, previousObject, nextObject } from '@@/illuminate/utils'

export const state = () => ({
  items: [
    {
      key: `PROJECT_01`,
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      projectSiteURL: `https://google.com`,
      imageURL: 'akces.jpg',
      report: {
        title: `then we have...`,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
      },
      shoots: [
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-shirt.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-logos.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/nova-home.jpg`,
        },
      ],
      desc: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      `,
      techs: ['Java Android', 'XML', 'Firebase', 'Photoshop'],
      metas: [
        {
          title: `Client`,
          value: `YokoSushi`,
        },
        {
          title: `Services`,
          value: `Site E-commerce`,
        },
        {
          title: `Completed`,
          value: `2018`,
        },
        {
          title: `Tools`,
          value: `Integration, VueJS, VueRouter, Google maps`,
        },
        {
          title: `Scope`,
          value: `Front-End Development`,
        },
      ],
      name: 'Fast Foud',
    },
    {
      key: `PROJECT_02`,
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      projectSiteURL: `https://google.com`,
      imageURL: 'gaming_3.jpg',
      report: {
        title: `then we have...`,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
      },
      shoots: [
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-shirt.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-logos.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/nova-home.jpg`,
        },
      ],
      desc: `
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      techs: ['Wordpress', 'CSS', 'Javascript', 'PHP'],
      metas: [
        {
          title: `Client`,
          value: `YokoSushi`,
        },
        {
          title: `Services`,
          value: `Site E-commerce`,
        },
        {
          title: `Completed`,
          value: `2018`,
        },
        {
          title: `Tools`,
          value: `PHP (Laravel), VueJS, VueRouter, Paypal, Google maps`,
        },
        {
          title: `Scope`,
          value: `Front-End Development`,
        },
      ],
      name: 'Ushuaïa Beauté',
    },
    {
      key: `PROJECT_03`,
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      projectSiteURL: `https://google.com`,
      imageURL: 'gaming_2.jpg',
      report: {
        title: `then we have...`,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
      },
      shoots: [
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-shirt.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-logos.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/nova-home.jpg`,
        },
      ],
      desc: `
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
      `,
      techs: ['Intégration', 'Bootstrap', 'Javascript'],
      metas: [
        {
          title: `Client`,
          value: `YokoSushi`,
        },
        {
          title: `Services`,
          value: `Site E-commerce`,
        },
        {
          title: `Completed`,
          value: `2018`,
        },
        {
          title: `Tools`,
          value: `PHP (Laravel), VueJS, VueRouter, Paypal, Google maps`,
        },
        {
          title: `Scope`,
          value: `Front-End Development`,
        },
      ],
      name: 'Groupe Carrere',
    },
    {
      key: `PROJECT_04`,
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      projectSiteURL: `https://google.com`,
      imageURL: 'movies_2.jpg',
      report: {
        title: `then we have...`,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
      },
      shoots: [
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-shirt.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-logos.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/nova-home.jpg`,
        },
      ],
      desc: `
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur:
      `,
      techs: ['Intégration', 'Bootstrap', 'Javascript'],
      metas: [
        {
          title: `Client`,
          value: `YokoSushi`,
        },
        {
          title: `Services`,
          value: `Site E-commerce`,
        },
        {
          title: `Completed`,
          value: `2018`,
        },
        {
          title: `Tools`,
          value: `PHP (Laravel), VueJS, VueRouter, Paypal, Google maps`,
        },
        {
          title: `Scope`,
          value: `Front-End Development`,
        },
      ],
      name: 'Ackes',
    },
    {
      key: `PROJECT_05`,
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      projectSiteURL: `https://google.com`,
      imageURL: 'gaming_2.jpg',
      report: {
        title: `then we have...`,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
      },
      shoots: [
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-shirt.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-logos.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/nova-home.jpg`,
        },
      ],
      desc: `
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
      `,
      techs: ['Intégration', 'VueJS'],
      metas: [
        {
          title: `Client`,
          value: `YokoSushi`,
        },
        {
          title: `Services`,
          value: `Site E-commerce`,
        },
        {
          title: `Completed`,
          value: `2018`,
        },
        {
          title: `Tools`,
          value: `PHP (Laravel), VueJS, VueRouter, Paypal, Google maps`,
        },
        {
          title: `Scope`,
          value: `Front-End Development`,
        },
      ],
      name: 'Yokosushi',
    },
    {
      key: `PROJECT_06`,
      link: function () {
        return '/projects/' + this.slug()
      },
      slug: function () {
        return slugify(this.name)
      },
      projectSiteURL: `https://google.com`,
      imageURL: 'movies_2.jpg',
      report: {
        title: `then we have...`,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
      },
      shoots: [
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-shirt.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/tygr-logos.jpg`,
        },
        {
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          mediaURL: `shoots/nova-home.jpg`,
        },
      ],
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      techs: ['Java Android', 'XML', 'Firebase', 'VueJS', 'PHP', 'Photoshop'],
      metas: [
        {
          title: `Client`,
          value: `YokoSushi`,
        },
        {
          title: `Services`,
          value: `Site E-commerce`,
        },
        {
          title: `Completed`,
          value: `2018`,
        },
        {
          title: `Tools`,
          value: `PHP (Laravel), VueJS, VueRouter, Paypal, Google maps`,
        },
        {
          title: `Scope`,
          value: `Front-End Development`,
        },
      ],
      name: 'Nkeleo',
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

  // Prev item
  prev: state => {
    return current => {
      return previousObject(state.items, 'key', current.key)
    }
  },

  // Next item
  next: state => {
    return current => {
      return nextObject(state.items, 'key', current.key)
    }
  },
}

export const mutations = {}