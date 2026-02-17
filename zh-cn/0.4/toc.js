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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="queries/index.html"><strong aria-hidden="true">2.</strong> Queries</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="queries/pipelines.html"><strong aria-hidden="true">2.1.</strong> Pipelines</a></li><li class="chapter-item expanded "><a href="queries/functions.html"><strong aria-hidden="true">2.2.</strong> Functions</a></li><li class="chapter-item expanded "><a href="queries/tables.html"><strong aria-hidden="true">2.3.</strong> Tables</a></li></ol></li><li class="chapter-item expanded "><a href="transforms/index.html"><strong aria-hidden="true">3.</strong> Transforms</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="transforms/aggregate.html"><strong aria-hidden="true">3.1.</strong> Aggregate</a></li><li class="chapter-item expanded "><a href="transforms/append.html"><strong aria-hidden="true">3.2.</strong> Append</a></li><li class="chapter-item expanded "><a href="transforms/derive.html"><strong aria-hidden="true">3.3.</strong> Derive</a></li><li class="chapter-item expanded "><a href="transforms/filter.html"><strong aria-hidden="true">3.4.</strong> Filter</a></li><li class="chapter-item expanded "><a href="transforms/from.html"><strong aria-hidden="true">3.5.</strong> From</a></li><li class="chapter-item expanded "><a href="transforms/group.html"><strong aria-hidden="true">3.6.</strong> Group</a></li><li class="chapter-item expanded "><a href="transforms/join.html"><strong aria-hidden="true">3.7.</strong> Join</a></li><li class="chapter-item expanded "><a href="transforms/select.html"><strong aria-hidden="true">3.8.</strong> Select</a></li><li class="chapter-item expanded "><a href="transforms/sort.html"><strong aria-hidden="true">3.9.</strong> Sort</a></li><li class="chapter-item expanded "><a href="transforms/take.html"><strong aria-hidden="true">3.10.</strong> Take</a></li><li class="chapter-item expanded "><a href="transforms/window.html"><strong aria-hidden="true">3.11.</strong> Window</a></li></ol></li><li class="chapter-item expanded "><a href="syntax.html"><strong aria-hidden="true">4.</strong> Syntax</a></li><li class="chapter-item expanded "><a href="language-features/index.html"><strong aria-hidden="true">5.</strong> Language features</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="language-features/coalesce.html"><strong aria-hidden="true">5.1.</strong> Coalesce</a></li><li class="chapter-item expanded "><a href="language-features/dates-and-times.html"><strong aria-hidden="true">5.2.</strong> Dates &amp; times</a></li><li class="chapter-item expanded "><a href="language-features/distinct.html"><strong aria-hidden="true">5.3.</strong> Distinct</a></li><li class="chapter-item expanded "><a href="language-features/null.html"><strong aria-hidden="true">5.4.</strong> Null handling</a></li><li class="chapter-item expanded "><a href="language-features/ranges.html"><strong aria-hidden="true">5.5.</strong> Ranges</a></li><li class="chapter-item expanded "><a href="language-features/regex.html"><strong aria-hidden="true">5.6.</strong> Regex</a></li><li class="chapter-item expanded "><a href="language-features/standard-library.html"><strong aria-hidden="true">5.7.</strong> Stdlib</a></li><li class="chapter-item expanded "><a href="language-features/strings.html"><strong aria-hidden="true">5.8.</strong> Strings</a></li><li class="chapter-item expanded "><a href="language-features/s-strings.html"><strong aria-hidden="true">5.9.</strong> S-Strings</a></li><li class="chapter-item expanded "><a href="language-features/f-strings.html"><strong aria-hidden="true">5.10.</strong> F-Strings</a></li><li class="chapter-item expanded "><a href="language-features/switch.html"><strong aria-hidden="true">5.11.</strong> Switch</a></li><li class="chapter-item expanded "><a href="language-features/target.html"><strong aria-hidden="true">5.12.</strong> Target &amp; Version</a></li></ol></li><li class="chapter-item expanded "><a href="bindings/index.html"><strong aria-hidden="true">6.</strong> Bindings</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bindings/elixir.html"><strong aria-hidden="true">6.1.</strong> Elixir</a></li><li class="chapter-item expanded "><a href="bindings/java.html"><strong aria-hidden="true">6.2.</strong> Java</a></li><li class="chapter-item expanded "><a href="bindings/javascript.html"><strong aria-hidden="true">6.3.</strong> JavaScript</a></li><li class="chapter-item expanded "><a href="bindings/python.html"><strong aria-hidden="true">6.4.</strong> Python</a></li><li class="chapter-item expanded "><a href="bindings/r.html"><strong aria-hidden="true">6.5.</strong> R</a></li><li class="chapter-item expanded "><a href="bindings/rust.html"><strong aria-hidden="true">6.6.</strong> Rust</a></li></ol></li><li class="chapter-item expanded "><a href="integrations/index.html"><strong aria-hidden="true">7.</strong> Integrations</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="integrations/dbt.html"><strong aria-hidden="true">7.1.</strong> dbt</a></li><li class="chapter-item expanded "><a href="integrations/jupyter.html"><strong aria-hidden="true">7.2.</strong> Jupyter</a></li><li class="chapter-item expanded "><a href="integrations/prefect.html"><strong aria-hidden="true">7.3.</strong> Prefect</a></li><li class="chapter-item expanded "><a href="integrations/vscode.html"><strong aria-hidden="true">7.4.</strong> VSCode</a></li><li class="chapter-item expanded "><a href="integrations/rill.html"><strong aria-hidden="true">7.5.</strong> Rill</a></li></ol></li><li class="chapter-item expanded "><a href="examples/index.html"><strong aria-hidden="true">8.</strong> Examples</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="examples/variables.html"><strong aria-hidden="true">8.1.</strong> Variables</a></li><li class="chapter-item expanded "><a href="examples/list-equivalence.html"><strong aria-hidden="true">8.2.</strong> List equivalence</a></li><li class="chapter-item expanded "><a href="examples/cte.html"><strong aria-hidden="true">8.3.</strong> CTE (intermediate tables)</a></li><li class="chapter-item expanded "><a href="examples/employees.html"><strong aria-hidden="true">8.4.</strong> Employees</a></li></ol></li><li class="chapter-item expanded "><a href="contributing/index.html"><strong aria-hidden="true">9.</strong> Contributing to PRQL</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contributing/development.html"><strong aria-hidden="true">9.1.</strong> Development</a></li><li class="chapter-item expanded "><a href="contributing/using-docker.html"><strong aria-hidden="true">9.2.</strong> Using Docker</a></li></ol></li><li class="chapter-item expanded "><a href="internals/index.html"><strong aria-hidden="true">10.</strong> Internals</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="internals/compiler-architecture.html"><strong aria-hidden="true">10.1.</strong> Compiler architecture</a></li><li class="chapter-item expanded "><a href="internals/name-resolving.html"><strong aria-hidden="true">10.2.</strong> Name resolving</a></li><li class="chapter-item expanded "><a href="internals/functional-lang.html"><strong aria-hidden="true">10.3.</strong> Functions</a></li><li class="chapter-item expanded "><a href="internals/syntax-highlighting.html"><strong aria-hidden="true">10.4.</strong> Syntax highlighting</a></li></ol></li></ol>';
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
