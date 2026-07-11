onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer.element',
		route: '/developer/elements/:id',
		app: 'developer',
		mode: 'elements',
		params: { id: 'developer_elements_selected' },
		metadata: { addon: 'developer' }
	});
});
