// Elements
const form = document.getElementById('form')
const img = document.getElementById('preview')
const loader = document.getElementById('loader')
const alert = document.getElementById('alert')


// event
form.addEventListener('submit', e => {
  e.preventDefault()

  // get value
  const text = form.text.value

  // start the loading
  img.classList.add('d-none')
  form.submit.disabled = true
  loader.classList.remove('d-none')
  alert.classList.add('d-none')

  // send to backend 
  axios.post('/api', {
      text
    })
    .then((res) => {
      const URL = res.data.output_url

      // Handel image loading
      img.setAttribute('src', URL)

      img.onload = _ => {
        // show the image
        img.classList.remove('d-none')

        // stop the loading
        loader.classList.add('d-none')
        form.submit.disabled = false
      }
    })
    .catch(err => {
      // stop the loading and show the image
      form.submit.disabled = false
      loader.classList.add('d-none')
      alert.classList.remove('d-none')
      console.log(err)
    })
    .finally(_ => {
      // some thing
    })

})