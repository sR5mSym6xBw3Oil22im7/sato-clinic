(function () {
  const newsItems = Array.isArray(window.SATO_NEWS) ? [...window.SATO_NEWS] : [];

  const sortByDate = (items) =>
    items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  };

  const createNewsLink = (item) => {
    const link = document.createElement("a");
    link.className = "news-link";
    link.href = `./news-detail.html?slug=${encodeURIComponent(item.slug)}`;

    link.innerHTML = `
      <span class="news-meta">
        <time datetime="${item.date}">${formatDate(item.date)}</time>
        <span class="news-tag">${item.category}</span>
      </span>
      <span class="news-link-title">${item.title}</span>
      <span class="news-link-summary">${item.summary}</span>
    `;

    return link;
  };

  const renderList = (selector, items) => {
    document.querySelectorAll(selector).forEach((container) => {
      container.innerHTML = "";

      if (!items.length) {
        container.innerHTML = '<li class="empty-state">現在掲載中のお知らせはありません。</li>';
        return;
      }

      items.forEach((item) => {
        const li = document.createElement("li");
        li.appendChild(createNewsLink(item));
        container.appendChild(li);
      });
    });
  };

  const renderDetail = () => {
    const detailRoot = document.querySelector("[data-news-detail]");
    if (!detailRoot) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const item = newsItems.find((entry) => entry.slug === slug);
    const title = document.querySelector("[data-news-title]");
    const meta = document.querySelector("[data-news-meta]");
    const body = document.querySelector("[data-news-body]");

    if (!item || !title || !meta || !body) {
      detailRoot.innerHTML = '<div class="empty-state">指定されたお知らせは見つかりませんでした。お知らせ一覧からもう一度お選びください。</div>';
      document.title = "お知らせが見つかりません | 佐藤医院";
      return;
    }

    document.title = `${item.title} | 佐藤医院`;
    title.textContent = item.title;
    meta.innerHTML = `
      <time datetime="${item.date}">${formatDate(item.date)}</time>
      <span class="news-tag">${item.category}</span>
    `;
    body.innerHTML = item.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  };

  const sorted = sortByDate(newsItems);
  renderList("[data-news-top]", sorted.slice(0, 5));
  renderList("[data-news-archive]", sorted);
  renderDetail();
})();
