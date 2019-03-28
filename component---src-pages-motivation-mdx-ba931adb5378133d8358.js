;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    212: function(e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'default', function() {
          return g
        }),
        n.d(a, '_frontmatter', function() {
          return u
        })
      n(53)
      var t = n(24),
        o = n.n(t),
        s = n(7),
        m = n.n(s),
        p = n(0),
        r = n.n(p),
        i = n(8),
        l = n(219),
        c = {},
        g = (function(e) {
          function a(a) {
            var n
            return ((n = e.call(this, a) || this).layout = l.a), n
          }
          return (
            m()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.components,
                n = o()(e, ['components'])
              return r.a.createElement(
                i.MDXTag,
                {
                  name: 'wrapper',
                  Layout: this.layout,
                  layoutProps: Object.assign({}, c, n),
                  components: a,
                },
                r.a.createElement(
                  i.MDXTag,
                  { name: 'h3', components: a },
                  'Why tooltips and popovers?',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Both are elements positioned near a "reference" element, and are hidden until\nthey are triggered. They help conserve space by hiding secondary information or\nfunctionality behind a hover or click. They are positioned outside the normal\nflow of the document so when they are triggered, they are overlayed on top of\nthe existing UI without disrupting the flow of content.',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Tippy.js distinguishes them in the following way:',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'ul', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'A ',
                    r.a.createElement(
                      i.MDXTag,
                      { name: 'strong', components: a, parentName: 'li' },
                      'tooltip',
                    ),
                    " is an element containing simple text content describing a\nparticular element. It's hidden until the user desires more information from\nthe element, e.g. before deciding to click a button.",
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'A ',
                    r.a.createElement(
                      i.MDXTag,
                      { name: 'strong', components: a, parentName: 'li' },
                      'popover',
                    ),
                    ' is an interactive HTML tooltip. It can be a dropdown, menu, or\nany other kind of box that pops out from the normal flow of the document. This\ntype of element contains non-vital functionality and can be hidden behind a\nclick or hover to conserve space.',
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Both of these are called a "tippy" when using Tippy.js!',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'h3', components: a },
                  'Why Tippy.js?',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  "Tippy's goal is to be as powerful as possible in the smallest possible size\nusing the simplest possible API. It wants to give the user the most control\nwhile making them do as little as possible and incurring small cost in terms of\ndownload size.",
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'The most basic tooltip is achieved via an attribute without needing to touch\nJavaScript. Once you start needing more advanced use cases, Tippy gives you full\npower.',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'How does Tippy compare to other solutions? For example:',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'ul', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'popper.js',
                    ),
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'tooltip.js',
                    ),
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'tooltipster',
                    ),
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'microtip',
                    ),
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'balloon.css',
                    ),
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Tippy.js, including the CSS and Popper.js dependency, is about ',
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'strong', components: a, parentName: 'p' },
                    '15 kB in\nsize',
                  ),
                  '.',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'h3', components: a },
                  'Comparison with Popper.js',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'strong', components: a, parentName: 'p' },
                    'Size: 7 kB',
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Popper.js is a positioning engine, not a tooltip library. Popper\'s only goal is\nto position one element (the tooltip) near another element (the reference). For\npeople who want full control over their tooltips\' appearance and behavior, this\nis a fantastic library. If you want "out of the box" behavior, then using Tippy\nmight be better.',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Since Popper is a dependency of Tippy, you can use them together without\nincurring additional cost. If your bundler supports ES modules and the\n',
                  r.a.createElement(
                    i.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '"module"',
                  ),
                  ' field (both Parcel and Webpack support this):',
                ),
                r.a.createElement(
                  i.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  r.a.createElement(
                    i.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      r.a.createElement(
                        i.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token module keyword' },
                        },
                        'import',
                      ),
                      ' ',
                      r.a.createElement(
                        i.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token class class-name' },
                        },
                        'Popper',
                      ),
                      ' ',
                      r.a.createElement(
                        i.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token module keyword' },
                        },
                        'from',
                      ),
                      ' ',
                      r.a.createElement(
                        i.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'popper.js'",
                      ),
                      '\n',
                      r.a.createElement(
                        i.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token module keyword' },
                        },
                        'import',
                      ),
                      ' tippy ',
                      r.a.createElement(
                        i.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token module keyword' },
                        },
                        'from',
                      ),
                      ' ',
                      r.a.createElement(
                        i.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'tippy.js'",
                      ),
                    ),
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  "If you're using the CDN, the ",
                  r.a.createElement(
                    i.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'Popper',
                  ),
                  ' constructor will already be available.',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'h3', components: a },
                  'Comparison with Tooltip.js',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'strong', components: a, parentName: 'p' },
                    'Size: 8.5 kB',
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Tooltip.js is a small tooltip library built on top of Popper, much like Tippy\nis.',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Unlike Tippy, however, it:',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'ul', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Does not come with styling or animations',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Has no lifecycle functions for AJAX requests',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Has no ',
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'followCursor',
                    ),
                    ' option',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Is more complex to set up, particularly using HTML',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Interactivity is not possible with a hover event',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Is less accessible out of the box',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Cannot update any option after the instance was created',
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'h3', components: a },
                  'Comparison with Tooltipster',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'strong', components: a, parentName: 'p' },
                    'Size: 40 kB',
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  "Tooltipster is a fantastic library with very similar functionality, but requires\na jQuery dependency, unlike Tippy. To many people these days, this is a\ndealbreaker! jQuery's minzipped size is about 30 kB, and Tooltipster including\nCSS is about 10 kB. To people using frameworks like React, Vue, or Angular, it\ncan be hard to deal with such a large dependency.",
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Tooltipster is also receiving less frequent updates than Tippy, its last version\nwas released over a year ago (as of Feb 2019).',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'h3', components: a },
                  'Comparison with Microtip and Balloon.css',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'strong', components: a, parentName: 'p' },
                    'Size: 1 kB',
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Both of these are pure CSS tooltip libraries. CSS tooltips can be tiny in size,\nbut come with many drawbacks:',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'ul', components: a },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Lack of positioning engine makes flipping impossible (to best fit within\nviewport)',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Will overflow in certain situations, particularly when close to the window\nedge',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'No lifecycle functions / API to initiate effects, such as AJAX',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'No ',
                    r.a.createElement(
                      i.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'followCursor',
                    ),
                    ' option',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'No interactivity',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'No dynamic arrow positioning',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    'Using HTML content within them (e.g. popovers) is cumbersome or not possible',
                  ),
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  "If you don't need the above, then a CSS tooltip library might better fit your\nneeds.",
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'h3', components: a },
                  'Why does Tippy come with Popper.js as a dependency?',
                ),
                r.a.createElement(
                  i.MDXTag,
                  { name: 'p', components: a },
                  'Positioning "poppers" (elements that exist outside of the normal flow of the\ndocument), is quite complex, particularly when dealing with overflow and\nviewport awareness. Popper.js is actively maintained and very good at what it\ndoes, so there\'s no need to re-invent the wheel.',
                ),
              )
            }),
            a
          )
        })(r.a.Component)
      g.isMDXComponent = !0
      var u = {}
    },
  },
])
//# sourceMappingURL=component---src-pages-motivation-mdx-ba931adb5378133d8358.js.map
