'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

//==============================================
// // Route.get('/posts', () => `list of Posts`)
// Route.get('/posts', 'PostController.index')

// // Route.post('/posts', () => `posts has been created`)
// Route.post('/posts', 'PostController.store')

// Route.get('/posts/create', 'PostController.create')

// // Route.get('/posts/:id', ({ params }) => {
// //   return `You're watching post ${params.id}.`
// // })
// Route.get('/posts/:id', 'PostController.show')

// // Route.patch('/posts/:id', ({params}) => {
// //   return `post ${ params.id } has been updated.`
// // })
// Route.patch('/posts/:id', 'PostController.update')

// // Route.delete('/posts/:id', ({params}) => {
// //   return `post ${ params.id } has been removed.`
// // })
// Route.delete('/posts/:id', 'PostController.destory')

// Route.get('/posts/:id/edit', 'PostController.edit')
// // GET posts/create   create
// // posts/:id/edit  edit
//========================================================
//更简洁的资源路由
Route
  .resource('posts', 'PostController')
  // .except(['index']) // 设置不需要的路由
  // .only(['index', 'show']) // 设置允许的路由
  // .apiOnly() // 不能edit、create

// 命名路由
Route
  .get('/list-of-users', () => `list of users`)
  .as('users.index')

// 判断用户请求的路由格式，然后根据根式做出不同的响应
Route.get('/users', ({request}) => {
  switch (request.format()) {
    case 'json':
      return [
        {name: 'robinz'},
        {name: 'robert'}
      ]
    default: 
      return `
        - robinz
        - robert
      `
  }
})
.formats(['json']) // 设置路由支持的格式
// .formats(['json', 'html'], true) // 设置路由支持的格式,强制要求路由的格式必须是json或html才返回数据

// 如果有一些路由需要共享一些特性 例如 前缀，中间件，域名，格式。。。我们可以使用路由群组
Route
  .group(() => {
    Route.get('/users', () => `Manage users`)
    Route.get('/posts', () => `Manage posts`)
  })
  .prefix('admin')


// 单页面应用的路由
Route.any('*', ({ view }) => view.render('welcome'))