export default function(){
  const bodyApp = document.querySelector('body')
  const a1Event = document.querySelector('nav .navigation a.a1')
  const a2Event = document.querySelector('nav .navigation a.a2')
  const a3Event = document.querySelector('nav .navigation a.a3')

  function changeBG(route) {
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
  }

  return {
    changeBG
  }
}