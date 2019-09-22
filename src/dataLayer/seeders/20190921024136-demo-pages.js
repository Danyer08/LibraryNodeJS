'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pages', [
      {
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
        bookId: 1,
        number: 1,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).',
        bookId: 1,
        number: 2,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32\nEl trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.',
        bookId: 1,
        number: 3,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.',
        bookId: 1,
        number: 4,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nunc id mi auctor, ut sollicitudin odio vehicula. Sed tincidunt semper felis, nec ultricies tellus rhoncus id. Pellentesque tristique odio et sem posuere, sed pulvinar orci luctus. Curabitur scelerisque diam a erat lobortis facilisis. Aliquam in nisi ultricies, tincidunt nisi ut, tincidunt orci. Sed id nibh venenatis turpis vehicula rutrum. Donec pharetra viverra ultricies. Fusce in odio imperdiet, pulvinar mauris eget, bibendum turpis.\nCurabitur ex dui, vulputate ac scelerisque et, feugiat quis nisl. Sed facilisis varius purus viverra maximus. Nullam sem diam, elementum eget nibh non, accumsan malesuada arcu. Suspendisse feugiat felis sit amet leo auctor, quis fermentum nisl pharetra. Pellentesque tristique neque sit amet massa consequat tincidunt. Donec libero purus, rhoncus id massa ut, convallis aliquam libero. Pellentesque quis sem ut erat molestie viverra. Donec sed nulla eu diam luctus bibendum vitae eu purus. Maecenas maximus justo tincidunt, lacinia nunc non, mattis orci. Suspendisse eget dui purus. Nam lacinia hendrerit molestie. Proin ultricies diam egestas risus scelerisque consequat. Quisque quis dolor fringilla, porta lectus non, euismod velit. Aliquam tempor eu augue ut efficitur.',
        bookId: 2,
        number: 1,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      },
      {
        description: 'Praesent sagittis dictum nibh eget finibus. Phasellus tincidunt et diam in pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla cursus mollis tellus, in faucibus lorem bibendum eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sit amet nisi sed libero efficitur tempus. Nam quam augue, suscipit egestas tristique sed, tempus nec eros. Nunc magna nisl, maximus sed iaculis in, sollicitudin et est.\nAenean leo ante, volutpat at gravida eu, semper nec nisi. Sed volutpat justo ex, pellentesque venenatis velit tempus eget. Cras eu erat sed ex luctus scelerisque ac sed mauris. Nulla mollis lobortis arcu, sed bibendum sapien mollis vel. Sed ut lectus in dolor ullamcorper auctor. Curabitur ullamcorper rutrum urna non blandit. Quisque eget ligula neque. Duis a turpis tempor quam congue venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ultricies tortor ac ex commodo, sed iaculis purus pharetra. Curabitur a varius est. Nunc id sodales tellus. Pellentesque sapien lectus, auctor non dui eu, tristique semper urna.\nCurabitur ex dui, vulputate ac scelerisque et, feugiat quis nisl. Sed facilisis varius purus viverra maximus. Nullam sem diam, elementum eget nibh non, accumsan malesuada arcu. Suspendisse feugiat felis sit amet leo auctor, quis fermentum nisl pharetra. Pellentesque tristique neque sit amet massa consequat tincidunt. Donec libero purus, rhoncus id massa ut, convallis aliquam libero. Pellentesque quis sem ut erat molestie viverra. Donec sed nulla eu diam luctus bibendum vitae eu purus. Maecenas maximus justo tincidunt, lacinia nunc non, mattis orci. Suspendisse eget dui purus. Nam lacinia hendrerit molestie. Proin ultricies diam egestas risus scelerisque consequat. Quisque quis dolor fringilla, porta lectus non, euismod velit. Aliquam tempor eu augue ut efficitur.',
        bookId: 2,
        number: 2,
        createdAt: '01-01-1500',
        updatedAt: '01-01-1500'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pages', null, {});
  }
};
