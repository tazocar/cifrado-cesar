# Cifrado Cesar

En este proyecto creamos un programa que cifra un mensaje por medio de la sustitución de caracteres.

### Utilidad
+ Cifrar mensajes
+ Descifrar mensajes

### Cifrado
+ Llamar a la función
```
javascript
cipher()
```
+ Pedir mensaje a cifrar
	- **if** está vacío, pedir nuevo mensaje.
	- **if** contiene números, pedir nuevo mensaje.
+ Pasar el mensaje a mayúsculas, *para comparar con códigos ASCII más adelante.*
+ Definir un arr vacío contenedor **textArr** *para contener números codificados*
+ Iterar en el mensaje.
	- **if** el índice es " ", push [" "] a **textArr**
	- Iterar entre los números 65 - 90 *(ASCII de las letras mayúscula)*
	- **if** el número ASCII coincide con el código ASCII de la letra, pasa el número por la fórmula para codificarlo y **push** a **textArr**.
+ Crear Arr vacío **textConvert** *para contener letras*
+ iterar en **textArr**.
	- **if** el índice es igual a [" "], **push** a **textConvert**.
	- si no, convierte el número a letra y **push** a **textConvert**
+ Unir **textConvert** con un **join**.

### Descifrado
+ Llamar a la función
```
javascript
decipher()
```
+ Pedir mensaje a descifrar
	- **if** está vacío, pedir nuevo mensaje.
	- **if** contiene números, pedir nuevo mensaje.
+ Pasar el mensaje a mayúsculas, *para comparar con códigos ASCII más adelante.*
+ Definir un arr vacío contenedor **textEncryptedArr** *para contener números decodificados*
+ Iterar en el mensaje.
	- **if** el índice es " ", push [" "] a **textEncryptedArr**
	- Iterar entre los números 65 - 90 *(ASCII de las letras mayúscula)*
	- **if** el número ASCII coincide con el código ASCII de la letra, pasa el número por la fórmula para decodificarlo y **push** a **textEncryptedArr**.
+ Crear Arr vacío **textDecoded** *para contener letras*
+ iterar en **textEncryptedArr**.
	- **if** el índice es igual a [" "], **push** a **textDecoded**.
	- si no, convierte el número a letra y **push** a **textDecoded**.
+ Unir **textDecoded** con un **join**.
+ Pasar la primera letra a mayúsculas.



#### Fórmulas

```
Cifrar
(numLetraASCII - 65 + 33) % 26 + 65)

Descifrar
(numLetraASCII + 65 - 33) % 26 + 65)

```

#### Diagrama de flujo

+ https://cloud.smartdraw.com/share.aspx/?pubDocShare=6925C53321C8189925274F486D170684619



##### Versión de archivo `0.01`