onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer',
		route: '/developer',
		app: 'developer',
		metadata: { addon: 'developer' }
	});

	screens.Item({
		id: 'developer.elements',
		route: ['/developer/elements', '/developer/elements/:id'],
		app: 'developer',
		mode: 'elements',
		params: { id: 'developer_elements_selected' },
		metadata: { addon: 'developer' }
	});

	screens.Item({
		id: 'developer.addons',
		route: ['/developer/addons', '/developer/addons/:id'],
		app: 'developer',
		mode: 'addons',
		params: { id: 'developer_addons_selected' },
		metadata: { addon: 'developer' }
	});

	screens.Item({
		id: 'developer.styles',
		route: '/developer/styles',
		app: 'developer',
		mode: 'styles',
		metadata: { addon: 'developer' }
	});
});
