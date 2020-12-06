module.exports = () =>
{
	const config =
	{
		trigger:
		{
			options:
			{
				method: 'POST',
				url: 'https://api.github.com/repos/redaxscript/redaxscript-service-sync/actions/workflows/ci.yml/dispatches',
				headers:
				{
					'Accept': 'application/vnd.github.v3+json',
					'Authorization': 'token ' + process.env.TRIGGER_TOKEN,
					'User-Agent': 'redaxscript-service'
				},
				body: JSON.stringify(
				{
					ref: 'master'
				})
			}
		}
	};

	return config;
};
