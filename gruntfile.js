module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('package.json').version,
		jsonlint:
		{
			dependency:
			{
				src:
				[
					'composer.json',
					'package.json'
				]
			},
			news:
			{
				src:
				[
					'news/*.json'
				]
			},
			version:
			{
				src:
				[
					'version/*.json'
				]
			}
		},
		xml_validator:
		{
			xml:
			{
				src:
				[
					'xml/*.xml'
				]
			}
		}
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'jsonlint',
		'xml_validator'
	]);
};
