onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer.element',
		route: ['/developer/elements/:id', '/developer/elements/:id/:tab'],
		app: 'developer',
		mode: 'elements',
		metadata: { addon: 'developer' },
		data: function()
		{
			return {
				developerElement: elements.ItemGet(this.id),
				developerElementTab: this.tab ? this.tab : 'preview'
			};
		}
	});
});
