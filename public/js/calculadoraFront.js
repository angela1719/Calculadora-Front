
window.addEventListener('load', () => {
  let botonClick = '';
  let resultado = 0;
  let operacion = '';
// 1. crear funcion actualizarInput
  const actualizarInput = () => {
    document.querySelector('.input').value = botonClick
  }

//2. crear funcion realizarOperacion: crear const con captura de input,y const numeroActual:convierte en numero decimal los valores del input,condicional con operaciones, actualizar el valor del resultado  del input, resetear variables

let realizarOperacion = () =>{
  const input = document.querySelector('.input');
  const numeroActual = parseFloat(botonClick);

  if(operacion === '+'){
    resultado += numeroActual
  }
  else if(operacion === '-'){
    resultado -= numeroActual
  }
  else if (operacion === '*'){
    resultado *= numeroActual
  }
  else if (operacion === '/'){
    resultado /= numeroActual
  }

  input.value = resultado
  botonClick = ''
  operacion = ''
};

//3. const agregarEventoBoton con dos parametros,capturar selector, adicionar evento al selector que le agregue el valor de cada boton, actualizarInput

const agregarEventoBoton = (selector, valor) =>{
  document.querySelector(selector).addEventListener('click', () => {
    botonClick += valor
    actualizarInput()
  })
};

// 4. aplicar el evento a todos los botones numericos y del .

agregarEventoBoton('.boton0', '0')
agregarEventoBoton('.boton1', '1')
agregarEventoBoton('.boton2', '2')
agregarEventoBoton('.boton3', '3')
agregarEventoBoton('.boton4', '4')
agregarEventoBoton('.boton5', '5')
agregarEventoBoton('.boton6', '6')
agregarEventoBoton('.boton7', '7')
agregarEventoBoton('.boton8', '8')
agregarEventoBoton('.boton9', '9')
agregarEventoBoton('.botonPunto', '.');

 
//5. capturar botonReset,adicionar evento, resetear variables y funciones correspondientes
document.querySelector('.botonReset').addEventListener('click', () => {
  botonClick = '';
  operacion = '';
  resultado = 0;
  actualizarInput();
})

//6. capturar los botones de operaciones, adicionar evento, condicional para cada caso de operacion PISTA recordar que debe ser ==! a vacio

document.querySelector('.botonSuma').addEventListener('click', () => {
  if(botonClick !== ''){
    operacion = '+';
    resultado += parseFloat(botonClick);
    botonClick = ''
  }
});

document.querySelector('.botonResta').addEventListener('click', () => {
  if(botonClick !== ''){
    operacion = '-';
    resultado += parseFloat(botonClick);
    botonClick = ''
  }
});

document.querySelector('.botonMultiplicacion').addEventListener('click', () => {
  if(botonClick !== ''){
    operacion = '*';
    resultado += parseFloat(botonClick);
    botonClick = ''
  }
});

const division = document.querySelector('.botonDivision')
division.addEventListener('click', () => {
  if(botonClick !== ''){
    operacion = '/';
    resultado += parseFloat(botonClick);
    botonClick = ''
  }
});


// 7. capturar botonIgual, agregar evento, condicional ==! '', para realizarOperacion
 const igual = document.querySelector('.botonIgual')
 igual.addEventListener('click', () => {
  if(botonClick !== ''){
    realizarOperacion()
  }
});

});
