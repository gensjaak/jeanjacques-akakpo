import $ from 'jquery'
import { PATHS } from '@@/illuminate/config'
import { toArray } from '@@/illuminate/utils'

class ScrollBreak {
  constructor () {
    this.breakpoints = []
    this.docHeight = 0
  }

  init () {
    this.breakpoints = toArray(PATHS)
      .filter(item => item.inNavBar)
      .map(item => item.resolve)
      .map(item => {
        return {
          id: item,
          $el: $(item),
          top: ($(item).position() && $(item).position().top) || -1,
        }
      })

    this.docHeight = $(window).height()

    return this
  }

  watch (next) {
    const module = this
    let currentDesignated = null

    const onScrollFn = () => {
      const top = $(window.document).scrollTop()
      const target = (module.docHeight * 0.55) + top
      const designated = module.breakpoints.filter(item => target >= item.top).reverse().slice(0, 1)[0]

      if ((!currentDesignated) || (designated.id !== currentDesignated.id)) {
        next(designated.id)

        currentDesignated = designated
      }
    }

    $(window.document).on('scroll', onScrollFn)
    onScrollFn()

    return this
  }
}

export default new ScrollBreak()
