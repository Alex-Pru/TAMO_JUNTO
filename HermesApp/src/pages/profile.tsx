import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { apiGetProfile, apiLogout } from "../api/userApi";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await apiGetProfile();
        setUser(res.user || res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  const logout = async () => {
    await apiLogout();
    window.location.href = "/";
  };
  if (!user)
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <p>Carregando...</p>
        </IonContent>
      </IonPage>
    );
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Perfil</h2>
        <img src={user.avatar_url} alt="avatar" width={80} />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <IonButton onClick={logout}>Sair</IonButton>
      </IonContent>
    </IonPage>
  );
}
