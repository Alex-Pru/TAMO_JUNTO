import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { apiRegister } from "../api/userApi";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handle = async () => {
    try {
      await apiRegister(name, email, password);
      setMsg("Registrado! Você será logado.");
      window.location.href = "/"; // or auto-login
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "Erro");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Cadastro</h2>
        <IonItem>
          <IonLabel position="floating">Nome</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => setName(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Senha</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>
        <IonButton expand="block" onClick={handle}>
          Cadastrar
        </IonButton>
        {msg && <p>{msg}</p>}
      </IonContent>
    </IonPage>
  );
}
