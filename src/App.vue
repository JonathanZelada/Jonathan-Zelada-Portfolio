<script setup>
import { ref, onMounted } from 'vue'

const rootElement = ref(null)
const showWelcomeOverlay = ref(true) // Controla la visibilidad total del contenedor (incluyendo la opacidad y blur)
const showOverlayContent = ref(true) // Controla la visibilidad del texto y botones (el "pop-up")
const overlayOpacity = ref(0.9)
const isFullscreen = ref(false)

function requestFullscreen() {
  // Aplicamos Fullscreen al elemento raíz de la página (<html>)
  const el = document.documentElement
  if (el) {
    const requestMethod =
      el.requestFullscreen ||
      el.mozRequestFullScreen ||
      el.webkitRequestFullscreen ||
      el.msRequestFullscreen
    if (requestMethod) {
      requestMethod.call(el)
      isFullscreen.value = true
    }
  }
}

/**
 * Función que maneja el clic del usuario.
 * @param {boolean} shouldEnterFullscreen - Indica si se debe intentar entrar en Fullscreen.
 */
function dismissOverlay(shouldEnterFullscreen) {
  // 1. **Ocultar inmediatamente el "pop-up" (texto y botones).**
  showOverlayContent.value = false

  // 2. Aplicar Fullscreen si el usuario lo pidió.
  if (shouldEnterFullscreen) {
    requestFullscreen()
  }

  // 3. Iniciar la animación de desvanecimiento del fondo negro.
  overlayOpacity.value = 0

  // 4. Ocultar completamente el contenedor de bienvenida después de la transición de CSS (1 segundo).
  setTimeout(() => {
    showWelcomeOverlay.value = false
  }, 1000) // El tiempo debe coincidir con la duración de la transición CSS (duration-1000)
}

onMounted(() => {
  // Escuchar el evento de cambio de Fullscreen para mantener el estado
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement
  })
})
</script>

<template>
  <div ref="" class="relative w-full min-h-screen mb-60">
    <div
      v-if="showWelcomeOverlay"
      :style="{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }"
      class="fixed inset-0 flex flex-col items-center justify-center transition-all duration-1000 z-50 p-4"
    >
      <Transition name="fade-pop-up">
        <div
          v-if="showOverlayContent"
          class="text-center p-8 rounded-lg max-w-lg shadow-2xl bg-transparent transition-opacity duration-300"
        >
          <p class="text-Jorange text-[34pt] mb-6 font-monoton">Welcome To My Portfolio</p>
          <p class="text-gray-100 text-lg mb-8">
            This content is designed to be viewed in full screen and to provide the best visual
            experience.
            <span class="block mt-2 font-light">
              You can exit at any time by pressing the "Esc" key.
            </span>
          </p>

          <div class="flex justify-center space-x-4">
            <button
              @click="dismissOverlay(true)"
              class="bg-Jorange hover:bg-Jorange/30 text-Jlack font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Yes, Full Screen
            </button>

            <button
              @click="dismissOverlay(false)"
              class="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-white/10"
            >
              No, Continue
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <div class="relative w-full min-h-screen">
      <!-- Imagen de fondo -->
      <img src="@/images/OrangeBG.svg" alt="Fondo" class="w-full h-full object-cover" />

      <!-- Contenedor de imagen 2 + texto -->
      <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <!-- Imagen encima ocupando 80% del contenedor -->
        <img src="@/images/Nombre.svg" alt="Nombre" class="w-[80%] h-auto" />

        <!-- Texto debajo, ocupando poco espacio -->
        <p class="mt-2 text-Jorange text-base font-jura font-bold text-xl text-center">
          Welcome to my portfolio
        </p>
      </div>
    </div>

    <div class="justify-items-center">
      <h1 class="text-Jorange font-monoton text-center text-[70pt] mt-20">Hello!</h1>

      <h2 class="text-Jhite font-jura font-bold text-center text-2xl w-5/6 mt-4">
        I am a 2nd-year high school student passionate about art, projects and helping others. I
        enjoy combining creativity with problem-solving, whether in academic, cultural, or community
        activities. I am developing soft and hard skills while learning how to connect creativity
        with social impact.
      </h2>

      <div
        class="flex flex-wrap items-center justify-center gap-2 text-4xl text-Jhite mt-20 font-jura font-semibold"
      >
        <h2>Turn risks into</h2>
        <h2 class="bg-Jorange text-Jlack rounded-[15px] px-2 py-1 m-[2px]">opportunities</h2>
        <h2>and opportunities into</h2>
        <h2 class="text-Jorange underline">growth!</h2>
      </div>

      <div class="flex items-center justify-between pt-32 pr-10">
        <!-- Imagen a la izquierda -->
        <img src="@/images/Yo.svg" alt="Yo" class="h-[570px] object-contain" />

        <!-- Bloque de texto a la derecha de mi foto -->
        <div class="max-w-xl ml-12">
          <h2 class="text-3xl font-jura font-bold text-Jhite mb-2">A little bit</h2>
          <h2 class="text-7xl text-Jorange mb-6 font-monoton">About Me</h2>
          <h2 class="text-3xl text-Jyan font-jura font-semibold mb-4">EDUCATION</h2>
          <div class="flex items-center gap-4">
            <img src="@/images/+.svg" alt="" class="object-contain" />
            <p class="text-3xl font-jura font-bold text-Jhite">Citalá School (Scholarship)</p>
          </div>
          <h2 class="text-3xl text-white opacity-45 font-jura mb-3 ml-15">General high school</h2>
          <div class="flex items-center gap-4">
            <img src="@/images/+.svg" alt="" class="object-contain" />
            <p class="text-3xl font-jura font-bold text-Jhite">¡Supérate! Program (Scholarship)</p>
          </div>
          <h2 class="text-3xl text-white opacity-45 font-jura mb-3 ml-15">
            3 year extracurricular program
          </h2>
          <h2 class="text-3xl text-Jyan font-jura font-semibold mb-4 mt-8">SOFT SKILLS</h2>

          <div class="grid grid-cols-2 gap-6 text-center font-jura font-bold">
            <div class="border-3 border-Jorange  rounded-xl p-2 shadow-md">
              <p class="text-Jhite">Creativity & Innovation</p>
            </div>

            <div class="border-3 border-Jorange  rounded-xl p-2 shadow-md">
              <p class="text-Jhite">Adaptability </p>
            </div>

            <div class="border-3 border-Jorange  rounded-xl p-2 shadow-md">
              <p class="text-Jhite">Resilience</p>
            </div>

            <div class="border-3 border-Jorange  rounded-xl p-2 shadow-md">
              <p class="text-Jhite">Risk-taking</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="text-Jorange font-monoton text-center text-[130pt] mt-20 tracking-wide">PR<span class="ml-0.5">O</span>JECTS</h1>
      </div>

    </div>
  </div>
</template>
