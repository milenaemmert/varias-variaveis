const getDogBtn = document.getElementById("getDogBtn")
const container = document.getElementById("container__dogs")
const clearBtn = document.getElementById('clearBtn')

/* getDogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const image = document.createElement('img')
      image.src = data.message

      container.appendChild(image)
    })
    .catch((error) => {
      console.log('Ocorreu um erro', error)
    })
}) */

getDogBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()

    const image = document.createElement("img")
    image.src = data.message;


    container.appendChild(image)
  } catch (error) {
    console.log("Ocorreu um erro", error)
  }
})

clearBtn.addEventListener('click', () => {
  container.innerHTML = ''
})
