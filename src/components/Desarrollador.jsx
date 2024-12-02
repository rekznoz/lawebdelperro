import {useEffect, useRef, useState} from "react";

export default function Desarrollador({nombre, imagen, descripcion, color}) {

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
                threshold: 0.9,
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
            className={`carta ${color} ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <img src={imagen} alt="Avatar"/>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
        </div>
    )
}