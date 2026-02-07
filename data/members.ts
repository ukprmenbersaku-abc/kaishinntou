import { Member } from '../types';

export const members: Member[] = [
  {
    id: 'm1',
    name: '岩本 宗祐',
    role: '党首',
    bio: '1年生ながら改新党を立ち上げた行動派。「聴く学校」を掲げ、生徒一人ひとりの声が確実に届く生徒会を目指す。',
    image: "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='14' fill='%23f5f5f4'/%3E%3Cg stroke='%23292524' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='20' cy='36' r='10'/%3E%3Ccircle cx='44' cy='36' r='10'/%3E%3Cpath d='M30 36c0-4 6-4 6 0'/%3E%3Cpath d='M10 32l3-10c1-3 3-5 7-5'/%3E%3Cpath d='M54 32l-3-10c-1-3-3-5-7-5'/%3E%3C/g%3E%3C/svg%3E",
    detailBio: '元芳川小環境委員長。入学直後から「もっと学校は楽しくなるはず」という想いを抱き、クラスメイトとの対話の中で改新党の構想を練り上げてきました。誰にでも気さくに話しかける性格で、休み時間は常に誰かと話し込んでいます。「先生が決めたルール」ではなく「みんなで決めたルール」で動く学校を作るため、1年生という立場を恐れずに立候補を決意しました。',
    message: '筑摩野改新党を立ち上げる際の、皆さんのご協力に感謝しています。私は、筑摩野中学校を皆が楽しく、「筑中に来てよかった。」と思える学校にする。その強い志があります。その志を実現するには、皆さんのご協力が必要です。どうか、皆さんのご協力をお願いします。皆さんと一緒に「誇りの持てる筑中」を作りましょう！',
    tags: ['#行動力おばけ', '#聴く力', '#有言実行', '#フットワーク軽め'],
    color: 'bg-stone-100 text-stone-700'
  },
  {
    id: 'm2',
    name: 'S',
    role: '共同代表',
    bio: '岩本と共に党を率いる共同代表。デジタル技術への造詣が深く、改革を支えるシステム作りを担当。',
    image: "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='brandGradient' x1='0' y1='0' x2='64' y2='64' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230284c7'/%3E%3Cstop offset='1' stop-color='%237c3aed'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' width='64' height='64' rx='14' fill='url(%23brandGradient)'/%3E%3Cg transform='translate(11, 11) scale(1.75)' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='10' x='3' y='11' rx='2' /%3E%3Ccircle cx='12' cy='5' r='2' /%3E%3Cpath d='M12 7v4' /%3E%3Cline x1='8' x2='8' y1='16' y2='16' /%3E%3Cline x1='16' x2='16' y1='16' y2='16' /%3E%3C/g%3E%3C/svg%3E",
    detailBio: '元芳川小給食委員長。幼い頃からプログラミングやシステム構築に興味を持ち、独学で知識を深めてきました。AIやwebについての知識が少しある。「不便さ」をデジタルの力で「快適さ」に変えるアイデアを常に持っており、岩本の掲げる理想を現実的なプランに落とし込む役割を担っています。熱意がないように感じますが、学校を良くしたいという情熱は人一倍です。',
    message: '「便利になること」は悪いことではありません。タブレットの規制緩和も、防災システムのデジタル化も、すべては皆さんが安全に、そして自由に学ぶためです。システムを変えれば、学校生活のストレスはもっと減らせます。僕が提案するのは、根性論ではない、合理的でスマートな学校改革です。ぜひ力を貸してください。',
    tags: ['#デジタル通', '#冷静沈着', '#アイデアマン', '#システム構築'],
    color: 'bg-stone-100 text-stone-700'
  },
  {
    id: 'm6',
    name: 'O.R',
    role: '幹事長',
    bio: '令和八年度より就任。党の実務全体を取り仕切る。',
    image: '',
    detailBio: '新たに幹事長に就任しました。細やかな気配りと強い責任感で、党の運営をスムーズに進めます。',
    message: '岩本代表を支え、みんなが活動しやすい環境を作っていきます。よろしくお願いします。',
    tags: ['#新任', '#責任感', '#幹事長'],
    color: 'bg-emerald-50 text-emerald-700'
  },
  {
    id: 'm7',
    name: 'M.Y',
    role: '幹事長代行',
    bio: '幹事長を補佐し、現場レベルでの調整を行う。',
    image: '',
    detailBio: '幹事長代行として、幹事長をサポートしつつ、各部署の連携を強化する役割を担います。',
    message: '縁の下の力持ちとして頑張ります！',
    tags: ['#新任', '#サポート', '#連携'],
    color: 'bg-emerald-50 text-emerald-700'
  },
  {
    id: 'm8',
    name: 'T.K',
    role: '政調会長',
    bio: '政策の立案と具体化を担当。公約実現のキーマン。',
    image: '',
    detailBio: '政調会長として、掲げた公約をどのように実現するか、具体的なプランを練り上げます。論理的な思考で党を導きます。',
    message: '公約を絵に描いた餅にはしません。実現への道筋をしっかり作ります。',
    tags: ['#新任', '#政策通', '#論理的'],
    color: 'bg-purple-50 text-purple-700'
  },
  {
    id: 'm9',
    name: 'O.K',
    role: '総務会長',
    bio: '選挙対策委員長から配置換。組織全体の総務を統括。',
    image: '',
    detailBio: '以前は選挙対策委員長を務めていましたが、その経験を活かして今後は総務会長として組織全体の運営・管理を行います。',
    message: '立場は変わりましたが、党を良くしたいという思いは変わりません。総務としてしっかり支えます。',
    tags: ['#配置換', '#経験豊富', '#総務'],
    color: 'bg-indigo-50 text-indigo-700'
  },
  {
    id: 'm10',
    name: 'Y.T',
    role: '選挙対策委員長',
    bio: '選挙戦略の新たな司令塔。広報活動を指揮する。',
    image: '',
    detailBio: '新しく選挙対策委員長に就任しました。斬新なアイデアで、改新党の魅力を全校生徒に伝えていきます。',
    message: '選挙戦、盛り上げていきます！面白い企画を考えているので楽しみにしていてください。',
    tags: ['#新任', '#広報戦略', '#アイデアマン'],
    color: 'bg-orange-50 text-orange-700'
  },
  {
    id: 'userkunn',
    name: 'userkunn',
    role: 'Technical Support',
    bio: 'Web System & Design Supportを担当。',
    image: 'https://drive.google.com/thumbnail?id=1nolPkDG-DG2SsJH3KbzrD885upRA1Mds&sz=w1000',
    detailBio: '1年生のweb係です。改新党の公式サイトの作成と運営、ポスターのデザインなどを担当しています。webサイトを通して、改新党の活動をより多くの人に知ってもらうために尽力します。',
    message: '改新党の公式サイトを見ていただきありがとうございます。このサイトを通じて、改新党の活動をより深く知っていただければ幸いです。',
    tags: ['#Web担当', '#デザイン', '#裏方'],
    color: 'bg-stone-100 text-stone-700'
  }
];