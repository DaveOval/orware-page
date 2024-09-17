import React from 'react'

export const Services = () => {
    return (
        <main>
            <header className="servicio-header">
            <h1>Servicios de Mantenimiento de PC</h1>
            <p>Brindamos un servicio completo de mantenimiento de PC, que incluye limpieza de hardware, optimización de software y actualización de equipos para garantizar el mejor rendimiento de tus computadoras.</p>
            </header>

            <section className="beneficios">
            <h2>Beneficios</h2>
            <ul>
                <li>Alarga la vida útil de tus equipos</li>
                <li>Mejora la velocidad y rendimiento</li>
                <li>Previene fallos futuros</li>
            </ul>
            </section>

            <section className="proceso">
            <h2>Proceso de Trabajo</h2>
            <ol>
                <li><strong>Inspección:</strong> Revisamos el estado actual del equipo.</li>
                <li><strong>Diagnóstico:</strong> Identificamos posibles problemas y áreas de mejora.</li>
                <li><strong>Limpieza:</strong> Limpieza completa del hardware y disipadores.</li>
                <li><strong>Optimización:</strong> Mejora del software y actualización de controladores.</li>
                <li><strong>Pruebas Finales:</strong> Verificación del funcionamiento óptimo del equipo.</li>
            </ol>
            </section>

            <section className="cta">
            <h2>¿Necesitas Mantenimiento para tus PCs?</h2>
            <a href="#contacto" className="btn-primary">Solicita tu mantenimiento ahora</a>
            </section>

            <section className="faqs">
            <h2>Preguntas Frecuentes</h2>
            <div className="faq-item">
                <h3>¿Con qué frecuencia debo realizar mantenimiento a mis PCs?</h3>
                <p>Se recomienda realizarlo cada 6 meses para asegurar un rendimiento óptimo.</p>
            </div>
            <div className="faq-item">
                <h3>¿Qué incluye el mantenimiento de PC?</h3>
                <p>Incluye limpieza interna, optimización de software, y actualización de componentes básicos.</p>
            </div>
            </section>
        </main>
    );
}
