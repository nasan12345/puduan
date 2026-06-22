/* ============================================
   蒲团 · 成长21课 — 数据层
   ============================================ */

// ── 五阶段定义 ──
const PHASES = {
  1: { name:'初遇', color:'#b8a8c8', colorDeep:'#a898b8', bell:'无', eyes:'警惕半眯',
       image:'images/phase1_chuyu.png', storyImg:'images/s1.png', pracImg:'images/p1.png', greeting:'……你是谁？', cat:'瘦小猫，躲在蒲团后' },
  2: { name:'相识', color:'#c4b0d8', colorDeep:'#b09ac8', bell:'小铜铃', eyes:'睁眼友好',
       image:'images/phase2_xiangshi.png', storyImg:'images/s2.png', pracImg:'images/p2.png', greeting:'来了？', cat:'稍胖，端坐蒲团' },
  3: { name:'熟悉', color:'#b090c8', colorDeep:'#a080b8', bell:'铜铃+绿叶', eyes:'眯眼笑',
       image:'images/phase3_shuxi.png', storyImg:'images/s3.png', pracImg:'images/p3.png', greeting:'今天想玩哪一关？', cat:'圆润，四脚朝天' },
  4: { name:'默契', color:'#8a60a8', colorDeep:'#7a5098', bell:'金铃刻静', eyes:'半闭有神',
       image:'images/phase4_moqi.png', storyImg:'images/s4.png', pracImg:'images/p4.png', greeting:'你走到这一步，不容易。', cat:'胖乎乎，端坐如小长老' },
  5: { name:'自在', color:'#6a4088', colorDeep:'#5a3078', bell:'玉铃', eyes:'闭目通透',
       image:'images/phase5_yuanman.png', storyImg:'images/s5.png', pracImg:'images/p5.png', greeting:'茶一直热着。', cat:'超大圆，盘成紫莲' },
};

// ── 表情映射 ──
const EMOJI_MAP = {
  happy:  '开心', angry: '生气', confused: '疑惑', sleepy: '困倦', snarky: '毒舌'
};

function emojiPath(phase, emotion) {
  const cn = EMOJI_MAP[emotion] || '疑惑';
  return `images/${phase}_阶段${['','一','二','三','四','五'][phase]}_${['','初遇','相识','熟悉','默契','自在'][phase]}_${cn}.png`;
}

// ── 蒲团台词库 ──
const DIALOG = {
  welcome: {
    1: ['……你是谁？','你找谁？','茶在那边，自己倒。'],
    2: ['来了？','今天想玩哪一关？','茶给你倒上了。'],
    3: ['今天想玩哪一关？','来来，躺会儿。','不急不急，慢慢来。'],
    4: ['你走到这一步，不容易。','下一关，准备好了就来。'],
    5: ['你来了。','茶一直热着。','……'],
  },
  choice_good: {
    1: ['嗯……你还算客气。','算你有点意思。'],
    2: ['嗯，不错。','有点意思。'],
    3: ['嗯，敢面对就好。','你比自己想的清楚多了。'],
    4: ['嗯，不错。','你越来越稳了。'],
    5: ['好。','……'],
  },
  choice_avoid: {
    1: ['躲一会儿也行。','你确定？'],
    2: ['也行。','你开心就好。'],
    3: ['躲一会儿也行。','选哪个都行。'],
    4: ['不急。','有意思……'],
    5: ['……','你悟了吗？'],
  },
  practice: {
    1: ['试试看。','我在旁边。'],
    2: ['跟着我来。','不用太用力。'],
    3: ['不用想太多，感受就行。','嗯……就这样。'],
    4: ['闭上眼睛。','感受这一刻。'],
    5: ['……','呼吸就好。'],
  },
  sutra_intro: {
    1: ['这句啊……','古人说的。'],
    2: ['说白了就是……','你品，你细品。'],
    3: ['古人说的，其实就是你昨天遇到的那件事。','这句讲的是……'],
    4: ['这句，你自己品。','……'],
    5: ['……','你自己想想。'],
  },
  quote_close: {
    1: ['下一关见。','嗯……下次再来。'],
    2: ['嗯，过了。','下一关，准备好了就来。'],
    3: ['你比我想象的厉害。','不急，歇会儿也好。'],
    4: ['下一关，是关于心的。','山就在那里。'],
    5: ['下一轮，也从这里开始。','不急。'],
  },
  daily: {
    1: ['嗯，你来了。'],
    3: ['今天也来了？'],
    7: ['哟，认真的啊。'],
    14: ['每天都来，累不累？'],
    21: ['……'],
  },
  return_after_break: {
    7: '茶一直热着。',
    14: '嗯，你来了。',
    30: '……呼噜……',
  }
};

