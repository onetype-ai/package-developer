onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer.addon',
		route: '/developer/addons/:id',
		app: 'developer',
		mode: 'addons',
		metadata: { addon: 'developer' },
		data: function()
		{
			return { developerAddon: developer.addons.ItemGet(this.id) };
		}
	});
});
