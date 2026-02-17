// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="overview.html">Overview</a></li><li class="chapter-item expanded affix "><li class="part-title">教學</li><li class="chapter-item expanded "><a href="tutorial/relations.html"><strong aria-hidden="true">1.</strong> 關係</a></li><li class="chapter-item expanded "><a href="tutorial/filtering.html"><strong aria-hidden="true">2.</strong> 篩選</a></li><li class="chapter-item expanded "><a href="tutorial/aggregation.html"><strong aria-hidden="true">3.</strong> 聚合</a></li><li class="chapter-item expanded affix "><li class="part-title">How do I?</li><li class="chapter-item expanded "><a href="how-do-i/read-files.html"><strong aria-hidden="true">4.</strong> Read files?</a></li><li class="chapter-item expanded "><a href="how-do-i/distinct.html"><strong aria-hidden="true">5.</strong> Remove duplicates?</a></li><li class="chapter-item expanded "><a href="how-do-i/relation-literals.html"><strong aria-hidden="true">6.</strong> Create ad-hoc relations?</a></li><li class="chapter-item expanded affix "><li class="part-title">參考</li><li class="chapter-item expanded "><a href="reference/syntax/index.html"><strong aria-hidden="true">7.</strong> 語法</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/syntax/literals.html"><strong aria-hidden="true">7.1.</strong> 字面值</a></li><li class="chapter-item expanded "><a href="reference/syntax/strings.html"><strong aria-hidden="true">7.2.</strong> 字串</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/syntax/f-strings.html"><strong aria-hidden="true">7.2.1.</strong> F-字串</a></li><li class="chapter-item expanded "><a href="reference/syntax/r-strings.html"><strong aria-hidden="true">7.2.2.</strong> R-字串</a></li><li class="chapter-item expanded "><a href="reference/syntax/s-strings.html"><strong aria-hidden="true">7.2.3.</strong> S-字串</a></li></ol></li><li class="chapter-item expanded "><a href="reference/syntax/tuples.html"><strong aria-hidden="true">7.3.</strong> 元組</a></li><li class="chapter-item expanded "><a href="reference/syntax/arrays.html"><strong aria-hidden="true">7.4.</strong> 陣列</a></li><li class="chapter-item expanded "><a href="reference/syntax/keywords.html"><strong aria-hidden="true">7.5.</strong> 識別符與關鍵字</a></li><li class="chapter-item expanded "><a href="reference/syntax/function-calls.html"><strong aria-hidden="true">7.6.</strong> 函式呼叫</a></li><li class="chapter-item expanded "><a href="reference/syntax/pipes.html"><strong aria-hidden="true">7.7.</strong> 管道</a></li><li class="chapter-item expanded "><a href="reference/syntax/operators.html"><strong aria-hidden="true">7.8.</strong> 運算子</a></li><li class="chapter-item expanded "><a href="reference/syntax/case.html"><strong aria-hidden="true">7.9.</strong> 情況</a></li><li class="chapter-item expanded "><a href="reference/syntax/ranges.html"><strong aria-hidden="true">7.10.</strong> 範圍</a></li><li class="chapter-item expanded "><a href="reference/syntax/comments.html"><strong aria-hidden="true">7.11.</strong> 註釋</a></li><li class="chapter-item expanded "><a href="reference/syntax/parameters.html"><strong aria-hidden="true">7.12.</strong> 參數</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 宣告</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/declarations/variables.html"><strong aria-hidden="true">8.1.</strong> Variables</a></li><li class="chapter-item expanded "><a href="reference/declarations/functions.html"><strong aria-hidden="true">8.2.</strong> 函式</a></li></ol></li><li class="chapter-item expanded "><a href="reference/stdlib/index.html"><strong aria-hidden="true">9.</strong> 標準庫</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/stdlib/transforms/index.html"><strong aria-hidden="true">9.1.</strong> 變換</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/stdlib/transforms/aggregate.html"><strong aria-hidden="true">9.1.1.</strong> 聚合</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/append.html"><strong aria-hidden="true">9.1.2.</strong> 附加</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/derive.html"><strong aria-hidden="true">9.1.3.</strong> 衍生</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/filter.html"><strong aria-hidden="true">9.1.4.</strong> 篩選</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/from.html"><strong aria-hidden="true">9.1.5.</strong> 從</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/group.html"><strong aria-hidden="true">9.1.6.</strong> 群組</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/join.html"><strong aria-hidden="true">9.1.7.</strong> 聯接</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/loop.html"><strong aria-hidden="true">9.1.8.</strong> 循環</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/select.html"><strong aria-hidden="true">9.1.9.</strong> 選擇</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/sort.html"><strong aria-hidden="true">9.1.10.</strong> 排序</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/take.html"><strong aria-hidden="true">9.1.11.</strong> 取</a></li><li class="chapter-item expanded "><a href="reference/stdlib/transforms/window.html"><strong aria-hidden="true">9.1.12.</strong> 視窗</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.</strong> 聚合函式</div></li><li class="chapter-item expanded "><a href="reference/stdlib/date.html"><strong aria-hidden="true">9.3.</strong> 日期函式</a></li><li class="chapter-item expanded "><a href="reference/stdlib/math.html"><strong aria-hidden="true">9.4.</strong> 數學函式</a></li><li class="chapter-item expanded "><a href="reference/stdlib/text.html"><strong aria-hidden="true">9.5.</strong> 文字函式</a></li></ol></li><li class="chapter-item expanded "><a href="reference/spec/index.html"><strong aria-hidden="true">10.</strong> 規範</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/spec/null.html"><strong aria-hidden="true">10.1.</strong> Null 處理</a></li><li class="chapter-item expanded "><a href="reference/spec/name-resolution.html"><strong aria-hidden="true">10.2.</strong> 名稱解析</a></li><li class="chapter-item expanded "><a href="reference/spec/modules.html"><strong aria-hidden="true">10.3.</strong> 模組</a></li><li class="chapter-item expanded "><a href="reference/spec/type-system.html"><strong aria-hidden="true">10.4.</strong> 型別系統</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">專案</li><li class="chapter-item expanded "><a href="project/changelog.html"><strong aria-hidden="true">11.</strong> 變更日誌</a></li><li class="chapter-item expanded "><a href="project/target.html"><strong aria-hidden="true">12.</strong> 目標與版本</a></li><li class="chapter-item expanded "><a href="project/bindings/index.html"><strong aria-hidden="true">13.</strong> 綁定</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="project/bindings/dotnet.html"><strong aria-hidden="true">13.1.</strong> .NET</a></li><li class="chapter-item expanded "><a href="project/bindings/elixir.html"><strong aria-hidden="true">13.2.</strong> Elixir</a></li><li class="chapter-item expanded "><a href="project/bindings/java.html"><strong aria-hidden="true">13.3.</strong> Java</a></li><li class="chapter-item expanded "><a href="project/bindings/javascript.html"><strong aria-hidden="true">13.4.</strong> JavaScript</a></li><li class="chapter-item expanded "><a href="project/bindings/php.html"><strong aria-hidden="true">13.5.</strong> PHP</a></li><li class="chapter-item expanded "><a href="project/bindings/python.html"><strong aria-hidden="true">13.6.</strong> Python</a></li><li class="chapter-item expanded "><a href="project/bindings/r.html"><strong aria-hidden="true">13.7.</strong> R</a></li><li class="chapter-item expanded "><a href="project/bindings/rust.html"><strong aria-hidden="true">13.8.</strong> Rust</a></li></ol></li><li class="chapter-item expanded "><a href="project/integrations/index.html"><strong aria-hidden="true">14.</strong> 整合</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="project/integrations/prqlc-cli.html"><strong aria-hidden="true">14.1.</strong> prqlc CLI</a></li><li class="chapter-item expanded "><a href="project/integrations/clickhouse.html"><strong aria-hidden="true">14.2.</strong> ClickHouse</a></li><li class="chapter-item expanded "><a href="project/integrations/jupyter.html"><strong aria-hidden="true">14.3.</strong> Jupyter</a></li><li class="chapter-item expanded "><a href="project/integrations/duckdb.html"><strong aria-hidden="true">14.4.</strong> DuckDB</a></li><li class="chapter-item expanded "><a href="project/integrations/prefect.html"><strong aria-hidden="true">14.5.</strong> Prefect</a></li><li class="chapter-item expanded "><a href="project/integrations/vscode.html"><strong aria-hidden="true">14.6.</strong> VS Code</a></li><li class="chapter-item expanded "><a href="project/integrations/rill.html"><strong aria-hidden="true">14.7.</strong> Rill</a></li><li class="chapter-item expanded "><a href="project/integrations/syntax-highlighting.html"><strong aria-hidden="true">14.8.</strong> 語法標明</a></li><li class="chapter-item expanded "><a href="project/integrations/postgresql.html"><strong aria-hidden="true">14.9.</strong> PostgreSQL</a></li></ol></li><li class="chapter-item expanded "><a href="project/contributing/index.html"><strong aria-hidden="true">15.</strong> 對 PRQL 做出貢獻</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="project/contributing/development.html"><strong aria-hidden="true">15.1.</strong> 開發</a></li><li class="chapter-item expanded "><a href="project/contributing/language-design.html"><strong aria-hidden="true">15.2.</strong> 語言設計</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
