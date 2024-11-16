import {Link, useRouteError} from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <p>{error.stack}</p>
            <p>{error.code}</p>
            <p>{error.status}</p>
            <Link to={'/'}>Volver a inicio</Link>
        </div>
    )
}