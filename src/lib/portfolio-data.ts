
export const portfolioData = {
  personal: {
    name: "Abel Andrés Valle Zuta",
    shortName: "Abel Valle",
    phone: "(+51) 989 095 048",
    email: "abelandresvallez@gmail.com",
    github: "AndresVZ23",
    address: "La Molina, Lima, Perú",
  },
  profile: {
    es: "Soy un estudiante de Ingeniería de Software, busco activamente oportunidades para consolidar mi experiencia profesional. Me caracterizo por liderazgo, trabajo en equipo, compromiso con el aprendizaje continuo, responsabilidad y constante desarrollo de nuevas habilidades. Estoy entusiasmado y listo para aportar de manera sustancial a cualquier proyecto.",
    en: "I am a Software Engineering student actively seeking opportunities to consolidate my professional experience. I am characterized by leadership, teamwork, commitment to continuous learning, responsibility, and constant skill development. I am enthusiastic and ready to contribute substantially to any project."
  },
  experience: [
    {
      role: { es: "Practicante de RPA y WebMaster", en: "RPA Intern & WebMaster" },
      company: "CENTRUM PUCP",
      period: "Ago 2024 – Feb 2025",
      tasks: [
        { es: "Capacitación en UI Path Studio y StudioX.", en: "Training in UI Path Studio and StudioX." },
        { es: "Planeación, desarrollo, pruebas y automatización de procesos (“Envío de Certificados”).", en: "Planning, development, testing, and process automation ('Certificate Sending')." },
        { es: "Optimización de lógica de automatización (“Matrícula”).", en: "Optimization of automation logic ('Enrollment')." },
        { es: "Creación, modificación y eliminación de secciones en la web de Centrum.", en: "Creation, modification, and deletion of sections on the Centrum website." },
        { es: "Trabajo bajo marco ágil SCRUM.", en: "Work under the SCRUM agile framework." }
      ]
    },
    {
      role: { es: "Practicante de Ingeniería de Software", en: "Software Engineer Intern" },
      company: "CENTRUM PUCP",
      period: "Marzo 2025 – Ago 2025",
      tasks: [
        { es: "Corrección, optimización y desarrollo de nuevos requerimientos de la web “Compras”.", en: "Correction, optimization, and development of new requirements for the 'Compras' website." },
        { es: "Desarrollo de la nueva versión del proyecto “Envío de Notificaciones”.", en: "Development of the new version of the 'Notification Sending' project." },
        { es: "Actualización y creación de módulos para “Tesis”.", en: "Updating and creating modules for 'Tesis'." },
        { es: "Implementación de funcionalidades en “Cocurriculares”.", en: "Implementation of features in 'Cocurriculares'." },
        { es: "Creación de opciones y correcciones en “Gestión Académica”.", en: "Creation of options and corrections in 'Academic Management'." }
      ]
    }
  ],
  education: [
    {
      degree: { es: "Ingeniería de Software", en: "Software Engineering" },
      institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      period: "Marzo 2022 – Presente",
    },
    {
      degree: { es: "Inglés como lengua extranjera", en: "English as a foreign language" },
      institution: "Instituto Cultural Peruano Norteamericano (ICPNA)",
      period: "Enero 2011 – Febrero 2022",
      description: { es: "Programa completo niños + adultos (Básico, Intermedio, Avanzado)", en: "Complete program for children + adults (Basic, Intermediate, Advanced)"},
    }
  ],
  certifications: [
    { name: "Microsoft Office Proficient Specialist", issuer: "Cibertec", year: "2017" },
    { name: "Excel Proficient Specialist", issuer: "Cibertec", year: "2017" },
    { name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy", year: "2023" },
    { name: "Python for Everybody", issuer: "University of Michigan", year: "2023" },
    { name: "Introduction to MongoDB", issuer: "MongoDB", year: "2023" },
    { name: "Google UX Design", issuer: "Google", year: "2023" },
    { name: "Machine Learning with TensorFlow on Google Cloud", issuer: "Google", year: "2024" },
    { name: "Ciberseguridad e IoT", issuer: "Universidad de los Andes", year: "2024" },
    { name: "IBM Cybersecurity Analyst", issuer: "IBM", year: "2024" },
    { name: "Databases for Data Scientists", issuer: "University of Colorado Boulder", year: "2025" },
    { name: "Inteligencia Artificial y Desarrollo de Software", issuer: "Universidad de los Andes", year: "2025" },
    { name: "Building LLM Applications with Prompt Engineering", issuer: "NVIDIA", year: "2025" }
  ],
  languages: [
    { lang: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { lang: { es: "Inglés", en: "English" }, level: { es: "Intermedio-Alto (B2)", en: "Upper-Intermediate (B2)" } }
  ],
  skills: {
    technical: [
      {
          category: { es: "Lenguajes y Frameworks", en: "Languages & Frameworks" },
          list: ["C#", "Vue.js", "PrimeVue", "MySQL", "Java", "Kotlin", "Flutter", "Swift", "PHP", "Laravel", "Python", "C++", "TypeScript", "JavaScript", "HTML", "CSS", "Angular"]
      },
      {
          category: { es: "Bases de Datos", en: "Databases" },
          list: ["Microsoft SQL Server", "MongoDB"]
      },
      {
          category: { es: "Herramientas y Otros", en: "Tools & Others" },
          list: ["Power BI", "Kissflow", "GIT", "Office", "UI Path", "RPA"]
      }
    ],
    soft: [
      { es: "Liderazgo", en: "Leadership" },
      { es: "Trabajo en equipo", en: "Teamwork" },
      { es: "Aprendizaje rápido", en: "Quick Learning" },
      { es: "Trabajo bajo presión", en: "Work under pressure" },
      { es: "Ética profesional", en: "Professional Ethics" },
      { es: "Empatía", en: "Empathy" },
      { es: "Solidaridad", en: "Solidarity" },
      { es: "Pensamiento crítico", en: "Critical Thinking" },
      { es: "Sociabilidad", en: "Sociability" },
      { es: "Resolución de problemas", en: "Problem Solving" },
      { es: "Comunicación efectiva", en: "Effective Communication" }
    ]
  }
};

export type PortfolioData = typeof portfolioData;
