(function () {
  const form = document.querySelector("[data-contact-form]");
  const result = document.querySelector("[data-contact-result]");
  const subject = document.querySelector("[data-contact-subject]");
  const body = document.querySelector("[data-contact-body]");
  const link = document.querySelector("[data-contact-link]");

  if (!form || !result || !subject || !body || !link) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const name = data.get("name");
    const kana = data.get("kana");
    const inquiryType = data.get("inquiryType");
    const phone = data.get("phone");
    const email = data.get("email");
    const message = data.get("message");

    const mailSubject = `【佐藤医院】${inquiryType}のご相談`;
    const mailBody = [
      "佐藤医院 ご担当者様",
      "",
      `お名前: ${name}`,
      `フリガナ: ${kana}`,
      `お問い合わせ種別: ${inquiryType}`,
      `電話番号: ${phone}`,
      `メールアドレス: ${email}`,
      "",
      "ご相談内容",
      `${message}`
    ].join("\n");

    subject.textContent = mailSubject;
    body.textContent = mailBody;
    link.href = `mailto:info@sato-clinic-test.jp?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
