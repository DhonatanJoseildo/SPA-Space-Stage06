export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    // certificando que esta pegando o event!
    event = event || window.event
    // negando a ação padrão do evento que seria redirecionar para a proxima rota
    event.preventDefault()
  
    // colocando no historico da janela os nomes das rotas, ja que o preventDefault impede isso tambem!
    window.history.pushState({}, "", event.target.href)
  
    // chamando uma function para manipular os dados
    this.handle()
  }
  
  handle() {
    const bodyApp = document.querySelector('body')
    // pegando o nome da rota ou url
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    if (route == "/pages/home.html") {

      bodyApp.classList.remove('universo', 'exploracao')

    }else if (route == "/pages/universo.html") {

      bodyApp.classList.add('universo')
      bodyApp.classList.remove('exlporacao')
    }else if (route == "/pages/exploracao.html") {

      bodyApp.classList.add('exploracao')
      bodyApp.classList.remove('universo')
    }

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }

}
