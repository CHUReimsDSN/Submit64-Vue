export type TSidebarEntry = {
  text: string;
  icon?: string;
  link?: string;
  items?: TSidebarEntry[];
  active: boolean;
  collapsed: boolean;
};

export const sidebar: TSidebarEntry[] = [
  {
    "text": "Introduction",
    "icon": "menu_book",
    "link": "/documentation/000_index.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Installation",
    "icon": "download",
    "link": "/documentation/005_install.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Démarage rapide",
    "icon": "electric_bolt",
    "link": "/documentation/010_quick_start.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Configuration",
    "icon": "settings",
    "link": "/documentation/020_configuration.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Props",
    "icon": "input",
    "link": "/documentation/030_props.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Slots",
    "icon": "code",
    "link": "/documentation/030_slots.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Surcharge",
    "link": "/documentation/050_overwrite.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Réference",
    "icon": "anchor",
    "link": "/documentation/060_reference.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Événements",
    "icon": "sensors",
    "link": "/documentation/065_logic_builder.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Interopérabilité",
    "icon": "sync_alt",
    "link": "/documentation/070_interop.md",
    "active": false,
    "collapsed": false
  },
  {
    "text": "Exemples",
    "items": [
      {
        "text": "Utilisation du context",
        "link": "/documentation/exemples/context.md",
        "active": false,
        "collapsed": false
      }
    ],
    "active": false,
    "collapsed": false,
    "icon": "description"
  }
];