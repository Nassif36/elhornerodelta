const SITE_CONFIG = Object.freeze({
  siteUrl: "",
  restaurantName: "El Hornero",
  location: "Tigre Delta, Tres Bocas, Arroyo Abra Vieja, Buenos Aires",
  whatsappNumber: "5491168936322",
  instagramUrl: "https://www.instagram.com/hornero_delta",
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
          description: {
            es: "Jamón y queso · Pollo · Verdura · Carne cortada a cuchillo · Osobuco braseado con morrón asado y muzzarella",
            en: "Ham and cheese · Chicken · Vegetable · Hand-cut beef · Braised osso buco with roasted pepper and mozzarella",
            pt: "Presunto e queijo · Frango · Vegetais · Carne cortada na faca · Ossobuco braseado com pimentão assado e muçarela"
          }
        },
        {
          name: { es: "Rabas", en: "Calamari", pt: "Lulas empanadas" }
        },
        { name: { es: "Provoleta", en: "Grilled provolone", pt: "Provoleta" } }
      ]
    },
    {
      name: { es: "Platos", en: "Main dishes", pt: "Pratos" },
      items: [
        {
          name: { es: "Milanesa de ternera", en: "Beef milanesa", pt: "Milanesa de carne bovina" },
          description: { es: "Con guarnición.", en: "Served with a side.", pt: "Acompanhada de guarnição." }
        },
        {
          name: { es: "Milanesa de pollo", en: "Chicken milanesa", pt: "Milanesa de frango" },
          description: { es: "Con guarnición.", en: "Served with a side.", pt: "Acompanhada de guarnição." }
        },
        {
          name: { es: "Milanesa napolitana", en: "Neapolitan-style milanesa", pt: "Milanesa à napolitana" },
          description: { es: "Con guarnición.", en: "Served with a side.", pt: "Acompanhada de guarnição." }
        },
        {
          name: { es: "Tortilla de papas", en: "Spanish omelette", pt: "Tortilha de batatas" },
          description: { es: "Con guarnición.", en: "Served with a side.", pt: "Acompanhada de guarnição." }
        },
        {
          name: { es: "Bife de chorizo", en: "Sirloin steak", pt: "Bife de chorizo" },
          description: { es: "Con guarnición.", en: "Served with a side.", pt: "Acompanhado de guarnição." }
        },
        {
          name: { es: "Asado banderita", en: "Thin-cut short ribs", pt: "Costela bovina em tira fina" },
          description: { es: "Con guarnición.", en: "Served with a side.", pt: "Acompanhado de guarnição." }
        },
        {
          name: { es: "Bondiola", en: "Pork shoulder", pt: "Bondiola suína" },
          description: { es: "Con guarnición.", en: "Served with a side.", pt: "Acompanhada de guarnição." }
        }
      ]
    },
    {
      name: { es: "Ensaladas", en: "Salads", pt: "Saladas" },
      items: [
        {
          name: { es: "Caesar", en: "Caesar", pt: "Caesar" },
          description: {
            es: "Lechugas con pollo crocante, croutones, queso parmesano y aderezo.",
            en: "Lettuce with crispy chicken, croutons, Parmesan cheese and dressing.",
            pt: "Alfaces com frango crocante, croutons, queijo parmesão e molho."
          }
        },
        {
          name: { es: "Del Hornero", en: "Del Hornero", pt: "Del Hornero" },
          description: {
            es: "Verdes, zapallo asado, tomates asados, pickles de cebolla y queso azul.",
            en: "Mixed greens, roasted squash, roasted tomatoes, pickled onion and blue cheese.",
            pt: "Folhas verdes, abóbora assada, tomates assados, cebola em conserva e queijo azul."
          }
        },
        {
          name: { es: "Ensalada completa", en: "House salad", pt: "Salada completa" },
          description: {
            es: "Lechuga, tomate, zanahoria, cebolla y huevo.",
            en: "Lettuce, tomato, carrot, onion and egg.",
            pt: "Alface, tomate, cenoura, cebola e ovo."
          }
        }
      ]
    },
    {
      name: { es: "Pastas", en: "Pasta", pt: "Massas" },
      items: [
        {
          name: { es: "Sorrentinos", en: "Sorrentinos", pt: "Sorrentinos" },
          description: {
            es: "Jamón y muzza · Verdura y ricota · Zapallo y muzza",
            en: "Ham and mozzarella · Vegetables and ricotta · Squash and mozzarella",
            pt: "Presunto e muçarela · Vegetais e ricota · Abóbora e muçarela"
          }
        },
        {
          name: { es: "Ravioles", en: "Ravioli", pt: "Ravióli" },
          description: {
            es: "Jamón y muzza · Verdura y ricota · Zapallo y muzza",
            en: "Ham and mozzarella · Vegetables and ricotta · Squash and mozzarella",
            pt: "Presunto e muçarela · Vegetais e ricota · Abóbora e muçarela"
          }
        },
        {
          name: { es: "Ñoquis", en: "Gnocchi", pt: "Nhoque" },
          description: { es: "Zapallo, cabutia o papa.", en: "Squash, kabocha or potato.", pt: "Abóbora, cabotiá ou batata." }
        },
        {
          name: { es: "Canelones", en: "Cannelloni", pt: "Canelones" },
          description: { es: "Verdura o zapallo.", en: "Vegetables or squash.", pt: "Vegetais ou abóbora." }
        }
      ]
    },
    {
      name: { es: "Salsas", en: "Sauces", pt: "Molhos" },
      items: [
        { name: { es: "Filetto", en: "Filetto", pt: "Filetto" } },
        { name: { es: "Bolognesa", en: "Bolognese", pt: "Bolonhesa" } },
        { name: { es: "Crema", en: "Cream", pt: "Creme" } },
        { name: { es: "Rosa", en: "Rosé", pt: "Rosé" } }
      ]
    },
    {
      name: { es: "Pizzas", en: "Pizzas", pt: "Pizzas" },
      items: [
        { name: { es: "Muzzarella", en: "Mozzarella", pt: "Muçarela" } },
        { name: { es: "Napolitana", en: "Neapolitan", pt: "À napolitana" } },
        { name: { es: "Jamón y morrón", en: "Ham and roasted pepper", pt: "Presunto e pimentão" } },
        { name: { es: "Rúcula y parmesano", en: "Rocket and Parmesan", pt: "Rúcula e parmesão" } }
      ]
    },
    {
      name: { es: "Sándwiches (con fritas)", en: "Sandwiches (with fries)", pt: "Sanduíches (com fritas)" },
      items: [
        {
          name: { es: "Lomo", en: "Beef tenderloin sandwich", pt: "Sanduíche de filé" },
          description: {
            es: "Simple · Con lechuga y tomate · Con jamón y queso · Completo",
            en: "Plain · With lettuce and tomato · With ham and cheese · Fully loaded",
            pt: "Simples · Com alface e tomate · Com presunto e queijo · Completo"
          }
        },
        {
          name: { es: "Bondiola", en: "Pork shoulder sandwich", pt: "Sanduíche de bondiola" },
          description: {
            es: "Simple · Con lechuga y tomate · Con jamón y queso · Completo",
            en: "Plain · With lettuce and tomato · With ham and cheese · Fully loaded",
            pt: "Simples · Com alface e tomate · Com presunto e queijo · Completo"
          }
        },
        {
          name: { es: "Hamburguesas", en: "Burgers", pt: "Hambúrgueres" },
          description: {
            es: "Simple · Completa (jamón, queso, lechuga y tomate) · Cheddar, panceta, cebolla caramelizada y barbacoa.",
            en: "Plain · Fully loaded (ham, cheese, lettuce and tomato) · Cheddar, bacon, caramelized onion and barbecue sauce.",
            pt: "Simples · Completa (presunto, queijo, alface e tomate) · Cheddar, bacon, cebola caramelizada e molho barbecue."
          }
        }
      ]
    },
    {
      name: { es: "Pesca del día", en: "Catch of the day", pt: "Pesca do dia" },
      items: [
        {
          name: { es: "Pacú grillado", en: "Grilled pacu", pt: "Pacu grelhado" },
          description: { es: "Con limón y zapallo asado.", en: "With lemon and roasted squash.", pt: "Com limão e abóbora assada." }
        }
      ]
    },
    {
      name: { es: "Meriendas", en: "Afternoon treats", pt: "Lanches da tarde" },
      items: [
        { name: { es: "Tostado de jamón y queso", en: "Toasted ham and cheese sandwich", pt: "Misto quente de presunto e queijo" } },
        { name: { es: "Medialunas", en: "Argentine croissants", pt: "Medialunas argentinas" } },
        { name: { es: "Café expreso / con leche", en: "Espresso / coffee with milk", pt: "Café espresso / com leite" } },
        { name: { es: "Chocolatada", en: "Chocolate milk", pt: "Leite com chocolate" } }
      ]
    }
  ]
});
