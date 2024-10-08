import * as fakeLoginService from "./auth/adapters/fakeLogin.js";

const authService = fakeLoginService;
const projectService = {
  async fetchAllProjects() {
    return [
      {
        title: "Abajour Tahina",
        imageUrl: "assets/images/abajour-tahina.png",
      },
      {
        title: "Appartement Paris V",
        imageUrl: "assets/images/appartement-paris-v.png",
      },
      {
        title: "Restaurant Sushisen - Londres",
        imageUrl: "assets/images/restaurant-sushisen-londres.png",
      },
      {
        title: "Villa “La Balisiere” - Port Louis",
        imageUrl: "assets/images/la-balisiere.png",
      },
      {
        title: "Structures Thermopolis",
        imageUrl: "assets/images/structures-thermopolis.png",
      },
      {
        title: "Appartement Paris X",
        imageUrl: "assets/images/appartement-paris-x.png",
      },
      {
        title: "Pavillon “Le coteau” - Cassis",
        imageUrl: "assets/images/le-coteau-cassis.png",
      },
      {
        title: "Villa Ferneze - Isola d’Elba",
        imageUrl: "assets/images/villa-ferneze.png",
      },
    ];
  },
};
const categoryService = {};

export { authService, projectService, categoryService };
