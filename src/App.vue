<template>
  <div ref="" class="relative w-full min-h-screen mb-40 overflow-hidden ">
    <div class="relative w-full reveal blur-in fade-up">
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
        class="reveal zoom-in flex flex-wrap items-center justify-center gap-2 text-4xl text-Jhite mt-20 mb-60 font-jura font-semibold"
      >
        <h2>Turn risks into</h2>
        <h2 class="bg-Jorange text-Jlack rounded-[15px] px-2 py-1 m-[2px]">opportunities</h2>
        <h2>and opportunities into</h2>
        <h2 class="text-Jorange underline">growth!</h2>
      </div>

      <div class="flex justify-between pt-32 relative">
        <!-- Imagen decorativa izquierda -->
        <img
          src="@/images/visuals2.svg"
          alt=""
          class="absolute -left-110 top-1/2 transform -translate-y-1/2 object-contain reveal fade-left"
        />

        <!-- Imagen a la izquierda -->
        <img
          src="@/images/Yo.svg"
          alt="Yo"
          class="h-[500px] object-contain mr-10 z-10 reveal blur-in stagger"
        />

        <!-- Bloque de texto a la derecha de mi foto -->
        <div class="max-w-xl ml-12 z-10">
          <h2 class="text-3xl font-jura font-bold text-Jhite mb-2 reveal fade-left">
            A little bit
          </h2>
          <h2 class="text-7xl text-Jorange mb-6 font-monoton reveal fade-right">About Me</h2>
          <h2 class="text-3xl text-Jyan font-jura font-semibold mb-4 reveal zoom-out">EDUCATION</h2>
          <div class="flex items-center gap-4 reveal fade-left">
            <img src="@/images/+.svg" alt="" class="object-contain" />
            <p class="text-3xl font-jura font-bold text-Jhite">Citalá School (Scholarship)</p>
          </div>
          <h2 class="text-3xl text-white opacity-45 font-jura mb-3 ml-15 reveal fade-left">
            General high school
          </h2>
          <div class="flex items-center gap-4 reveal fade-left">
            <img src="@/images/+.svg" alt="" class="object-contain" />
            <p class="text-3xl font-jura font-bold text-Jhite">¡Supérate! Program (Scholarship)</p>
          </div>
          <h2 class="text-3xl text-white opacity-45 font-jura mb-3 ml-15 reveal fade-left">
            3 year extracurricular program
          </h2>
          <h2 class="text-3xl text-Jyan font-jura font-semibold mb-4 mt-8 reveal zoom-out">
            SOFT SKILLS
          </h2>

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
        <h1
          class="text-Jorange font-monoton text-center text-[130pt] mt-170 tracking-wide reveal blur-in"
        >
          PR<span class="ml-0.5">O</span>JECTS
        </h1>
      </div>

      <div class="flex items-center space-x-8 mt-140 mx-16">
        <!-- Logo a la izquierda -->
        <div class="w-2/4">
          <img
            src="@/images/TrackMate.svg"
            alt="TrackMate logo"
            class="h-90 pl-50 reveal fade-left"
          />
        </div>

        <!-- Textos a la derecha -->
        <div class="flex flex-col justify-center text-right pr-50">
          <h1 class="font-ubuntu text-8xl font-bold text-Jhite reveal fade-right">TrackMate</h1>
          <h2 class="font-jura text-2xl text-Jhite mt-2 ml-20 reveal fade-right">
            A mobile app concept to manage vehicle maintenance. Features include locating
            repairshops, keeping maintenance history, booking appointments, and mechanic–user
            communication.
          </h2>
        </div>
      </div>

      <div class="w-full h-full overflow-hidden relative rounded-xl mt-25 reveal blur-in">
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
          <h1
            class="font-jura text-Jurple text-4xl font-bold mt-10 fade-left ml-30 reveal fade-left"
          >
            Contributions
          </h1>

          <!-- Lista de Contributions -->
          <ul class="list-disc list-outside pl-8 space-y-2">
            <li
              class="font-jura text-Jhite text-xl leading-relaxed fade-left ml-45 reveal fade-left"
            >
              Team Leader: Coordinated the group and managed<br />
              the overall project development.
            </li>
            <li
              class="font-jura text-Jhite text-xl leading-relaxed fade-left ml-45 reveal fade-left"
            >
              Front-End Developer: Worked on the design and<br />
              functionality of the user interface.
            </li>
          </ul>

          <!-- Título Achievements -->
          <h1
            class="font-jura text-Jurple text-4xl font-bold mt-14 fade-left ml-30 reveal fade-left"
          >
            Achievements
          </h1>

          <!-- Lista de Achievements -->
          <ul class="list-disc list-outside pl-8 space-y-2">
            <li
              class="font-jura text-Jhite text-xl leading-relaxed fade-left ml-45 reveal fade-left"
            >
              2nd Place – EXPOTECH 2025 Competition
            </li>
            <li
              class="font-jura text-Jhite text-xl leading-relaxed fade-left ml-45 reveal fade-left"
            >
              Award for Best Programming
            </li>
          </ul>
        </div>

        <!-- Imágenes a la derecha con superposición -->
        <div class="w-1/2 relative flex justify-center items-center reveal fade-up">
          <!-- Phone (detrás) -->
          <img src="@/images/phoneTrack.svg" alt="Phone" class="absolute -top-25 left-12 w-55" />

          <!-- Laptop (encima) -->
          <img
            src="@/images/laptopTrack.png"
            alt="Laptop"
            class="relative z-10 h-100 top-5 fade-right reveal fade-right"
          />
        </div>
      </div>

      <div class="reveal fade-up">
        <img src="@/images/Group11.svg" alt="" class="mt-50" />
      </div>

      <div class="relative w-full">
        <!-- Imagen -->
        <img
          src="@/images/Libros.svg"
          alt=""
          class="w-200 ml-70 mt-20 relative mt-70 reveal fade-left"
        />

        <!-- Texto sobrepuesto (arriba de la imagen) -->
        <div class="absolute top-5 right-1 mr-75 transform -translate-x-1 z-10 space-y-2">
          <h1 class="font-abhaya text-7xl leading-none reveal zoom-in">
            <span class="text-Jhite">"</span>
            <span class="text-Jed">Relatos</span>
            <span class="text-Jhite"> tenebrosos</span>
            <span class="text-Jed">"</span>
          </h1>
          <h1 class="font-jura text-3xl text-Jlue mb-12 flex flex-col items-center reveal zoom-in">
            Interior book design
          </h1>
          <h1 class="font-jura text-xl text-Jhite text-right mb-16 reveal fade-right">
            “Relatos Tenebrosos” is a book that contains a collection of <br />
            eerie short stories written by Salvadoran author <br />
            Mario Martínez.
          </h1>
          <h1 class="font-abhaya text-5xl text-Jed text-right leading-none mt-50 reveal fade-right">
            Contribution
          </h1>
          <h1 class="font-jura text-xl text-Jhite text-right mb-30 mt-10 reveal fade-right">
            Created a total of 12 interior <br />
            illustrations for the book. Each drawing was <br />
            designed to complement and enrich the narrative.
          </h1>
        </div>

        <div class="relative w-full mt-50">
          <!-- Imagen principal -->
          <img src="@/images/VisualEvidence.svg" alt="" class="w-full reveal fade-up" />

          <!-- Texto centrado -->
          <h1
            class="absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 text-Jed font-abhaya text-[170px] text-center leading-[0.9] font-bold reveal zoom-in"
          >
            Visual Evidence
          </h1>

          <h1
            class="absolute bottom-28 left-1/2 -translate-x-1/2 -translate-y-1/2 text-Jlue font-jura text-xl text-center font-bold reveal fade-down"
          >
            Through this project, I experimented with different <br />
            perspectives and artistic techniques to capture the essence <br />
            of each story and transform its tension into visual form. By <br />
            adapting my style to the narrative, I aimed to evoke deep emotions <br />
            and immerse readers in the unsettling atmosphere, ultimately enriching <br />
            their experience and offering a complementary layer of interpretation.
          </h1>

          <!-- Perro -->
          <img
            src="@/images/dog.svg"
            alt=""
            class="absolute object-contain bottom-80 left-25 -translate-x-1/3 translate-y-1/3 reveal blur-in fade-up"
          />
          <img
            src="@/images/crow.svg"
            alt=""
            class="absolute object-contain bottom-50 -right-40 -translate-x-1/3 translate-y-1/3 reveal blur-in fade-up"
          />
        </div>

        <div class="reveal fade-up flex justify-center">
          <img src="@/images/Group11.svg" alt="" class="mt-50" />
        </div>
      </div>
      <h1 class="font-belanosima text-Jightblue text-9xl mt-60 text-center reveal blur-in fade-up">SIVARDLE</h1>

      <div class="relative w-full flex justify-center mt-30">
        <!-- Imagen base -->
        <img src="@/images/Sivardle.svg" alt="" class="w-[800px] w-auto h-auto reveal fade-up " />

        <!-- TEXTO LEFT (arriba, desde el centro → hacia la izquierda) -->
        <h1
          class="absolute top-10 -right-1/2 -translate-x-1/2 mr-20 text-left w-[80%] md:w-[60%] text-jura text-xl text-Jhite reveal fade-up"
        >
          A digital game inspired by Wordle, <br />
          created to preserve and share Salvadoran slang <br />
          in an engaging way.
        </h1>

        <!-- TEXTO RIGHT (abajo, desde el centro → hacia la derecha) -->
        <h1
          class="absolute bottom-10 mr-80 -translate-x-1/2 text-right w-[80%] md:w-[60%] text-jura text-xl text-Jhite reveal fade-up"
        >
          Players guess Salvadoran words, <br />
          receive color-coded feedback, and unlock pop-ups <br />
          with cultural meanings, combining entertainment <br />
          with local identity.
        </h1>
      </div>

      <h1 class="font-belanosima text-Jink text-7xl mt-70 text-center reveal fade-up">Contribution</h1>
      <div
        class="flex flex-wrap items-center justify-center gap-2 text-xl text-Jhite mt-20 mb-60 font-jura font-bold mx-30 reveal fade-up"
      >
        <h2>I</h2>
        <h2 class="text-Jink">designed and developed</h2>
        <h2>the game mechanics, interface, and cultural features, including pop-ups with</h2>
        <h2>the meanings of Salvadoran words. Through this process,</h2>
        <h2 class="text-Jink">I strengthened my coding, problem-solving, and UX skills</h2>
        <h2>by adapting an international game concept to local culture. The project also</h2>
        <h2 class="text-Jink">promoted Salvadoran cultural identity</h2>
        <h2>through technology, allowing users to learn and engage while playing.</h2>
      </div>

      <div class="flex justify-center reveal fade-up">
        <img src="@/images/Group11.svg" alt="" class="mt-20" />
      </div>
    </div>
    <div class="flex justify-between items-start mt-70 mb-30 mx-60 reveal fade-up">
      <!-- Título -->
      <div class="text-left text-7xl text-Jhite font-baumans reveal fade-up">
        <div class="flex gap-6">
          <h2>TOTE</h2>
          <h2 class="text-Jorange">BAG</h2>
        </div>

        <div class="flex gap-6">
          <h2 class="text-Jyan">PAINTING</h2>
          <h2>WORKSHOP</h2>
        </div>
      </div>

      <!-- Texto Jura a la derecha -->
      <h1 class="text-Jhite text-xl font-jura text-right max-w-md reveal fade-up">
        Organized and led a painting workshop where participants decorated tote bags as a creative
        activity. The workshop was directed to a group of around 60 people, alumni of the ¡Supérate!
        program.
      </h1>
    </div>
    <h1 class="text-Jhite text-3xl font-bold font-jura text-left mx-60 reveal fade-up">Instructor</h1>
    <div class="flex justify-center gap-4 mt-8">
      <img src="@/images/TB1.svg" alt="" class="h-auto w-auto max-h-[750px] reveal fade-up" />
      <img src="@/images/TB2.svg" alt="" class="h-auto w-auto max-h-[750px] reveal fade-down" />
      <img src="@/images/TB3.svg" alt="" class="h-auto w-auto max-h-[750px] reveal fade-up" />
      <img src="@/images/TB4.svg" alt="" class="h-auto w-auto max-h-[750px] reveal fade-down" />
    </div>
    <h1 class="text-Jhite text-xl font-bold font-jura text-center mx-60 mt-20 reveal fade-up">
      I served as the instructor for a painting workshop, providing guidance, materials, and
      techniques for around 60 participants, alumni of the ¡Supérate! program, to create their own
      tote bag designs. Through this experience, I gained valuable skills in teaching and
      facilitating artistic workshops, while empowering others to explore their creativity and
      produce personalized artwork they could proudly use.
    </h1>
    <div class="flex justify-center reveal fade-up">
      <img src="@/images/Group11.svg" alt="" class="mt-20 " />
    </div>

    <div class="flex items-start mt-60 mx-60">
      <!-- Título -->
      <div class="text-left text-7xl text-Jhite font-habballi reveal fade-up">
        <div>
          <h2>SOCIAL</h2>
        </div>
        <div>
          <h2 class="text-Jarkred">MEDIA</h2>
        </div>
        <div>
          <h2>MANAGER</h2>
        </div>
      </div>

      <!-- Texto Jura a la derecha -->
      <h1 class="text-Jold text-xl font-jura text-left mt-10 mr-60 ml-20 reveal fade-up">
        Managed social media accounts for Colegio Citalá, <br />
        focusing on content creation and engagement. <br />
        Concentrated on photography, stories, and presenting <br />
        an enjoyable perspective of important school events.
      </h1>
    </div>

    <h1 class="text-2xl font-jura text-Jold mx-60 mt-30 reveal fade-up">Citalá School</h1>

    <!-- Imagen centrada y más arriba -->
    <div class="flex justify-center items-center -mt-60 mr-10 overflow-visible reveal fade-up">
      <img src="@/images/SMM.svg" alt="" />
    </div>

    <!-- Imagen de la derecha -->
    <div class="flex justify-end -mt-150 overflow-visible reveal fade-right">
      <img src="@/images/tentde.svg" alt="" class="w-auto h-auto" />
    </div>

    <!-- Contenedor para imagen tentiz + textos a la derecha -->
    <div class="relative -mt-190 overflow-visible">
      <!-- imagen tentiz -->
      <img src="@/images/Tentiz.svg " alt="" class="reveal fade-left" />

      <!-- textos centrados pero posicionados a la derecha -->
      <div class="absolute right-0 top-[70%] w-[35%] text-center mr-50">
        <h1 class="text-Jold text-xl font-jura mb-6 reveal fade-up">
          Focused on giving the school’s page a fresh and engaging perspective. I planned posts in
          advance, designed content, and promoted interaction with the community. Through this
          experience, I developed skills in digital communication, creativity, and strategy, while
          strengthening connections between the school and its audience.
        </h1>

        <h1 class="text-Jold text-xl font-jura reveal fade-up">
          I held this role during the 2024–2025 school year, applying content planning and
          storytelling to create a more dynamic and engaging online presence.
        </h1>
      </div>
    </div>

    <div class="flex justify-center reveal fade-up">
      <img src="@/images/Group11.svg" alt="" class="mt-30" />
    </div>

    <div class="overflow-visible w-full reveal fade-up">
      <div class="relative flex justify-center mt-80">
        <!-- Imagen detrás -->
        <img
          src="@/images/Group 15.svg"
          alt=""
          class="absolute -top-50 left-1/2 -translate-x-1/2 pointer-events-none reveal fade-up"
        />

        <!-- Texto encima -->
        <h1 class="text-Jorange font-monoton text-center text-[130pt] tracking-wide relative mb-40 reveal zoom-in">
          My Volunteer Work
        </h1>
      </div>
    </div>
    <div class="w-full flex justify-center reveal fade-up">
      <div class="w-2/5 flex justify-center">
        <img src="@/images/Risco.svg" alt="" />
      </div>
    </div>

    <div class="flex justify-center mt-50 reveal fade-up blur-in">
      <img src="@/images/Group 16.svg" alt="" />
    </div>

    <div class="flex justify-center mt-50 reveal fade-up blur-in">
      <img src="@/images/Group 17.svg" alt="" />
    </div>
    <div class="flex justify-center mt-50 reveal fade-up blur-in">
      <img src="@/images/techo.svg" alt="" />
    </div>
    <div class="flex justify-center mt-8">
      <h1 class="text-jura text-xl text-Jecho text-center w-150 reveal fade-up">
        TECHO – El Salvador is a non-profit organization that improves housing and community
        conditions in partnership with local residents and volunteers
      </h1>
    </div>
    <div class="flex justify-center reveal fade-up blur-in">
      <div class="mt-30 w-350">
        <img src="@/images/techoimage.svg" alt="" />
      </div>
    </div>

    <div class="flex justify-center reveal fade-up">
      <div class="mt-30 w-300">
        <img src="@/images/contact.svg" alt="" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-20 text-Jhite text-3xl font-jura mt-20 mx-40 text-center reveal fade-up">
      <!-- Columna izquierda -->
      <div>
        <p class="font-bold"> + zelada.jnthn@gmail.com</p>
        <p class="text-Jyan">Email</p>

        <p class="mt-6 font-bold">+ (503) 7560-3712</p>
        <p class="text-Jyan">Phone number</p>
      </div>

      <!-- Columna derecha -->
      <div>
        <a
          href="https://www.linkedin.com/in/jonathan-zelada
"
          target="_blank"
          class="font-bold underline hover:text-Jecho"
        >
          LinkedIn
        </a>
        <p class="text-Jyan mb-6">Professional Profile</p>

        <a
          href="/documents/CV-Jonathan-Zelada.pdf"
          download
          class="font-bold underline hover:text-Jecho"
        >
          Download CV
        </a>
        <p class="text-Jyan">PDF Document</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
  const elements = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        } else {
          // 👉 Esto hace que la animación se repita cada vez
          entry.target.classList.remove('reveal-visible')
        }
      })
    },
    { threshold: 0.2 },
  )

  elements.forEach((el) => observer.observe(el))
})
</script>
