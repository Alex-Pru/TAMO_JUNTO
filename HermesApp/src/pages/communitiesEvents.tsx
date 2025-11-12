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
import { apiGetCommunityEvents, apiCreateEvent } from "../api/eventApi";
import EventCard from "../components/EventCard";

export default function CommunityEvents({
  communityIdProp,
}: {
  communityIdProp?: string;
}) {
  const communityId =
    communityIdProp ||
    new URLSearchParams(location.search).get("communityId") ||
    "";
  const [events, setEvents] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const load = async () => {
    try {
      const res = await apiGetCommunityEvents(communityId);
      setEvents(res.events || res.data || res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (communityId) load();
  }, [communityId]);

  const create = async () => {
    try {
      await apiCreateEvent({
        community_id: communityId,
        title,
        date_time_start: date,
      });
      setTitle("");
      setDate("");
      load();
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Eventos da Comunidade</h2>
        <IonList>
          {events.map((e) => (
            <EventCard
              key={e.id}
              event={e}
              onApply={() => {
                /* optional */
              }}
            />
          ))}
        </IonList>

        <h3>Criar Evento</h3>
        <IonItem>
          <IonLabel position="floating">Título</IonLabel>
          <IonInput
            value={title}
            onIonChange={(e) => setTitle(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Data/Hora</IonLabel>
          <IonInput
            value={date}
            onIonChange={(e) => setDate(e.detail.value!)}
          />
        </IonItem>
        <IonButton onClick={create}>Criar Evento</IonButton>
      </IonContent>
    </IonPage>
  );
}
