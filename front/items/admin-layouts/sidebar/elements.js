onetype.AddonReady('admin.layouts', (layouts) =>
{
    layouts.Item({
        id: 'developer-elements-sidebar',
        isActive: true,
        condition: { app: ['developer'], mode: ['elements'] },
        zone: 'root',
        slot: 'left',
        render: function()
        {
            this.developerElement = this.developerElement ? this.developerElement : null;
            this.developerElementTab = this.developerElementTab ? this.developerElementTab : 'preview';

            this.Compute(() =>
            {
                this.tree = developer.Fn('elements.list').map((group) => ({
                    label: group.category,
                    items: group.items.map((item) => ({ icon: item.icon, label: item.name, value: item.id }))
                }));
            });

            this.pick = ({ value }) =>
            {
                value.value && $ot.admin.screens.open('developer.element', { id: value.value });
            };

            return `<e-admin-navigation-sidebar title="Elements" :search="true" :items="tree" :active="developerElement ? developerElement.Get('id') : ''" :_click="pick"></e-admin-navigation-sidebar>`;
        }
    });
});
