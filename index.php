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

				<a class="button" target="_blank" v-bind:href="result.trailer">Search for trailers</a>

			</div>

			<div id="filter" v-bind:class="{'result': result}">

				<div id="options">

					<div class="component">

						<h3>Genres<span v-on:click="options.genres = ! options.genres" v-bind:class="{'active': options.genres}">Show options</span></h3>

						<ol v-show="options.genres" transition="slide">
							<li v-for="(index, genre) in genres" v-on:click="filterGenre(index)">
								<div v-bind:class="{'active': activeGenre(index)}" class="check"></div>
								<p>{{ genre }}</p>
							</li>
						</ol>

					</div>

					<div class="component">

						<h3>Years<span v-on:click="options.years = ! options.years" v-bind:class="{'active': options.years}">Show options</span></h3>

						<ol v-show="options.years" transition="slide">
							<li v-for="(index, year) in years" v-on:click="filterYear(index)">
								<div v-bind:class="{'active': activeYear(index)}" class="check"></div>
								<p>&#700;{{ year }}</p>
							</li>
						</ol>

					</div>

					<div class="component">

						<h3>Other<span v-on:click="options.other = ! options.other" v-bind:class="{'active': options.other}">Show options</span></h3>

						<ol v-show="options.other" transition="slide">
							<li>
								<div v-bind:class="{'active': activeGenre(index)}" class="check"></div>
								<p>Include lesser known movies</p>
							</li>
							<li>

						</li>
							<div v-bind:class="{'active': activeGenre(index)}" class="check"></div>
							<p>Include bad movies</p>
						</li>
					</ol>

				</div>

				<a class="button" v-on:click="recommend()">Recommend</a>
				
			</div>

		</div>

		<script type="text/javascript" src="node_modules/vue/dist/vue.js"></script>
		<script type="text/javascript" src="node_modules/vue-resource/dist/vue-resource.js"></script>
		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
