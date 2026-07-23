onetype.AddonReady('admin.layouts', (layouts) =>
{
    layouts.Item({
        id: 'developer-elements-preview',
        isActive: true,
        condition: { app: ['developer'], mode: ['elements'] },
        zone: 'root',
        slot: 'center',
        render: function()
        {
            this.developerElement = this.developerElement ? this.developerElement : null;
            this.developerElementTab = this.developerElementTab ? this.developerElementTab : 'preview';

            this.tabs = [
                { id: 'preview', label: 'Preview', icon: 'visibility' },
                { id: 'parameters', label: 'Parameters', icon: 'data_object' },
                { id: 'code', label: 'Code', icon: 'code' }
            ];

            this.pick = ({ value }) =>
            {
                $ot.admin.screens.open('developer.element', { id: this.developerElement.Get('id'), tab: value });
            };

            this.parameters = () =>
            {
                return developer.Fn('elements.parameters', this.developerElement.Get('id'));
            };

            this.snippet = () =>
            {
                return developer.Fn('elements.snippet', this.developerElement.Get('id'));
            };

            return `
                <div class="ot-flex-vertical ot-gap-m ot-container-m ot-py-l">
                    <e-admin-global-heading
                        title="Elements"
                        description="Every element in the library with a live preview, its parameters and ready to paste usage code."
                        element="h2"
                    ></e-admin-global-heading>
                    <div ot-if="developerElement">
                        <e-admin-navigation-tabs tone="contained" :items="tabs" :active="developerElementTab" :_change="pick"></e-admin-navigation-tabs>
                    </div>
                    <div ot-if="!developerElement || developerElementTab === 'preview'" class="ot-flex-1">
                        <e-developer-element :element="developerElement ? developerElement.Get('id') : ''"></e-developer-element>
                    </div>
                    <div ot-if="developerElement && developerElementTab === 'parameters'" class="ot-flex-1 ot-scrollbar">
                        <e-admin-global-parameters :items="parameters()"></e-admin-global-parameters>
                    </div>
                    <div ot-if="developerElement && developerElementTab === 'code'" class="ot-flex-1 ot-scrollbar">
                        <e-admin-global-code :source="snippet()" language="html" filename="usage" :copy="true"></e-admin-global-code>
                    </div>
                </div>
            `;
        }
    });
});
