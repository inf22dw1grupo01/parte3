import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { EquipaList } from "./EquipaList";
import { PokemonList } from "./PokemonList";
import { TreinadoreList } from "./TreinadorList";
import { TipoList } from "./TipoList";
import { TipoEdit } from "./TipoList";
import { PokemonEdit } from "./PokemonList";
import { TreinadoreEdit } from "./TreinadorList";
import { EquipaEdit } from "./EquipaList";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="equipas" list={EquipaList} edit={EquipaEdit}/>
    <Resource name="pokemon" list={PokemonList} edit={PokemonEdit} />
    <Resource name="tipos" list={TipoList} edit={TipoEdit} />
    <Resource name="treinadores" list={TreinadoreList} edit={TreinadoreEdit}/>
  </Admin>
);
export default App;

