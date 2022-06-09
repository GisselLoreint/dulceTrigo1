import React, { useState } from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, TextTarea } from '../../elements/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../elements/form';

const Form = () => {
    const [fecha, cambiarFecha] = useState({ campo: '', valido: null });
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [cantidad, cambiarCantidad] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        cantidad: /^\d{1,5}$/ // 1 a 5 numeros.

    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            nombre.valido === 'true' &&
            fecha.valido === 'true' &&
            cantidad.valido === 'true' &&
            correo.valido === 'true' &&
            telefono.valido === 'true' &&
            terminos
        ) {
            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarFecha({ campo: '', valido: null });
            cambiarCantidad({ campo: '', valido: null });
            cambiarCorreo({ campo: '', valido: null });
            cambiarTelefono({ campo: '', valido: null });

            // ... 
        } else {
            cambiarFormularioValido(false);
        }
    }


    return (
        <main>

            <Formulario action="" onSubmit={onSubmit}>

                <Label>Nombre</Label>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Nombre"
                    name="usuario"
                    leyendaError="El nombre solo puede contener letras y espacios."
                    expresionRegular={expresiones.nombre}
                />
                <Label>Número de contacto</Label>
                <Input
                    estado={telefono}
                    cambiarEstado={cambiarTelefono}
                    tipo="text"
                    label="Número de contacto"
                    name="telefono"
                    leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
                    expresionRegular={expresiones.telefono}
                />
                <Label>Correo electrónico</Label>
                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="email"
                    label="Correo Electrónico"
                    name="correo"
                    leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                    expresionRegular={expresiones.correo}
                />
                <Label>Fecha de entrega</Label>
                <Input
                    estado={fecha}
                    cambiarEstado={cambiarFecha}
                    tipo="date"
                    label="Fecha de entrega"
                    name="fecha"
                    leyendaError="Ingrese la fecha de entrega"
                />
                <Label for="cantidadpersonas">¿Cantidad de personas?</Label>
                <Input
                    estado={cantidad}
                    cambiarEstado={cambiarCantidad}
                    tipo="text"
                    label="¿Cantidad de personas?"
                    name="cantidad"
                    leyendaError="Ingresa la cantidad de personas para el evento"
                    expresionRegular={expresiones.cantidad}
                />
                <Label for="textarea">¿Qué Producto Requiere?</Label>
                <TextTarea name="textarea" rows="5" cols="50"></TextTarea>



                <ContenedorTerminos>
                    <Label>
                        <input
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            checked={terminos}
                            onChange={onChangeTerminos}
                        />
                        Acepto Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>

                {formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                </ContenedorBotonCentrado>

            </Formulario>
        </main>

    );
}



export default Form;