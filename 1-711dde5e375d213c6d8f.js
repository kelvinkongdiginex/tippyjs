;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    219: function(n, t, e) {
      'use strict'
      var i = e(7),
        o = e.n(i),
        I = e(0),
        a = e.n(I),
        c = e(224),
        l = e(1),
        g = e(221),
        r = e(4),
        d = e(29),
        p = e(75),
        s = e(225),
        m = e.n(s),
        b = e(98),
        C = r.c.span.withConfig({
          displayName: 'TextGradient',
          componentId: 'mvk6mi-0',
        })([
          'background:linear-gradient(45deg,#fff2df,#99ffec,#faa7ff);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;',
        ]),
        A = e(226),
        N = r.c.nav.withConfig({
          displayName: 'Nav__Navbar',
          componentId: 'sc-1ofyja1-0',
        })(
          [
            'display:',
            ';position:fixed;top:0;bottom:0;left:0;width:250px;border-right:1px solid rgba(0,16,64,0.08);background-clip:padding-box;padding:0 0 25px;background:#43436a;color:#cbd6ff;overflow-y:auto;z-index:1;transform:',
            ';transition:transform ',
            ',visibility 0.2s,opacity 0.8s;transition-timing-function:',
            ';visibility:',
            ';box-shadow:5px 0 30px 0 rgba(0,32,64,0.25);opacity:',
            ';',
            '{display:block;visibility:visible;transform:none;box-shadow:none;opacity:1;}',
          ],
          function(n) {
            return n.isMounted ? 'block' : 'none'
          },
          function(n) {
            return n.isOpen
              ? 'translate3d(-4%, 0, 0) scaleX(1)'
              : 'translate3d(-100%, 0, 0) scaleX(0)'
          },
          function(n) {
            return n.isOpen ? '0.55s' : '0.3s'
          },
          function(n) {
            return n.isOpen ? 'cubic-bezier(.165, 1.3, 0.4, 1)' : 'ease'
          },
          function(n) {
            return n.isOpen ? 'visible' : 'hidden'
          },
          function(n) {
            return n.isOpen ? 1 : 0
          },
          l.g.lg,
        ),
        M = r.c.ul.withConfig({
          displayName: 'Nav__List',
          componentId: 'sc-1ofyja1-1',
        })(['list-style:none;padding-left:0;margin:0;']),
        y = r.c.li.withConfig({
          displayName: 'Nav__ListItem',
          componentId: 'sc-1ofyja1-2',
        })(
          [
            'margin:0;&:not(:last-child){border-bottom:1px dotted rgba(0,16,64,0.1);}> a{display:block;padding:10px 25px;padding-left:calc(25px + 4%);font-size:17px;',
            '{padding-left:25px;}&:hover{border-bottom-color:transparent;text-decoration:none;color:white;}}',
          ],
          l.g.lg,
        ),
        x = r.c.button.withConfig({
          displayName: 'Nav__XButton',
          componentId: 'sc-1ofyja1-3',
        })(
          [
            'position:absolute;right:5px;top:5px;background:none;border:none;color:inherit;padding:0;transform:scale(0.9);',
            '{display:none;}',
          ],
          l.g.lg,
        ),
        j = r.c.div.withConfig({
          displayName: 'Nav__Version',
          componentId: 'sc-1ofyja1-4',
        })(
          [
            'color:#d0ffba;font-weight:bold;margin:0;padding:15px 25px;padding-left:calc(25px + 4%);',
            '{padding-left:25px;}',
          ],
          l.g.lg,
        ),
        w = (function(n) {
          function t() {
            for (
              var t, e = arguments.length, i = new Array(e), o = 0;
              o < e;
              o++
            )
              i[o] = arguments[o]
            return (
              ((t = n.call.apply(n, [this].concat(i)) || this).state = {
                isMounted: !1,
                transitions: !0,
              }),
              (t.ref = Object(I.createRef)()),
              (t.handleResize = function() {
                t.setState({ transitions: !1 }),
                  clearTimeout(t.timeout),
                  (t.timeout = setTimeout(function() {
                    t.setState({ transitions: !0 })
                  }, 100))
              }),
              (t.handleClose = function() {
                t.props.close()
              }),
              (t.handleBlur = function(n) {
                n.currentTarget.contains(n.relatedTarget) || t.props.close()
              }),
              (t.handleOutsideClick = function(n) {
                t.props.isOpen &&
                  !t.ref.current.contains(n.target) &&
                  t.props.close()
              }),
              t
            )
          }
          o()(t, n)
          var e = t.prototype
          return (
            (e.componentDidMount = function() {
              this.setState({ isMounted: !0 }),
                window.addEventListener('resize', this.handleResize),
                window.addEventListener(
                  'mousedown',
                  this.handleOutsideClick,
                  !0,
                ),
                this.handleResize()
            }),
            (e.componentWillUnmount = function() {
              window.removeEventListener('resize', this.handleResize),
                window.removeEventListener(
                  'mousedown',
                  this.handleOutsideClick,
                  !0,
                ),
                clearTimeout(this.timeout)
            }),
            (e.render = function() {
              var n = this.props.isOpen,
                t = this.state,
                e = t.isMounted,
                i = t.transitions
              return a.a.createElement(
                b.a,
                null,
                a.a.createElement(
                  N,
                  {
                    id: 'main-nav',
                    ref: this.ref,
                    style: { transition: i ? '' : 'none' },
                    isOpen: n,
                    isMounted: e,
                    onBlur: this.handleBlur,
                  },
                  a.a.createElement(
                    j,
                    null,
                    a.a.createElement(C, null, 'v', A.a),
                  ),
                  a.a.createElement(
                    x,
                    { 'aria-label': 'Close Menu', onClick: this.handleClose },
                    a.a.createElement(m.a, {
                      style: { width: 36, height: 36 },
                    }),
                  ),
                  a.a.createElement(
                    M,
                    null,
                    a.a.createElement(d.StaticQuery, {
                      query: h,
                      render: function(n) {
                        return Object(p.a)(n.allMdx.edges).map(function(n) {
                          var t = n.node
                          return a.a.createElement(
                            y,
                            { key: t.frontmatter.path },
                            a.a.createElement(
                              l.f,
                              { to: t.frontmatter.path },
                              t.frontmatter.title,
                            ),
                          )
                        })
                      },
                      data: g,
                    }),
                  ),
                ),
              )
            }),
            t
          )
        })(I.Component),
        h = '4190207198',
        u = e(227),
        Z = e.n(u),
        f = e(228),
        z = e.n(f),
        k = 'rgba(0, 32, 128, 0.12)',
        S = 'linear-gradient(135deg, #00acff, #6f99fc) no-repeat',
        G = Object(r.c)(l.e).withConfig({
          displayName: 'NavButtons__Container',
          componentId: 'ii0ddk-0',
        })(
          [
            'margin-top:40px;margin-left:-10px;margin-right:-10px;',
            '{margin-left:-35px;margin-right:-35px;}',
          ],
          l.g.md,
        ),
        v = Object(r.c)(d.Link).withConfig({
          displayName: 'NavButtons__NavButton',
          componentId: 'ii0ddk-1',
        })(
          [
            'display:block;padding:40px 25px;border:',
            ';border-radius:4px;background:',
            ';text-decoration:none;color:',
            ';font-weight:bold;margin:0 10px 15px;font-size:20px;transition:box-shadow 0.15s,border 0.15s,filter 0.15s;width:100%;&:hover{border-color:inherit;background:',
            ';color:',
            ';text-decoration:none;}&[data-next]{border-bottom:none;filter:saturate(1.15);order:-1;&:hover{filter:saturate(1.15) brightness(1.2);}}',
            '{width:calc(50% - 20px);margin:0 10px;order:initial;&[data-next]{order:initial;}}',
            '{font-size:24px;}',
          ],
          function(n) {
            return n['data-next'] ? 'none' : '1px solid ' + k
          },
          function(n) {
            return n['data-next'] ? S : 'white'
          },
          function(n) {
            return n['data-next'] ? 'white' : 'inherit'
          },
          function(n) {
            return n['data-next'] ? S : 'white'
          },
          function(n) {
            return n['data-next'] ? 'white' : 'inherit'
          },
          l.g.sm,
          l.g.md,
        )
      var D = function(n) {
          var t = n.next
          return a.a.createElement(
            G,
            null,
            a.a.createElement(d.StaticQuery, {
              query: W,
              render: function(n) {
                var e = Object(p.a)(n.allMdx.edges).map(function(n) {
                    return n.node
                  }),
                  i = e[t],
                  o = t > 1 ? e[t - 2] : null
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  o &&
                    a.a.createElement(
                      v,
                      { to: o.frontmatter.path },
                      a.a.createElement(z.a, {
                        'aria-label': 'Previous',
                        style: { verticalAlign: -4 },
                      }),
                      ' ',
                      o.frontmatter.title,
                    ),
                  i &&
                    a.a.createElement(
                      v,
                      { to: i.frontmatter.path, 'data-next': !0 },
                      i.frontmatter.title,
                      ' ',
                      a.a.createElement(Z.a, {
                        'aria-label': 'Next',
                        style: { verticalAlign: -4 },
                      }),
                    ),
                )
              },
              data: g,
            }),
          )
        },
        W = '4190207198',
        Y = e(220),
        L = e.n(Y),
        T = e(10),
        P = e.n(T),
        R = e(229),
        J = e.n(R),
        O = e(230),
        F = e.n(O),
        U = e(231),
        E = e.n(U),
        B = e(232),
        V = e.n(B),
        H = r.c.div.withConfig({
          displayName: 'VersionNotice__Banner',
          componentId: 'sc-6cohjm-0',
        })(
          [
            'position:relative;top:-25px;background:#4b4f74;color:white;border-radius:0 0 10px 10px;padding:15px;font-size:15px;margin-bottom:15px;margin-left:50px;font-weight:600;a{color:white;border-bottom:1px solid white;&:hover{color:cyan;}}',
            '{margin-left:0;margin-bottom:25px;}',
          ],
          l.g.lg,
        )
      var X = function() {
        return a.a.createElement(
          H,
          null,
          "You're reading the docs for the newest version, v4!",
          a.a.createElement('br', null),
          a.a.createElement(
            'a',
            {
              href: 'https://github.com/atomiks/tippyjs/releases/tag/v4.0.0',
              rel: 'noopener noreferrer',
              target: '_blank',
            },
            'Read the migration guide from v3',
          ),
          ' ',
          'or',
          ' ',
          a.a.createElement(
            'a',
            {
              href:
                'https://github.com/atomiks/tippyjs/tree/8c8a367fa8de94ddd1b1cc7fb259dd5d5f075458/website/src/pages',
              rel: 'noopener noreferrer',
              target: '_blank',
            },
            'view the old docs for v3',
          ),
        )
      }
      function Q() {
        var n = L()(['', ''])
        return (
          (Q = function() {
            return n
          }),
          n
        )
      }
      var K = r.c.header.withConfig({
          displayName: 'Header__HeaderRoot',
          componentId: 'sc-9eu2yh-0',
        })(
          [
            "position:relative;background-image:radial-gradient( circle at 0% 20%,#a09eff,#4884f0,#b3e0fa );background-repeat:no-repeat;background-size:cover;padding:25px 0;text-align:center;margin-bottom:50px;color:white;&::before{content:'';position:absolute;top:-50px;display:block;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMjcwIDE3MzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+ICAgIDxnIGlkPSJBcnRib2FyZCI+ICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC0xNDc3Ljc1LC0xMDI5KSI+ICAgICAgICAgICAgPGcgc3R5bGU9ImZpbHRlcjp1cmwoI19FZmZlY3QxKTsiPiAgICAgICAgICAgICAgICA8Zz4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9ImMiIGN4PSIxODAyLjQ5IiBjeT0iMTAzMy41MiIgcj0iNDMwLjIyOCIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMik7Ii8+ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJjMSIgc2VyaWY6aWQ9ImMiIGN4PSIxODAyLjQ5IiBjeT0iMTAzMy41MiIgcj0iNDMwLjIyOCIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMyk7Ii8+ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJjMiIgc2VyaWY6aWQ9ImMiIGN4PSIxODAyLjQ5IiBjeT0iMTAzMy41MiIgcj0iNDMwLjIyOCIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsNCk7Ii8+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgICAgICA8ZyBpZD0iZyIgdHJhbnNmb3JtPSJtYXRyaXgoMC40Mjg4NSwwLDAsMC40Mjg4NSwyNTAuMjE2LC0yMTQuNDUyKSI+ICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTA0My45OSIgY3k9IjcwMC42IiByPSIxMzMiIHN0eWxlPSJmaWxsOnVybCgjX1JhZGlhbDUpOyIvPiAgICAgICAgPC9nPiAgICAgICAgPGcgaWQ9ImkiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzcwNDM4LDAuOTI4ODU3LC0wLjkyODg1NywwLjM3MDQzOCwxNTg2LjgzLC0xNTI3LjE5KSI+ICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkyOS42OSIgY3k9IjIyMS4zMDYiIHI9IjQ1Ljg5NyIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsNik7Ii8+ICAgICAgICA8L2c+ICAgICAgICA8ZyBpZD0iaTEiIHNlcmlmOmlkPSJpIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC44MjY2MzYsMC41NjI3MzcsLTAuNTYyNzM3LC0wLjgyNjYzNiwzODE1Ljc4LC01NTUuNzY3KSI+ICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkyOS42OSIgY3k9IjIyMS4zMDYiIHI9IjQ1Ljg5NyIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsNyk7Ii8+ICAgICAgICA8L2c+ICAgICAgICA8ZyBpZD0iaiIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMjguMjUyLDUyKSI+ICAgICAgICAgICAgPGNpcmNsZSBjeD0iOTUzLjg2MyIgY3k9IjEzNi42MDYiIHI9IjI0LjU1MyIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsOCk7Ii8+ICAgICAgICA8L2c+ICAgICAgICA8ZyBpZD0iajEiIHNlcmlmOmlkPSJqIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDEyOC4yNTIsNTIpIj4gICAgICAgICAgICA8Y2lyY2xlIGN4PSI5NTMuODYzIiBjeT0iMTM2LjYwNiIgcj0iMjQuNTUzIiBzdHlsZT0iZmlsbDp1cmwoI19SYWRpYWw5KTsiLz4gICAgICAgIDwvZz4gICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMjE3LjI1MiwtMjYuMDc5KSI+ICAgICAgICAgICAgPGcgc3R5bGU9ImZpbHRlcjp1cmwoI19FZmZlY3QxMCk7Ij4gICAgICAgICAgICAgICAgPGc+ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJtIiBjeD0iMTE2Ni44IiBjeT0iMjY3Ljc0IiByPSI0MC4yNzQiIHN0eWxlPSJmaWxsOnVybCgjX1JhZGlhbDExKTsiLz4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Im0xIiBzZXJpZjppZD0ibSIgY3g9IjExNjYuOCIgY3k9IjI2Ny43NCIgcj0iNDAuMjc0IiBzdHlsZT0iZmlsbDp1cmwoI19SYWRpYWwxMik7Ii8+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgICAgICA8ZyBpZD0ibyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMDc1NSwwLDAsMSw4NTQuNDU0LC03MjIuODExKSI+ICAgICAgICAgICAgPGNpcmNsZSBjeD0iODQ0LjIxMiIgY3k9IjEwMDkuMTUiIHI9IjI0LjM2OSIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMTMpOyIvPiAgICAgICAgPC9nPiAgICAgICAgPGcgaWQ9Im8xIiBzZXJpZjppZD0ibyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMDc1NSwwLDAsMSw4NTQuNDU0LC03MjIuODExKSI+ICAgICAgICAgICAgPGNpcmNsZSBjeD0iODQ0LjIxMiIgY3k9IjEwMDkuMTUiIHI9IjI0LjM2OSIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMTQpOyIvPiAgICAgICAgPC9nPiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMjguMjUyLDUyKSI+ICAgICAgICAgICAgPGcgc3R5bGU9ImZpbHRlcjp1cmwoI19FZmZlY3QxNSk7Ij4gICAgICAgICAgICAgICAgPGc+ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJyIiBjeD0iNDMxLjUxOSIgY3k9IjM0MS41NCIgcj0iNzMuOCIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMTYpOyIvPiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0icjEiIHNlcmlmOmlkPSJyIiBjeD0iNDMxLjUxOSIgY3k9IjM0MS41NCIgcj0iNzMuOCIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMTcpOyIvPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMjguMjUyLDUyKSI+ICAgICAgICAgICAgPGcgc3R5bGU9ImZpbHRlcjp1cmwoI19FZmZlY3QxOCk7Ij4gICAgICAgICAgICAgICAgPGc+ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJ1IiBjeD0iMTUxNy4xNSIgY3k9IjE4OS42NjEiIHI9IjU5LjY0MiIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMTkpOyIvPiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0idTEiIHNlcmlmOmlkPSJ1IiBjeD0iMTUxNy4xNSIgY3k9IjE4OS42NjEiIHI9IjU5LjY0MiIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMjApOyIvPiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0idTIiIHNlcmlmOmlkPSJ1IiBjeD0iMTUxNy4xNSIgY3k9IjE4OS42NjEiIHI9IjU5LjY0MiIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMjEpOyIvPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC40Mjg4NSwwLDAsMC40Mjg4NSwzODYuODg3LDgxLjM0NTIpIj4gICAgICAgICAgICA8Y2lyY2xlIGlkPSJ3IiBjeD0iMTEzNC44OCIgY3k9IjYyNS43MjIiIHI9IjQyLjEwMyIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMjIpOyIvPiAgICAgICAgICAgIDxjaXJjbGUgaWQ9IncxIiBzZXJpZjppZD0idyIgY3g9IjExMzQuODgiIGN5PSI2MjUuNzIyIiByPSI0Mi4xMDMiIHN0eWxlPSJmaWxsOnVybCgjX1JhZGlhbDIzKTsiLz4gICAgICAgICAgICA8Y2lyY2xlIGlkPSJ3MiIgc2VyaWY6aWQ9InciIGN4PSIxMTM0Ljg4IiBjeT0iNjI1LjcyMiIgcj0iNDIuMTAzIiBzdHlsZT0iZmlsbDp1cmwoI19SYWRpYWwyNCk7Ii8+ICAgICAgICA8L2c+ICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMC4xMjQxNDksLTAuMjU4MDI4LDAuMjU4MDI4LC0wLjEyNDE0OSw2MzIuMzg5LDkwMSkiPiAgICAgICAgICAgIDxjaXJjbGUgaWQ9InczIiBzZXJpZjppZD0idyIgY3g9IjExMzQuODgiIGN5PSI2MjUuNzIyIiByPSI0Mi4xMDMiIHN0eWxlPSJmaWxsOnVybCgjX1JhZGlhbDI1KTsiLz4gICAgICAgICAgICA8Y2lyY2xlIGlkPSJ3NCIgc2VyaWY6aWQ9InciIGN4PSIxMTM0Ljg4IiBjeT0iNjI1LjcyMiIgcj0iNDIuMTAzIiBzdHlsZT0iZmlsbDp1cmwoI19SYWRpYWwyNik7Ii8+ICAgICAgICAgICAgPGNpcmNsZSBpZD0idzUiIHNlcmlmOmlkPSJ3IiBjeD0iMTEzNC44OCIgY3k9IjYyNS43MjIiIHI9IjQyLjEwMyIgc3R5bGU9ImZpbGw6dXJsKCNfUmFkaWFsMjcpOyIvPiAgICAgICAgPC9nPiAgICA8L2c+ICAgIDxkZWZzPiAgICAgICAgPGZpbHRlciBpZD0iX0VmZmVjdDEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTE5Mi4yNiIgeT0iNDIzLjI4OSIgd2lkdGg9IjEyMjAuNDYiIGhlaWdodD0iMTIyMC40NiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4gICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMzAiLz4gICAgICAgIDwvZmlsdGVyPiAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPSJfUmFkaWFsMiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg4MDEuOTcxLDAsMCw4MDEuOTcxLDE1ODEuNyw3MzQuNzg0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMTMyLDE2NywyNTUpO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMTMyLDIzMCwyNTUpO3N0b3Atb3BhY2l0eTowIi8+PC9yYWRpYWxHcmFkaWVudD4gICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iX1JhZGlhbDMiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNjgzLjM3NCwwLDAsNjgzLjM3NCwxOTcwLjM4LDgyNS4wNjMpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxMzIsMTY3LDI1NSk7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxMzIsMjMwLDI1NSk7c3RvcC1vcGFjaXR5OjAuMjExNzY1Ii8+PC9yYWRpYWxHcmFkaWVudD4gICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iX1JhZGlhbDQiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNzk2LjI1NywwLDAsNzk2LjI1NywxOTQ3LjgyLDc1Ny43NTgpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyNTUsMjUzLDIyOSk7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBvZmZzZXQ9IjAuOTkiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxMzIsMjMwLDI1NSk7c3RvcC1vcGFjaXR5OjAuNTQxMTc2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMTMyLDIzMCwyNTUpO3N0b3Atb3BhY2l0eTowLjU0MTE3NiIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWw1IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDI1Mi4wNDMsMCwwLDI1Mi4wNDMsOTc1LjczMiw2MDguMjUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYig0OSw4NywyNTEpO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1MywyMjkpO3N0b3Atb3BhY2l0eToxIi8+PC9yYWRpYWxHcmFkaWVudD4gICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iX1JhZGlhbDYiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoODYuOTc3NiwwLDAsODYuOTc3NiwxOTA2LjEzLDE4OS40MzcpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYig0OSw4NywyNTEpO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1MywyMjkpO3N0b3Atb3BhY2l0eToxIi8+PC9yYWRpYWxHcmFkaWVudD4gICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iX1JhZGlhbDciIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNzIuOTAyOCwwLDAsNzIuOTAyOCwxOTgwLjgyLDI0Ni4zMTgpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxNDgsMjU1LDE5Myk7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYig2NywyNTUsOTcpO3N0b3Atb3BhY2l0eTowLjIxMTc2NSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWw4IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQ2LjUyOTQsMCwwLDQ2LjUyOTQsOTQxLjI2MywxMTkuNTU3KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoNDksODcsMjUxKTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyNTMsMjI5KTtzdG9wLW9wYWNpdHk6MSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWw5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDM5LDAsMCwzOSw5ODEuMjE4LDE0OS45ODYpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxNDgsMjU1LDE5Myk7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYig2NywyNTUsOTcpO3N0b3Atb3BhY2l0eTowLjIxMTc2NSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8ZmlsdGVyIGlkPSJfRWZmZWN0MTAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTA5Ni41MyIgeT0iMTk3LjQ2NiIgd2lkdGg9IjE0MC41NDgiIGhlaWdodD0iMTQwLjU0OCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4gICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iNSIvPiAgICAgICAgPC9maWx0ZXI+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwxMSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg3Ni4zMjE2LDAsMCw3Ni4zMjE2LDExNDYuMTQsMjM5Ljc3NSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDAsNDgsMjU1KTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDEzMiwxNjcsMjU1KTtzdG9wLW9wYWNpdHk6MSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwxMiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg2My45NzEyLDAsMCw2My45NzEyLDEyMTEuNjcsMjg5LjY4OCkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDE0OCwyNTUsMTkzKTtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDY3LDI1NSw5Nyk7c3RvcC1vcGFjaXR5OjAuMjExNzY1Ii8+PC9yYWRpYWxHcmFkaWVudD4gICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iX1JhZGlhbDEzIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQ2LjE4MDcsMCwwLDQ2LjE4MDcsODMxLjcwNiw5OTIuMjI2KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoNDksODcsMjUxKTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMC45OSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDEzMiwxNjcsMjU1KTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDEzMiwxNjcsMjU1KTtzdG9wLW9wYWNpdHk6MSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwxNCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgzOC43MDc3LDAsMCwzOC43MDc3LDg3MS4zNjIsMTAyMi40MykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyNTMsMjI5KTtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDk5LDIyNiwxNTMpO3N0b3Atb3BhY2l0eTowLjIxMTc2NSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8ZmlsdGVyIGlkPSJfRWZmZWN0MTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMjY1LjU3NCIgeT0iMTc1LjU5NSIgd2lkdGg9IjMzMS44OTEiIGhlaWdodD0iMzMxLjg5MSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4gICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMTUuMzU3NiIvPiAgICAgICAgPC9maWx0ZXI+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwxNiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxMzkuODU1LDAsMCwxMzkuODU1LDM5My42NDYsMjkwLjI5NikiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDQ5LDg3LDI1MSk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjAuOTkiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxMzIsMTY3LDI1NSk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxMzIsMTY3LDI1NSk7c3RvcC1vcGFjaXR5OjEiLz48L3JhZGlhbEdyYWRpZW50PiAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPSJfUmFkaWFsMTciIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTE3LjIyNCwwLDAsMTE3LjIyNCw1MTMuNzQxLDM4MS43NTgpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyNTUsMjUzLDIyOSk7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYig5OSwyMjYsMTUzKTtzdG9wLW9wYWNpdHk6MC4yMTE3NjUiLz48L3JhZGlhbEdyYWRpZW50PiAgICAgICAgPGZpbHRlciBpZD0iX0VmZmVjdDE4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEzMzcuNSIgeT0iMTAuMDE5IiB3aWR0aD0iMzU5LjI4NCIgaGVpZ2h0PSIzNTkuMjg0IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlR3JhcGhpYyIgc3RkRGV2aWF0aW9uPSIyMCIvPiAgICAgICAgPC9maWx0ZXI+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwxOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxMTYuNDA3LDAsMCwxMTYuNDA3LDE0ODYuNTQsMTQ4LjI0OCkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDIyMiwwLDExMSk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjAuOTkiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyNTIsMjEzLDI1NSk7c3RvcC1vcGFjaXR5OjAuODMxMzczIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjUyLDIxMywyNTUpO3N0b3Atb3BhY2l0eTowLjgzMTM3MyIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwyMCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg5NC43MzU0LDAsMCw5NC43MzU0LDE1NDAuNDIsMTYwLjc2MykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDEzMiwxNjcsMjU1KTtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDEzMiwyMzAsMjU1KTtzdG9wLW9wYWNpdHk6MC4yMTE3NjUiLz48L3JhZGlhbEdyYWRpZW50PiAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPSJfUmFkaWFsMjEiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTEwLjM4NCwwLDAsMTEwLjM4NCwxNTM3LjI5LDE1MS40MzMpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyNTUsMjUzLDIyOSk7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBvZmZzZXQ9IjAuOTkiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigxMzIsMjMwLDI1NSk7c3RvcC1vcGFjaXR5OjAuNTQxMTc2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMTMyLDIzMCwyNTUpO3N0b3Atb3BhY2l0eTowLjU0MTE3NiIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwyMiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg4MS40NDE1LDAsMCw4MS40NDE1LDExMTMuMjgsNTk2LjQ4NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSw4NywxNzYpO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjUyLDIxMywyNTUpO3N0b3Atb3BhY2l0eTowLjgzMTM3MyIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwyMyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg2Ni44NzY0LDAsMCw2Ni44NzY0LDExNTEuMzEsNjA1LjMyMikiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyMDgsMTUzKTtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyMjYsNDIpO3N0b3Atb3BhY2l0eTowLjIxMTc2NSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwyNCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg3Ny4zNTkyLDAsMCw3Ny4zNTkyLDExNDkuMSw1OTguNzM2KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI0OSwyMTIpO3N0b3Atb3BhY2l0eTowIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NCwyMDkpO3N0b3Atb3BhY2l0eTowLjU0MTE3NiIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwyNSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg4MS40NDE1LDAsMCw4MS40NDE1LDExMTMuMjgsNTk2LjQ4NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSw4NywxNzYpO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjUyLDIxMywyNTUpO3N0b3Atb3BhY2l0eTowLjgzMTM3MyIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwyNiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg2Ni44NzY0LDAsMCw2Ni44NzY0LDExNTEuMzEsNjA1LjMyMikiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyMDgsMTUzKTtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyMjYsNDIpO3N0b3Atb3BhY2l0eTowLjIxMTc2NSIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Il9SYWRpYWwyNyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg3Ny4zNTkyLDAsMCw3Ny4zNTkyLDExNDkuMSw1OTguNzM2KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI0OSwyMTIpO3N0b3Atb3BhY2l0eTowIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDI1NCwyMDkpO3N0b3Atb3BhY2l0eTowLjU0MTE3NiIvPjwvcmFkaWFsR3JhZGllbnQ+ICAgIDwvZGVmcz48L3N2Zz4=);background-size:cover;width:100vw;height:100vh;",
            '{left:-250px;}}',
          ],
          l.g.lg,
        ),
        _ = r.c.img.withConfig({
          displayName: 'Header__Logo',
          componentId: 'sc-9eu2yh-1',
        })(['display:block;height:70px;margin:0 auto 10px;']),
        q = r.c.h1.withConfig({
          displayName: 'Header__Title',
          componentId: 'sc-9eu2yh-2',
        })([
          'display:inline-block;font-size:50px;font-weight:400;margin-top:0;margin-bottom:25px;',
        ]),
        $ = Object(r.c)(l.d).withConfig({
          displayName: 'Header__ButtonLink',
          componentId: 'sc-9eu2yh-3',
        })([
          'background:rgba(255,255,255,0.15);padding:12px 24px;border-radius:4px;transition:all 0.25s;color:#ffffff;margin:0 10px 10px;font-weight:bold;font-size:18px;font-weight:500;will-change:opacity;&:hover{background:white;border-bottom-color:white;box-shadow:0 8px 16px -2px rgba(0,32,128,0.25);text-decoration:none;}',
        ]),
        nn = r.c.button.withConfig({
          displayName: 'Header__MenuButton',
          componentId: 'sc-9eu2yh-4',
        })(
          [
            'position:absolute;top:-10px;left:15px;color:inherit;font-weight:bold;border:none;background:none;text-transform:uppercase;border-radius:4px;padding:0;',
            '{display:none;}',
          ],
          l.g.lg,
        ),
        tn = Object(r.c)(l.d).withConfig({
          displayName: 'Header__PoweredByLink',
          componentId: 'sc-9eu2yh-5',
        })([
          'position:relative;top:10px;color:rgba(255,255,255,0.9);font-size:90%;font-size:17px;&:hover{color:white;}',
        ]),
        en = Object(r.b)(
          [
            'margin:0 0 -30px;',
            '{margin:-6% 0 -30px;}@media (min-width:1700px){margin:-7% 0 -30px;}',
          ],
          l.g.md,
        ),
        on = { verticalAlign: -6, marginRight: 10 },
        In = P()({}, on, { color: '#ffe6b3', width: 20, height: 20 }),
        an = P()({}, on, { color: '#333' }),
        cn = { width: 36, height: 36 },
        ln = (function(n) {
          function t() {
            for (
              var t, e = arguments.length, i = new Array(e), o = 0;
              o < e;
              o++
            )
              i[o] = arguments[o]
            return (
              ((t = n.call.apply(n, [this].concat(i)) || this).state = {
                displayVersionNotice: !1,
              }),
              t
            )
          }
          o()(t, n)
          var e = t.prototype
          return (
            (e.componentDidMount = function() {
              var n = this.props.pageIndex,
                t = localStorage.getItem('disableVersionNotice')
              localStorage.setItem('disableVersionNotice', 'true'),
                this.setState({ displayVersionNotice: n > 1 && null === t })
            }),
            (e.render = function() {
              var n = this.props,
                t = n.isNavOpen,
                e = n.openNav,
                i = this.state.displayVersionNotice
              return a.a.createElement(
                K,
                null,
                a.a.createElement(
                  l.b,
                  null,
                  i && a.a.createElement(X, null),
                  a.a.createElement(_, {
                    src: J.a,
                    draggable: 'false',
                    alt: 'Tippy Logo',
                  }),
                  a.a.createElement(
                    q,
                    null,
                    a.a.createElement(C, null, 'Tippy.js'),
                  ),
                  a.a.createElement(
                    l.e,
                    { justify: 'center' },
                    a.a.createElement(
                      $,
                      { href: 'https://github.com/atomiks/tippyjs' },
                      a.a.createElement(F.a, { style: an }),
                      'View on GitHub',
                    ),
                  ),
                  a.a.createElement(
                    nn,
                    {
                      'aria-label': 'Menu',
                      'aria-expanded': t ? 'true' : 'false',
                      onClick: e,
                    },
                    a.a.createElement(V.a, { style: cn }),
                  ),
                  a.a.createElement(
                    tn,
                    { href: 'https://popper.js.org' },
                    a.a.createElement(E.a, { style: In }),
                    'Proudly powered by Popper.js',
                  ),
                ),
                a.a.createElement(
                  gn,
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 1920 240',
                    fill: 'white',
                  },
                  a.a.createElement(
                    'g',
                    null,
                    a.a.createElement('path', {
                      d:
                        'M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z',
                    }),
                  ),
                ),
              )
            }),
            t
          )
        })(I.Component),
        gn = Object(r.c)('svg')(Q(), en),
        rn = r.c.main.withConfig({
          displayName: 'Main',
          componentId: 'sc-7otpyo-0',
        })(['', '{margin-left:250px;}'], l.g.lg),
        dn = r.c.footer.withConfig({
          displayName: 'Footer',
          componentId: 'sc-1xqajj9-0',
        })(
          [
            'text-align:center;padding:25px 0;border-top:1px solid ',
            ';margin-top:50px;color:#9dacb6;font-size:85%;background:white;',
          ],
          k,
        ),
        pn = e(222)
      function sn() {
        var n = L()([
          "\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    color: #515168;\n    height: 100%;\n    font-size: 16px;\n    -webkit-tap-highlight-color: transparent;\n\n    ",
          " {\n      font-size: 17px;\n    }\n  }\n\n  :focus:not(.focus-visible) {\n    outline: 0;\n  }\n\n  &::-moz-selection {\n    background: #333;\n    color: white;\n  }\n  &::selection {\n    background: #333;\n    color: white;\n  }\n\n  pre code::-moz-selection,\n  pre span::-moz-selection {\n    background-color: rgba(200, 210, 255, 0.25);\n    color: inherit;\n  }\n  pre code::selection,\n  pre span::selection {\n    background-color: rgba(200, 210, 255, 0.25);\n    color: inherit;\n  }\n  \n  a {\n    color: #0065d5;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    position: relative;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    color: #333;\n\n    &:hover .link-icon {\n      opacity: 1;\n    }\n  }\n\n  h1 {\n    font-size: 2.488rem;\n    margin-top: 2.488rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n    display: inline-block;\n    color: inherit;\n    text-shadow: -2px 2px 0px #ffffff, -4px 4px 0px #aeffce;\n    color: #5b36df;\n    padding: 10px 0;\n    transition: color 0.3s;\n\n    &::-moz-selection {\n      text-shadow: none;\n    }\n\n    &::selection {\n      text-shadow: none;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: calc(50% + 40px);\n      margin-left: -25px;\n      background: linear-gradient(90deg,#aefcf9,#f4ffdf);\n      z-index: -1;\n      transition: width 0.4s cubic-bezier(.23, 1, .32, 1);\n      border-radius: 3px;\n    }\n\n    ",
          ' {\n      font-size: 2.488rem;\n    }\n  }\n\n  h3 {\n    font-size: 1.728rem;\n    margin-top: 2.5rem;\n    padding-right: 30px;\n\n    ',
          ' {\n      font-size: 2.074rem;\n    }\n  }\n\n  h4 {\n    font-size: 1.44rem;\n    margin-top: 2.2rem;\n    color: #666c80;\n\n    ',
          ' {\n      font-size: 1.728rem;\n    }\n  }\n\n  h5 {\n    font-size: 1.44rem;\n    color: #666c80;\n  }\n\n  .link-icon {\n    display: inline-block;\n    position: absolute;\n    padding: 10px 0;\n    opacity: 0;\n    transition: opacity 0.2s;\n    width: 30px;\n    top: -10px;\n    right: 0;\n    color: #5b36df;\n\n    &:hover,\n    &:focus {\n      opacity: 1;\n      text-decoration: none;\n    }\n\n    ',
          ' {\n      right: initial;\n      left: -30px;\n\n      &:focus {\n        width: 20px;\n      }\n    }\n  }\n\n  p, \n  li {\n    line-height: 1.6;\n    margin-top: 0.5rem;\n  }\n\n  ul {\n    padding-left: 18px;\n  }\n\n  table {\n    box-shadow: 0 0 0 1px rgba(0,32,128,0.1);\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    line-height: 1.4;\n    border-radius: 0 0 10px 10px;\n    font-size: 16px;\n\n    ',
          ' {\n      width: calc(100% + 50px);\n      margin-left: -25px;\n    }\n  }\n\n  table tr {\n    padding: 5px;\n\n    &:not(:last-child) {\n      border-bottom: 1px dotted rgba(0,32,128,0.1);\n    }\n  }\n\n  td:first-child code {\n    background: none;\n    font-size: 16px;\n    color: #333;\n    padding: 0;\n  }\n\n  th:last-child, td:last-child {\n    padding-left: 25px;\n  }\n\n  td:first-child,\n  td:nth-child(3) {\n    padding-right: 0;\n  }\n\n  table th, table td {\n    text-align: left;\n    padding: 15px;\n\n    ',
          ' {\n      padding: 15px 25px;\n    }\n  }\n\n  table th {\n    position: relative;\n    z-index: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    background: #eeeefa;\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1150px) {\n    table {\n      border: 0;\n      box-shadow: none;\n    }\n\n    table thead {\n      display: none;\n    }\n\n    table tr {\n      border: 1px solid rgba(0,32,128,0.1);\n      display: block;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n\n    table td {\n      display: block;\n\n      &:not(:last-child) {\n        border-bottom: 1px dotted rgba(0,32,128,0.1);\n      }\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n\n    th:last-child, td:last-child {\n      padding-left: 15px;\n    }\n\n    table td::before {\n      content: attr(data-label);\n      display: block;\n      font-weight: bold;\n      text-transform: uppercase;\n      opacity: 0.7;\n      font-size: 13px;\n      margin-bottom: 5px;\n    }\n\n    td:first-child code {\n      font-size: 100%;\n    }\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid rgba(0, 16, 64, 0.15);\n    margin-top: 5px;\n  }\n\n  [data-reach-skip-link] {\n    position: fixed;\n    z-index: 2;\n    padding: 10px;\n    left: -9999px;\n    background: white;\n    border-radius: 4px;\n    font-weight: bold;\n    font-size: 15px;\n\n    &:focus {\n      left: 5px;\n      top: 5px;\n    }\n  }\n\n  button,\n  a {\n    &.focus-visible {\n      outline: 0;\n      box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 5px rgb(150, 180, 255);\n    }\n  }\n\n  blockquote {\n    color: #5b36df;\n    border-left: 5px solid;\n    margin: 0;\n    padding-left: 15px;\n  }\n',
        ])
        return (
          (sn = function() {
            return n
          }),
          n
        )
      }
      var mn = Object(r.a)(
        sn(),
        l.g.md,
        l.g.md,
        l.g.md,
        l.g.md,
        l.g.md,
        l.g.xl,
        l.g.xl,
      )
      function bn() {
        var n = L()([
          "\n  .tippy-tooltip.ajax-theme {\n    position: absolute;\n    width: 200px;\n    padding: 0;\n    overflow: hidden;\n\n    img {\n      display: block;\n      max-width: 100%;\n    }\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.ajax-theme {\n    top: auto !important;\n    bottom: 0;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.ajax-theme {\n    bottom: auto !important;\n    top: 0;\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.tomato-theme .tippy-arrow {\n    border-top-color: tomato;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.tomato-theme .tippy-arrow {\n    border-bottom-color: tomato;\n  }\n\n  .tippy-tooltip.tomato-theme {\n    font-weight: bold;\n    color: yellow;\n    background: tomato;\n\n    &[data-animatefill] {\n      background-color: transparent;\n    }\n\n    .tippy-backdrop {\n      background: tomato;\n    }\n\n    .tippy-roundarrow {\n      fill: tomato;\n    }\n  }\n\n  .tippy-tooltip.scaled-arrow-theme .tippy-arrow {\n    transform: scale(1.5);\n  }\n\n  .tippy-tooltip.dropdown-theme {\n    text-align: left;\n    font-size: 95%;\n  }\n\n  .tippy-tooltip.crazy-inertia-theme {\n    &[data-inertia][data-state=\"visible\"] {\n      transition-timing-function: cubic-bezier(0.54, 100, 0.2, 0.26);\n    }\n  }\n",
        ])
        return (
          (bn = function() {
            return n
          }),
          n
        )
      }
      var Cn = Object(r.a)(bn())
      function An() {
        var n = L()([
          "\n  code[class*='language-'],\n  pre[class*='language-'] {\n    font-family: ",
          ";\n    color: #c6dbf4;\n    background: none;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 2;\n    font-size: 90%;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-'] {\n    padding: 16px 5%;\n    margin-top: 0;\n    margin-left: -5.55%;\n    margin-right: -5.55%;\n    background: #212139;\n    font-size: 16px;\n    line-height: 1.5;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    [data-elastic-wrapper] {\n      display: inline-block;\n    }\n\n    ",
          ' {\n      margin-left: -25px;\n      margin-right: -25px;\n      padding: 16px 25px;\n    }\n\n    ',
          ' {\n      border-radius: 0 0 8px 8px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 16px 25px;\n      font-size: 17px;\n    }\n  }\n\n  code.language-text {\n    background: #eeeefa;\n    color: #333;\n    font-weight: bold;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    line-height: inherit;\n    font-size: 90%;\n  }\n\n  .token.important,\n  .token.atrule,\n  .token.keyword {\n    color: #c3a2ff;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7f96cf;\n  }\n\n  .token.attr-name {\n    color: #c3a2ff;\n  }\n\n  .token.selector {\n    color: #ffc777;\n  }\n\n  .token.constant {\n    color: #ff959c;\n  }\n\n  .token.punctuation {\n    color: #9fc8ff;\n  }\n  \n  .token.tag .token.punctuation,\n  .token.operator,\n  .token.op,\n  .token.module {\n    color: #89DDFF;\n  }\n\n  .token.nil {\n    color: #9b9fb0;\n  }\n\n  .token.arrow {\n    color: #c49dff;\n  }\n\n  .token.parameter {\n    color: #fface4;\n  }\n\n  .token.flow {\n    color: #89DDFF;\n    font-style: italic;\n  }\n\n  .token.spread {\n    font-weight: bold;\n    color: #ff7e99;\n    text-shadow: 0px 1px 6px;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.tag {\n    color: #fa7692;\n  }\n\n  .token.number,\n  .token.boolean,\n  .token.symbol,\n  .token.deleted {\n    color: #ff9d74;\n  }\n\n  .token.string,\n  .language-css .token.string,\n  .token.url,\n  .token.attr-value,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #C3E88D;\n  }\n\n  .token.entity,\n  .style .token.string {\n    color: #ecd6ba;\n    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);\n  }\n\n  .token.function,\n  .token.property {\n    color: #82AAFF;\n  }\n\n  .token.method {\n    color: #25c8e5;\n  }\n\n  .token.variable {\n    color: #ffad92;\n  }\n\n  .token.dom,\n  .token.class-name {\n    color: #ffc777;\n  }\n\n  .token.property.definition {\n    color: #77e0c6;\n  }\n\n  .token.property.access {\n    color: #89DDFF;\n  }\n\n  .token.regex {\n    color: #88ecff;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .gatsby-highlight {\n    position: relative;\n    margin-top: 3.5rem;\n    margin-bottom: 1.5rem;\n  \n    ',
          ' {\n      margin-left: -25px;\n      margin-right: -25px;\n    }\n\n    &[data-language="html"]::before {\n      color: #ffafaf;\n    }\n\n    &[data-language="js"]::before {\n      color: #ffd789;\n    }\n\n    &[data-language="css"]::before {\n      color: #8fdeff;\n    }\n\n    &[data-language="bash"]::before {\n      color: #d2adff;\n    }\n\n    &::before {\n      content: attr(data-language);\n      display: block;\n      width: 111.1%;\n      position: absolute;\n      background: #43436a;\n      font-weight: bold;\n      padding: 8px 8px;\n      font-family: ',
          ';\n      color: white;\n      margin-left: -5.55%;\n      padding-left: 5%;\n      text-transform: uppercase;\n      transform: translateY(-100%);\n      font-size: 18px;\n\n      ',
          ' {\n        width: calc(100% + 50px);\n        margin-left: -25px;\n        padding-left: 25px;\n      }\n\n      ',
          ' {\n        margin-left: 0;\n        border-radius: 8px 8px 0 0;\n        width: 100%;\n      }\n    }\n  }\n\n  a code.language-text {\n    color: inherit;\n  }\n',
        ])
        return (
          (An = function() {
            return n
          }),
          n
        )
      }
      var Nn =
          'Menlo, "Dank Mono", Inconsolata, "Operator Mono", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        Mn = Object(r.a)(An(), Nn, l.g.sm, l.g.md, l.g.md, Nn, l.g.sm, l.g.md)
      var yn = function() {
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(mn, null),
            a.a.createElement(Cn, null),
            a.a.createElement(Mn, null),
          )
        },
        xn = (function(n) {
          function t() {
            for (
              var t, e = arguments.length, i = new Array(e), o = 0;
              o < e;
              o++
            )
              i[o] = arguments[o]
            return (
              ((t = n.call.apply(n, [this].concat(i)) || this).state = {
                isNavOpen: !1,
              }),
              (t.openNav = function() {
                t.setState({ isNavOpen: !0 })
              }),
              (t.closeNav = function() {
                t.setState({ isNavOpen: !1 })
              }),
              t
            )
          }
          o()(t, n)
          var e = t.prototype
          return (
            (e.componentDidMount = function() {
              setTimeout(function() {
                if (window.location.hash) {
                  var n = document.querySelector(window.location.hash)
                  n && n.scrollIntoView()
                }
              })
            }),
            (e.render = function() {
              var n = this.state.isNavOpen,
                t = this.props,
                e = t.children,
                i = t.pageContext
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(yn, null),
                a.a.createElement(pn.a, { pageContext: i }),
                a.a.createElement(c.b, null),
                a.a.createElement(
                  rn,
                  null,
                  a.a.createElement(ln, {
                    openNav: this.openNav,
                    isNavOpen: n,
                    pageIndex: i.frontmatter.index,
                  }),
                  a.a.createElement(w, { isOpen: n, close: this.closeNav }),
                  a.a.createElement(
                    c.a,
                    null,
                    a.a.createElement(
                      l.b,
                      null,
                      a.a.createElement('h2', null, i.frontmatter.title),
                      e,
                      a.a.createElement(D, { next: i.frontmatter.index + 1 }),
                    ),
                  ),
                  a.a.createElement(
                    dn,
                    null,
                    '© ',
                    new Date().getFullYear(),
                    ' - MIT License',
                  ),
                ),
              )
            }),
            t
          )
        })(I.Component)
      t.a = xn
    },
    221: function(n) {
      n.exports = {
        data: {
          allMdx: {
            edges: [
              {
                node: {
                  frontmatter: { title: 'FAQ', path: '/faq/', index: 12 },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Accessibility',
                    path: '/accessibility/',
                    index: 10,
                  },
                },
              },
              {
                node: {
                  frontmatter: { title: 'AJAX', path: '/ajax/', index: 9 },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Creating Tooltips',
                    path: '/creating-tooltips/',
                    index: 2,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Getting Started',
                    path: '/getting-started/',
                    index: 1,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Customizing Tooltips',
                    path: '/customizing-tooltips/',
                    index: 3,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'HTML Content',
                    path: '/html-content/',
                    index: 7,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Motivation',
                    path: '/motivation/',
                    index: 13,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Methods',
                    path: '/methods/',
                    index: 6,
                  },
                },
              },
              {
                node: {
                  frontmatter: { title: 'Themes', path: '/themes/', index: 8 },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'Tippy Instance',
                    path: '/tippy-instance/',
                    index: 5,
                  },
                },
              },
              {
                node: {
                  frontmatter: {
                    title: 'All Options',
                    path: '/all-options/',
                    index: 4,
                  },
                },
              },
              { node: { frontmatter: { title: 'Demo', path: '/', index: 0 } } },
              {
                node: {
                  frontmatter: { title: 'Misc', path: '/misc/', index: 11 },
                },
              },
            ],
          },
        },
      }
    },
    222: function(n, t, e) {
      'use strict'
      var i = e(233),
        o = e(0),
        I = e.n(o),
        a = e(234),
        c = e.n(a),
        l = e(29)
      function g(n) {
        var t = n.title,
          e = n.description,
          o = n.lang,
          a = n.meta,
          g = n.keywords,
          d = n.pageContext
        return I.a.createElement(l.StaticQuery, {
          query: r,
          render: function(n) {
            var i = e || n.site.siteMetadata.description,
              l = 'Demo' === d.frontmatter.title,
              r =
                t ||
                (l
                  ? 'Tippy.js - Vanilla JS Tooltip and Popover Library'
                  : d.frontmatter.title)
            return I.a.createElement(c.a, {
              htmlAttributes: { lang: o },
              title: r,
              titleTemplate: l ? null : '%s | ' + n.site.siteMetadata.title,
              meta: [
                { name: 'description', content: i },
                { property: 'og:title', content: r },
                { property: 'og:description', content: i },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary' },
                {
                  name: 'twitter:creator',
                  content: n.site.siteMetadata.author,
                },
                { name: 'twitter:title', content: r },
                { name: 'twitter:description', content: i },
              ]
                .concat(
                  g.length > 0
                    ? { name: 'keywords', content: g.join(', ') }
                    : [],
                )
                .concat(a),
            })
          },
          data: i,
        })
      }
      ;(g.defaultProps = { lang: 'en', meta: [], keywords: [] }), (t.a = g)
      var r = '1025518380'
    },
    226: function(n) {
      n.exports = { a: '4.2.0' }
    },
    229: function(n, t, e) {
      n.exports = e.p + 'static/logo-ebc385458e03fdb24af078536af88065.svg'
    },
    233: function(n) {
      n.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Tippy.js',
              description:
                'A simple, easy-to-use vanilla JavaScript library for creating tooltips and popovers to use in web sites and apps. The flat-level option API makes customizing a tooltip and popover as easy as adding a single object property or data attribute. Make tooltips follow the mouse cursor, have an arrow, change duration and delay, have custom themes and animations, HTML content, touch support, and more...',
              author: '@atomiks',
            },
          },
        },
      }
    },
  },
])
//# sourceMappingURL=1-711dde5e375d213c6d8f.js.map
