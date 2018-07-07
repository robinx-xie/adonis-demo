'use strict'

class PostController {
  index () {
    return `List of posts.`
  }

  store () {
    return `posts has been created.`
  }

  show ({ params }) {
    return `You're watching post ${params.id}`
  }

  update ({ params }) {
    return `post ${ params.id } has been updated.`
  }

  destroy ({ params }) {
    return `post ${ params.id } has been removed.`
  }

  create () {
    return `post create`
  }

  edit ({ params }) {
    return `posts ${params.id} is being edited`
  }
}

module.exports = PostController
