module.exports = function ()
{
	'use strict';

	var config =
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
	};

	return config;
};