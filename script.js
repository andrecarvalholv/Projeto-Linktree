let imagem = document.querySelector('#imagem-avatar')
let botao = document.querySelector('#switch-button')
let tagHtml = document.querySelector('#tag-html')


botao.addEventListener('click', ativar)

function ativar () {
    if (tagHtml.classList.contains('dark')) {

        tagHtml.classList.remove('dark')
        tagHtml.classList.add('light')
        imagem.setAttribute('src', './assets/avatar-andre-light.jpg')
        imagem.setAttribute('alt', 'Foto André de dia')


    } else if (tagHtml.classList.contains('light')) {

        tagHtml.classList.remove('light')
        tagHtml.classList.add('dark')
        imagem.setAttribute('src','./assets/avatar-andre.jpeg')
        imagem.setAttribute('alt', 'Foto André de noite')

    } else  {

        tagHtml.classList.add('dark')
        imagem.setAttribute('src','./assets/avatar-andre.jpeg')
        imagem.setAttribute('alt', 'Foto André de noite')

    }
 }

 /* 
 
 OBS: Poderia simplificar e utilizar imagem.src para alterar a imagem.
 talvez não precisasse desse else no final
 talvez não precisasse criar um id para a tag html, fazer de outra forma
 utilizar função toggle para simplificar a lógica if e else

 */

