;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    210: function(e, a, n) {
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
        p = n.n(t),
        o = n(7),
        s = n.n(o),
        m = n(0),
        c = n.n(m),
        r = n(8),
        l = n(219),
        N = {},
        g = (function(e) {
          function a(a) {
            var n
            return ((n = e.call(this, a) || this).layout = l.a), n
          }
          return (
            s()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.components,
                n = p()(e, ['components'])
              return c.a.createElement(
                r.MDXTag,
                {
                  name: 'wrapper',
                  Layout: this.layout,
                  layoutProps: Object.assign({}, N, n),
                  components: a,
                },
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "Tippy isn't just limited to simple text tooltips. Rich HTML content can be\ndisplayed within the tippy, and users can interact with content inside.",
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "Note that if you want to be able to interact with the content inside the tippy,\nyou'll need to set ",
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'interactive: true',
                  ),
                  '.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'String',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'A string of HTML can be used:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'button'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token definition property' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ':',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'<strong>Bolded content</strong>'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'Element',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h4', components: a },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'h4',
                      props: { className: 'language-text' },
                    },
                    '<template>',
                  ),
                  ' element',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'The content within a ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '<template>',
                  ),
                  ' is "inert" and doesn\'t get rendered on the\npage. This makes it ideal for creating reusable pieces of content:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'html',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-html' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-html' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'template',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'id',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'example',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Bolded content',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'template',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' template',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'getElementById',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'example'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' container',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'createElement',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'div'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\ncontainer',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'appendChild',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'importNode',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      'template',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token boolean' },
                        },
                        'true',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'button'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token definition property' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ':',
                      ),
                      ' container',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'innerHTML',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  '⚠️ Note that IE11 does not support the ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '<template>',
                  ),
                  ' element, see the\n',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'a',
                      components: a,
                      parentName: 'p',
                      props: {
                        href: 'https://github.com/webcomponents/template',
                      },
                    },
                    'polyfill',
                  ),
                  '.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h4', components: a },
                  'Standard ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'h4',
                      props: { className: 'language-text' },
                    },
                    '<div>',
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "It's also possible to use a ",
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '<div>',
                  ),
                  ' (or any other element) instead:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'html',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-html' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-html' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'div',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'id',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'example',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: {
                              className: 'token style-attr language-css',
                            },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token attr-name' },
                            },
                            ' ',
                            c.a.createElement(
                              r.MDXTag,
                              {
                                name: 'span',
                                components: a,
                                parentName: 'span',
                                props: { className: 'token attr-name' },
                              },
                              'style',
                            ),
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '="',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token attr-value' },
                            },
                            c.a.createElement(
                              r.MDXTag,
                              {
                                name: 'span',
                                components: a,
                                parentName: 'span',
                                props: { className: 'token property' },
                              },
                              'display',
                            ),
                            c.a.createElement(
                              r.MDXTag,
                              {
                                name: 'span',
                                components: a,
                                parentName: 'span',
                                props: { className: 'token punctuation' },
                              },
                              ':',
                            ),
                            ' none',
                            c.a.createElement(
                              r.MDXTag,
                              {
                                name: 'span',
                                components: a,
                                parentName: 'span',
                                props: { className: 'token punctuation' },
                              },
                              ';',
                            ),
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Bolded content',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'div',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' template',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'getElementById',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'example'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'button'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token definition property' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ':',
                      ),
                      ' template',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'innerHTML',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Content within the ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '<div>',
                  ),
                  ' gets rendered and displayed on the page, so we need\nto hide it using ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'display: none',
                  ),
                  '.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'Keep event listeners attached',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'If you want to keep event listeners attached to the element, you can pass the\nelement itself (',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '<div>',
                  ),
                  ' element):',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' template',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'getElementById',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'example'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\ntemplate',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'style',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'display',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'block'",
                      ),
                      '\n\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'button'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token definition property' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ':',
                      ),
                      ' template',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Once Tippy has appended the template to the tooltip, we need to unhide it, which\nwe can do by setting its ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'display',
                  ),
                  ' property to ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'block',
                  ),
                  '.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "Tippy will move the template from the document into the tooltip. Note that this\nis a one-time operation. It can only exist in a single tippy since it's not\nbeing cloned.",
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'Template linking',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'If you have multiple references each with their own unique template, there is a\nway to link them with their associated template:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'html',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-html' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-html' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'button',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'data-template',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'one',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'One',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'button',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'button',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'data-template',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'two',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Two',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'button',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'button',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'data-template',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'three',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Three',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'button',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'template',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'id',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'one',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Content for `one`',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'template',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'template',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'id',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'two',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Content for `two`',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'template',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'template',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'id',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'three',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Content for `three`',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'strong',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'template',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'We can make ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'content',
                  ),
                  ' a function that receives the reference element (button in\nthis case) and returns template content:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'button'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token parameter' },
                        },
                        'reference',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' id',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' reference',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'getAttribute',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'data-template'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' container',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'createElement',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'div'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' linkedTemplate',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'getElementById',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      'id',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token constant-definition constant',
                          },
                        },
                        ' node',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'document',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'importNode',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      'linkedTemplate',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token boolean' },
                        },
                        'true',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n    container',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'appendChild',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      'node',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token flow keyword' },
                        },
                        'return',
                      ),
                      ' container\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
              )
            }),
            a
          )
        })(c.a.Component)
      g.isMDXComponent = !0
      var u = {}
    },
  },
])
//# sourceMappingURL=component---src-pages-html-content-mdx-66c94ff96fb773342d18.js.map
