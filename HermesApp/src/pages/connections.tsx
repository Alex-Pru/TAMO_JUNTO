import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import {
  apiListConnections,
  apiSendConnectionRequest,
} from "../api/connectionApi";

export default function Connections() {
  const [connections, setConnections] = useState<any[]>([]);
  const [target, setTarget] = useState("");
  const load = async () => {
    try {
      const res = await apiListConnections();
      setConnections(res.connections || res.data || res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const send = async () => {
    try {
      await apiSendConnectionRequest(target);
      setTarget("");
      load();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Conexões</h2>
        <IonList>
          {connections.map((c) => (
            <IonItem key={c.id}>
              <IonLabel>{c.connected_user_name || c.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <h3>Solicitar Conexão</h3>
        <IonItem>
          <IonLabel position="floating">User ID</IonLabel>
          <IonInput
            value={target}
            onIonChange={(e) => setTarget(e.detail.value!)}
          />
        </IonItem>
        <IonButton onClick={send}>Solicitar</IonButton>
      </IonContent>
    </IonPage>
  );
}
