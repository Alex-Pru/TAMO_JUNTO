import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import { Event } from "../api/eventApi";

type Props = { event: Event; onApply?: () => void; onDelete?: () => void };

const EventCard: React.FC<Props> = ({ event, onApply, onDelete }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{event.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{event.description}</p>
        <p>{event.location}</p>
        <p>{event.date_time_start}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {onApply && <IonButton onClick={onApply}>Inscrever</IonButton>}
          {onDelete && (
            <IonButton color="danger" onClick={onDelete}>
              Excluir
            </IonButton>
          )}
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default EventCard;
