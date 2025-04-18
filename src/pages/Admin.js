import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Firestore imports

const Admin = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [eventData, setEventData] = useState({
        name: '',
        description: '',
        location: '',
        duration: '',
        data: '',
        startTime: '',
    });

    const handleLogin = async () => {
        const auth = getAuth();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogout = () => {
        const auth = getAuth();
        auth.signOut();
        setUser(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmitEvent = async () => {
        const db = getFirestore(); // Get Firestore instance
        try {
            const docRef = await addDoc(collection(db, 'eventos'), {
                name: eventData.name,
                description: eventData.description,
                location: eventData.location,
                duration: eventData.duration,
                data: eventData.data,
                startTime: eventData.startTime,
            });
            console.log('Document written with ID: ', docRef.id);
            // Clear the form after successful submission
            setEventData({
                name: '',
                description: '',
                location: '',
                duration: '',
                data: '',
                startTime: '',
            });
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.displayName}</h1>
                    <img src={user.photoURL} alt={user.displayName} />
                    <button onClick={handleLogout}>Logout</button>

                    <h2>Event Management</h2>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Event Name"
                            value={eventData.name}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="description"
                            placeholder="Event Description"
                            value={eventData.description}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Event Location"
                            value={eventData.location}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="duration"
                            placeholder="Event Duration"
                            value={eventData.duration}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            name="data"
                            value={eventData.data}
                            onChange={handleInputChange}
                        />
                        <input
                            type="time"
                            name="startTime"
                            value={eventData.startTime}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSubmitEvent}>Submit Event</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Admin Page</h1>
                    <p>Welcome to the admin page. Manage your content here.</p>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default Admin;
