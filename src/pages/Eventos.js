import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Adjust path if needed
import { collection, getDocs } from "firebase/firestore";
import { Container, ListGroup } from "react-bootstrap";

const Eventos = () => {
    const [eventos, setEventos] = useState([]);

    const fetchEventos = async () => {
        try {
            const eventosCollection = collection(db, "eventos");
            const snapshot = await getDocs(eventosCollection);
            const eventosList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setEventos(eventosList);
        } catch (error) {
            console.error("Error fetching eventos:", error);
        }
    };

    useEffect(() => {
        fetchEventos();
    }, []);

    return (
        <Container>
            <h3>Eventos</h3>
            {eventos.length > 0 ? (
                <ListGroup>
                    {eventos.map((evento) => (
                        <ListGroup.Item key={evento.id}>
                            <h4>{evento.name}</h4>
                            <p><strong>Description:</strong> {evento.description}</p>
                            <p><strong>Location:</strong> {evento.location}</p>
                            <p><strong>Duration:</strong> {evento.duration} hours</p>
                            <p><strong>Date:</strong> {evento.data}</p>
                            <p><strong>Start Time:</strong> {evento.startTime}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                <p>No eventos found.</p>
            )}
        </Container>
    );
};

export default Eventos;
