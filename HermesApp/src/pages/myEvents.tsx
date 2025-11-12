import React, { useEffect, useState } from "react";
import { IonPage, IonContent, IonList } from "@ionic/react";
import { apiGetUserEvents } from "../api/eventApi";
import EventCard from "../components/EventCard";

export default function MyEvents() {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await apiGetUserEvents();
        setEvents(res.events || res.data || res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Meus Eventos</h2>
        <IonList>
          {events.map((e) => (
            <EventCard key={e.id} event={e} onDelete={() => {}} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
