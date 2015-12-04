<!DOCTYPE html>

<html lang="nl">

	<head>
		<meta charset="utf-8">
		<title>Movie</title>
	</head>

	<body>

		<div id="app">

			<div id="movie">

			</div>

			<div id="filter">
				<ol>
					<li v-for="(index, genre) in genres" v-on:click="filterGenre(index)">{{ genre }}</li>
				</ol>

				<ol>
					<li v-for="year in years" v-on:click="filterYear(year)">&#700;{{ year }}</li>
				</ol>

				<button v-on:click="recommend()">Recommend</button>
			</div>

		</div>

		<script type="text/javascript" src="node_modules/vue/dist/vue.js"></script>
		<script type="text/javascript" src="node_modules/vue-resource/dist/vue-resource.js"></script>
		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
