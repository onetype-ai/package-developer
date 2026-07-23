onetype.AddonReady('admin.screens', (screens) =>
{
    screens.Item({
        id: 'developer.styles',
        route: ['/developer/styles', '/developer/styles/:tab'],
        app: 'developer',
        mode: 'styles',
        isDefault: true,
        metadata: { addon: 'developer' },
        data: function()
        {
            return { developerStylesTab: this.tab ? this.tab : 'variables' };
        }
    });
});
