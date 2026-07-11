onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer.addon',
		route: '/developer/addons/:id',
		app: 'developer',
		mode: 'addons',
		params: { id: 'developer_addons_selected' },
		metadata: { addon: 'developer' }
	});
});
