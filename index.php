<!DOCTYPE html>

<html lang="nl">

	<head>
		<meta charset="utf-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arimo:400,700">
		<link rel="stylesheet" type="text/css" href="dist/all.min.css">

		<title>Movie</title>
	</head>

	<body>

		<div id="app" v-bind:class="{'result': result}">

			<div v-if="result" id="movie">

				<div class="poster">
					<img v-bind:src="result.poster">
					<h2>{{ result.title }} <span>&nbsp;&bull;&nbsp; {{ result.year }}</span></h2>
				</div>

				<p>{{ result.overview }}</p>

			</div>

			<div id="filter">

				<div id="options">

					<h3>Genres</h3>

					<ol>
						<li v-for="(index, genre) in genres" v-on:click="filterGenre(index)">
							<div v-bind:class="{'active': activeGenre(index)}" class="check"></div>
							<p>{{ genre }}</p>
						</li>
					</ol>

					<h3>Years</h3>

					<ol>
						<li v-for="(index, year) in years" v-on:click="filterYear(index)">
							<div v-bind:class="{'active': activeYear(index)}" class="check"></div>
							<p>&#700;{{ year }}</p>
						</li>
					</ol>
				</div>

				<a id="recommend" v-on:click="recommend()">Recommend</a>
				
			</div>

		</div>

		<script type="text/javascript" src="node_modules/vue/dist/vue.js"></script>
		<script type="text/javascript" src="node_modules/vue-resource/dist/vue-resource.js"></script>
		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
