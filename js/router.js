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
    const a1Event = document.querySelector('nav .navigation a.a1')
    const a2Event = document.querySelector('nav .navigation a.a2')
    const a3Event = document.querySelector('nav .navigation a.a3')
    
    // pegando o nome da rota ou url
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    if (route == "/pages/home.html") {

      bodyApp.classList.remove('universo', 'exploracao')
      
      a1Event.classList.add('checked')
      a2Event.classList.remove('checked')
      a3Event.classList.remove('checked')
    }else if (route == "/pages/universo.html") {

      bodyApp.classList.add('universo')
      bodyApp.classList.remove('exploracao')

      a2Event.classList.add('checked')
      a1Event.classList.remove('checked')
      a3Event.classList.remove('checked')
    }else if (route == "/pages/exploracao.html") {

      bodyApp.classList.add('exploracao')
      bodyApp.classList.remove('universo')

      a3Event.classList.add('checked')
      a1Event.classList.remove('checked')
      a2Event.classList.remove('checked')
    }

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }

}
