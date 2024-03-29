export const ariaInHtmlInfo = {
  title: 'ARIA in HTML',
  status: 'W3C Recommendation 09 December 2021',
  reference: 'https://www.w3.org/TR/html-aria/',
  anyRoleAllowed: false,
  noRoleAllowed: false,
  elementInfo: {
    'a[href]': {
      tagName: 'a',
      defaultRole: 'link',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'button',
        'checkbox',
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'option',
        'radio',
        'switch',
        'tab',
        'treeitem'
      ],
      attr1: 'href',
      id: 'a[href]'
    },
    a: {
      tagName: 'a',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'a'
    },
    abbr: {
      tagName: 'abbr',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'abbr'
    },
    address: {
      tagName: 'address',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'address'
    },
    'area[href]': {
      tagName: 'area',
      defaultRole: 'link',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'href',
      id: 'area[href]'
    },
    area: {
      tagName: 'area',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'area'
    },
    article: {
      tagName: 'article',
      defaultRole: 'article',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'application',
        'document',
        'feed',
        'main',
        'none',
        'presentation',
        'region'
      ],
      id: 'article'
    },
    aside: {
      tagName: 'aside',
      defaultRole: 'complementary',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'feed',
        'none',
        'note',
        'presentation',
        'region',
        'search'
      ],
      id: 'aside'
    },
    audio: {
      tagName: 'audio',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'application'
      ],
      id: 'audio'
    },
    b: {
      tagName: 'b',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'b'
    },
    base: {
      tagName: 'base',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'base'
    },
    bdi: {
      tagName: 'bdi',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'bdi'
    },
    bdo: {
      tagName: 'bdo',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'bdo'
    },
    blockquote: {
      tagName: 'blockquote',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'blockquote'
    },
    body: {
      tagName: 'body',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'body'
    },
    br: {
      tagName: 'br',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'presentation',
        'none'
      ],
      id: 'br'
    },
    button: {
      tagName: 'button',
      defaultRole: 'button',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'checkbox',
        'link',
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'option',
        'radio',
        'switch',
        'tab'
      ],
      id: 'button'
    },
    canvas: {
      tagName: 'canvas',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'canvas'
    },
    caption: {
      tagName: 'caption',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'caption'
    },
    cite: {
      tagName: 'cite',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'cite'
    },
    code: {
      tagName: 'code',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'code'
    },
    col: {
      tagName: 'col',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'col'
    },
    colgroup: {
      tagName: 'colgroup',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'colgroup'
    },
    data: {
      tagName: 'data',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'data'
    },
    datalist: {
      tagName: 'datalist',
      defaultRole: 'listbox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'datalist'
    },
    dd: {
      tagName: 'dd',
      defaultRole: 'definition',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'dd'
    },
    del: {
      tagName: 'del',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'del'
    },
    dfn: {
      tagName: 'dfn',
      defaultRole: 'term',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'dfn'
    },
    details: {
      tagName: 'details',
      defaultRole: 'group',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'details'
    },
    dialog: {
      tagName: 'dialog',
      defaultRole: 'dialog',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'alertdialog'
      ],
      id: 'dialog'
    },
    div: {
      tagName: 'div',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'div'
    },
    dl: {
      tagName: 'dl',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'group',
        'list',
        'presentation',
        'none'
      ],
      id: 'dl'
    },
    dt: {
      tagName: 'dt',
      defaultRole: 'term',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'listitem'
      ],
      id: 'dt'
    },
    em: {
      tagName: 'em',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'em'
    },
    embed: {
      tagName: 'embed',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'application',
        'document',
        'img',
        'presentation',
        'none'
      ],
      id: 'embed'
    },
    fieldset: {
      tagName: 'fieldset',
      defaultRole: 'group',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation',
        'radiogroup'
      ],
      id: 'fieldset'
    },
    figcaption: {
      tagName: 'figcaption',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'group',
        'presentation',
        'none'
      ],
      id: 'figcaption'
    },
    'figure[figcaption]': {
      tagName: 'figure',
      defaultRole: 'figure',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      hasFigcaption: true,
      id: 'figure[figcaption]'
    },
    figure: {
      tagName: 'figure',
      defaultRole: 'figure',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'figure'
    },
    'footer[contentinfo]': {
      tagName: 'footer',
      defaultRole: 'contentinfo',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'group',
        'none',
        'presentation'
      ],
      isLandmark: true,
      id: 'footer[contentinfo]'
    },
    footer: {
      tagName: 'footer',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'group',
        'none',
        'presentation'
      ],
      id: 'footer'
    },
    form: {
      tagName: 'form',
      defaultRole: 'form',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'search',
        'none',
        'presentation'
      ],
      id: 'form'
    },
    h1: {
      tagName: 'h1',
      defaultRole: 'heading',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation',
        'tab'
      ],
      id: 'h1'
    },
    h2: {
      tagName: 'h2',
      defaultRole: 'heading',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation',
        'tab'
      ],
      id: 'h2'
    },
    h3: {
      tagName: 'h3',
      defaultRole: 'heading',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation',
        'tab'
      ],
      id: 'h3'
    },
    h4: {
      tagName: 'h4',
      defaultRole: 'heading',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation',
        'tab'
      ],
      id: 'h4'
    },
    h5: {
      tagName: 'h5',
      defaultRole: 'heading',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation',
        'tab'
      ],
      id: 'h5'
    },
    h6: {
      tagName: 'h6',
      defaultRole: 'heading',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation',
        'tab'
      ],
      id: 'h6'
    },
    head: {
      tagName: 'head',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'head'
    },
    'header[banner]': {
      tagName: 'header',
      defaultRole: 'banner',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'group',
        'none',
        'presentation'
      ],
      isLandmark: true,
      id: 'header[banner]'
    },
    header: {
      tagName: 'header',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'group',
        'none',
        'presentation'
      ],
      id: 'header'
    },
    hgroup: {
      tagName: 'hgroup',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'hgroup'
    },
    hr: {
      tagName: 'hr',
      defaultRole: 'separator',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'none',
        'presentation'
      ],
      id: 'hr'
    },
    html: {
      tagName: 'html',
      defaultRole: 'document',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'html'
    },
    i: {
      tagName: 'i',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'i'
    },
    iframe: {
      tagName: 'iframe',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'application',
        'document',
        'img',
        'none',
        'presentation'
      ],
      id: 'iframe'
    },
    'img[accname]': {
      tagName: 'img',
      defaultRole: 'img',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'button',
        'checkbox',
        'link',
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'option',
        'progressbar',
        'scrollbar',
        'separator',
        'slider',
        'switch',
        'tab',
        'treeitem'
      ],
      hasAccname: true,
      id: 'img[accname]'
    },
    'img[alt]': {
      tagName: 'img',
      defaultRole: 'img',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'button',
        'checkbox',
        'link',
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'option',
        'progressbar',
        'scrollbar',
        'separator',
        'slider',
        'switch',
        'tab',
        'treeitem'
      ],
      attr1: 'alt',
      id: 'img[alt]'
    },
    'img[emptyalt]': {
      tagName: 'img',
      defaultRole: 'presentation',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'alt=""',
      id: 'img[emptyalt]'
    },
    img: {
      tagName: 'img',
      defaultRole: 'img',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'img'
    },
    'input[type=button]': {
      tagName: 'input',
      defaultRole: 'button',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'link',
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'option',
        'radio',
        'switch',
        'tab'
      ],
      attr1: 'type=button',
      id: 'input[type=button]'
    },
    'input[type=checkbox]': {
      tagName: 'input',
      defaultRole: 'checkbox',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'menuitemcheckbox',
        'option',
        'switch',
        'button'
      ],
      attr1: 'type=checkbox',
      id: 'input[type=checkbox]'
    },
    'input[type=color]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=color',
      id: 'input[type=color]'
    },
    'input[type=date]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=date',
      id: 'input[type=date]'
    },
    'input[type=datetime-local]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=datetime-local',
      id: 'input[type=datetime-local]'
    },
    'input[type=email][list]': {
      tagName: 'input',
      defaultRole: 'combobox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=email',
      attr2: 'list',
      id: 'input[type=email][list]'
    },
    'input[type=email]': {
      tagName: 'input',
      defaultRole: 'textbox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=email',
      id: 'input[type=email]'
    },
    'input[type=file]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=file',
      id: 'input[type=file]'
    },
    'input[type=hidden]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      attr1: 'type=hidden',
      id: 'input[type=hidden]'
    },
    'input[type=image]': {
      tagName: 'input',
      defaultRole: 'button',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'link',
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'radio',
        'switch'
      ],
      attr1: 'type=image',
      id: 'input[type=image]'
    },
    'input[type=month]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=month',
      id: 'input[type=month]'
    },
    'input[type=number]': {
      tagName: 'input',
      defaultRole: 'spinbutton',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=number',
      id: 'input[type=number]'
    },
    'input[type=password]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=password',
      id: 'input[type=password]'
    },
    'input[type=radio]': {
      tagName: 'input',
      defaultRole: 'radio',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'menuitemradio'
      ],
      attr1: 'type=radio',
      id: 'input[type=radio]'
    },
    'input[type=range]': {
      tagName: 'input',
      defaultRole: 'slider',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=range',
      id: 'input[type=range]'
    },
    'input[type=reset]': {
      tagName: 'input',
      defaultRole: 'button',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=reset',
      id: 'input[type=reset]'
    },
    'input[type=search][list]': {
      tagName: 'input',
      defaultRole: 'combobox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=search',
      attr2: 'list',
      id: 'input[type=search][list]'
    },
    'input[type=search]': {
      tagName: 'input',
      defaultRole: 'searchbox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=search',
      id: 'input[type=search]'
    },
    'input[type=submit]': {
      tagName: 'input',
      defaultRole: 'button',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=submit',
      id: 'input[type=submit]'
    },
    'input[type=tel][list]': {
      tagName: 'input',
      defaultRole: 'combobox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=tel',
      attr2: 'list',
      id: 'input[type=tel][list]'
    },
    'input[type=tel]': {
      tagName: 'input',
      defaultRole: 'textbox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=tel',
      id: 'input[type=tel]'
    },
    'input[type=text][list]': {
      tagName: 'input',
      defaultRole: 'combobox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=text',
      attr2: 'list',
      id: 'input[type=text][list]'
    },
    'input[type=text]': {
      tagName: 'input',
      defaultRole: 'textbox',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'combobox',
        'searchbox',
        'spinbutton'
      ],
      attr1: 'type=text',
      id: 'input[type=text]'
    },
    'input[type=time]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=time',
      id: 'input[type=time]'
    },
    'input[type=url][list]': {
      tagName: 'input',
      defaultRole: 'combobox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=url',
      attr2: 'list',
      id: 'input[type=url][list]'
    },
    'input[type=url]': {
      tagName: 'input',
      defaultRole: 'textbox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=url',
      id: 'input[type=url]'
    },
    'input[type=week]': {
      tagName: 'input',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      attr1: 'type=week',
      id: 'input[type=week]'
    },
    ins: {
      tagName: 'ins',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'ins'
    },
    kbd: {
      tagName: 'kbd',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'kbd'
    },
    label: {
      tagName: 'label',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'label'
    },
    legend: {
      tagName: 'legend',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'legend'
    },
    li: {
      tagName: 'li',
      defaultRole: 'listitem',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'option',
        'none',
        'presentation',
        'radio',
        'separator',
        'tab',
        'treeitem'
      ],
      id: 'li'
    },
    link: {
      tagName: 'link',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'link'
    },
    main: {
      tagName: 'main',
      defaultRole: 'main',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'main'
    },
    map: {
      tagName: 'map',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'map'
    },
    math: {
      tagName: 'math',
      defaultRole: 'math',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'math'
    },
    mark: {
      tagName: 'mark',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'mark'
    },
    menu: {
      tagName: 'menu',
      defaultRole: 'list',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'directory',
        'group',
        'listbox',
        'menu',
        'menubar',
        'none',
        'presentation',
        'radiogroup',
        'tablist',
        'toolbar',
        'tree'
      ],
      id: 'menu'
    },
    meta: {
      tagName: 'meta',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'meta'
    },
    meter: {
      tagName: 'meter',
      defaultRole: 'generic',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'meter'
    },
    nav: {
      tagName: 'nav',
      defaultRole: 'navigation',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'menu',
        'menubar',
        'tablist'
      ],
      id: 'nav'
    },
    noscript: {
      tagName: 'noscript',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'noscript'
    },
    object: {
      tagName: 'object',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'application',
        'document',
        'img'
      ],
      id: 'object'
    },
    ol: {
      tagName: 'ol',
      defaultRole: 'list',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'directory',
        'group',
        'listbox',
        'menu',
        'menubar',
        'none',
        'presentation',
        'radiogroup',
        'tablist',
        'toolbar',
        'tree'
      ],
      id: 'ol'
    },
    optgroup: {
      tagName: 'optgroup',
      defaultRole: 'group',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'optgroup'
    },
    option: {
      tagName: 'option',
      defaultRole: 'option',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'option'
    },
    output: {
      tagName: 'output',
      defaultRole: 'status',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'output'
    },
    p: {
      tagName: 'p',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'p'
    },
    param: {
      tagName: 'param',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'param'
    },
    picture: {
      tagName: 'picture',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'picture'
    },
    pre: {
      tagName: 'pre',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'pre'
    },
    progress: {
      tagName: 'progress',
      defaultRole: 'progressbar',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'progress'
    },
    q: {
      tagName: 'q',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'q'
    },
    rp: {
      tagName: 'rp',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'rp'
    },
    rt: {
      tagName: 'rt',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'rt'
    },
    ruby: {
      tagName: 'ruby',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'ruby'
    },
    s: {
      tagName: 's',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 's'
    },
    samp: {
      tagName: 'samp',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'samp'
    },
    script: {
      tagName: 'script',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'script'
    },
    'section[accname]': {
      tagName: 'section',
      defaultRole: 'region',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'alert',
        'alertdialog',
        'application',
        'banner',
        'complementary',
        'contentinfo',
        'dialog',
        'document',
        'feed',
        'log',
        'main',
        'marquee',
        'navigation',
        'none',
        'note',
        'presentation',
        'search',
        'status',
        'tabpanel'
      ],
      hasAccname: true,
      id: 'section[accname]'
    },
    section: {
      tagName: 'section',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'alert',
        'alertdialog',
        'application',
        'banner',
        'complementary',
        'contentinfo',
        'dialog',
        'document',
        'feed',
        'log',
        'main',
        'marquee',
        'navigation',
        'none',
        'note',
        'presentation',
        'search',
        'status',
        'tabpanel'
      ],
      id: 'section'
    },
    select: {
      tagName: 'select',
      defaultRole: 'combobox',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'menu'
      ],
      id: 'select'
    },
    'select[size-or-multiple]': {
      tagName: 'select',
      defaultRole: 'listbox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      hasSizeOrMultiple: true,
      id: 'select[size-or-multiple]'
    },
    slot: {
      tagName: 'slot',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'slot'
    },
    small: {
      tagName: 'small',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'small'
    },
    source: {
      tagName: 'source',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'source'
    },
    span: {
      tagName: 'span',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'span'
    },
    strong: {
      tagName: 'strong',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'strong'
    },
    style: {
      tagName: 'style',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'style'
    },
    sub: {
      tagName: 'sub',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'sub'
    },
    summary: {
      tagName: 'summary',
      defaultRole: 'button',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'summary'
    },
    sup: {
      tagName: 'sup',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'sup'
    },
    SVG: {
      tagName: 'SVG',
      defaultRole: 'graphics-document',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'SVG'
    },
    table: {
      tagName: 'table',
      defaultRole: 'table',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'table'
    },
    tbody: {
      tagName: 'tbody',
      defaultRole: 'rowgroup',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'tbody'
    },
    template: {
      tagName: 'template',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'template'
    },
    textarea: {
      tagName: 'textarea',
      defaultRole: 'textbox',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      id: 'textarea'
    },
    tfoot: {
      tagName: 'tfoot',
      defaultRole: 'rowgroup',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'tfoot'
    },
    thead: {
      tagName: 'thead',
      defaultRole: 'rowgroup',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'thead'
    },
    time: {
      tagName: 'time',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'time'
    },
    title: {
      tagName: 'title',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'title'
    },
    'td[cell]': {
      tagName: 'td',
      defaultRole: 'cell',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      ownedbyTable: true,
      id: 'td[cell]'
    },
    'td[gridcell]': {
      tagName: 'td',
      defaultRole: 'gridcell',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      ownedbyGrid: true,
      ownedbyTreegrid: true,
      id: 'td[gridcell]'
    },
    td: {
      tagName: 'td',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'td'
    },
    'th[cell]': {
      tagName: 'th',
      defaultRole: 'cell',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      ownedbyTable: true,
      id: 'th[cell]'
    },
    'th[gridcell]': {
      tagName: 'th',
      defaultRole: 'gridcell',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      ownedbyGrid: true,
      ownedbyTreegrid: true,
      id: 'th[gridcell]'
    },
    'th[colheader]': {
      tagName: 'th',
      defaultRole: 'colheader',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      ownedbyTable: true,
      ownedbyGrid: true,
      ownedbyTreegrid: true,
      id: 'th[colheader]'
    },
    th: {
      tagName: 'th',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'th'
    },
    'tr[table]': {
      tagName: 'tr',
      defaultRole: 'row',
      noRoleAllowed: true,
      anyRoleAllowed: false,
      ownedbyTable: true,
      ownedbyGrid: true,
      ownedbyTreegrid: true,
      id: 'tr[table]'
    },
    tr: {
      tagName: 'tr',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'tr'
    },
    track: {
      tagName: 'track',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [],
      id: 'track'
    },
    u: {
      tagName: 'u',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'u'
    },
    ul: {
      tagName: 'ul',
      defaultRole: 'list',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'directory',
        'group',
        'listbox',
        'menu',
        'menubar',
        'none',
        'presentation',
        'radiogroup',
        'tablist',
        'toolbar',
        'tree'
      ],
      id: 'ul'
    },
    var: {
      tagName: 'var',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'var'
    },
    video: {
      tagName: 'video',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: false,
      allowedRoles: [
        'application'
      ],
      id: 'video'
    },
    wbr: {
      tagName: 'wbr',
      defaultRole: 'generic',
      noRoleAllowed: false,
      anyRoleAllowed: true,
      id: 'wbr'
    }
  }
};
