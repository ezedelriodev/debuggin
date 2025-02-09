 <h1>Apuntes para hacer Debbug</h1>

# **Índice**

- [**Índice**](#índice)
  - [**Breakpoint manual**](#breakpoint-manual)
  - [**Breakpoint condicional**](#breakpoint-condicional)
  - [**Debugger en VSC**](#debugger-en-vsc)
  - [**Step In, Step Over, Step Out**](#step-in-step-over-step-out)
  



## **Breakpoint manual**
- Trabajamos en el archivo donde queremos estudai el comportamiento dentro de la pestaña ``Sources``:

- Ponemos un breackpoint clicando en la línea donde necesitamos saber el valor de la variable en ese momento:  
<img class="max-w-[calc(min(700px,100%))]" src="./assets/manual-debbug.png" width="400" style="margin:0 auto">

Si ahora ejecutamos la aplicación, se queda bloqueado en este brerackpoint:
- Clicamos Paso a la siguiente llamada de función: ``step over next fuction call``  
<img class="max-w-[calc(min(700px,100%))]" src="./assets/first-blocking.png" width="400" style="margin:0 auto">
- De esta manera pasará a la siguiente línea de código a ejecutar y podermos ver el valor de nuestra varable:
  
    <img class="max-w-[calc(min(700px,100%))]" src="./assets/next-step.png" width="400" style="margin:0 auto">

- Podemos ver el valor de la variable de diferentes maneras:
  <img class="max-w-[calc(min(700px,100%))]" src="./assets/view-variable.png" width="400" style="margin:0 auto">  
**[⬆ Volver a índice](#índice)**

---

## **Breakpoint condicional**
Esto es muy útil cuando **``una variable puede tomar numerosos valores``** pero quiero **``parar la aplicació cuando alcanza un valor determinado. `` ** 
  <img class="max-w-[calc(min(700px,100%))]" src="./assets/conditional-breackpoint.png" width="400" style="margin:0 auto">
  - Pulsamos botón derecho sobre el breackpoint y podemos ``dar valor a la variable`` donde queremos que se detenga.
**[⬆ Volver a índice](#índice)**

---

## **Debugger en VSC**
Puedo usar la palabre debugger para implentar un breackpoint:  
```js
function myFunction(param){
    console.log(param);
    for(let i=0; i<10; i++){
        debugger
        console.log(i)
    }
}
```

Y vemos el breackpoint igul que en el caso anterior:
  <img class="max-w-[calc(min(700px,100%))]" src="./assets/vew-debugger.png" width="400" style="margin:0 auto">


**[⬆ Volver a índice](#índice)**

---
## **Step In, Step Over, Step Out**

  <img class="max-w-[calc(min(700px,100%))]" src="./assets/step-over-vs-into.png" width="400" style="margin:0 auto">

Las acciones ``step over`` y ``step into`` en un depurador tienen diferentes propósitos al navegar por el código mientras estás en modo de depuración:

1. **Step Over Next Function Call**
   
- **Qué hace**: Ejecuta completamente la línea de código actual, incluidas las llamadas a funciones, sin entrar en las funciones llamadas.
- **Cuándo usarlo:**
  - Si no necesitas analizar la lógica interna de una función y solo quieres ver qué sucede después de que se ejecute.
  - Útil cuando estás seguro de que la función funciona correctamente y no necesitas verificar su implementación.
- **Comportamiento:** Si tienes este código:

```js
function greet() {
    console.log("Hello");
}

console.log("Start");
greet(); // Step Over no entra a `greet`, simplemente avanza.
console.log("End");
```

Si usas ``step over`` en ``greet()``, el depurador ejecutará toda la función ``greet`` y detendrá la ejecución en ``console.log("End");``.
 
**Diferencia clave**  
- ``Step Over:`` Ejecuta la función completa como una unidad y continúa en la siguiente línea del código que la llamó.
- ``Step Into:`` Entra en la función y te permite depurar línea por línea dentro de ella.
   

**[⬆ Volver a índice](#índice)**


---

Me he quedado en min 9:24
https://www.youtube.com/watch?v=1uPs8bOa_N0

https://es.javascript.info/debugging-chrome