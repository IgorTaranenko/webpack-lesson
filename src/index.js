import Post from './Post'
import './styles/style.css'
import Logo from './assets/3.png'

const post = new Post('Webpack Post Title', Logo);
console.log('Post to string:', post.toString());