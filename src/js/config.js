requirejs.config({
    deps: ['main'],
    paths: {
        // Dependencies
        'lodash':           'vendor/lodash.min',

        // Core
        'CAGS':             'core/CAGS',
        'Input':            'core/Input',
        'Renderer':         'core/Renderer',
        'AssetLoader':      'core/AssetLoader',
        'Screen':           'core/Screen',

        // Creatures
        'Creature':         'thing/Creature',
        'Player':           'thing/Player',

        // Items
        'Item':             'items/Item',

        // Actions
        'Action':           'actions/Action',
        'ActionFactory':    'actions/ActionFactory',

        // Art
        'Animation':        'art/Animation',
        'AnimationSet':     'art/AnimationSet',

        // Utils
        'Point':            'utils/Point',
        'Hotspot':          'utils/Hotspot',
        'Direction':        'utils/Direction'
    }
});

