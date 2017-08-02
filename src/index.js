import { css } from 'styled-components'

export default function reset() {
  return css`
    a,
    address,
    article,
    aside,
    audio,
    blockquote,
    body,
    button,
    canvas,
    code,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    html,
    i,
    iframe,
    img,
    label,
    legend,
    li,
    mark,
    menu,
    nav,
    object,
    ol,
    p,
    pre,
    section,
    span,
    strong,
    summary,
    table,
    tbody,
    tfoot,
    thead,
    time,
    tr,
    ul,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
    }

    caption,
    td,
    th {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      font-size: 100%;
    }

    html {
      line-height: 1;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    caption,
    td,
    th {
      vertical-align: middle;
    }

    caption,
    td,
    th {
      font-weight: 400;
      text-align: left;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote:after,
    blockquote:before {
      content: none;
    }

    a img {
      border: none;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }

    body {
      background-color: transparent;
      text-rendering: optimizeLegibility;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-touch-callout: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: 'grayscale';
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    svg {
      display: block;
    }

    *,
    *:after,
    *:before {
      box-sizing: inherit;
    }
  `
}
