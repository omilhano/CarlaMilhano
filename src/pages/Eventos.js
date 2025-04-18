import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Adjust path if needed
import { collection, getDocs } from "firebase/firestore";
import { Container } from "react-bootstrap";

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
                <ul>
                    {eventos.map((evento) => (
                        <li key={evento.id}>
                            <h4>{evento.Name}</h4>
                            <p>{evento.descrição}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No eventos found.</p>
            )}
        </Container>
    );
};

export default Eventos;
