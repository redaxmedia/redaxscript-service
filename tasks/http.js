module.exports = () =>
{
	const config =
	{
		trigger:
		{
			options:
			{
				method: 'post',
				url: 'https://api.travis-ci.org/repo/redaxscript%2Fredaxscript-service-sync/requests',
				headers:
				{
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Travis-API-Version': 3,
					'Authorization': 'token ' + process.env.TRAVIS_TOKEN
				}
			}
		}
	};

	return config;
};
