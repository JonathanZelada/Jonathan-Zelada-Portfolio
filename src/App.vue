<template>
  <div ref="" class="relative w-full min-h-screen mb-60">
    <div class="relative w-full">
      <!-- Imagen de fondo -->
      <img src="@/images/OrangeBG.png" alt="Fondo" class="w-full h-full object-cover" />

      <!-- Contenedor de imagen 2 + texto -->
      <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <!-- Imagen encima ocupando 80% del contenedor -->
        <img src="@/images/Nombre.svg" alt="Nombre" class="w-[60%]" />

        <!-- Texto debajo, ocupando poco espacio -->
        <p class="mt-8 text-Jorange font-jura font-bold text-5xl text-center">
          Welcome to my portfolio
        </p>
      </div>
    </div>

    <div class="justify-items-center">
      <h1 class="reveal zoom-in text-Jorange font-monoton text-center text-[70pt] mt-70">Hello!</h1>

      <h2 class="reveal fade-up text-Jhite font-jura font-bold text-center text-2xl w-5/6 mt-4">
        I am a 2nd-year high school student passionate about art, projects and helping others. I
        enjoy combining creativity with problem-solving, whether in academic, cultural, or community
        activities. I am developing soft and hard skills while learning how to connect creativity
        with social impact.
      </h2>

      <div
        class="reveal zoom-in  flex flex-wrap items-center justify-center gap-2 text-4xl text-Jhite mt-20 mb-60 font-jura font-semibold"
      >
        <h2>Turn risks into</h2>
        <h2 class="bg-Jorange text-Jlack rounded-[15px] px-2 py-1 m-[2px]">opportunities</h2>
        <h2>and opportunities into</h2>
        <h2 class="text-Jorange underline">growth!</h2>
      </div>

      <div class="flex justify-between pt-32 relative ">
        <!-- Imagen decorativa izquierda -->
        <img
          src="@/images/visuals2.svg"
          alt=""
          class="absolute -left-110 top-1/2 transform -translate-y-1/2 object-contain reveal fade-left "
        />

        <!-- Imagen a la izquierda -->
        <img src="@/images/Yo.svg" alt="Yo" class="h-[500px] object-contain mr-10 z-10 reveal blur-in stagger"/>

        <!-- Bloque de texto a la derecha de mi foto -->
        <div class="max-w-xl ml-12 z-10">
          <h2 class="text-3xl font-jura font-bold text-Jhite mb-2 reveal fade-left">A little bit</h2>
          <h2 class="text-7xl text-Jorange mb-6 font-monoton reveal fade-right">About Me</h2>
          <h2 class="text-3xl text-Jyan font-jura font-semibold mb-4 reveal zoom-out">EDUCATION</h2>
          <div class="flex items-center gap-4 reveal fade-left">
            <img src="@/images/+.svg" alt="" class="object-contain" />
            <p class="text-3xl font-jura font-bold text-Jhite">Citalá School (Scholarship)</p>
          </div>
          <h2 class="text-3xl text-white opacity-45 font-jura mb-3 ml-15 reveal fade-left">General high school</h2>
          <div class="flex items-center gap-4 reveal fade-left">
            <img src="@/images/+.svg" alt="" class="object-contain" />
            <p class="text-3xl font-jura font-bold text-Jhite">¡Supérate! Program (Scholarship)</p>
          </div>
          <h2 class="text-3xl text-white opacity-45 font-jura mb-3 ml-15 reveal fade-left">
            3 year extracurricular program
          </h2>
          <h2 class="text-3xl text-Jyan font-jura font-semibold mb-4 mt-8 reveal zoom-out">SOFT SKILLS</h2>

          <div class="grid grid-cols-2 gap-6 text-center font-jura font-bold">
            <div class="border-3 border-Jorange rounded-xl p-2 shadow-md reveal fade-left">
              <p class="text-Jhite">Creativity & Innovation</p>
            </div>

            <div class="border-3 border-Jorange rounded-xl p-2 shadow-md reveal fade-left">
              <p class="text-Jhite">Adaptability</p>
            </div>

            <div class="border-3 border-Jorange rounded-xl p-2 shadow-md reveal fade-right">
              <p class="text-Jhite">Resilience</p>
            </div>

            <div class="border-3 border-Jorange rounded-xl p-2 shadow-md reveal fade-right">
              <p class="text-Jhite">Risk-taking</p>
            </div>
          </div>
        </div>

        <!-- Imagen decorativa derecha -->
        <img
          src="@/images/visuals1.svg"
          alt=""
          class="absolute -right-110 top-1/2 transform -translate-y-1/2 object-contain reveal fade-right"
        />
      </div>
      <img
        src="@/images/lines.svg"
        alt=""
        class="absolute -left-50 mt-110 transform object-contain h-200 reveal fade-left"
      />
      <img
        src="@/images/lines2.svg"
        alt=""
        class="absolute -right-70 mt-140 transform object-contain h-220 reveal fade-right"
      />
      <img
        src="@/images/My.svg"
        alt=""
        class="absolute mt-140 transform object-contain h-30 pl-150 reveal fade-left"
      />
      <div>
        <h1 class="text-Jorange font-monoton text-center text-[130pt] mt-170 tracking-wide reveal blur-in">
          PR<span class="ml-0.5">O</span>JECTS
        </h1>
      </div>

      <div class="flex items-center space-x-8 mt-140 mx-16">
        <!-- Logo a la izquierda -->
        <div class="w-2/4">
          <img src="@/images/TrackMate.svg" alt="TrackMate logo" class="h-90 pl-50" />
        </div>

        <!-- Textos a la derecha -->
        <div class="flex flex-col justify-center text-right pr-50">
          <h1 class="font-ubuntu text-8xl font-bold text-Jhite">TrackMate</h1>
          <h2 class="font-jura text-2xl text-Jhite mt-2 ml-20">
            A mobile app concept to manage vehicle maintenance. Features include locating
            repairshops, keeping maintenance history, booking appointments, and mechanic–user
            communication.
          </h2>
        </div>
      </div>

      <div class="w-full h-full overflow-hidden relative rounded-xl mt-25">
        <video
          :src="videos[currentVideo]"
          class="w-full h-full object-cover"
          autoplay
          muted
          playsinline
          @ended="nextVideo"
        ></video>
      </div>
      <div class="flex justify-between items-center w-full mt-10 px-16">
        <!-- Textos a la izquierda -->
        <div class="w-1/2 space-y-4">
          <!-- Título Contributions -->
          <h1 class="font-jura text-Jurple text-4xl font-bold mt-10">Contributions</h1>

          <!-- Lista de Contributions -->
          <ul class="list-disc list-outside pl-8 space-y-2">
            <li class="font-jura text-Jhite text-xl leading-relaxed">
              Team Leader: Coordinated the group and managed<br />
              the overall project development.
            </li>
            <li class="font-jura text-Jhite text-xl leading-relaxed">
              Front-End Developer: Worked on the design and<br />
              functionality of the user interface.
            </li>
          </ul>

          <!-- Título Achievements -->
          <h1 class="font-jura text-Jurple text-4xl font-bold mt-14">Achievements</h1>

          <!-- Lista de Achievements -->
          <ul class="list-disc list-outside pl-8 space-y-2">
            <li class="font-jura text-Jhite text-xl leading-relaxed">
              2nd Place – EXPOTECH 2025 Competition
            </li>
            <li class="font-jura text-Jhite text-xl leading-relaxed">Award for Best Programming</li>
          </ul>
        </div>

        <!-- Imágenes a la derecha con superposición -->
        <div class="w-1/2 relative flex justify-center items-center">
          <!-- Phone (detrás) -->
          <img src="@/images/phoneTrack.svg" alt="Phone" class="absolute -top-25 left-12 w-55" />

          <!-- Laptop (encima) -->
          <img src="@/images/laptopTrack.png" alt="Laptop" class="relative z-10 h-100 top-5" />
        </div>
      </div>

      <div class="">
        <img src="@/images/separador.svg" alt="" class="w-4/5 mx-auto mt-20" />
      </div>

      <div class="relative w-full">
        <!-- Imagen -->
        <img src="@/images/Libros.svg" alt="" class="w-2/5 mx-40 mt-20 relative" />

        <!-- Texto sobrepuesto (arriba de la imagen) -->
        <div
          class="absolute top-5 right-1 mr-32 transform -translate-x-1 flex flex-col items-center z-10 space-y-2"
        >
          <h1 class="font-abhaya text-7xl leading-none">
            <span class="text-Jhite">"</span>
            <span class="text-Jed">Relatos</span>
            <span class="text-Jhite"> tenebrosos</span>
            <span class="text-Jed">"</span>
          </h1>
          <h1 class="font-jura text-3xl text-Jlue mb-12">Interior book design</h1>
          <h1 class="font-jura text-xl text-Jhite text-right mb-16">
            “Relatos Tenebrosos” is a book that contains a collection of <br />
            eerie short stories written by Salvadoran author <br />
            Mario Martínez.
          </h1>
          <h1 class="font-abhaya text-5xl text-Jed text-right m">Contribution</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

/* === VIDEOS DEL CARRUSEL === */
const videos = [
  new URL('@/assets/videos/TrackMateVideo1.mp4', import.meta.url).href,
  new URL('@/assets/videos/TrackMateVideo2.mp4', import.meta.url).href,
]

const currentVideo = ref(0)
const nextVideo = () => {
  currentVideo.value = (currentVideo.value + 1) % videos.length
}

/* === ANIMACIONES EN SCROLL === */
onMounted(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        } else {
          // 👉 Esto hace que la animación se repita cada vez
          entry.target.classList.remove("reveal-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

</script>
