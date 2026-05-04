function blog_init()
{
    document.querySelectorAll(".blog-item").forEach(div => {
        const link = div.querySelector("a.blog-item-title");
        const desc = div.querySelector("div.blog-item-desc");
        if (link) {
            desc.addEventListener("click", function () {
                link.click();
            });
            desc.style.cursor = "pointer";
        }
    });
}

function getElementByXPath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function posts_init()
{
    const body = document.getElementsByTagName('body')[0];
    const bigimg = document.getElementById('bigimg');

    bigimg.addEventListener("click", function () {
        bigimg.style.display = 'none';
        document.body.style.overflow = '';
    });

    document.querySelectorAll("img").forEach(img => {
        if (img.id == "bigimg") {
            return;
        }
        /* 点击放大 */
        img.addEventListener("click", function () {
            bigimg.src = img.src;
            bigimg.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        /* 图片注记 */
        const alt = img.alt;
        if (alt) {
            if (!alt) return;
            const alt_center = document.createElement('center');
            alt_center.textContent = alt;
            img.parentNode.insertBefore(alt_center, img.nextSibling);
        }
    });

    document.querySelectorAll("pre").forEach(pre => {
        const code = pre.querySelector("code");
        const code_content = code.textContent;
        const copy_button = document.createElement('button');
        copy_button.className = "copy-button";
        copy_button.textContent = "copy";
        copy_button.addEventListener("click", function () {
            navigator.clipboard.writeText(code_content).then(() => {
                copy_button.textContent = "done";
                copy_button.style.backgroundColor = "#888";
                setTimeout(() => {
                    copy_button.textContent = "copy";
                    copy_button.style.backgroundColor = "#ddd";
                }, 1500);
            });
        });
        const ob_div = document.createElement('div');
        ob_div.className = "overflow-block";
        pre.appendChild(ob_div);
        ob_div.appendChild(code);
        pre.appendChild(copy_button);
    });

    const params = new URLSearchParams(location.search);
    const xpath = params.get('xpath');
    console.log(xpath)
    if (xpath != null ) {
        const target = getElementByXPath(xpath);
        if (target != null) {
            target.scrollIntoView();
        }
    }
}

function init()
{
    const path = window.location.pathname;

    if (path == "/") {
        blog_init();
    } else if (path.startsWith("/blog")) {
        blog_init();
    } else if (path.startsWith("/posts")) {
        posts_init();
    } else if (path.startsWith("/design")) {
        posts_init();
    }
}

init();
