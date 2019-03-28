;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    205: function(e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'default', function() {
          return i
        }),
        n.d(a, '_frontmatter', function() {
          return T
        })
      n(52)
      var t = n(24),
        p = n.n(t),
        o = n(7),
        s = n.n(o),
        m = n(0),
        c = n.n(m),
        r = n(8),
        l = n(220),
        N = n(1),
        g = n(47),
        u = {},
        i = (function(e) {
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
                  layoutProps: Object.assign({}, u, n),
                  components: a,
                },
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "It's recommended that tooltips are applied only to natively focusable elements\nlike ",
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '<button>',
                  ),
                  '. Most screenreader software will not announce the tooltip on an\nelement like ',
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
                  '.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Non-interactive tooltips are accessible by default. The default trigger for\ntooltips is ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '"mouseenter focus"',
                  ),
                  '. This means both a hover and focus via keyboard\nnavigation will trigger a tooltip.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'In addition, the reference element receives an ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'aria-describedby',
                  ),
                  ' attribute\n(configurable) once the tooltip is fully shown:',
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
                          'aria-describedby',
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
                          'tippy-1',
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
                      'Text',
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
                          'tippy-1',
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
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'role',
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
                          'tooltip',
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
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'class',
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
                          'tippy-popper',
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
                          props: { className: 'token comment' },
                        },
                        '\x3c!-- inner elements --\x3e',
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
                  { name: 'p', components: a },
                  'This allows screenreader software to announce the tooltip content describing the\nreference element. No work is required by you to achieve this functionality.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'Interactivity',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Although non-interactive tooltips are accessible by default, making interactive\ntooltips accessible requires a bit of work by you.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'For UI elements like dropdowns, you should apply these attributes to the\nreference element:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'ul', components: a },
                  c.a.createElement(
                    r.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'aria-haspopup="true"',
                    ),
                  ),
                  c.a.createElement(
                    r.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'li',
                        props: { className: 'language-text' },
                      },
                      'aria-expanded="false"',
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
                          props: { className: 'token comment' },
                        },
                        '\x3c!-- The element should have its own wrapper. --\x3e',
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
                          'aria-haspopup',
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
                          'true',
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
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'aria-expanded',
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
                          'false',
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
                      'Text',
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
                  { name: 'p', components: a },
                  'The following options are recommended:',
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
                        'interactive',
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
                        ',',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token comment' },
                        },
                        '// `focus` is not suitable for buttons with dropdowns',
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
                        'trigger',
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
                        "'click'",
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
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token comment' },
                        },
                        "// Don't announce the tooltip's contents when expanded",
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
                        'aria',
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
                          props: { className: 'token nil keyword' },
                        },
                        'null',
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
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token comment' },
                        },
                        '// Important: the tooltip should be DIRECTLY after the reference element',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token comment' },
                        },
                        '// in the DOM source order, which is why it has its own wrapper element',
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
                        'appendTo',
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
                        "'parent'",
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
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token comment' },
                        },
                        '// Let the user know the popup has been expanded',
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
                        'onMount',
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
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '{',
                        ),
                        ' reference ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '}',
                        ),
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
                      '\n    reference',
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
                        'setAttribute',
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
                        "'aria-expanded'",
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
                          props: { className: 'token string' },
                        },
                        "'true'",
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
                      '\n  ',
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
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'onHide',
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
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '{',
                        ),
                        ' reference ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '}',
                        ),
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
                      '\n    reference',
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
                        'setAttribute',
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
                        "'aria-expanded'",
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
                          props: { className: 'token string' },
                        },
                        "'false'",
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
                      '\n  ',
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
                c.a.createElement(
                  N.c,
                  null,
                  c.a.createElement(N.a, null, 'Click me then press Tab'),
                  c.a.createElement(g.a, { text: 'Press enter to click' }),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Using this technique, elements within the tippy can be tabbed to since they are\ndirectly after the reference element.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "It's also possible to change the ",
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'role',
                  ),
                  ' of the tippy to something other than\n',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '"tooltip"',
                  ),
                  ':',
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
                        'role',
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
                        "'menu'",
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
      i.isMDXComponent = !0
      var T = {}
    },
  },
])
//# sourceMappingURL=component---src-pages-accessibility-mdx-be2c3a0323e6706263d2.js.map
