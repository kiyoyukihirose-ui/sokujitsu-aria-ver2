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
    ['▥','法人による運営','即日アリアちゃんは、株式会社Ariaが責任を持って運営するサービスです。'],
    ['✓','古物商許可取得済み','公安委員会より古物商許可を取得し、法令を遵守して運営しています。','東京都公安委員会 第304362115284号'],
    ['▣','プライバシーに配慮した運営','ご家族・勤務先へのご連絡や郵送物は一切ありません。お預かりした個人情報は厳重に管理しています。']
  ];
  replace('[data-node-id="392:55956"]', `
    <div class="arrow-heading"><small>はじめての方でも安心</small><strong>アリアちゃんが選ばれる理由</strong></div>
    <div class="reason-list">${reasons.map(([icon,title,body,note])=>`<article><i>${icon}</i><div><h3>${title}</h3><p>${body}</p>${note?`<small>${note}</small>`:''}</div></article>`).join('')}</div>`);

  const steps = [
    ['STEP 1','ご自身でAppleギフトカードを購入','asset-flow-icon-card.png','現物のカード、オンラインカードのどちらでもご利用いただけます。'],
    ['STEP 2','ギフトコード・必要事項を入力してお申し込み','asset-flow-icon-form.png','ギフトコードと写真付き身分証明書をご用意ください。'],
    ['STEP 3','確認後、お客様の口座へ買取代金を振込','asset-flow-icon-bag.png','お申し込みから入金まで最短3分で完了します。']
  ];
  replace('[data-node-id="456:89585"]', `
    <div class="arrow-heading"><small>あっという間に振込完了！</small><strong>お申し込みの流れ</strong></div>
    <div class="step-list">${steps.map(([step,title,img,body],i)=>`<article><b>${step}</b><h3>${title}</h3><img src="${img}" alt=""><p>${body}</p>${i<2?'<span class="step-arrow">▼</span>':''}</article>`).join('')}</div>
    <a class="orange-cta flow-cta" href="#estimate">お申し込みはこちら <span>››</span></a>`);

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
