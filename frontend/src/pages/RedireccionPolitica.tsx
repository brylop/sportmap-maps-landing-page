import { useEffect } from "react";

/**
 * La politica de privacidad vive en UN solo lugar: la aplicacion.
 *
 * Hasta septiembre de 2026 habia tres documentos distintos sobre lo mismo
 * —/privacidad y /tratamiento-datos en este sitio, y /politica-de-privacidad
 * en la app— y ninguno contenia a los otros. El de la app es el que esta
 * estructurado bajo la Ley 1581 (datos sensibles, habeas data, transferencia
 * internacional, notificacion de incidentes), asi que se fusiono todo alli y
 * estas rutas quedan como redireccion.
 *
 * Tener dos politicas publicadas con contenido distinto es un problema legal
 * por si mismo: no queda claro cual gobierna. Si hay que cambiar algo, se
 * cambia en la app, no aca.
 */
const CANONICA = "https://app.sportmaps.co/politica-de-privacidad";

export default function RedireccionPolitica() {
    useEffect(() => {
        window.location.replace(CANONICA);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 text-center">
            <p className="text-sport-text-muted">
                Te estamos llevando a nuestra{" "}
                <a href={CANONICA} className="text-sport-primary underline">
                    Política de Privacidad y Tratamiento de Datos Personales
                </a>
                .
            </p>
        </div>
    );
}
