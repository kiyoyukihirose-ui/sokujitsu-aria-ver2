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
