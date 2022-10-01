const divDark = document.createElement('div');
      divDark.classList.add('darkMode');
const labelDark = document.createElement('label');
const aDark = document.createElement('a');
      aDark.classList.add('button');
const textADark = document.createTextNode("Modo Dark Desativado");

const inputDark = document.createElement('input');
      inputDark.setAttribute('type', 'checkbox');
      inputDark.setAttribute('id', 'input-dark-mode');


header.appendChild(labelDark);
labelDark.appendChild(divDark);
divDark.appendChild(aDark);
aDark.appendChild(textADark);
divDark.appendChild(inputDark);



document.getElementsByTagName('header')[0].appendChild(labelDark);

document.addEventListener('DOMContentLoaded', () => {
      const darkModeStorage = localStorage.getItem('dark-mode')
      const html = document.querySelector('html')
      const body = document.querySelector('body')
      const inputDarkMode = document.getElementById('input-dark-mode')



    if(darkModeStorage){
              html.setAttribute("dark", "true")
              header.setAttribute("dark", "true")
              footer.setAttribute("dark", "true")
              body.setAttribute("dark", "true")

    }

    inputDarkMode.addEventListener('change', () => {
                  if(inputDarkMode.checked){
                      html.setAttribute("dark", "true")
                      header.setAttribute("dark", "true")
                      footer.setAttribute("dark", "true")
                      body.setAttribute("dark", "true")
                      aDark.innerHTML = 'Dark-Mode Ativado'
                      localStorage.setItem('dark-mode', true)
                  }else{
                      html.removeAttribute("dark")
                      header.removeAttribute("dark")
                      footer.removeAttribute("dark")
                      body.removeAttribute("dark")
                      aDark.innerHTML = 'Dark-Mode Desativado'
                      localStorage.removeItem('dark-mode')
                  }
             })


}) 