<!DOCTYPE html>

<html lang="nl">

	<head>
		<meta charset="utf-8">
		<title>Movie</title>
	</head>

	<body>

		<div id="app">

			<div v-if="result" id="movie">
				<img v-bind:src="result.poster">

				<h2>{{ result.title }}</h2>
			</div>

			<div id="filter">
				<ol>
					<li v-for="(index, genre) in genres" v-on:click="filterGenre(index)">{{ genre }}</li>
				</ol>

				<ol>
					<li v-for="(index, year) in years" v-on:click="filterYear(index)">&#700;{{ year }}</li>
				</ol>

				<button v-on:click="recommend()">Recommend</button>
			</div>

		</div>

		<script type="text/javascript" src="node_modules/vue/dist/vue.js"></script>
		<script type="text/javascript" src="node_modules/vue-resource/dist/vue-resource.js"></script>
		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
