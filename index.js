// 解析 HTML 字符串为 DOM 对象
function parseHTML(htmlString) {
  return htmlparser2.parseDocument(htmlString);
}

// 使用 XPath 查询 DOM 对象
function queryWithXPath(dom, xpathExpression) {
  return xpath.evaluate(xpathExpression, dom, null, xpath.XPathResult.ANY_TYPE, null);
}

// 使用 CSS 选择器查询 DOM 对象
function queryWithCSSSelector(dom, selector) {
  const $ = cheerio.load(dom.toString());
  return $(selector).html();
}