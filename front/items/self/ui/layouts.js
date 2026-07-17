developer.addons.Item({
	id: 'ui.layouts',
	group: 'ui',
	name: 'Layouts',
	description: 'The workspace panel system: items claim zone slots, follow conditions and share one global data object.',
	content: [
		'## What it does',
		'',
		'Layouts place every panel in the workspace. An item claims a slot — `top`, `left`, `center`, `right` or `bottom` — inside a zone, and the shell renders it while its condition holds.',
		'',
		'## The rules',
		'',
		'- Open, close and toggle work strictly BY ID — group behavior is automatic through `condition`',
		'- Data is GLOBAL: every item declares a `config` schema, all configs merge into one shape, every render receives the whole data object',
		'- Name data keys by addon (`developer_elements_selected`), the namespace is shared',
		'',
		'## Facade',
		'',
		'```js',
		'$ot.ui.layouts.open(\'developer-elements-preview\');',
		'$ot.ui.screens.open(\'developer.element\', { id: \'cards-stat\' });',
		'```'
	].join('\n')
});
