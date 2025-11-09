function blog_init()
{
    document.querySelectorAll(".blog-item").forEach(div => {
        const link = div.querySelector("a.blog-item-title");
        let desc = div.querySelector("div.blog-item-desc");
        if (link) {
            desc.addEventListener("click", function () {
                link.click();
            });
            desc.style.cursor = "pointer";
        }
    });
}

function posts_init()
{
    document.querySelectorAll("img").forEach(img => {
        /* 点击放大 */
        const new_img = img.cloneNode(true);
        new_img.className = "scale";
        new_img.addEventListener("click", function () {
            document.body.removeChild(new_img);
        });
        img.addEventListener("click", function () {
            document.body.appendChild(new_img);
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
