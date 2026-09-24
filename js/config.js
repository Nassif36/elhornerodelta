const SITE_CONFIG = Object.freeze({
  siteUrl: "",
  restaurantName: "El Hornero",
  location: "Arroyo Abra Vieja, Tres Bocas, Tigre Delta, Buenos Aires",
  whatsappNumber: "5491168936322",
  instagramUrl: "",
  googleMapsUrl: "https://www.google.com/maps/place/el+hornero+delta/data=!4m2!3m1!1s0x95bca71bd646fa97:0x4a98c4b3dfbd502d?sa=X&ved=1t:242&ictx=111",
  travelMaps: Object.freeze({
    riverStation: "https://www.google.com/maps/place/Boleter%C3%ADa+estaci%C3%B3n+fluvial+%7C+Interisle%C3%B1a/@-34.4215459,-58.579745,19z/data=!4m10!1m2!2m1!1sestacion+fluvial+tigre!3m6!1s0x95bca5bda93377e9:0x3350b0b8dc2d96e3!8m2!3d-34.4215669!4d-58.5797209!15sChZlc3RhY2lvbiBmbHV2aWFsIHRpZ3JlWhgiFmVzdGFjaW9uIGZsdXZpYWwgdGlncmWSAQ10aWNrZXRfb2ZmaWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5UVVJKYVRSSVMwcG5FQUXgAQD6AQQIABAv!16s%2Fg%2F11bx453zw0?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
    mitreStation: "https://www.google.com/maps/place/Tigre/@-34.42371,-58.5822145,19.29z/data=!4m10!1m2!2m1!1sestacion+fluvial+tigre!3m6!1s0x95bca5bc93522561:0x5cceeff0ea6236fb!8m2!3d-34.4234521!4d-58.5818435!15sChZlc3RhY2lvbiBmbHV2aWFsIHRpZ3JlWhgiFmVzdGFjaW9uIGZsdXZpYWwgdGlncmWSAQ10cmFpbl9zdGF0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJsTVhSVUxWQjNFQUXgAQD6AQUIkQEQOQ!16s%2Fg%2F121_c2v8?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D",
    coastStation: "https://www.google.com/maps/place/Delta/@-34.419866,-58.5787247,17.5z/data=!4m9!1m2!2m1!1sestacion+fluvial+tigre!3m5!1s0x95bca595fc4dbbef:0x19772abf8829937c!8m2!3d-34.41863!4d-58.57666!16s%2Fg%2F122dlctm?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
  }),
  defaultLanguage: "es",
  supportedLanguages: ["es", "en", "pt"],
  menu: [
    {
      name: { es: "Entradas", en: "Starters", pt: "Entradas" },
      items: [
        {
          name: { es: "Empanadas", en: "Empanadas", pt: "Empanadas" },
          description: { es: "Una entrada clásica para compartir.", en: "A classic starter to share.", pt: "Uma entrada clássica para compartilhar." }
        },
        {
          name: { es: "Provoleta", en: "Grilled provolone", pt: "Provoleta" },
          description: { es: "Queso provolone servido caliente.", en: "Provolone cheese served hot.", pt: "Queijo provolone servido quente." }
        },
        {
          name: { es: "Papas fritas", en: "French fries", pt: "Batatas fritas" },
          description: { es: "Porción para acompañar o compartir.", en: "A side to accompany or share.", pt: "Porção para acompanhar ou compartilhar." }
        }
      ]
    },
    {
      name: { es: "Principales", en: "Main courses", pt: "Pratos principais" },
      items: [
        {
          name: { es: "Milanesa con guarnición", en: "Milanesa with a side", pt: "Milanesa com acompanhamento" },
          description: { es: "Un clásico argentino con guarnición a elección.", en: "An Argentine classic with your choice of side.", pt: "Um clássico argentino com acompanhamento à escolha." }
        },
        {
          name: { es: "Fideos", en: "Pasta", pt: "Massas" },
          description: { es: "Pasta con salsa a elección.", en: "Pasta with your choice of sauce.", pt: "Massa com molho à escolha." }
        },
        {
          name: { es: "Ravioles", en: "Ravioli", pt: "Ravióli" },
          description: { es: "Pasta rellena con salsa a elección.", en: "Filled pasta with your choice of sauce.", pt: "Massa recheada com molho à escolha." }
        },
        {
          name: { es: "Sánguche completo", en: "Loaded sandwich", pt: "Sanduíche completo" },
          description: { es: "Preparado al momento y acompañado con papas.", en: "Made to order and served with fries.", pt: "Preparado na hora e servido com batatas." }
        },
        {
          name: { es: "Hamburguesa completa", en: "Loaded burger", pt: "Hambúrguer completo" },
          description: { es: "Hamburguesa con acompañamiento.", en: "Burger served with a side.", pt: "Hambúrguer servido com acompanhamento." }
        },
        {
          name: { es: "Ensalada", en: "Salad", pt: "Salada" },
          description: { es: "Una opción fresca y simple.", en: "A fresh and simple option.", pt: "Uma opção fresca e simples." }
        }
      ]
    },
    {
      name: { es: "Postres", en: "Desserts", pt: "Sobremesas" },
      items: [
        {
          name: { es: "Flan con dulce de leche", en: "Flan with dulce de leche", pt: "Pudim com doce de leite" },
          description: { es: "Flan clásico con dulce de leche.", en: "Classic flan with dulce de leche.", pt: "Pudim clássico com doce de leite." }
        },
        {
          name: { es: "Panqueque con dulce de leche", en: "Dulce de leche pancake", pt: "Panqueca com doce de leite" },
          description: { es: "Panqueque tibio relleno de dulce de leche.", en: "Warm pancake filled with dulce de leche.", pt: "Panqueca quente recheada com doce de leite." }
        },
        {
          name: { es: "Helado", en: "Ice cream", pt: "Sorvete" },
          description: { es: "Selección de sabores.", en: "A selection of flavours.", pt: "Seleção de sabores." }
        }
      ]
    },
    {
      name: { es: "Bebidas", en: "Drinks", pt: "Bebidas" },
      items: [
        { name: { es: "Agua", en: "Water", pt: "Água" } },
        { name: { es: "Gaseosa", en: "Soft drink", pt: "Refrigerante" } },
        { name: { es: "Limonada", en: "Lemonade", pt: "Limonada" } },
        { name: { es: "Cerveza", en: "Beer", pt: "Cerveja" } },
        { name: { es: "Vino", en: "Wine", pt: "Vinho" } },
        { name: { es: "Café", en: "Coffee", pt: "Café" } }
      ]
    }
  ]
});
