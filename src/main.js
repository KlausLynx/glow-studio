import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)
window.gsap = gsap
window.TextPlugin = TextPlugin
window.ScrollTrigger = ScrollTrigger

document.dispatchEvent(new Event('gsap:ready'))

function initTheme() {
    const savedTheme = localStorage.getItem('glow-theme')  
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = savedTheme || (systemDark ? 'dark' : 'light')  
    document.documentElement.setAttribute('data-theme', theme)
    updateIcon(theme)
}

function updateIcon(theme) {
    const icons = document.querySelectorAll('#theme-icon, #theme-icon-mobile')
    icons.forEach(icon => {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
    })
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('glow-theme', next)
    updateIcon(next)
}

initTheme()

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile')
    buttons.forEach(btn => btn.addEventListener('click', toggleTheme))

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('glow-theme')) {
            const theme = e.matches ? 'dark' : 'light'
            document.documentElement.setAttribute('data-theme', theme)
            updateIcon(theme)
        }
    })
})