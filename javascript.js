'use strict'

const containerBox = document.getElementById('container-box')

const moveOverlay = () => containerBox.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)
document.getElementById('login-mobile-link').addEventListener('click', moveOverlay)
document.getElementById('register-mobile-link').addEventListener('click', moveOverlay)