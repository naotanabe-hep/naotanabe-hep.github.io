// String.raw 内では TeX のバックスラッシュをそのまま書けます。
// 公開ページの文章は英語版(en)・日本語版(ja)をそれぞれ編集してください。
const siteContent = {
 en: {
  nav: ['Profile','Research','CV'], name: 'Naozumi Tanabe', discipline: 'Science Tokyo Particle Physics Group',
  profile: String.raw`
  <div class="eyebrow">PROFILE</div><h1>Naozumi Tanabe</h1>
  <p class="lead">Science Tokyo Particle Physics Group</p>
  <div class="profile-grid"><section><h2>Research interests</h2><ul class="interests"><li>Conformal field theories</li><li>ODE/IM correspondence</li><li>(Supersymmetric) $\mathcal{W}$-algebras</li></ul><a class="text-link" href="#research">Explore research <span>↗</span></a></section>
  <section class="details"><div><h2>Affiliation</h2><p>Department of Physics, School of Science<br>Institute of Science Tokyo</p><a class="text-link" href="http://www.th.phys.titech.ac.jp/particle/indexj.html">Particle Physics Group ↗</a></div><div><h2>Supervisor</h2><p><a href="http://www.th.phys.titech.ac.jp/ito/index.html">Katsushi Ito ↗</a></p></div><div><h2>Contact</h2><p><a href="mailto:naotanabe.hepth@gmail.com">naotanabe.hepth@gmail.com ↗</a></p></div></section></div>`,
  research: String.raw`
  <div class="eyebrow">RESEARCH</div><h1>Research</h1><p class="lead">Conformal field theories, ODE/IM correspondence<br>and (supersymmetric) $\mathcal{W}$-algebras.</p>
  <section class="section"><h2>Papers <span class="count">01</span></h2><article class="publication"><div class="meta">2026 · JOURNAL ARTICLE</div><h3>The ODE/IM Correspondence between $C(2)^{(2)}$-type Linear Problems and 2d $\mathcal{N}=1$ SCFT</h3><div class="link-row"><a href="https://doi.org/10.1007/JHEP08(2026)150">JHEP (2026) ↗</a><a href="https://arxiv.org/abs/2604.14899">arXiv:2604.14899 ↗</a></div></article></section>
  <section class="section"><h2>Talks &amp; posters <span class="count">03</span></h2>
  <article class="talk"><div class="meta">AUG 2026</div><div><h3>ODE/IM correspondence between the $C(2)^{(2)}$-type linear problem and 2d $\mathcal{N}=1$ SCFT</h3><p><a href="https://www2.yukawa.kyoto-u.ac.jp/~qft.web/2026/">Strings and Fields 2026 ↗</a></p><a class="text-link" href="https://drive.google.com/file/d/18955htzvMleQ2ZhLxFbZ0YOA1ZWh2kve/view?usp=share_link">Poster (in Japanese) ↗</a></div></article>
  <article class="talk"><div class="meta">AUG 2026</div><div><h3>ODE/IM correspondence between the $C(2)^{(2)}$-type linear problem and 2d $\mathcal{N}=1$ SCFT</h3><p><a href="https://www2.yukawa.kyoto-u.ac.jp/~sansha.wakate/school2026/">原子核三者若手 夏の学校 2026 ↗</a></p><a class="text-link" href="https://drive.google.com/file/d/18955htzvMleQ2ZhLxFbZ0YOA1ZWh2kve/view?usp=share_link">Slide (in Japanese) ↗</a></div></article>
  <article class="talk"><div class="meta">AUG 2025</div><div><h3>Infinite Chiral Symmetry in Four Dimensions</h3><p><a href="https://www2.yukawa.kyoto-u.ac.jp/~sansha.wakate/school2025/index.html">原子核三者若手 夏の学校 2025 ↗</a></p><a class="text-link" href="https://drive.google.com/file/d/17fNuNt5uGEnm7wJ8CzPSXzmtStKo8_WY/view?usp=share_link">Poster (in Japanese) ↗</a></div></article></section>`,
  cv: String.raw`
  <div class="eyebrow">CURRICULUM VITAE</div><h1>CV</h1><p class="lead">Education &amp; teaching experience.</p>
  <section class="section"><h2>Education</h2><div class="timeline"><article><div class="meta">APR 2025 — PRESENT</div><div><h3>Master’s course · Department of Physics, School of Science</h3><p>Institute of Science Tokyo</p></div></article><article><div class="meta">APR 2021 — MAR 2025</div><div><h3>B.S. · Department of Applied Physics, Faculty of Science Division I</h3><p>Tokyo University of Science</p></div></article></div></section>
  <section class="section"><h2>Teaching experience</h2><p>Teaching Assistant · Institute of Science Tokyo</p><div class="timeline"><article><div class="meta">AUTUMN 2026</div><h3>Exercise in Electromagnetism</h3></article><article><div class="meta">SPRING 2026</div><h3>Exercise in Mechanics</h3></article><article><div class="meta">AUTUMN 2025</div><h3>Exercise in Electromagnetism</h3></article><article><div class="meta">SPRING 2025</div><h3>Exercise in Mechanics</h3></article></div></section>`
 },
 ja: {
  nav: ['プロフィール','研究','経歴'], name: '田邉直純', discipline: '東京科学大学 素粒子論グループ',
  profile: String.raw`
  <div class="eyebrow">プロフィール</div><h1>田邉直純</h1><p class="lead">東京科学大学 素粒子論グループ</p>
  <div class="profile-grid"><section><h2>研究分野</h2><ul class="interests"><li>共形場理論</li><li>ODE/IM対応</li><li>（超対称）$\mathcal{W}$代数</li></ul><a class="text-link" href="#research">研究を見る <span>↗</span></a></section><section class="details"><div><h2>所属</h2><p>東京科学大学 理学院 物理学系</p><a class="text-link" href="http://www.th.phys.titech.ac.jp/particle/indexj.html">素粒子論グループのホームページ ↗</a></div><div><h2>指導教員</h2><p><a href="http://www.th.phys.titech.ac.jp/ito/index.html">伊藤克司 ↗</a></p></div><div><h2>連絡先</h2><p><a href="mailto:naotanabe.hepth@gmail.com">naotanabe.hepth@gmail.com ↗</a></p></div></section></div>`,
  research: String.raw`
  <div class="eyebrow">研究</div><h1>研究</h1><p class="lead">共形場理論、ODE/IM対応、<br>（超対称）$\mathcal{W}$代数。</p>
  <section class="section"><h2>論文 <span class="count">01</span></h2><article class="publication"><div class="meta">2026 · 学術論文</div><h3>The ODE/IM Correspondence between $C(2)^{(2)}$-type Linear Problems and 2d $\mathcal{N}=1$ SCFT</h3><div class="link-row"><a href="https://doi.org/10.1007/JHEP08(2026)150">JHEP (2026) ↗</a><a href="https://arxiv.org/abs/2604.14899">arXiv:2604.14899 ↗</a></div></article></section>
  <section class="section"><h2>研究発表 <span class="count">03</span></h2>
  <article class="talk"><div class="meta">2026年8月</div><div><h3>$C(2)^{(2)}$型線形問題と2d $\mathcal{N}=1$ SCFTのODE/IM対応</h3><p><a href="https://www2.yukawa.kyoto-u.ac.jp/~qft.web/2026/">場の理論と弦理論 2026 ↗</a></p><a class="text-link" href="https://drive.google.com/file/d/18955htzvMleQ2ZhLxFbZ0YOA1ZWh2kve/view?usp=share_link">ポスター ↗</a></div></article>
  <article class="talk"><div class="meta">2026年8月</div><div><h3>$C(2)^{(2)}$型線形問題と2d $\mathcal{N}=1$ SCFTのODE/IM対応</h3><p><a href="https://www2.yukawa.kyoto-u.ac.jp/~sansha.wakate/school2026/">原子核三者若手 夏の学校 2026 ↗</a></p><a class="text-link" href="https://drive.google.com/file/d/18955htzvMleQ2ZhLxFbZ0YOA1ZWh2kve/view?usp=share_link">スライド ↗</a></div></article>
  <article class="talk"><div class="meta">2025年8月</div><div><h3>無限次元Chiral対称性</h3><p><a href="https://www2.yukawa.kyoto-u.ac.jp/~sansha.wakate/school2025/index.html">原子核三者若手 夏の学校 2025 ↗</a></p><a class="text-link" href="https://drive.google.com/file/d/17fNuNt5uGEnm7wJ8CzPSXzmtStKo8_WY/view?usp=share_link">ポスター ↗</a></div></article></section>`,
  cv: String.raw`
  <div class="eyebrow">経歴</div><h1>経歴</h1><p class="lead">学歴・教育活動。</p><section class="section"><h2>学歴</h2><div class="timeline"><article><div class="meta">2025年4月 - 現在</div><div><h3>東京科学大学 理学院 物理学系 修士課程</h3></div></article><article><div class="meta">2021年4月 - 2025年3月</div><div><h3>東京理科大学 理学部第一部 応用物理学系 学士課程</h3></div></article></div></section>
  <section class="section"><h2>教育活動</h2><p>東京科学大学 · ティーチング・アシスタント</p><div class="timeline"><article><div class="meta">2026年度 後期</div><h3>電磁気学演習</h3></article><article><div class="meta">2026年度 前期</div><h3>力学演習</h3></article><article><div class="meta">2025年度 後期</div><h3>電磁気学演習</h3></article><article><div class="meta">2025年度 前期</div><h3>力学演習</h3></article></div></section>`
 }
};
