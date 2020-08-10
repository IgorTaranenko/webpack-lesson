import * as $ from 'jquery'
import Post from './Post'
import './styles/style.css'
import Logo from './assets/3.png'

const post = new Post('Webpack Post Title', Logo);

$('pre').addClass('code').html(post.toString());

