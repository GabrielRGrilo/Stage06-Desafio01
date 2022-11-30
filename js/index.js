import { Router } from "./router.js"

const router = new Router()

router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/exploration', "/pages/exploration.html")



router.handle()


window.onpopstate = () => router.handle()
window.route = () => router.route()

let universeSelect = "./assets/bg-universe.png";
let explorationSelect = "./assets/bg-exploration.png"
let div = document.querySelector('body')
let universeBackGround = document.querySelector('.universe')
let explorationBackGround = document.querySelector('.exploration')


universeBackGround.addEventListener('click', () => div.style.backgroundImage = `url(${universeSelect})`)
explorationBackGround.addEventListener('click', () => div.style.backgroundImage = `url(${explorationSelect})`)