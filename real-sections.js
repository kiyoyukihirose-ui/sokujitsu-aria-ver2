(() => {
  const replace = (selector, html) => {
    const node = document.querySelector(selector);
    if (node) node.innerHTML = html;
    return node;
  };

  const rateSource = document.querySelector('[data-node-id="392:52714"]');
  const readRates = () => ({
    first: Number(rateSource?.dataset.firstRate) || 93,
    repeat: Number(rateSource?.dataset.repeatRate) || 90
  });
  let rates = readRates();
  const initialAmount = 30000;

  const estimator = replace('[data-node-id="392:52780"]', `
    <p class="estimator-license">※東京都公安委員会 第304362115284号</p>
    <div class="estimate-panel is-pending">
      <h2>見積もり計算</h2>
      <label class="estimate-input"><input id="amount" type="text" inputmode="numeric" value="30,000" autocomplete="off" aria-label="Appleギフトカード額面"><span>円分</span></label>
      <p class="estimate-lead">のAppleギフトカードがある場合</p>
      <div class="estimate-result estimate-result--first"><span>初回</span><strong id="firstResult">27,900<small>円</small></strong><b id="firstEstimateRate">${rates.first}％</b></div>
      <div class="estimate-result estimate-result--repeat"><span>2回目以降</span><strong id="repeatResult">27,000<small>円</small></strong><b id="repeatEstimateRate">${rates.repeat}％</b></div>
      <p class="estimate-copy">をそのままお振込み！<br><strong>振込手数料・事務手数料0円！</strong></p>
      <a class="orange-cta" href="#apply">この金額で申し込む <span>››</span></a>
    </div>`);

  const services = [
    ['figma-assets/rate-raw-11.webp','クレジットカード'],
    ['figma-assets/rate-raw-7.webp','プリペイドカード'],
    ['figma-assets/rate-raw-3.webp','バンドルカード'],
    ['figma-assets/rate-raw-10.webp','ファミペイ'],
    ['figma-assets/rate-raw-13.webp','Kyash'],
    ['figma-assets/rate-raw-5.webp','ワンバンク'],
    ['figma-assets/rate-raw-9.webp','キャリア決済'],
    ['figma-assets/rate-raw-12.webp','メルペイ スマート払い']
  ];
  replace('[data-node-id="431:85282"]', `
    <div class="rate-board">
      <h2><img loading="lazy" decoding="async" src="figma-assets/rate-raw-2.webp" alt="">Appleギフトカード買取</h2>
      <table><thead><tr><th></th><th>初回</th><th>2回目以降</th></tr></thead>
      <tbody>${services.map(([icon,name]) => `<tr><th><i><img loading="lazy" decoding="async" src="${icon}" alt=""></i><span>${name}</span></th><td data-rate-display="first">${rates.first}<small>％</small></td><td data-rate-display="repeat">${rates.repeat}<small>％</small></td></tr>`).join('')}</tbody></table>
      <p>※Appleギフトカードのみの買取となります</p>
    </div>`);

  replace('[data-node-id="392:54873"]', `
    <div class="speed-band" data-node-id="529:20724"><img loading="lazy" decoding="async" src="figma-assets/section-heading-band.webp" alt=""><p><small>即日アリアちゃんは</small><strong>振込までがとにかく速い！</strong></p></div>
    <div class="speed-badge"><img loading="lazy" decoding="async" src="asset-speed-badge-bg.webp" alt=""><p><small>申込から振込まで、</small><strong>最短<em>3</em>分</strong></p></div>
    <img loading="lazy" decoding="async" class="speed-aria" src="asset-speed-aria.webp" alt="案内するアリアちゃん">
    <div class="speed-copy" data-node-id="529:20744"><img loading="lazy" decoding="async" class="speed-copy-glow" src="figma-assets/speed-copy-ellipse-529-20744.webp" alt=""><p>Appleギフトカード専門の買取だからこそ<br>実現できるスピードで、<br>待ち時間の不安や急な出費に応えます。</p><small>※繁忙期などお申込みが集中した場合は、<br>入金までお時間をいただく場合がございます。</small></div>`);

  replace('[data-node-id="392:54905"]', `
    <img loading="lazy" decoding="async" class="fee-halftone" data-node-id="529:20756" src="figma-assets/fee-halftone-529-20756.webp" alt="">
    <div class="fee-band" data-node-id="529:21781"><img loading="lazy" decoding="async" src="figma-assets/fee-band-529-21781@4x.webp" alt=""><p><small>買取率ピッタリで入金</small><strong>振込手数料0円</strong></p></div>
    <div class="fee-glow" data-node-id="529:21780"><img loading="lazy" decoding="async" src="figma-assets/fee-copy-ellipse-529-21780.webp" alt=""></div>
    <div class="fee-zero-art" data-node-id="529:21802" aria-label="0円"><span class="fee-zero-bar" data-node-id="529:21803"></span><img loading="lazy" decoding="async" class="fee-zero-yen" data-node-id="529:21804" src="figma-assets/fee-yen-529-21804.webp" alt=""><strong data-node-id="529:21805">0</strong></div>
    <div class="fee-copy"><p><strong>即日アリアちゃんなら、</strong><br>振込手数料・事務手数料0円。<br>買取率ピッタリでの振込をお約束します。</p></div>`);

  const reasons = [
    ['figma-assets/reason-building.webp','法人による運営','即日アリアちゃんは、株式会社Ariaが<br>責任を持って運営するサービスです。'],
    ['figma-assets/reason-shield.webp','古物商許可取得済み','公安委員会より古物商許可を取得し、<br>法令を遵守して運営しています。','東京都公安委員会 第304362115284号'],
    ['figma-assets/reason-lock.webp','プライバシーに配慮した運営','ご家族・勤務先へのご連絡や郵送物は<br>一切ありません。<br>お預かりした個人情報は厳重に管理し<br>ています。']
  ];
  replace('[data-node-id="392:55956"]', `
    <img loading="lazy" decoding="async" class="reason-halftone" src="asset-flow-halftone-sp-left-top.webp" alt="">
    <div class="reason-band"><img loading="lazy" decoding="async" src="figma-assets/section-heading-band.webp" alt=""><p><small>はじめての方でも安心</small><strong>アリアちゃんが選ばれる理由</strong></p></div>
    <div class="reason-cards">${reasons.map(([icon,title,body,note],i)=>`<article class="reason-card reason-card--${i+1}"><img loading="lazy" decoding="async" class="reason-icon" src="${icon}" alt=""><div class="reason-text"><h3>${title}</h3><p>${body}</p>${note?`<small>${note}</small>`:''}</div></article>`).join('')}</div>`);

  const steps = [
    ['ご自身で<br>Appleギフトカードを購入','figma-assets/flow-sprite.webp','現物のカード・オンラインカードど<br>ちらでもご利用いただけます。'],
    ['ギフトコード・必要事項を<br>入力してお申し込み','figma-assets/flow-sprite.webp','お手元にギフトコード及び、<br>顔付き身分証明証（免許証など）の<br>写真をご用意ください。'],
    ['ギフトコードの確認後、<br>お客様の口座に買取金を振込み','figma-assets/flow-sprite.webp','お申込みから入金まで、最短3分で<br>完了します。※']
  ];
  const stepBackgroundNodeIds = ['529:26977', '529:26985', '529:26993'];
  replace('[data-node-id="456:89585"]', `
    <img loading="lazy" decoding="async" class="flow-dots flow-dots--1" src="asset-flow-halftone-sp-right-top.webp" alt="">
    <img loading="lazy" decoding="async" class="flow-dots flow-dots--2" src="asset-flow-halftone-sp-left-top.webp" alt="">
    <img loading="lazy" decoding="async" class="flow-dots flow-dots--3" src="asset-flow-halftone-sp-center-bottom.webp" alt="">
    <img loading="lazy" decoding="async" class="flow-dots flow-dots--4" src="asset-flow-halftone-sp-right-bottom.webp" alt="">
    <div class="flow-band"><img loading="lazy" decoding="async" src="figma-assets/section-heading-band.webp" alt=""><p><small>あっという間に振込完了！</small><strong>お申し込みの流れ</strong></p></div>
    <div class="flow-cards">${steps.map(([title,img,body],i)=>`<article class="flow-card flow-card--${i+1}"><b class="flow-step" data-node-id="${stepBackgroundNodeIds[i]}">STEP${['➊','➋','➌'][i]}</b><h3>${title}</h3><span class="flow-illustration"><img loading="lazy" decoding="async" src="${img}" alt=""></span><p>${body}</p></article>`).join('')}</div>
    <p class="flow-note">※繁忙期などお申込みが集中した場合は、入金までお時間を<br>いただく場合がございます。</p>
    <span class="flow-cta-glow" data-node-id="529:27016"><img loading="lazy" decoding="async" src="figma-assets/flow-cta-glow-529-27016.webp" alt=""></span>
    <a class="flow-cta-exact" href="#estimate" data-node-id="529:27017"><span class="flow-cta-surface" data-node-id="529:27019"><img loading="lazy" decoding="async" src="figma-assets/flow-cta-chevrons-529-27020.webp" alt=""><strong data-node-id="529:27027">お申し込みはこちら</strong></span></a>`);

  replace('[data-node-id="392:61195"]', `
    <img loading="lazy" decoding="async" class="repeat-corner" src="figma-assets/repeat-corner.webp" alt="">
    <div class="repeat-panel"></div>
    <h2 class="repeat-title">2回目からは、<br>さらに使いやすく!</h2>
    <p class="repeat-intro">サービスを既に利用されたことのある方は<br><strong>お客様専用のマイページより</strong></p>
    <p class="repeat-shortcut">たった<strong>3点の記入</strong>でラクラクお申し込みが完了！</p>
    <div class="repeat-circle repeat-circle--gift">
      <img loading="lazy" decoding="async" src="figma-assets/repeat-circle-top.webp" alt="">
      <span class="gift-card"><b>GIFTCODE</b><i>＊＊＊＊＊＊＊＊</i></span>
      <strong>ギフトコード</strong>
    </div>
    <div class="repeat-circle repeat-circle--bank">
      <img loading="lazy" decoding="async" class="repeat-circle-bg" src="figma-assets/repeat-circle-bank.webp" alt="">
      <span class="bank-icon"><img loading="lazy" decoding="async" src="figma-assets/repeat-bank-2.webp" alt=""><img loading="lazy" decoding="async" src="figma-assets/repeat-bank-1.webp" alt=""><img loading="lazy" decoding="async" src="figma-assets/repeat-bank-column.webp" alt=""><img loading="lazy" decoding="async" src="figma-assets/repeat-bank-column.webp" alt=""><img loading="lazy" decoding="async" src="figma-assets/repeat-bank-3.webp" alt=""></span>
      <strong>銀行口座</strong>
    </div>
    <div class="repeat-circle repeat-circle--amount">
      <img loading="lazy" decoding="async" class="repeat-circle-bg" src="figma-assets/repeat-circle-top.webp" alt="">
      <img loading="lazy" decoding="async" class="yen-icon" src="figma-assets/repeat-yen.webp" alt="">
      <strong>金額</strong>
    </div>
    <a class="repeat-mypage" href="#apply">マイページが<br>見つからない方はこちら※</a>
    <p class="repeat-note">※ご登録のメールアドレスにマイページをお送りします。</p>`);

  const faqs = [
    ['利用する際に身分証明証は必要ですか。','初回のご利用のみ、顔写真付きの身分証明<br>書のご提示をお願いしております。2回目<br>以降のご利用の際は不要となっておりま<br>す。<br>※一定期間ご利用が空いたお客様には、再<br>度ご提示をお願いする場合がございます。'],
    ['第三者に利用を知られることはありますか。','ご家族・勤務先へのご連絡や郵送物は一切ありません。個人情報は厳重に管理しています。'],
    ['銀行への振込はいつ反映されますか。','お振込み完了後、金融機関の処理状況に応じて口座へ反映されます。'],
    ['Appleギフトカードはどこで購入できますか？','コンビニエンスストアやオンラインストアなどで購入できます。'],
    ['Appleギフトカード以外の買取も受け付けていますか。','Appleギフトカードのみを専門にお買取りしています。'],
    ['申込金額はいくらからですか。','お申し込み画面に表示される最低金額からご利用いただけます。'],
    ['1日の利用上限はいくらですか。','ご利用状況に応じて個別にご案内しています。']
  ];
  const faq = replace('[data-node-id="392:61241"]', `
    <img loading="lazy" decoding="async" class="faq-title-glow" src="figma-assets/faq-title-glow.webp" alt="">
    <h2 class="faq-title">よくある質問</h2>
    <div class="faq-list">${faqs.map(([question,answer],i)=>`<div class="faq-item faq-item--${i+1}"><button class="faq-summary" type="button" aria-expanded="false"><span class="faq-q"><img loading="lazy" decoding="async" src="figma-assets/faq-q-circle.webp" alt=""><b>Q</b></span><strong>${question}</strong><i class="faq-toggle"></i></button><p class="faq-answer">${answer}</p></div>`).join('')}</div>`);
  const faqItems = [...(faq?.querySelectorAll('.faq-item') || [])];
  const setFaqItem = (item, expanded) => {
    item.classList.toggle('is-expanded', expanded);
    item.querySelector('.faq-summary').setAttribute('aria-expanded', String(expanded));
  };
  const updateFaqLayout = () => {
    const list = faq?.querySelector('.faq-list');
    let listHeight = 20 * Math.max(0, faqItems.length - 1);
    faqItems.forEach((item, index) => {
      const answer = item.querySelector('.faq-answer');
      const closedHeight = [1, 4, 6].includes(index) ? 94 : 93;
      const expandedHeight = Math.ceil(78 + answer.scrollHeight);
      item.style.setProperty('--faq-expanded-height', `${expandedHeight}px`);
      listHeight += item.classList.contains('is-expanded') ? expandedHeight : closedHeight;
    });
    list?.style.setProperty('--faq-list-height', `${listHeight}px`);
    faq?.style.setProperty('--faq-section-height', `${118 + listHeight + 83}px`);
  };
  const resetFaq = () => {
    faqItems.forEach(item => setFaqItem(item, false));
    updateFaqLayout();
  };
  resetFaq();
  window.addEventListener('pageshow', resetFaq, { once: true });
  faqItems.forEach(item => item.querySelector('.faq-summary').addEventListener('click', () => {
    const shouldExpand = !item.classList.contains('is-expanded');
    setFaqItem(item, shouldExpand);
    updateFaqLayout();
  }));
  window.addEventListener('resize', updateFaqLayout);

  const newsItems = [
    {
      date: '2026.06.24',
      datetime: '2026-06-24',
      title: '【期間限定】<br>再利用のお客様も還元率92％',
      body: `<p>いつも即日アリアちゃんをご利用いただき、誠にありがとうございます。</p>
        <p>日頃ご利用いただいている皆様への感謝を込めて、期間限定で還元率92％キャンペーンを実施いたします。<br>キャンペーン期間中は何度利用してもご新規様同様92％でお受けすることが出来ます！</p>
        <div class="campaign-period">
          <h3>【キャンペーン期間】</h3>
          <p><strong>6月24日 22:00 ～ 6月26日 23:59</strong></p>
        </div>
        <p>再利用をご検討中のお客様は、ぜひこの機会をご活用くださいませ。</p>
        <p>皆様のお申し込みを心よりお待ちしております。</p>`
    },
    {
      date: '2026.05.13',
      datetime: '2026-05-13',
      title: '即日アリアちゃんが<br>生まれ変わりました！',
      body: `<p>新しくなった即日アリアちゃんでは、ご不要になったAppleギフトカードをお取引するサービスとなっております。</p>
        <p>以前ご利用いただいていたお客様につきましても、今回より新規のお客様としてご案内させていただきます。<br>※以前のマイページはご利用いただけませんのでご注意ください。</p>
        <p>はじめての方も、以前ご利用いただいていた方も、ぜひこの機会にご利用ください。</p>
        <p>スタッフ一同、たくさんのお申し込みを心よりお待ちしております。</p>`
    }
  ];
  replace('[data-node-id="392:61312"]', `
    <h2 class="news-title">最新のお知らせ</h2>
    <div class="news-list">${newsItems.map(({ date, datetime, title, body }, index) => `
      <details class="news-item news-item--${index + 1}">
        <summary class="news-summary">
          <span class="news-row"><strong>${title}</strong><img loading="lazy" decoding="async" src="figma-assets/news-chevron.webp" alt=""></span>
          <time datetime="${datetime}">${date}</time>
        </summary>
        <div class="news-answer"><div class="news-answer__inner">${body}</div></div>
      </details>`).join('')}</div>`);

  document.querySelectorAll('#news .news-item').forEach(item => {
    const summary = item.querySelector('.news-summary');
    const answer = item.querySelector('.news-answer');
    summary.addEventListener('click', async event => {
      event.preventDefault();
      if (item.classList.contains('is-animating')) return;
      item.classList.add('is-animating');

      if (item.open) {
        item.classList.add('is-closing');
        const animation = answer.animate([
          { height: `${answer.offsetHeight}px`, opacity: 1 },
          { height: '0px', opacity: 0 }
        ], { duration: 420, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'forwards' });
        await animation.finished;
        item.open = false;
        animation.cancel();
        item.classList.remove('is-closing');
      } else {
        item.open = true;
        const targetHeight = answer.offsetHeight;
        const animation = answer.animate([
          { height: '0px', opacity: 0 },
          { height: `${targetHeight}px`, opacity: 1 }
        ], { duration: 420, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'forwards' });
        await animation.finished;
        animation.cancel();
      }

      item.classList.remove('is-animating');
    });
  });

  const companyRows = [
    ['社名', '株式会社Aria（英語名：Aria, inc.）'],
    ['所在地', '〒151-0053<br>東京都渋谷区代々木2-20-12<br>呉羽小野木ビル3F-C'],
    ['メールアドレス', 'info@sokujitsu.aria-inc.co.jp'],
    ['電話番号', '<a href="tel:0362580063">03-6258-0063</a>'],
    ['営業時間', '<span>07:00 ～ 22:00（土日祝も営業）</span><span class="company-hours">毎月1日は24時間営業いたします。<img loading="lazy" decoding="async" src="figma-assets/company-hours-line.webp" alt=""></span>'],
    ['設立', '2020年6月9日'],
    ['代表取締役', '大附　俊幸'],
    ['事業内容', 'ネット型リユース事業<br>オンラインショップ向け決済サービス<br>ファクタリング事業'],
    ['資本金', '9000万円'],
    ['古物商番号', '東京都公安委員会許可<br>古物商　第304362115284号']
  ];
  replace('[data-node-id="392:61338"]', `
    <h2 class="company-title">会社概要</h2>
    <dl class="company-table">${companyRows.map(([label, value], index) => `<div class="company-row company-row--${index + 1}"><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>
    <figure class="company-building"><img loading="lazy" decoding="async" src="figma-assets/company-building.webp" alt="呉羽小野木ビル外観"></figure>
    <figure class="company-map"><iframe title="株式会社Aria 所在地マップ（東京都渋谷区代々木2-20-12）" src="https://www.google.com/maps?q=35.6860787%2C139.696861&z=18&output=embed" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></figure>`);

  const amount = estimator?.querySelector('#amount');
  const estimatePanel = estimator?.querySelector('.estimate-panel');
  const format = value => Math.trunc(value).toLocaleString('ja-JP');
  const normalizeDigits = value => value
    .replace(/[０-９]/g, character => String.fromCharCode(character.charCodeAt(0) - 0xFEE0))
    .replace(/[^0-9]/g, '')
    .slice(0, 7);
  let hasUserAmount = false;

  const renderEstimate = value => {
    const firstValue = Math.floor(value * rates.first / 100);
    const repeatValue = Math.floor(value * rates.repeat / 100);
    estimator.querySelector('#firstResult').innerHTML = `${format(firstValue)}<small>円</small>`;
    estimator.querySelector('#repeatResult').innerHTML = `${format(repeatValue)}<small>円</small>`;
  };

  const syncRateDisplays = () => {
    rates = readRates();
    const heroValues = rateSource?.querySelectorAll('.current-rate__grid strong');
    if (heroValues?.[0]) heroValues[0].innerHTML = `${rates.first}<em>％</em>`;
    if (heroValues?.[1]) heroValues[1].innerHTML = `${rates.repeat}<em>％</em>`;
    const firstEstimateRate = estimator?.querySelector('#firstEstimateRate');
    const repeatEstimateRate = estimator?.querySelector('#repeatEstimateRate');
    if (firstEstimateRate) firstEstimateRate.textContent = `${rates.first}％`;
    if (repeatEstimateRate) repeatEstimateRate.textContent = `${rates.repeat}％`;
    document.querySelectorAll('[data-rate-display="first"]').forEach(node => node.innerHTML = `${rates.first}<small>％</small>`);
    document.querySelectorAll('[data-rate-display="repeat"]').forEach(node => node.innerHTML = `${rates.repeat}<small>％</small>`);
    const digits = normalizeDigits(amount?.value || '');
    renderEstimate(digits ? Number(digits) : initialAmount);
  };

  amount?.addEventListener('focus', () => {
    if (!hasUserAmount) amount.value = '';
  });
  amount?.addEventListener('input', () => {
    const digits = normalizeDigits(amount.value);
    amount.value = digits;
    hasUserAmount = digits.length > 0;
    estimatePanel?.classList.toggle('is-pending', !hasUserAmount);
    renderEstimate(hasUserAmount ? Number(digits) : initialAmount);
  });
  amount?.addEventListener('blur', () => {
    const digits = normalizeDigits(amount.value);
    if (!digits) {
      hasUserAmount = false;
      amount.value = format(initialAmount);
      estimatePanel?.classList.add('is-pending');
      renderEstimate(initialAmount);
      return;
    }
    hasUserAmount = true;
    amount.value = format(Number(digits));
    estimatePanel?.classList.remove('is-pending');
    renderEstimate(Number(digits));
  });

  if (rateSource) {
    new MutationObserver(syncRateDisplays).observe(rateSource, {
      attributes: true,
      attributeFilter: ['data-first-rate', 'data-repeat-rate']
    });
  }
  syncRateDisplays();
})();
