let productsTecnology = [
  {
    id: 1,
    name: "Monitor",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Video Juego",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Equipo de sonido",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    name: "MP3",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    name: "USB",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 6,
    name: "Disco Duro",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
  },
  {
    id: 7,
    name: "Radio",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    website: "elvis.io",
  },
  {
    id: 8,
    name: "Portatil",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
  },
  {
    id: 9,
    name: "Audifonos",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
  },
  {
    id: 10,
    name: "Tablet",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "ambrose.net",
  },
];

export function getAllProductsTecnology() {
  return productsTecnology;
}

export function getProductTecnology(id) {
  return productsTecnology.find(
    (ProductTecnology) => ProductTecnology.id === id
  );
}

export function deleteProductTecnology(id) {
  productsTecnology = productsTecnology.filter(
    (ProductTecnology) => ProductTecnology.id !== id
  );
}
