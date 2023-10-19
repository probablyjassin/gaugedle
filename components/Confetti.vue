<template>
	<div class="confetti-container">
		<div class="confetti">
			<!-- <div v-for="index in 100">
				<i 
				:style="`
				--speed: ${40};
				 --bg: ${['yellow', 'white', 'green', 'blue', 'red', 'pink',][Math.floor(Math.random() * 6)]}`"
				 :class="
				 ['square', 'pentagram', 'rectangle', 'hexagram', 'dodecagram', 'wavy-line',][Math.floor(Math.random() * 6)]
				 "></i>
			</div> -->
			<!-- Math.floor(Math.random() * (50 - 15 + 1)) + 15 --> 
				<i style="--speed: 10; --bg: yellow" class="square"></i>
			<i style="--speed: 18; --bg: white" class="pentagram"></i>
			<i style="--speed: 29; --bg: green" class="rectangle"></i>
			<i style="--speed: 17; --bg: blue" class="hexagram"></i>
			<i style="--speed: 33; --bg: red" class="pentagram"></i>
			<i style="--speed: 26; --bg: yellow" class="dodecagram"></i>
			<i style="--speed: 24; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 5; --bg: blue" class="wavy-line"></i>
			<i style="--speed: 40; --bg: white" class="square"></i>
			<i style="--speed: 17; --bg: green" class="rectangle"></i>
			<i style="--speed: 25; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 15; --bg: yellow" class="wavy-line"> </i>
			<i style="--speed: 32; --bg: yellow" class="pentagram"></i>
			<i style="--speed: 25; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 37; --bg: yellow" class="dodecagram"></i>
			<i style="--speed: 23; --bg: pink" class="wavy-line"></i>
			<i style="--speed: 37; --bg: red" class="dodecagram"></i>
			<i style="--speed: 37; --bg: pink" class="wavy-line"></i>
			<i style="--speed: 36; --bg: white" class="hexagram"></i>
			<i style="--speed: 32; --bg: green" class="wavy-line"></i>
			<i style="--speed: 32; --bg: yellow" class="pentagram"></i>
			<i style="--speed: 29; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 37; --bg: red" class="dodecagram"></i>
			<i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 30; --bg: pink" class="rectangle"></i>
			<i style="--speed: 30; --bg: red" class="square"></i>
			<i style="--speed: 18; --bg: red" class="pentagram"></i>
			<i style="--speed: 19; --bg: green" class="rectangle"></i>
			<i style="--speed: 16; --bg: blue" class="hexagram"></i>
			<i style="--speed: 23; --bg: red" class="pentagram"></i>
			<i style="--speed: 34; --bg: yellow" class="dodecagram"></i>
			<i style="--speed: 39; --bg: pink" class="wavy-line"></i>
			<i style="--speed: 40; --bg: purple" class="square"></i>
			<i style="--speed: 21; --bg: green" class="rectangle"></i>
			<i style="--speed: 14; --bg: white" class="square"></i>
			<i style="--speed: 38; --bg: green" class="rectangle"></i>
			<i style="--speed: 19; --bg: red" class="dodecagram"></i>
			<i style="--speed: 29; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 21; --bg: white" class="hexagram"></i>
			<i style="--speed: 17; --bg: purple" class="wavy-line"></i>
			<i style="--speed: 32; --bg: yellow" class="pentagram"></i>
			<i style="--speed: 23; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 37; --bg: red" class="dodecagram"></i>
			<i style="--speed: 48; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 38; --bg: pink" class="rectangle"></i>
			<i style="--speed: 13; --bg: red" class="pentagram"></i>
			<i style="--speed: 49; --bg: yellow" class="dodecagram"></i>
			<i style="--speed: 19; --bg: cyan" class="wavy-line"></i>
			<i style="--speed: 15; --bg: steelblue" class="square"></i>
			<i style="--speed: 10; --bg: yellow" class="square"></i>
			<i style="--speed: 18; --bg: white" class="pentagram"></i>
			<i style="--speed: 29; --bg: green" class="rectangle"></i>
			<i style="--speed: 17; --bg: blue" class="hexagram"></i>
			<i style="--speed: 33; --bg: red" class="pentagram"></i>
			<i style="--speed: 26; --bg: yellow" class="dodecagram"></i>
			<i style="--speed: 24; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 5; --bg: white" class="wavy-line"></i>
			<i style="--speed: 40; --bg: purple" class="square"></i>
			<i style="--speed: 17; --bg: green" class="rectangle"></i>
			<i style="--speed: 25; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 15; --bg: cyan" class="wavy-line"> </i>
			<i style="--speed: 32; --bg: yellow" class="pentagram"></i>
			<i style="--speed: 45; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 37; --bg: red" class="dodecagram"></i>
			<i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 37; --bg: red" class="dodecagram"></i>
			<i style="--speed: 37; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 26; --bg: white" class="hexagram"></i>
			<i style="--speed: 32; --bg: cyan" class="wavy-line"></i>
			<i style="--speed: 32; --bg: yellow" class="pentagram"></i>
			<i style="--speed: 45; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 37; --bg: red" class="dodecagram"></i>
			<i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 50; --bg: pink" class="rectangle"></i>
			<i style="--speed: 30; --bg: red" class="square"></i>
			<i style="--speed: 18; --bg: red" class="pentagram"></i>
			<i style="--speed: 19; --bg: green" class="rectangle"></i>
			<i style="--speed: 16; --bg: blue" class="hexagram"></i>
			<i style="--speed: 23; --bg: red" class="pentagram"></i>
			<i style="--speed: 33; --bg: yellow" class="dodecagram"></i>
			<i style="--speed: 39; --bg: white" class="wavy-line"></i>
			<i style="--speed: 40; --bg: orange" class="square"></i>
			<i style="--speed: 21; --bg: green" class="rectangle"></i>
			<i style="--speed: 14; --bg: white" class="square"></i>
			<i style="--speed: 38; --bg: green" class="rectangle"></i>
			<i style="--speed: 19; --bg: red" class="dodecagram"></i>
			<i style="--speed: 29; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 34; --bg: white" class="hexagram"></i>
			<i style="--speed: 17; --bg: indigo" class="wavy-line"></i>
			<i style="--speed: 32; --bg: yellow" class="pentagram"></i>
			<i style="--speed: 23; --bg: white" class="square"></i>
			<i style="--speed: 18; --bg: green" class="rectangle"></i>
			<i style="--speed: 37; --bg: red" class="dodecagram"></i>
			<i style="--speed: 48; --bg: pink" class="wavy-line"> </i>
			<i style="--speed: 38; --bg: pink" class="rectangle"></i>
			<i style="--speed: 13; --bg: red" class="pentagram"></i>
			<i style="--speed: 49; --bg: yellow" class="dodecagram"></i>
			<i style="--speed: 19; --bg: purple" class="wavy-line"></i>
			<i style="--speed: 15; --bg: cyan" class="square"></i>
		</div>
	</div>
</template>

<style scoped>
.confetti .dodecagram {
  background: var(--bg);
  width: 8px;
  height: 8px;
  position: relative;
}

.confetti .dodecagram:before {
  content: "";
  height: 8px;
  width: 8px;
  background: var(--bg);
  transform: rotate(30deg);
  position: absolute;
  top: 0;
  left: 0;
}
	.confetti-container {
		user-select: none;
		pointer-events: none;
		z-index: 10;
	}

	.confetti {
		position: fixed;
		left: 0;
		right: 0;
		display: flex;
	}
	label {
		color: white;
		font-size: 1.5rem;
	}
	input {
		width: 40px;
		height: 40px;
		cursor: pointer;
	}
	:root {
		--bg: yellow;
	}

	html,
	body {
		background-color: #101e35;
		font-size: 10px; /* Makes 1rem = 10px */
	}
	.confetti .square {
		width: 1rem;
		height: 1rem;
		background-color: var(--bg);
		transform: rotate(140deg);
	}
	.confetti .rectangle {
		width: 1rem;
		height: 0.5rem;
		background-color: var(--bg);
	}
	.confetti .hexagram {
		width: 0;
		height: 0;
		border-left: 0.5rem solid transparent;
		border-right: 0.5rem solid transparent;
		border-bottom: 1rem solid var(--bg);
		position: relative;
	}

	.confetti .hexagram:after {
		content: "";
		width: 0;
		height: 0;
		border-left: 0.5rem solid transparent;
		border-right: 0.5rem solid transparent;
		border-top: 1rem solid var(--bg);
		position: absolute;
		top: 0.33rem;
		left: -0.5rem;
	}
	.confetti .pentagram {
		width: 0rem;
		height: 0rem;
		display: block;
		margin: 0.5rem 0;
		border-right: 1rem solid transparent;
		border-bottom: 0.7rem solid var(--bg);
		border-left: 1rem solid transparent;
		transform: rotate(35deg);
		position: relative;
	}
	.confetti .pentagram:before {
		border-bottom: 0.8rem solid var(--bg);
		border-left: 0.3rem solid transparent;
		border-right: 0.3rem solid transparent;
		position: absolute;
		height: 0;
		width: 0;
		top: -0.45rem;
		left: -0.65rem;
		display: block;
		content: "";
		transform: rotate(-35deg);
	}
	.confetti .pentagram:after {
		position: absolute;
		display: block;
		color: var(--bg);
		top: 0.03rem;
		left: -1.05rem;
		width: 0rem;
		height: 0rem;
		border-right: 1rem solid transparent;
		border-bottom: 0.7rem solid var(--bg);
		border-left: 1rem solid transparent;
		transform: rotate(-70deg);
		content: "";
	}
	.confetti .wavy-line {
		position: relative;
	}
	.confetti .wavy-line::after,
	.confetti .wavy-line::before {
		content: "";
		height: 10px;
		width: 80px;
		background-size: 20px 10px;
		position: absolute;
		left: -9rem;
		transform: rotate(90deg);
	}

	.confetti .wavy-line::before {
		background-image: linear-gradient(45deg, transparent, transparent 50%, var(--bg) 50%, transparent 60%);
		top: 1rem;
	}
	.confetti .wavy-line::after {
		background-image: linear-gradient(-45deg, transparent, transparent 50%, var(--bg) 50%, transparent 60%);
	}
	.confetti i {
		width: 3rem;
		height: 3rem;
		margin: 0 0.2rem;
		animation-name: confetti;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-duration: calc(60s / var(--speed));
	}

	.confetti i:nth-child(even) {
		transform: rotate(90deg);
	}

	@keyframes confetti {
		0% {
			transform: translateY(-100vh);
		}

		100% {
			transform: translateY(100vh);
		}
	}
</style>
