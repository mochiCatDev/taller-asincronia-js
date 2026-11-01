// Verificación de Edad para Suscripción

function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");
            } else {
                reject(
                    "Acceso denegado. Registro permitido solo para mayores de edad",
                );
            }
        }, 1000);
    });
}

// Caso exitoso
verificarEdad(25).then((mensaje) => console.log(mensaje)).catch((error) =>
    console.log(error)
);

// Caso fallido
verificarEdad(15).then((mensaje) => console.log(mensaje)).catch((error) =>
    console.log(error)
);
