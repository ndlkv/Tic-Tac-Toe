			/*
			Si jugador es = 0 es turno de O. -- If player(jugador) is = 0,turn O. 
			Si jugador es = 1 es turno de X. -- If player(jugador) is = 1,turn X. 
			Si jugador es = 2 es empate. 	 -- If player(jugador) is = 2,Draw.
			Si jugador es = 3 el juego termino. -- If player(jugador) is = 3,game end.
			*/
			var jugador = 1;

			var imageX = 'url("img/x.png")';
			var imageO = 'url("img/o.png")';

			//Estas variables indican el numero de victorias de cada jugador.
			//The variables indicate the number of wins for each player.
			var ganadas1 = 0;
			var ganadas2 = 0;
			var empates = 0;

			//El contador sirve para determinar el empate. Si al final = 9 es empate.
			//The counter(contador) is used to determine the draw. If = 9 is a draw.
			var contador = 0;

			function pintarTabla(tdid)
			{
				var identificadorTD = document.getElementById(tdid);
				if (jugador === 1 && identificadorTD.style.backgroundImage === "" && jugador != 3)
					{
						//Pintamos X
						identificadorTD.style.backgroundImage = imageX;
						identificadorTD.style.backgroundRepeat = "no-repeat";
						identificadorTD.style.backgroundPosition = "center";
						//Restamos 1 a jugador para que sea turno de O
						//Subtract 1 to player to be "O" turn
						jugador = jugador - 1;
						contador = contador + 1;
						ganador();
					}else if(jugador === 0 && identificadorTD.style.backgroundImage === "" && jugador != 3)
					{
						//Pintamos O
						identificadorTD.style.backgroundImage = imageO;
						identificadorTD.style.backgroundRepeat = "no-repeat";
						identificadorTD.style.backgroundPosition = "center";
						//Sumamos 1 a jugador para que sea turno de X
						//We add 1 to player to be "X" turn
						jugador = jugador + 1;
						contador = contador + 1;
						ganador();
					}
			}

			var gana = document.getElementById('gana');

			function ganador()
			{
				var td1 = document.getElementById('td1');
				var td1Fondo = td1.style.backgroundImage;

				var td2 = document.getElementById('td2');
				var td2Fondo = td2.style.backgroundImage;

				var td3 = document.getElementById('td3');
				var td3Fondo = td3.style.backgroundImage;

				var td4 = document.getElementById('td4');
				var td4Fondo = td4.style.backgroundImage;

				var td5 = document.getElementById('td5');
				var td5Fondo = td5.style.backgroundImage;

				var td6 = document.getElementById('td6');
				var td6Fondo = td6.style.backgroundImage;

				var td7 = document.getElementById('td7');
				var td7Fondo = td7.style.backgroundImage;

				var td8 = document.getElementById('td8');
				var td8Fondo = td8.style.backgroundImage;

				var td9 = document.getElementById('td9');
				var td9Fondo = td9.style.backgroundImage;

				// GANAN LAS "X" y se establece un nuevo valor a la variable Jugador(3) para que no se pueda hacer click.
				// "X" WIN and a new value of the variable Player(jugador) is 3 so you can not click.
				if (td1Fondo == imageX && td2Fondo == imageX && td3Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";

				}
				else if (td4Fondo == imageX && td5Fondo == imageX && td6Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";
				}
				else if (td7Fondo == imageX && td8Fondo == imageX && td9Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";
				}
				else if (td1Fondo == imageX && td4Fondo == imageX && td7Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";
				}
				else if (td2Fondo == imageX && td5Fondo == imageX && td8Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";
				}
				else if (td3Fondo == imageX && td6Fondo == imageX && td9Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";
				}
				else if (td1Fondo == imageX && td5Fondo == imageX && td9Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";
				}
				else if (td3Fondo == imageX && td5Fondo == imageX && td7Fondo == imageX)
				{
					ganadas1 = ganadas1 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 1</h1>";
				}

				// GANAN LAS "O" y se establece un nuevo valor a la variable Jugador(3) para que no se pueda hacer click.
				// "O" WIN and a new value of the variable Player(jugador) is 3 so you can not click.
				else if (td1Fondo == imageO && td2Fondo == imageO && td3Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				else if (td4Fondo == imageO && td5Fondo == imageO && td6Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				else if (td7Fondo == imageO && td8Fondo == imageO && td9Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				else if (td1Fondo == imageO && td4Fondo == imageO && td7Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				else if (td2Fondo == imageO && td5Fondo == imageO && td8Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				else if (td3Fondo == imageO && td6Fondo == imageO && td9Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				else if (td1Fondo == imageO && td5Fondo == imageO && td9Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				else if (td3Fondo == imageO && td5Fondo == imageO && td7Fondo == imageO)
				{
					ganadas2 = ganadas2 + 1;
					jugador = 3;
					gana.innerHTML = "<h1>Gana el jugador 2</h1>";
				}
				// Si el contador vale 9 es empate.
				// If the counter(contador) = 9, draw.
				else if(contador == 9){
					jugador = 2;
					empates = empates + 1;
					gana.innerHTML = "<h1>EMPATE</h1>";
				}

			// Se muestran las victorias de cada jugador
			// Showing each player wins.
			var jug1 = document.getElementById('ganadas1');
			jug1.innerHTML = ganadas1;
			var jug2 = document.getElementById('ganadas2');
			jug2.innerHTML = ganadas2;
			var emp = document.getElementById('empates');
			emp.innerHTML = empates;
			}
			// Al pulsar el boton "Jugar de nuevo" se vacia la tabla.
			// Clearing the table
			function vaciarTabla()
			{

				var td1 = document.getElementById('td1');
				var td1Fondo = td1.style.backgroundImage = "";

				var td2 = document.getElementById('td2');
				var td2Fondo = td2.style.backgroundImage = "";

				var td3 = document.getElementById('td3');
				var td3Fondo = td3.style.backgroundImage = "";

				var td4 = document.getElementById('td4');
				var td4Fondo = td4.style.backgroundImage = "";

				var td5 = document.getElementById('td5');
				var td5Fondo = td5.style.backgroundImage = "";

				var td6 = document.getElementById('td6');
				var td6Fondo = td6.style.backgroundImage = "";

				var td7 = document.getElementById('td7');
				var td7Fondo = td7.style.backgroundImage = "";

				var td8 = document.getElementById('td8');
				var td8Fondo = td8.style.backgroundImage = "";

				var td9 = document.getElementById('td9');
				var td9Fondo = td9.style.backgroundImage = "";
				gana.innerHTML = "";
				jugador = 1;
				contador = 0;
			}