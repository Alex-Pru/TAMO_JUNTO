import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { apiLogin } from "../api/userApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    try {
      await apiLogin(email, password);
      setMsg("Logado com sucesso — atualize a página.");
      // ideal: redirecionar para dashboard
      window.location.href = "/communities";
    } catch (err: any) {
      console.error(err);
      setMsg(err?.response?.data?.message || "Erro ao logar");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Login</h2>
        <IonItem>
          <IonLabel position="floating">E-mail</IonLabel>
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
        <IonButton expand="block" onClick={handleLogin}>
          Entrar
        </IonButton>
        <div style={{ marginTop: 12 }}>
          <a href="/auth/google">Entrar com Google</a> |{" "}
          <a href="/auth/facebook">Entrar com Facebook</a>
        </div>
        <div style={{ marginTop: 12 }}>
          <a href="/forgot">Esqueci minha senha</a>
        </div>
        {msg && <p>{msg}</p>}
      </IonContent>
    </IonPage>
  );
}
