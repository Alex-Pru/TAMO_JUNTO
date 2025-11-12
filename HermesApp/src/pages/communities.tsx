import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
} from "@ionic/react";
import {
  apiListUserCommunities,
  apiCreateCommunity,
} from "../api/communityApi";

export default function Communities() {
  const [communities, setCommunities] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const load = async () => {
    try {
      const res = await apiListUserCommunities();
      setCommunities(
        res.communities || res.communities || res.data || res.items || res
      );
      // backend shape may vary; adjust if necessary
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const create = async () => {
    try {
      await apiCreateCommunity(name, desc);
      setName("");
      setDesc("");
      load();
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Minhas Comunidades</h2>
        <IonList>
          {communities?.map((c: any) => (
            <IonItem key={c.id}>
              <IonLabel>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <h3>Criar Comunidade</h3>
        <IonItem>
          <IonLabel position="floating">Nome</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => setName(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Descrição</IonLabel>
          <IonInput
            value={desc}
            onIonChange={(e) => setDesc(e.detail.value!)}
          />
        </IonItem>
        <IonButton onClick={create}>Criar</IonButton>
      </IonContent>
    </IonPage>
  );
}
