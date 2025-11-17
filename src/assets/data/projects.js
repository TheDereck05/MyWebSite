import BannerMeguBeats from '../recursos/MeguBeats_Banner.jpg'
import BannerBattleSpheres from '../recursos/BattleoftheSphere.jpg'
import BannerNeuroSpectra from '../recursos/NeuroSpectra_Banner.jpg'
const projects = [
  {
    id: '1',
    title: 'NeuroSpectra',
    short: 'Codigo que analiza espectogramas para detectar patrones neuronales.',
    description: 'Implementacion de codigo para analizar espectogramas de señales neuronales utilizando ',
    image: BannerNeuroSpectra,
    tech: ['Python', 'NumPy', 'Matplotlib', 'SciPy', 'Pandas', 'MNE-Python', 'JSON', 'OS', 'Glob'],
    link: 'https://github.com/TheDereck05/NeuroSpectra'
  },
  {
    id: '2',
    title: 'MeguBeats',
    short: 'Bot de Discord para escuchar musica y moderación.',
    description: 'Bot de Discord con comandos para escuchar musica y sistema de creacion de canales temporales para proyectos.',
    image: BannerMeguBeats ,
    tech: [  'Python','discord.py','yt-dlp','FFmpeg','asyncio','python-dotenv'],
    link: 'https://github.com/TheDereck05/MeguBeats' 
  },
  {
    id: '3',
    title: 'Battle of the Spheres',
    short: 'Juego de Dos esferas que luchan entre si.',
    description: 'Juego desarrollado en Pygame donde dos esferas luchan entre si utilizando diferentes habilidades y power-ups.',
    image: BannerBattleSpheres,
    tech: [ 'Python', 'Pygame'],
    link: 'https://github.com/TheDereck05/-Battle-of-the-Spheres'
  }

]

export default projects
