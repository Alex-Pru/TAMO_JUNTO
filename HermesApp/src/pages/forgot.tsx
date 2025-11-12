import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { apiForgotPassword } from "../api/userApi";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const send = async () => {
    try {
      await apiForgotPassword(email);
      setMsg("Se o e-mail existir, enviamos instruções.");
    } catch (err: any) {
      setMsg("Erro ao enviar");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Recuperar senha</h2>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>
        <IonButton expand="block" onClick={send}>
          Enviar
        </IonButton>
        {msg && <p>{msg}</p>}
      </IonContent>
    </IonPage>
  );
}