// ── 21关数据 ──
const LEVELS = [
  { id:1,  phase:'初遇', title:'观', subtitle:'先看看自己在急什么',
    sutra:'知人者智，自知者明。胜人者有力，自胜者强。',
    sutraBaihua:'你在急什么？先坐下来，看看自己。',
    story:{ text:'你坐在工位上，盯着屏幕上第21版修改意见。\n隔壁工位的同事已经收拾东西走了。\n茶水间的灯一盏一盏灭掉。\n你问自己：我到底在急什么？\n手机亮了一下。蒲团蹲在屏保上，眯着眼睛看你。', image:'images/story_scene.png' },
    choices:[
      { text:'继续改，改完再走', feedback:'嗯，敢面对就好。不过你真的知道自己想要什么吗？', emo:'snarky' },
      { text:'关电脑，回家', feedback:'躲一会儿也行。有时候退一步才能看清楚。', emo:'sleepy' }
    ],
    practice:{ title:'3分钟呼吸观察', instruction:'坐直，把手放在胸口。\n吸气4秒——感觉自己现在的情绪。\n呼气6秒——把情绪放走。\n重复3次。', image:'images/practice_scene.png' },
    quote:'你急什么？先坐下，喝杯茶。' },
  { id:2,  phase:'初遇', title:'色', subtitle:'看得见的，不一定是真的',
    sutra:'色不异空，空不异色，色即是空，空即是色',
    sutraBaihua:'面子是假的，里子是真的。你追的那些东西，其实追的是别人怎么看。',
    story:{ text:'手机相册里存了三千张照片。\n你翻到三年前那张：一群人举杯，笑得灿烂。\n那些人有的已经不联系了。\n那张照片里你最想要的东西——你现在还想要吗？\n蒲团蹲在相册图标上，尾巴轻轻扫了一下屏幕。', image:'images/story_scene.png' },
    choices:[
      { text:'删掉那些"不再需要"的照片', feedback:'嗯，舍得删就是放下了。', emo:'happy' },
      { text:'留着吧，都是回忆', feedback:'留着也行。记得是念，不纠结就好。', emo:'confused' }
    ],
    practice:{ title:'物品整理冥想', instruction:'找一件你身边放了很久却从没用过的东西。\n拿着它，问自己三个问题：\n1. 它有用吗？\n2. 它有纪念意义吗？\n3. 没有它我会怎样？\n然后——决定它的去留。', image:'images/practice_scene.png' },
    quote:'看得见的，不一定叫拥有。看不着的，也不一定叫没有。' },
  { id:3,  phase:'相识', title:'受', subtitle:'喜欢和不喜欢，都是债',
    sutra:'受想行识，亦复如是',
    sutraBaihua:'喜欢是债，不喜欢也是债。你连自己都骗不过去，还骗谁呢？',
    story:{ text:'你刷着朋友圈，看到前同事又升职了。\n你默默按了个赞，心里却像堵了团棉花。\n你不想承认——但那个感觉就是：凭什么？\n蒲团从茶杯后面探出头："你猜他怎么知道的？因为他以前也这样。"', image:'images/story_scene.png' },
    choices:[
      { text:'承认自己有点酸', feedback:'嗯，能承认就好。酸是酸的，但别腌入味了。', emo:'happy' },
      { text:'关掉朋友圈，不看', feedback:'不看也行。眼不见心不烦，也是一种方法。', emo:'sleepy' }
    ],
    practice:{ title:'情绪标签练习', instruction:'想一件最近让你不舒服的事。\n给它贴一个标签：嫉妒？愤怒？委屈？\n找一个词，就够了。\n不用解释为什么，不用分析。\n只是——看着它。', image:'images/practice_scene.png' },
    quote:'喜欢是债，不喜欢也是债。你连自己都骗不过去，还骗谁呢？' },
  { id:4,  phase:'相识', title:'想', subtitle:'脑袋里的戏，没人买票',
    sutra:'是诸法空相，不生不灭，不垢不净，不增不减',
    sutraBaihua:'脑袋里的戏演得再热闹，也没人买票。',
    story:{ text:'凌晨两点，你躺在床上想白天说错的那句话。\n翻来覆去：他是不是生气了？我是不是太蠢了？明天怎么解释？\n你看了看手机。蒲团蜷在充电器旁边，睡得很香。', image:'images/story_scene.png' },
    choices:[
      { text:'继续想，想到想通为止', feedback:'想太多，容易栽进去。该睡了。', emo:'snarky' },
      { text:'写下来，然后不想了', feedback:'写下来是个好办法。字一落地，脑子就空了。', emo:'happy' }
    ],
    practice:{ title:'思维导出练习', instruction:'拿张纸，把脑子里所有念头全写下来。\n不要筛选，不要评判。\n写满意为止。\n然后——把纸折起来，放到一边。\n明天再看。', image:'images/practice_scene.png' },
    quote:'脑袋里的戏演得再热闹，也没人买票。你品，你细品。' },
  { id:5,  phase:'相识', title:'行', subtitle:'习惯是个好东西，也是个坏东西',
    sutra:'无眼耳鼻舌身意，无色声香味触法',
    sutraBaihua:'习惯是个好东西，也是个坏东西。就看——是你用它，还是它用你。',
    story:{ text:'你下意识摸出手机，解锁，刷视频。\n半小时过去了。\n你也不知道看了什么。但这个流程——摸→解锁→刷——比吃饭还熟练。\n蒲团蹲在你手机旁边："你每天摸它几百次，它摸过你一次吗？"', image:'images/story_scene.png' },
    choices:[
      { text:'今天少刷半小时', feedback:'嗯，有意识的选择，比无意识的惯性强。', emo:'happy' },
      { text:'删掉一个最耗时间的APP', feedback:'嚯，下狠手了。有魄力。', emo:'snarky' }
    ],
    practice:{ title:'习惯觉察日记', instruction:'今天留意一个你无意识反复做的事。\n每次做的时候，停一秒——问自己：我现在真的需要做这个吗？\n记下来。', image:'images/practice_scene.png' },
    quote:'习惯是个好东西，也是个坏东西。就看——是你用它，还是它用你。' },
  { id:6,  phase:'熟悉', title:'识', subtitle:'你以为的你，不一定是你',
    sutra:'无无明，亦无无明尽',
    sutraBaihua:'你每天都在变，只是变得太慢，自己看不见。',
    story:{ text:'朋友说："你变了。"\n你愣了一下。你觉得自己没变。\n可仔细一想——三年前的你，会做今天这个决定吗？\n你翻出毕业照。那个笑得没心没肺的人——你还认识他吗？\n蒲团走过来，踩着键盘打了个字："哦。"', image:'images/story_scene.png' },
    choices:[
      { text:'写下三年前和现在最大的三个不同', feedback:'嗯，写下来你才知道自己走了多远。', emo:'happy' },
      { text:'我从来都没变过', feedback:'真的吗？你再想想。', emo:'snarky' }
    ],
    practice:{ title:'成长时间线', instruction:'画一条时间线，从三年前到现在。\n在线上标注那些改变你的瞬间。\n不用写太多，一句话一个节点。\n然后看看——这些节点连起来，是什么形状？', image:'images/practice_scene.png' },
    quote:'你每天都在变，只是变得太慢，自己看不见。' },
  { id:7,  phase:'熟悉', title:'空', subtitle:'空了，才能装新的',
    sutra:'心无挂碍，无挂碍故，无有恐怖',
    sutraBaihua:'装得太满，连茶都倒不进去了。',
    story:{ text:'你打开衣柜，满满一柜子。\n可每天早上还是觉得没衣服穿。\n你打开手机通讯录，几百个联系人。\n可真正想说话的时候——翻了一遍又一遍，找不到一个人。\n蒲团趴在衣柜顶上，尾巴垂下来："装得太满，反而什么都用不上。"', image:'images/story_scene.png' },
    choices:[
      { text:'清理衣柜，捐掉不穿的', feedback:'衣柜空了，心也跟着松快一点。', emo:'happy' },
      { text:'清理通讯录，删掉不联系的人', feedback:'嗯，社交断舍离，比衣柜断舍离更难，但也更爽。', emo:'snarky' }
    ],
    practice:{ title:'空间清理冥想', instruction:'选一个角落——一个抽屉，一个书架格子。\n把里面的东西全拿出来。\n只放回你真的需要、真的喜欢的。\n每放回去一件，深呼吸一次。', image:'images/practice_scene.png' },
    quote:'装得太满，连茶都倒不进去了。' },
  { id:8,  phase:'熟悉', title:'贪', subtitle:'想要的太多，拿到的太少',
    sutra:'是故空中无色，无受想行识',
    sutraBaihua:'你想要的是这个东西，还是买它的那个瞬间？',
    story:{ text:'双十一购物车满了又满。\n你算了一笔账：买完这些，下个月吃土。但你还是点了"结算"。\n快递到了，拆完，拍张照——然后它就被忘在角落里了。\n蒲团坐在空快递盒里："你想要的是这个东西，还是买它的那个瞬间？"', image:'images/story_scene.png' },
    choices:[
      { text:'退货三件不需要的', feedback:'嗯，能退就是进步。下次买之前问问自己：我真的需要吗？', emo:'happy' },
      { text:'算了，买都买了', feedback:'也行。但记住这个感觉：买完后的空，和买之前的渴，哪个更真实？', emo:'confused' }
    ],
    practice:{ title:'欲望观察练习', instruction:'下次想买东西的时候——先放购物车24小时。\n24小时后你还会打开页面吗？\n如果不会，删掉它。\n如果会——再问自己一次："我真的需要吗？"', image:'images/practice_scene.png' },
    quote:'想要的太多不是问题，问题是——你要的，是你真的要的吗？' },
  { id:9,  phase:'熟悉', title:'嗔', subtitle:'生气的时候，先数到十',
    sutra:'知止而后有定，定而后能静，静而后能安。',
    sutraBaihua:'生气是用别人的错惩罚自己。你说亏不亏？',
    story:{ text:'地铁上被人踩了一脚。\n对方头也没回。你火一下窜上来了。\n你已经在脑子里骂了他三百字了。\n但他甚至不知道自己踩了人。\n蒲团从你包里探出头："你气成这样，他知道吗？他不知道。那气的是谁？"', image:'images/story_scene.png' },
    choices:[
      { text:'算了吧，不值得', feedback:'嗯，能放下的气，不算气。', emo:'happy' },
      { text:'我就是要生气！', feedback:'也行，气完记得回来。别把气带到下一站。', emo:'angry' }
    ],
    practice:{ title:'怒火降温呼吸', instruction:'下次生气的时候——停。\n吸气4秒，数一。呼气6秒，数二。\n数到十。\n十秒钟后，如果是大事再生气。\n如果是小事——你大概已经不想气了。', image:'images/practice_scene.png' },
    quote:'生气是用别人的错惩罚自己。你说亏不亏？' },
  { id:10, phase:'默契', title:'痴', subtitle:'一厢情愿，最苦',
    sutra:'不积跬步，无以至千里；不积小流，无以成江海。',
    sutraBaihua:'一厢情愿是世上最重的行李。你背着它走了多远？',
    story:{ text:'你给那个人发了条消息。\n已读，不回。\n你盯着"已读"两个字看了十分钟。\n你在脑补一万种理由。\n其实理由只有一个：他没兴趣回。\n蒲团把手机推远了一点："别看了，再看也看不出花来。"', image:'images/story_scene.png' },
    choices:[
      { text:'删掉对话框，不想了', feedback:'删了也好。眼不见，心不烦。', emo:'happy' },
      { text:'再发一条追问', feedback:'……你确定要这么做吗？有些答案，不问比问好。', emo:'snarky' }
    ],
    practice:{ title:'执念放手练习', instruction:'想一件你一直在等的事。\n问自己：如果永远等不到——你的生活会因此毁灭吗？\n不会。\n那就在心里松开手。\n就像松开一个你攥了很久的气球。', image:'images/practice_scene.png' },
    quote:'一厢情愿是世上最重的行李。你背着它走了多远？' },
  { id:11, phase:'默契', title:'慢', subtitle:'慢一点，没关系的',
    sutra:'合抱之木，生于毫末；九层之台，起于累土。',
    sutraBaihua:'树长得慢，但根扎得深。你急什么？',
    story:{ text:'朋友买房了。同事升职了。前女友结婚了。\n你看着朋友圈里的人都在向前跑。只有你还在原地。\n你开始怀疑：是不是我太慢了？\n蒲团从窗台上跳下来："你急什么？有的人走得快，有的人走得稳。你选了稳的那条路——就别羡慕快的。"', image:'images/story_scene.png' },
    choices:[
      { text:'写写自己这一年的三个进步', feedback:'嗯，看得见的进步才是自己的。别人的进度条跟你没关系。', emo:'happy' },
      { text:'继续比较，继续焦虑', feedback:'也行。累够了就不比了。', emo:'sleepy' }
    ],
    practice:{ title:'减速练习', instruction:'今天做一件事——慢下来。\n慢慢走路，慢慢吃饭，慢慢说话。\n感受每个动作的细节。\n你会发现：慢下来，世界也没塌。', image:'images/practice_scene.png' },
    quote:'树长得慢，但根扎得深。你急什么？' },
  { id:12, phase:'默契', title:'疑', subtitle:'信不过别人，也信不过自己',
    sutra:'信者吾信之，不信者吾亦信之，德信。',
    sutraBaihua:'你看世界的颜色，镜片是你自己选的。',
    story:{ text:'老板说"加油，你很有潜力"。你觉得他在画饼。\n朋友说"改天一起吃饭"。你觉得他在客气。\n连有人说"你挺好的"。你都想：他是不是在讽刺我？\n你已经习惯了不相信。\n蒲团坐在你对面，直直看着你："你不信别人没关系。你信你自己吗？"', image:'images/story_scene.png' },
    choices:[
      { text:'我信我自己', feedback:'好。就冲这句话，你已经赢了。', emo:'happy' },
      { text:'我不知道', feedback:'"不知道"也是答案。至少你没骗自己。', emo:'confused' }
    ],
    practice:{ title:'信任调查问卷', instruction:'写下三个你信任的人。\n再写下三个你信任你自己的地方。\n如果写不出后面三个——问自己：为什么？\n答案不用给别人看。给自己看就够了。', image:'images/practice_scene.png' },
    quote:'你看世界的颜色，镜片是你自己选的。' },
  { id:13, phase:'默契', title:'舍', subtitle:'有些东西，越舍不得越留不住',
    sutra:'将欲夺之，必固与之。将欲取之，必先予之。',
    sutraBaihua:'拿着旧地图，找不到新大陆。',
    story:{ text:'你还留着ex送的那件礼物。\n早就不喜欢了。扔了可惜。留着尴尬。但你就是不舍得扔。\n因为它曾经代表过什么。\n蒲团把那东西叼到你面前："你留着的不是东西。你留着的是——那个还会为它开心的自己。"', image:'images/story_scene.png' },
    choices:[
      { text:'扔掉它', feedback:'嗯，扔了。过去的就让它过去。', emo:'happy' },
      { text:'收起来，但换个地方放', feedback:'换个位置，换个心情。也行。', emo:'sleepy' }
    ],
    practice:{ title:'放手仪式', instruction:'找一件你一直留着却不再需要的东西。\n把它拿在手里。对它说一声谢谢。\n然后——扔掉，或者送人。\n做一个简单的仪式。告诉自己：这一页翻过去了。', image:'images/practice_scene.png' },
    quote:'拿着旧地图，找不到新大陆。' },
  { id:14, phase:'默契', title:'诚', subtitle:'对自己诚实，最难也最重要',
    sutra:'心无挂碍，无挂碍故，无有恐怖',
    sutraBaihua:'你骗得了全世界。骗得了这面镜子吗？',
    story:{ text:'你对着镜子说："我没事。"\n但其实你有事。\n你在所有人面前都笑呵呵的。\n只有关上门的时候——你才知道自己有多累。\n蒲团蹲在洗手台上："你骗得了全世界。骗得了这面镜子吗？"', image:'images/story_scene.png' },
    choices:[
      { text:'承认自己其实不太好', feedback:'嗯。承认不好，是变好的第一步。', emo:'happy' },
      { text:'还可以再撑一撑', feedback:'……撑太久会垮的。偶尔让别人看看你的软肋，也没关系。', emo:'sleepy' }
    ],
    practice:{ title:'真实时刻书写', instruction:'写下三件你现在真实的感觉。\n不用"但是""不过""可能"。\n就是纯粹的："我现在觉得______。"\n写完读一遍。这就是真实的你。', image:'images/practice_scene.png' },
    quote:'对自己诚实，是最难的那关。但你过了这一关，后面的都好走。' },
  { id:15, phase:'默契', title:'坚韧', subtitle:'有些事，忍过去的才是赢家',
    sutra:'知止而后有定，定而后能静，静而后能安。',
    sutraBaihua:'坚韧不是硬撑，是知道自己能走过去。',
    story:{ text:'今天糟透了。\n方案被毙了三次。外卖洒了一身。钥匙找不到了。\n你坐在楼梯间，什么都不想干。\n你觉得自己快撑不住了。\n手机亮了。蒲团发来一条消息："嗯。我也遇到过。"\n就五个字。但不知道为什么——你眼泪下来了。', image:'images/story_scene.png' },
    choices:[
      { text:'哭完再去改方案', feedback:'嗯，哭不丢人。哭了还能继续，才是本事。', emo:'happy' },
      { text:'今天不干了，放过自己', feedback:'也行。有时候放过自己，比硬撑更需要勇气。', emo:'sleepy' }
    ],
    practice:{ title:'复原呼吸', instruction:'不管今天发生了什么——现在，找一张椅子坐下。\n闭眼。深呼吸三次。\n每一次呼气，把今天的重量吐出去一点。\n三次之后——你还活着。这就够了。', image:'images/practice_scene.png' },
    quote:'坚韧不是硬撑，是知道自己能走过去。' },
  { id:16, phase:'默契', title:'归心', subtitle:'去掉所有伪装，你是谁？',
    sutra:'照见五蕴皆空，度一切苦厄',
    sutraBaihua:'去掉所有标签、身份、别人的期待——还剩下什么？那就是你。',
    story:{ text:'公司团建搞了个"真心话"环节。\n你说了所有人都想听的答案。但你没说真话。\n回家的地铁上你问自己：我什么时候开始——连真心话都不会说了？\n蒲团坐在对面座位上："你每天都在演。你累不累？"', image:'images/story_scene.png' },
    choices:[
      { text:'写下三个你从没跟人说过的事', feedback:'嗯，写下来就是放出来。不需要给谁看。', emo:'happy' },
      { text:'我习惯了', feedback:'"习惯了"是最可怕的三个字。习惯说谎，就忘了真话怎么说。', emo:'snarky' }
    ],
    practice:{ title:'面具卸下练习', instruction:'照镜子。看着镜子里的自己。\n一层一层问："这个是真实的你吗？"\n"去掉这个面具呢？""再去掉一层呢？"\n直到你看到那个没什么可藏的人。', image:'images/practice_scene.png' },
    quote:'去掉所有标签、身份、别人的期待——还剩下什么？那就是你。' },
  { id:17, phase:'默契', title:'放下', subtitle:'世界不围着你转，但你可以围着世界转',
    sutra:'无苦集灭道，无智亦无得',
    sutraBaihua:'把自己放小一点，世界就变大了。',
    story:{ text:'你帮了同事一个忙。他没说谢谢。\n你有点不爽。\n但仔细一想：你帮他——是因为他需要帮助。不是因为你想被感谢。\n那为什么要生气呢？\n蒲团趴在窗台上晒太阳："你做了该做的事。别人记不记得——是别人的事。"', image:'images/story_scene.png' },
    choices:[
      { text:'放下求回报的心', feedback:'嗯。做好事的时候不期待回报，才是真正的善意。', emo:'happy' },
      { text:'下次不帮了', feedback:'也行。边界感也很重要。', emo:'snarky' }
    ],
    practice:{ title:'换位观察练习', instruction:'选一件今天让你不开心的事。\n从你自己的角度写一遍。再从对方的角度写一遍。\n然后从路人的角度写一遍。\n三个版本放一起看——你会发现：世界不围着你转。但你可以选择怎么转。', image:'images/practice_scene.png' },
    quote:'把自己放小一点，世界就变大了。' },
  { id:18, phase:'默契', title:'遇见', subtitle:'没有偶然，都是该来的',
    sutra:'祸兮福之所倚，福兮祸之所伏。',
    sutraBaihua:'你遇见的每个人，都是你该遇见的。',
    story:{ text:'你偶尔会想：如果那天没走那条路……如果没说那句话……如果没遇见那个人……\n现在的我会是什么样？\n你找不到答案。\n蒲团打了个哈欠："你想那些没走的路干嘛？你走的就是你应该走的路。"', image:'images/story_scene.png' },
    choices:[
      { text:'接受过去的一切安排', feedback:'嗯。每一步都算数。没有白走的路。', emo:'happy' },
      { text:'后悔当初的选择', feedback:'后悔也改变不了什么。但你能改变的是——从此刻开始怎么走。', emo:'confused' }
    ],
    practice:{ title:'因缘链练习', instruction:'写下你今天拥有的一样好东西。\n然后往回推：它怎么来的？是谁给的？\n那个人的出现又是怎么来的？\n一直推到你想不到为止。\n你会发现——没有一件事是偶然的。', image:'images/practice_scene.png' },
    quote:'你遇见的每个人，都是你该遇见的。你做完的事，也都是该做的。' },
  { id:19, phase:'默契', title:'温暖', subtitle:'对别人好，也别忘了对自己好',
    sutra:'以无所得故，菩提萨埵',
    sutraBaihua:'你对自己有多狠，就该对自己有多好。',
    story:{ text:'朋友失恋了，你陪他喝了三瓶酒。\n你安慰他：你会遇到更好的。\n但你对自己——从来不说这种话。\n你对自己最常说的一句话是："你怎么这么没用。"\n蒲团把茶推到你面前："你什么都能对别人说。为什么不能对自己说一句：你也辛苦了？"', image:'images/story_scene.png' },
    choices:[
      { text:'对自己说一句"辛苦了"', feedback:'嗯。该有人对你说这句话了。', emo:'happy' },
      { text:'我做不到', feedback:'慢慢来。先试试不说自己坏话。一天就好。', emo:'sleepy' }
    ],
    practice:{ title:'自温暖练习', instruction:'把手放在胸口。\n对自己说："今天辛苦了。"\n"你已经做得很好了。""你可以休息一下。"\n像你安慰最好的朋友那样——安慰自己。', image:'images/practice_scene.png' },
    quote:'你对自己有多狠，就该对自己有多好。' },
  { id:20, phase:'自在', title:'坚持', subtitle:'不是跑得最快的人赢，而是不停下来的人',
    sutra:'得阿耨多罗三藐三菩提',
    sutraBaihua:'不是跑得最快的人赢，而是不停下来的人。',
    story:{ text:'你回头看第一关时的自己。\n那时候你还在纠结——要不要删那张照片。\n现在呢？你已经走过了19关。\n有些关你选了勇敢。有些关你选了逃避。但你没有放弃。\n蒲团坐在你面前，蹭了蹭你的手："你比你自己想的厉害多了。"', image:'images/story_scene.png' },
    choices:[
      { text:'回顾自己最大的三个改变', feedback:'嗯。写下来。这都是你的成长。', emo:'happy' },
      { text:'我已经不是之前的我了', feedback:'对。你变了。变得更好。', emo:'happy' }
    ],
    practice:{ title:'成长回顾', instruction:'翻开你一路写下的笔记。\n看看每一关的选择。\n看看那些让你哭过的、笑过的、放弃过的。\n然后——对自己说一句："谢谢你还在这里。"', image:'images/practice_scene.png' },
    quote:'不是跑得最快的人赢，而是不停下来的人。你一直没停。' },
  { id:21, phase:'自在', title:'终点', subtitle:'没有终点，每一刻都是开始',
    sutra:'揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃',
    sutraBaihua:'到了？嗯。茶一直热着。欢迎回来。',
    story:{ text:'你走到了最后一关。21。\n你以为是终点。但其实不是。\n蒲团坐在蒲团上——真正的蒲团上。\n它看着你，眼睛弯弯的："到了？嗯。茶一直热着。欢迎回来。下一轮，也从这里开始。"', image:'images/story_scene.png' },
    choices:[
      { text:'重新开始，再走一轮', feedback:'嗯。每走一遍，都是新的成长。', emo:'happy' },
      { text:'先喝杯茶再说', feedback:'好主意。茶一直热着。', emo:'sleepy' }
    ],
    practice:{ title:'自在冥想', instruction:'盘腿坐下，或者随便找个舒服的姿势。\n深呼吸。感受你的心跳。\n它在告诉你：你活着。你走完了这一轮。你还在这里。\n从零到一。从一到二一。从二一到——∞。\n蒲团打了个哈欠。茶凉了。你又续了一杯。这就是成长。', image:'images/practice_scene.png' },
    quote:'没有终点。每一刻，都是新的开始。' }
];
