---
title: Como añadir un dominio a Vercel
date: 06 Dic 2020
description: Vamos a aprender como añadir un dominio a nuestra aplicación en Vercel.
tags:
  - web
img: https://res.cloudinary.com/dt0zd5vvj/image/upload/v1620340617/vercel_hixzr7.png
---

Recientemente tuve que cambiar el dominio de mi página web porque el anterior, que era gratuito gracias al programa de [Github Education](https://education.github.com/) , expiró. Además ya que iba a cambiar, también decidí probar [Vercel](https://vercel.com/).

Añadir un dominio es algo que he hecho algunas otras veces, pero parece que cada vez que lo intento tengo que volver a buscar como se hacía. Como esto es un blog, decidí documentar el proceso de añadir un dominio con la esperanza de que pueda ser útil a otros.

## Configurar Vercel

<strong> 1) </strong> Inicia sesión en tu cuenta de Vercel y ve a la pestaña de `Domains`. Aquí verás diferentes opciones, entre ellas comprar, añadir o transferir un
dominio. Pulsa la opción `Add`.

![AddDomain](https://res.cloudinary.com/dt0zd5vvj/image/upload/v1607283396/vercel1_tr9cd6.png)

<strong> 2) </strong> Al pulsar se abrirá un modal y te preguntará en que proyecto quieres añadir el dominio. Después de seleccionarlo te permitirá continuar.

![modal](https://res.cloudinary.com/dt0zd5vvj/image/upload/v1607283396/vercel2_gmzpip.png)

<strong> 3) </strong> A continuación se abrirá un segundo modal y nos pedirá que introduzcamos el nombre de nuestro dominio. Cuando lo hayamos hecho, se nos redirigirá
a la pestaña de dominios de nuestro proyecto. Ahora, tenemos que pulsar en la pestaña `Nameservers` y obtendremos algo así.

![nameservers](https://res.cloudinary.com/dt0zd5vvj/image/upload/v1607284312/vercel3_u6cnnk.png)

## Configurar Namecheap

Ahora que ya hemos configurado Vercel tenemos que configurar nuestro gestor de dominios, en mi caso usaré Namecheap, aunque supongo que
los demás serán muy parecidos en procedimiento.

<strong> 1) </strong> Una vez que estés logeado en tu cuenta accede a tu lista de dominios. Busca el que quieres añadir a tu aplicación y selecciona la opción `Manage`.

![namecheapDomains](https://res.cloudinary.com/dt0zd5vvj/image/upload/v1607285046/namecheap1_ifupcb.png)

<strong> 2) </strong> El último paso es localizar la sección nameservers y seleccionar la opción `Custom DNS`. Ahí hay que añadir los nameservers que nos proporcionó
anteriormente Vercel.

![addNameServers](https://res.cloudinary.com/dt0zd5vvj/image/upload/v1607285256/namecheap2_ozhj19.png)

<br/>

## Conclusión

Como se ha podido comprobar, añadir un dominio a nuestro proyecto de Vercel es una tarea realmente sencilla.
Espero que esta pequeña guía haya sido de utilidad.
