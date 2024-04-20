import React from "react";
import { auth } from './auth';

function Tarefas() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (err) {
            console.error("Erro ao fazer logout:", err);
        }
    };

    return (
        <div>
            {user && (
                <div>
                    <h2>Dados do Usuário:</h2>
                    <p>Nome: {user.displayName || 'Não fornecido'}</p>
                    <p>Email: {user.email}</p>
                    <p>ID do Usuário: {user.uid}</p>
                    <button className="button" onClick={handleLogout}>Sair</button>
                </div>
            )}
            {!user && (
                <div>
                    <h2>Você não está logado.</h2>
                </div>
            )}
        </div>
    );
}

export default Tarefas;
