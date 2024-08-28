import Quill from 'quill'
import 'quill/dist/quill.snow.css'


export const quill = new Quill('#editor', {
  debug: 'info',
  theme: 'snow',
  modules: {
    toolbar: true,
  },
  placeholder: 'Compose an epic...',
})