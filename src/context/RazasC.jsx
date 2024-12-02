// UserContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { getRazas } from '../hooks/GetRazas.jsx'; // Asegúrate de importar tu función getRazas

const RazaContext = createContext([]);

export const useRazaContext = () => {
    return useContext(RazaContext);
};

export const RazasProvider = ({ children }) => {
    const [razas, setRazas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchRazas = async () => {
            try {
                setLoading(true);
                const result = await getRazas();
                setRazas(result.razas);
                setError(result.error || null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // Solo llamar la funcion si las razas no están almacenadas
        if (!razas) {
            fetchRazas();
        } else {
            setLoading(false);
        }
    }, [razas]);

    return (
        <RazaContext.Provider value={{ razas, loading, error }}>
            {children}
        </RazaContext.Provider>
    );
};
