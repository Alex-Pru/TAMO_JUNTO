import { Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { square, triangle } from "ionicons/icons";
import HomebarTab from "./pages/homebarTab";
import ProfileTab from "./pages/profileTab";
import LoginTab from "./pages/loginTab";
import HomeIcon from "./assets/images/navBar/HomeIconSVG.svg";
import PerfilIcon from "./assets/images/navBar/PerfilIconSVG.svg";
import LoginTabCredentials from "./pages/loginTab_2";
import Login from "./pages/login";
import Register from "./pages/register";
import Forgot from "./pages/forgot";
import Communities from "./pages/communities";
import CommunitiesEvents from "./pages/communitiesEvents";
import MyEvents from "./pages/myEvents";
import Connections from "./pages/connections";
import Profile from "./pages/profile";

/* Core CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        {/* 🔹 Tela de Login fora das Tabs */}

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/community-events" element={<CommunitiesEvents />} />
        <Route path="/events/my" element={<MyEvents />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/profile" element={<Profile />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
