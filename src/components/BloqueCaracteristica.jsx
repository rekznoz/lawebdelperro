import {useEffect, useRef, useState} from "react";

// Caracteristica con IntersectionObserver

/*

const Caracteristica = ({ titulo, icon, descripcion, delay }) => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            className={`caracteristica ${isVisible ? 'visible' : ''}`}
            ref={ref}
            style={{ transitionDelay: `${delay}s` }} // Aplicar retraso
        >
            <div className="icon">
                <img src={icon} alt={titulo}/>
            </div>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    );
};

 */

// Caracteristica con Scroll

const Caracteristica = ({ titulo, icon, descripcion, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Función que comprueba si el elemento está en el viewport
    const checkVisibility = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            // 80% de visibilidad
            if (rect.top >= 0 && rect.bottom <= window.innerHeight * 0.9) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    // El evento de scroll se ejecuta cada vez que se hace scroll
    useEffect(() => {
        checkVisibility();

        // agregar el listener al evento de scroll
        window.addEventListener('scroll', checkVisibility);

        // Limpiar el evento
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return (
        <div
            className={`caracteristica ${isVisible ? 'visible' : ''}`}
            ref={ref}
            style={{ transitionDelay: `${delay}s` }} // Retraso progresivo
        >
            <div className="icon">
                <img src={icon} alt={titulo} />
            </div>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    );
};

export default Caracteristica;