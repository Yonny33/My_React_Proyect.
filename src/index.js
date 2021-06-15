import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Form from "./Registro";
import Ingreso from "./Ingreso";
import Barra from "./Barra";



ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));

ReactDOM.render(<Ingreso />,

        document.getElementById("Ingreso"));

//Formulario de Registro
ReactDOM.render(<Form formName='Registro Personal' input1='Primer Nombre' input2='Apellido'
        input3='Correo Electrónico' input4='Contraseña' input5='Dirección' input6='Ciudad' 
        input7='Código Postal' buttonName='Guardar'/>,
document.getElementById('Registro'));



//Lista
var listElement1 = React.createElement('li',{id:'item1',class: "List",type:'circle'},'List1');
var listElement2 = React.createElement('li',{id:'item2',class: "List",type:'disc'},'List2');
var listElement3 = React.createElement('li',{id:'item3',class: "List",type:'square'},'List3');
var listElement4 = React.createElement('li',{id:'item4',class: "List",type:'1'},'List4');
var listElement5 = React.createElement('li',{id:'item5',class: "List",type:'a'},'List5');
var listElement6 = React.createElement('li',{id:'item6',class: "List",type:'A'},'List6');

var elements = [listElement1,listElement2,listElement3,
        listElement4,listElement5, listElement6];

var listOfElements = React.createElement('lu','',elements);

ReactDOM.render(listOfElements, document.getElementById('list'));


//Receta
var pan_imagen = React.createElement('img',{src: 'photo.jpg',alt:'Pan',class: 'img_pan'});
var p_ingredientes = React.createElement('p','',
        'A continuación se indican los ingredientes necesario para hacer la receta de pan:');
var ingrediente1 = React.createElement('li',{type: 'circle'},
        <b>15 gr</b>,' levadura fresca');
var ingrediente2 = React.createElement('li',{type: 'circle'},
        <b>1 cda</b>,' azúcar');
var ingrediente3 = React.createElement('li',{type: 'circle'},
        <b>1 cda</b>,' sal');
var ingrediente4 = React.createElement('li',{type: 'circle'},
        <b>3 cdas</b>,' de aceite de oliva');
var ingrediente5 = React.createElement('li',{type: 'circle'},
        <b>300 ml</b>,' agua templada', <i> (1 taza 1/2)</i>);
var ingrediente6 = React.createElement('li',{type: 'circle'},
        <b>500 gr</b>,' harina');

var l_ingredientes = [ingrediente1, ingrediente2, ingrediente3, 
        ingrediente4, ingrediente5, ingrediente6];
var ingredientes = React.createElement('div',
        {class: 'ingredientes'},
        p_ingredientes,
        React.createElement('div',{class: 'l_ingredientes'},
        React.createElement('ul','',l_ingredientes)));

var pasos = <div className='pasos'>
        <p>Ahora que ya tienes los ingredientes medidos 
        y preparados sigue los siguientes pasos para lograr hacer tu pan.</p>
        <div class='l_pasos'>

                <ol>
                        <li>
                        Primero hay que hidratar la levadura. Ponn la levadura 
                        con un poco de agua, el aceite y el azúcar. Revuelve hasta 
                        que este todo disuelto.
                        </li>
                        <li>
                        Incorpora 5 cda. De harina y cuando esté todo integrado 
                        deja reposar aprox 10 minutos. Tapado con repasador.
                        </li>
                        <li>
                        Termina de incorporar La harina junto con la sal y el agua.
                        </li>
                        <li>
                        Amasa durante unos 2 minutos aprox. Y deja reposar unos 30 minutos.
                        </li>
                        <li>
                        Saca el aire amasando un poco más y forma un bollo que debes colocar
                        en la asadera aceitada.
                        </li>
                        <li>
                        Aplica unos cortes y espolvorea con harina.
                        </li>
                        <li>
                        Tapa con un recipiente apto de horno y aceitado. 
                        Esto es para conservar la humedad.
                        </li>
                        <li>
                        Por último lleva al horno recién encendido a 200 grados celsius, 
                        fuego arriba y abajo, durante 45 minutos aprox.
                        </li>
                </ol>
                </div>
                <p>Ya haz hecho tu primer pan, ahora disfrútalo.</p>
        </div>;

ReactDOM.render(pan_imagen,document.getElementById('img_pan'));
ReactDOM.render(<h1 align='center'> Receta de pan, fácil de hacer</h1>,
document.getElementById('titulo'));
ReactDOM.render(ingredientes,document.getElementById('ingredientes'));
ReactDOM.render(pasos, document.getElementById('pasos'));

//Lista Factory
var lista_fac = React.createFactory('li');

var l1 = lista_fac('',
        React.createElement('a',{href:''},'Física'));
var l2 = lista_fac({id: 'selected'},<a href="">Química</a>);
var l3 = lista_fac({},<a href="">Biología</a>);
var l4 = lista_fac({},<a href="">Inglés</a>);
var l5 = lista_fac({},<a href="">Sociales</a>);
var l6 = lista_fac({},<a href="">Historia</a>);
var l7 = lista_fac({},<a href="">Deporte</a>);
var lista =[l1,l2,l3,l4,l5,l6,l7]; 

var header=<header>
        <h1 class="h1">Pestañas con React</h1>
        <nav>
                <ul>
                {lista}
                </ul>
        </nav>
        </header>;

var seccion = React.createElement('section',{id: 'content'},
        <p class="p">Ejemplo de pestañas creadas con elementos estáticos de React y CSS.</p>,
        <p class="p">La química es la ciencia que estudia tanto la composición, como la estructura y las propiedades de la materia como los cambios que esta experimenta durante las reacciones químicas y su relación con la energía.​</p>,
        React.createElement('p','',
        React.createElement('a',{href:''},
        <img src="https://conceptodefinicion.de/wp-content/uploads/2014/07/Qu%C3%ADmica.jpg" alt="Química" class="img"/>)));

ReactDOM.render([header, seccion], document.getElementById('Factory'));

//Barra
ReactDOM.render(<Barra />, document.getElementById("Barra"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
