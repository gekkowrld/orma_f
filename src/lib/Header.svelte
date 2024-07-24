<header>
	<nav>
		<a href="/">Home</a>
		<a href="/signup">Signup</a>
		<a href="/login">Login</a>
	</nav>
</header>

<style>
	/* 
 * Style from:
 * https://codepen.io/EvyatarDa/pen/waKXMd
 */
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
	nav {
		margin: 0 auto;
		padding: 2em 3em;
		text-align: center;
		background: #f44336;
		border-radius: 5px;
	}

	nav a {
		font-family: 'Roboto Slab', serif;
		font-optical-sizing: auto;
		font-style: normal;
		font-size: 21px;
		color: #fff;
		text-decoration: none;
		margin: 0px 10px;
		padding: 10px 10px;
		font-weight: 700;
		position: relative;
		z-index: 0;
		cursor: pointer;
	}

	nav a:before,
	nav a:after {
		position: absolute;
		left: 0px;
		width: 100%;
		height: 2px;
		background: #fff;
		content: '';
		opacity: 0;
		transition: all 0.3s;
	}

	nav a:hover {
		color: yellowgreen;
	}

	nav a:before {
		top: 0px;
		transform: translateY(10px);
	}

	nav a:after {
		bottom: 0px;
		transform: translateY(-10px);
	}

	nav a:hover:before,
	nav a:hover:after {
		opacity: 1;
		transform: translateY(0px);
	}
</style>
