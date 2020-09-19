import Fournisseur from "./components/fourniseur/Fournisseur";






const dashboardRoutes = [
  {
    path: "/fournisseur",
    name: "Fournisseur",
    icon: "pe-7s-graph",
    component: Fournisseur,
    layout: "/app"
  },
//   {
//     path: "/kouki",
//     name: "kouki",
//     icon: "pe-7s-graph",
//     component: Kouki,
//     layout: "/admin"
//   },
//   {
//     path: "/Input",
//     name: "input",
//     icon: "pe-7s-graph",
//     component: Inputch,
//     layout: "/admin"
//   },
//   {
//     path: "/user",
//     name: "User Profile",
//     icon: "pe-7s-user",
//     component: UserProfile,
//     layout: "/admin"
//   },
//   {
//   path: "/client",
//     name: "client",
//     icon: "pe-7s-user",
//     component: Client,
//     layout: "/admin"
// }




];

export default dashboardRoutes;
