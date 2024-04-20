import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login.js';
import Tarefas from './Tarefas.js';
import { auth } from './auth';

function App() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={user ? <Tarefas /> : <Login />} />
                <Route path='/tarefas' element={user ? <Tarefas /> : <Navigate to="/" />} />
                <Route path='*' element={
                    <div>
                        <h1>Erro 404:</h1>
                        <h1>Página não encontrada</h1>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
