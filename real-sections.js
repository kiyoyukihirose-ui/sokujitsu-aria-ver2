(() => {
  const replace = (selector, html) => {
    const node = document.querySelector(selector);
    if (node) node.innerHTML = html;
    return node;
  };

  const estimator = replace('[data-node-id="392:52780"]', `
    <p class="estimator-license">※東京都公安委員会 第304362115284号</p>
    <div class="estimate-panel">
      <h2>見積もり計算</h2>
      <label class="estimate-input"><input id="amount" inputmode="numeric" value="5,000" aria-label="Appleギフトカード額面"><span>円分</span></label>
      <p class="estimate-lead">のAppleギフトカードがある場合</p>
      <div class="estimate-result estimate-result--first"><span>初回</span><strong id="firstResult">4,500<small>円</small></strong><b>90%</b></div>
      <div class="estimate-result estimate-result--repeat"><span>2回目以降</span><strong id="repeatResult">4,350<small>円</small></strong><b>87%</b></div>
      <p class="estimate-copy">をそのままお振込み！<br><strong>振込手数料・事務手数料0円！</strong></p>
      <a class="orange-cta" href="#apply">この金額で申し込む <span>››</span></a>
    </div>`);

  const services = [
    ['figma-assets/rate-raw-11.png','クレジットカード'],
    ['figma-assets/rate-raw-7.png','プリペイドカード'],
    ['figma-assets/rate-raw-3.png','バンドルカード'],
    ['figma-assets/rate-raw-10.png','ファミペイ'],
    ['figma-assets/rate-raw-13.png','Kyash'],
    ['figma-assets/rate-raw-5.png','ワンバンク'],
    ['figma-assets/rate-raw-9.png','キャリア決済'],
    ['figma-assets/rate-raw-12.png','メルペイ スマート払い']
  ];
  replace('[data-node-id="431:85282"]', `
    <div class="rate-board">
      <h2><img src="figma-assets/rate-raw-2.png" alt="">Appleギフトカード買取</h2>
      <table><thead><tr><th></th><th>初回</th><th>2回目以降</th></tr></thead>
      <tbody>${services.map(([icon,name]) => `<tr><th><i><img src="${icon}" alt=""></i><span>${name}</span></th><td>90<small>％</small></td><td>87<small>％</small></td></tr>`).join('')}</tbody></table>
      <p>※Appleギフトカードのみの買取となります</p>
    </div>`);

  replace('[data-node-id="392:54873"]', `
    <div class="speed-band"><img src="asset-speed-title-band.png" alt=""><p><small>即日アリアちゃんは</small><strong>振込までがとにかく速い！</strong></p></div>
    <div class="speed-badge"><img src="asset-speed-badge-bg.png" alt=""><p><small>申込から振込まで、</small><strong>最短<em>3</em>分</strong></p></div>
    <img class="speed-aria" src="asset-speed-aria.png" alt="案内するアリアちゃん">
    <div class="speed-copy"><p>Appleギフトカード専門の買取だからこそ<br>実現できるスピードで、<br>待ち時間の不安や急な出費に応えます。</p><small>※繁忙期などお申込みが集中した場合は、<br>入金までお時間をいただく場合がございます。</small></div>`);

  replace('[data-node-id="392:54905"]', `
    <img class="fee-halftone" src="asset-fee-halftone-sp.png" alt="">
    <div class="fee-band"><img src="asset-speed-title-band.png" alt=""><p><small>買取率ピッタリで入金</small><strong>振込手数料0円</strong></p></div>
    <img class="fee-zero-art" src="asset-fee-zero.png" alt="0円">
    <div class="fee-copy"><p><strong>即日アリアちゃんなら、</strong><br>振込手数料・事務手数料0円。<br>買取率ピッタリでの振込をお約束します。</p></div>`);

  const reasons = [
    ['figma-assets/reason-building.svg','法人による運営','即日アリアちゃんは、株式会社Ariaが<br>責任を持って運営するサービスです。'],
    ['figma-assets/reason-shield.png','古物商許可取得済み','公安委員会より古物商許可を取得し、<br>法令を遵守して運営しています。','東京都公安委員会 第304362115284号'],
    ['figma-assets/reason-lock.png','プライバシーに配慮した運営','ご家族・勤務先へのご連絡や郵送物は<br>一切ありません。<br>お預かりした個人情報は厳重に管理し<br>ています。']
  ];
  replace('[data-node-id="392:55956"]', `
    <img class="reason-halftone" src="asset-flow-halftone-sp-left-top.png" alt="">
    <div class="reason-band"><img src="asset-mobile-title-band.png" alt=""><p><small>はじめての方でも安心</small><strong>アリアちゃんが選ばれる理由</strong></p></div>
    <div class="reason-cards">${reasons.map(([icon,title,body,note],i)=>`<article class="reason-card reason-card--${i+1}"><img class="reason-icon" src="${icon}" alt=""><div class="reason-text"><h3>${title}</h3><p>${body}</p>${note?`<small>${note}</small>`:''}</div></article>`).join('')}</div>`);

  const steps = [
    ['ご自身で<br>Appleギフトカードを購入','figma-assets/flow-step-1.png','現物のカード・オンラインカードど<br>ちらでもご利用いただけます。'],
    ['ギフトコード・必要事項を<br>入力してお申し込み','figma-assets/flow-step-2.png','お手元にギフトコード及び、<br>顔付き身分証明証（免許証など）の<br>写真をご用意ください。'],
    ['ギフトコードの確認後、<br>お客様の口座に買取金を振込み','figma-assets/flow-step-3.png','お申込みから入金まで、最短3分で<br>完了します。※']
  ];
  replace('[data-node-id="456:89585"]', `
    <img class="flow-dots flow-dots--1" src="asset-flow-halftone-sp-right-top.png" alt="">
    <img class="flow-dots flow-dots--2" src="asset-flow-halftone-sp-left-top.png" alt="">
    <img class="flow-dots flow-dots--3" src="asset-flow-halftone-sp-center-bottom.png" alt="">
    <img class="flow-dots flow-dots--4" src="asset-flow-halftone-sp-right-bottom.png" alt="">
    <div class="flow-band"><img src="asset-mobile-title-band.png" alt=""><p><small>あっという間に振込完了！</small><strong>お申し込みの流れ</strong></p></div>
    <div class="flow-cards">${steps.map(([title,img,body],i)=>`<article class="flow-card flow-card--${i+1}"><b class="flow-step">STEP<span>${i+1}</span></b><h3>${title}</h3><img class="flow-illustration" src="${img}" alt=""><p>${body}</p></article>`).join('')}</div>
    <p class="flow-note">※繁忙期などお申込みが集中した場合は、入金までお時間を<br>いただく場合がございます。</p>
    <a class="flow-cta-exact" href="#estimate"><img src="asset-cta-mobile-flow.png" alt="お申し込みはこちら"></a>`);

  replace('[data-node-id="392:61195"]', `
    <img class="repeat-corner" src="figma-assets/repeat-corner.svg" alt="">
    <div class="repeat-panel"></div>
    <h2 class="repeat-title">2回目からは、<br>さらに使いやすく!</h2>
    <p class="repeat-intro">サービスを既に利用されたことのある方は<br><strong>お客様専用のマイページより</strong></p>
    <p class="repeat-shortcut">たった<strong>3点の記入</strong>でラクラクお申し込みが完了！</p>
    <div class="repeat-circle repeat-circle--gift">
      <img src="figma-assets/repeat-circle-top.svg" alt="">
      <span class="gift-card"><b>GIFTCODE</b><i>＊＊＊＊＊＊＊＊</i></span>
      <strong>ギフトコード</strong>
    </div>
    <div class="repeat-circle repeat-circle--bank">
      <img class="repeat-circle-bg" src="figma-assets/repeat-circle-bank.svg" alt="">
      <span class="bank-icon"><img src="figma-assets/repeat-bank-2.svg" alt=""><img src="figma-assets/repeat-bank-1.svg" alt=""><img src="figma-assets/repeat-bank-column.svg" alt=""><img src="figma-assets/repeat-bank-column.svg" alt=""><img src="figma-assets/repeat-bank-3.svg" alt=""></span>
      <strong>銀行口座</strong>
    </div>
    <div class="repeat-circle repeat-circle--amount">
      <img class="repeat-circle-bg" src="figma-assets/repeat-circle-top.svg" alt="">
      <img class="yen-icon" src="figma-assets/repeat-yen.svg" alt="">
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
    <img class="faq-title-glow" src="figma-assets/faq-title-glow.svg" alt="">
    <h2 class="faq-title">よくある質問</h2>
    <div class="faq-list">${faqs.map(([question,answer],i)=>`<div class="faq-item faq-item--${i+1}${i===0?' is-expanded':''}"><button class="faq-summary" type="button" aria-expanded="${i===0}"><span class="faq-q"><img src="figma-assets/faq-q-circle.svg" alt=""><b>Q</b></span><strong>${question}</strong><i class="faq-toggle"></i></button><p class="faq-answer">${answer}</p></div>`).join('')}</div>`);
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
    faqItems.forEach((item, index) => setFaqItem(item, index === 0));
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

  const amount = estimator?.querySelector('#amount');
  const format = value => Math.round(value).toLocaleString('ja-JP');
  const update = () => {
    const value = Number(amount.value.replace(/[^0-9]/g, '')) || 0;
    estimator.querySelector('#firstResult').innerHTML = `${format(value * .9)}<small>円</small>`;
    estimator.querySelector('#repeatResult').innerHTML = `${format(value * .87)}<small>円</small>`;
  };
  amount?.addEventListener('input', update);
  amount?.addEventListener('blur', () => amount.value = format(Number(amount.value.replace(/[^0-9]/g, '')) || 0));
})();
