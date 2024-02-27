export interface Event {
  id: `${string}-${string}-${string}-${string}-${string}`
  href: string
  name: string
  dateStart: string
  dateEnd: string
  hourStart: string
  hourEnd: string
  description: string
  tags: string[]
  location: string
  city: string
  about: string[]
}

export const events: Event[] = [
  {
    id: crypto.randomUUID(),
    href: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/comedy-night-show-design-template-b80407ed42d540261db82976d07be588_screen.jpg?ts=1698322338',
    name: 'Comediando',
    dateStart: '2023-1-15',
    dateEnd: '2023-1-15',
    hourStart: '16:00',
    hourEnd: '21:00',
    description: 'Sumérgete en una velada única llena de risas y alegría con "Noche de Risas Desenfrenadas". Los comediantes más destacados del momento te harán reír con sus ocurrencias ingeniosas y observaciones cómicas. Prepárate para liberar el estrés y disfrutar de una noche inolvidable de entretenimiento en vivo que te dejará con una sonrisa que perdurará mucho después del evento. Únete a nosotros para una experiencia única en la que la comedia se mezcla con la camaradería, creando un ambiente vibrante y lleno de energía positiva. No te pierdas la oportunidad de compartir risas contagiosas y conectar con amigos y nuevos conocidos en "Noche de Risas Desenfrenadas".',
    tags: ['Comedia', 'Humor'],
    location: 'Centro municipal',
    city: 'Punta Alta',
    about: ['Apto para todo publico', 'No se permite el ingreso con comida o bebida']
  },
  {
    id: crypto.randomUUID(),
    href: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-conference-design-template-770e36c220234c14dde2bed5561679e4_screen.jpg?ts=1696398178',
    name: 'Conferencia de negocios',
    dateStart: '2023-1-17',
    dateEnd: '2023-1-19',
    hourStart: '17:00',
    hourEnd: '20:00',
    description: 'Sumérgete en el mundo de los negocios en nuestra conferencia destacada: "Innovación y Estrategias para el Éxito Empresarial". Líderes empresariales y expertos compartirán insights sobre las últimas tendencias, estrategias efectivas y tecnologías emergentes que están definiendo el panorama empresarial actual. Descubre cómo enfrentar desafíos, anticipar cambios y optimizar tu enfoque empresarial mientras te conectas con profesionales influyentes. Esta conferencia no solo proporcionará conocimientos prácticos, sino también oportunidades valiosas de networking para impulsar tu carrera y negocio hacia el éxito sostenible.',
    tags: ['Charla', 'Negocios', 'Economia'],
    location: 'Centro municipal',
    city: 'Punta Alta',
    about: ['Apto para todo publico', 'No se permite el ingreso con comida o bebida']
  },
  {
    id: crypto.randomUUID(),
    href: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/copy-of-mlk-day-weekend-ad-design-template-7f5cc4b9afa7d163f30ac36fb0a6da54_screen.jpg?ts=1705385514',
    name: 'Nocheando una noche',
    dateStart: '2023-1-20',
    dateEnd: '2023-1-25',
    hourStart: '16:00',
    hourEnd: '21:00',
    description: 'Celebra una noche inolvidable bajo las estrellas en nuestra fiesta exclusiva: "Noche Estelar bajo las Luces". Con una atmósfera festiva, luces centelleantes y música vibrante, esta fiesta te transportará a un mundo de diversión y alegría. Baila toda la noche al ritmo de la música, disfruta de deliciosas delicias y crea recuerdos que durarán toda la vida. La "Noche Estelar bajo las Luces" es más que una fiesta; es una experiencia sensorial que estimulará tus sentidos y te sumergirá en un ambiente de celebración. No te pierdas la oportunidad de ser parte de esta celebración única y compartir momentos extraordinarios con amigos y seres queridos.',
    tags: ['Noche', 'Bandas', 'Charla', 'Show en vivo'],
    location: 'Centro municipal',
    city: 'Bahia Blanca',
    about: ['Para mayores de 18 años', 'No se permite el ingreso con comida o bebida']
  },
  {
    id: crypto.randomUUID(),
    href: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/podcast-talkshow-design-template-77ca55cf7aec9b05ac90d1191e814fa6_screen.jpg?ts=1703381764',
    name: 'Podcast en vivo',
    dateStart: '2023-2-1',
    dateEnd: '2023-2-1',
    hourStart: '16:00',
    hourEnd: '20:00',
    description: 'Súmate a la experiencia envolvente de "Conversaciones Auténticas", nuestro podcast en vivo que ofrece no solo historias fascinantes, sino también interacciones en tiempo real con la audiencia. Los anfitriones te llevarán a través de conversaciones auténticas, risas espontáneas y reflexiones profundas que mantendrán tu interés de principio a fin. Este evento no solo te permite escuchar tus episodios favoritos en vivo, sino también ser parte de la conversación. Prepárate para una experiencia única que te sumergirá en el mundo del podcasting de manera totalmente nueva y emocionante.',
    tags: ['Conferencia', 'charla', 'Humor', 'Show en vivo'],
    location: 'La fisna',
    city: 'Punta Alta',
    about: ['Apto para todo publico', 'No se permite el ingreso con comida o bebida']
  },
  {
    id: crypto.randomUUID(),
    href: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/meet-%26-greet-instagram-post-design-template-e5ed5fa01c2414f99bfa58d8717b8a46_screen.jpg?ts=1645402684',
    name: 'Meet and Greet con el Javier',
    dateStart: '2023-2-1',
    dateEnd: '2023-2-1',
    hourStart: '16:00',
    hourEnd: '19:30',
    description: 'Vive la emoción de conocer en persona a tus ídolos en nuestro evento exclusivo de Meet and Greet. Este encuentro íntimo te brinda la oportunidad única de interactuar, hacer preguntas y obtener autógrafos de las personalidades que admiras. No solo es un evento, es una experiencia cercana e inolvidable que te acercará más que nunca a tus ídolos. Con un ambiente relajado y amigable, el "Encuentro Exclusivo con tus Ídolos" te permite crear recuerdos duraderos mientras compartes momentos especiales con aquellos que han inspirado tu admiración.',
    tags: ['Conferencia', 'Charla', 'Negocios', 'Show en vivo'],
    location: 'MyM',
    city: 'Punta Alta',
    about: ['Apto para todo publico', 'No se permite el ingreso con comida o bebida']
  },
  {
    id: crypto.randomUUID(),
    href: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-live-session-post-design-template-38a1d227ca078bf7b3b776b306c73024_screen.jpg?ts=1698642400',
    name: 'Pero mira que facha',
    dateStart: '2023-2-3',
    dateEnd: '2023-2-4',
    hourStart: '16:00',
    hourEnd: '21:00',
    description: 'Participa en una charla empresarial enriquecedora que explorará las claves del liderazgo visionario y la transformación empresarial. Descubre estrategias innovadoras para enfrentar los desafíos del mundo empresarial actual y adapta tu enfoque para destacar en un entorno en constante evolución. Esta charla no solo proporcionará conocimientos prácticos, sino también insights inspiradores de líderes exitosos. Conéctate con profesionales destacados, amplía tu perspectiva y lleva tu liderazgo y habilidades empresariales al siguiente nivel.',
    tags: ['Conferencia', 'Charla', 'Negocios', 'Show en vivo', 'Motivacional'],
    location: 'Club Estudiantes',
    city: 'Bahia Blanca',
    about: ['Apto para todo publico', 'No se permite el ingreso con comida o bebida']
  },
]