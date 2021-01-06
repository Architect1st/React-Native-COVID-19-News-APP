import React from "react";
import styled from "styled-components";
import HeaderCard from "../components/HeaderCard";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import Course from "../components/Course.js";

class InfoScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TopMargin />
            {headerCards.map((headerCard, index) => (
              <HeaderCard
                key={index}
                image={headerCard.image}
                title={headerCard.title}
                caption={headerCard.caption}
              />
            ))}
            <Subtitle>精选文章</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    this.props.navigation.push("Section", {
                      section: card,
                    });
                  }}
                >
                  <Card
                    title={card.title}
                    image={card.image}
                    caption={card.caption}
                    logo={card.logo}
                    subtitle={card.subtitle}
                    content={card.content}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Subtitle>最新文章</Subtitle>
            {courses.map((course, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push("Section", {
                    section: course,
                  });
                }}
              >
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  // logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default InfoScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.Text`
  color: #b8b8b8;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const TopMargin = styled.Image`
  height: 50px;
`;

const headerCards = [
  {
    title: "新闻",
    image: require("../assets/coronavirus/news.png"),
    caption: "数据来自腾讯新闻",
  },
];

const cards = [
  {
    title: "Be Productive",
    image: require("../assets/coronavirus/BE-PRODUCTIVE.jpg"),
    subtitle: "Stay Home",
    caption: "在家怎样有效率？",
    logo: require("../assets/logo-1.png"),
    content:
      "<p>Many of us are spending a lot more time at home right now. Including the workdays. When we’d usually be reporting to our desks, we’re finding ourselves on our couches or at our kitchen tables, trying to complete to-do lists without the built-in discipline of the office.</p><br/><p>The expectations are the same, but the environment is not. And it’s not always an easy transition. </p><br/>The key to work-from-home success is to create an environment that allows you to focus on the tasks at hand. Whether you are working from home for the first time or just need a quick refresher, here are some tips for creating a functional but productive work area at home:</p><br/><h1>1. Declutter.</h1><p>Whether you work in a home office, kitchen or living room, if there’s “stuff” around that reminds you of your household chores, your eyes will go there and you’ll get distracted. Whenever you work from home, claim a clutter-free zone. This will help you stay focused on your workload and remain more aligned with an in-office experience.</p><br/><h1>2. Get ready for the day.</h1><p>Many people think working from home means sitting around in pajamas with the television on in the background. Not true! Just like in an office setting, you have to set yourself up for success when working from home. Get ready as you would if you were going into the office. Set a morning ritual of getting dressed (no loungewear!), making your morning cup of coffee and doing whatever else you need to get in the right mindset. You may also want to jot down your work to-do list for the day. You increase your chances of being productive when you set an intention.</p><br/><h1>3. Put yourself in a good position.</h1><p>Some people find it easy to work in bed or on the sofa. In either case, if you’re not sitting at a table, make sure you’ve got a small one within easy reach. You might not have a host of paperwork strewn out in front of you, but you will benefit from having the space to set a glass of water and your phone. Coffee tables and side tables fit the bill for any time you need extra space. You can also use a c-table to prop your laptop up to eye level and reduce strain on your neck. In addition to finding a surface space, you’ll also want to make sure to keep your posture in check. Prop yourself up with a few throw pillows to help maintain proper body alignment.</p><br/><h1>4. Turn on the lights.</h1><p>Natural light through the windows can be lovely, but it can also cause glare on your computer screen. If windows work to your benefit and the view isn’t distracting, great. If not, pull the blinds and flip on the light switch. Table lamps and floor lamps provide targeted task light if your space has insufficient overhead lighting.</p><br/>",
  },
  {
    title: "关于 COVID-19 你需要知道的信息：感染",
    image: require("../assets/coronavirus/know-it-all.png"),
    subtitle: "About COVID-19",
    caption: "它是如何被感染的？",
    logo: require("../assets/logo-2.png"),
    content:
      "<p>首先我们要知道，病毒是如何感染患者的。病毒要进入细胞，细胞上就必须要有它对应的受体（Receptor）。比如艾滋病病毒 HIV 的常见受体是 CD4 蛋白，通常在血液里免疫细胞的表面，所以 HIV 可以通过血液传播，而不用担心空气传播。而这次新型冠状病毒的受体和 SARS 一样，都是血管紧张素转化酶 2（ACE2）。这意味着病毒要感染人类，首先得接触到有这种酶的细胞，完成受体结合。而我们恰好有不少这种细胞就暴露在空气中——黏膜。黏膜的意义在于分泌黏液，保持湿润。我们的嘴唇、眼皮、鼻腔和口腔里都有大量的黏膜细胞，当病毒以某种方式接触到你的口腔黏膜，与受体结合，感染就开始了。</p><br/><p>首先冠状病毒的包膜会和细胞膜融合，释放病毒遗传物质——一段 RNA 单链。这种 RNA 可以直接作为信使 RNA，骗过细胞里的核糖体，合成 RNA 复制酶。RNA 复制酶会根据病毒 RNA 生成 RNA 负链，这条负链会继续和复制酶生成更多病毒的 RAN 片段和 RNA 正链，这些不同 RNA 片段又会和核糖体生成更多不同的病毒蛋白质结构。最后，蛋白外壳和 RNA 会组合生成新的冠状病毒颗粒，通过高尔基体分泌至细胞外，感染新的细胞。每个被感染的细胞会产生成千上万个新病毒颗粒，蔓延到气管、支气管，最终到达肺泡，引发肺炎。</p><br/><p>感染完成后，传播也不是难事。你三对唾液腺分泌的唾液会混合着来自咽喉等部位的呼吸道分泌物，让包裹着病毒的唾液随着你的喷嚏和咳嗽传播到空气中，接触其他人的黏膜。</p><br/><p>黏膜感染，飞沫传播，这就是冠状病毒为什么这么容易传播的原因。</p><br/><p>2019 年 12 月 8 日，一位来自华南海鲜市场病人因为持续 7 天的发热、咳嗽和呼吸困难入院。5 天后，他没有去过海鲜市场妻子也因为不明原因肺炎入院。2020 年 1 月 1 日，华南海鲜市场关闭。 1 月 2 日，41 名新型肺炎患者被确诊。</p><br/><p>此时喜迎春节的市民们还不知道，一场可能感染上万人的瘟疫已经开始了。</p>",
  },
  {
    title: "关于 COVID-19 你需要知道的信息：传播",
    image: require("../assets/coronavirus/MIND-VIRUS.jpg"),
    subtitle: "About COVID-19",
    caption: "它是如何被传播的？",
    logo: require("../assets/logo-2.png"),
    content:
      "<p>在这篇 1 月 24 日发表于《柳叶刀》的论文《2019-nCoV感染患者的临床特征》中，我们可以了解最早被确诊的 41 名患者的具体情况。截至 1 月 22 日， 41 人中有 28 人出院， 6 人死亡。发烧和咳嗽是最常见的症状，从起病到呼吸困难，平均 8 天。在肺炎初期，人传人的信号就已经很明显了，这 41 人中有 14 人都没有去过华南海鲜市场。1 月 24 日的另一篇论文《一场与 2019 年新型冠状病毒相关的家族肺炎表明了人与人之间的传播：家庭聚集研究》研究了一个 12 月 29 前往在武汉旅行的深圳家庭。最早出现症状的男士在到达武汉后的第 4 天开始发烧腹泻，之后 3 天，他的老婆岳父岳母和也都开始发烧咳嗽。 1 月 5 日，全家返回深圳，4 天后，没有去过武汉的母亲开始全身乏力。最终，这个 7 口之家里，6 人确诊新冠肺炎，包括他没有明显症状的儿子。</p><br/><p>在密切接触的家庭成员里传播冠状病毒并不难。</p><br/><p>首先是喷嚏，你会喷出 10000 个以上的飞沫，最远传到 8 米之外。然后是咳嗽，1000-2000 粒飞沫，最远 6 米。最后，即使是平静的说话每分钟也会产生大概 500 粒飞沫。这是你打出喷嚏后 0.34 秒的样子。</p><br/><p>绿色的是那些100 微米以上的大飞沫运动轨迹，因为足够重，它们会在 10 秒内落在地上。而红色的则是小飞沫们形成的雾云。它们会在空气中迅速蒸发变小，成为干燥的飞沫核。上皮细胞蛋白质会包裹着冠状病毒，在空气中漂荡，接触其他人的黏膜。</p><p>1 月 30 的这篇论文进一步分析了武汉前 425 例确诊患者的数据。这张表中，横坐标是从感染至发病的时间，纵坐标是相对概率。可以看到大部分感染者 7 天内就会发病，病毒的平均潜伏期是 5.2 天。</p><br/><p>现在我们知道，在 2020 年 1 月 11 日之前确诊的 295 人里，只有 45 人去过华南海鲜市场，此外还有 7 名医护人员。但在十天之后，人们才意识到要戴口罩了。</p>",
  },
  {
    title: "关于 COVID-19 你需要知道的信息：防护",
    image: require("../assets/coronavirus/STAB.jpg"),
    subtitle: "About COVID-19",
    caption: "它是如何被传播的？",
    logo: require("../assets/logo-2.png"),
    content:
      "<p>从 2020 年 1 月 20 日开始，口罩就成为了稀缺资源。<p/><br><p>看起来戴口罩当然是个好办法，口罩的多层结构可以有效的阻隔大颗粒，而那些纳米级的微粒又会因为静电效应被吸附在内部纤维上。所以，如果我们把颗粒的直径作为横坐标，过滤效率作为纵坐标，这些口罩的过滤效果实际上是一条 U 型曲线。<p/><br><p>可以看到，最难过滤的其实是直径 0.3 微米左右的颗粒。这也是为什么大多数口罩把 0.3 微米的氯化钠过滤能力作为测试指标，能在测试中过滤 95% 以上的就是 N95。<p/><br><p>N95 的过滤效果当然最好，但即便是效果最烂的纱布口罩，对于 10 微米以上也就是我们头发直径十分之一左右的颗粒，也能做到接近 80% 的防护率。<p/><br><p>那飞沫核的尺寸到底有多大呢？<p/><br><p>根据这份 07 年的论文，咳嗽产生的飞沫核尺寸 82％ 都集中在 0.74-2.12 微米。这么看，绝大多数飞沫核用普通的医用口罩就已经够了，而在美国 2800 多名流感医护人员参与的一项随机试验中，佩戴 N95 口罩和医用口罩的流感感染率甚至并没有显著差别。<p/><br><p>所以，也别在意那些繁杂的口罩类型，品牌和各国标准了。相比是不是戴着 N95，更重要的是：你洗手了吗？<p/><br><p>洗手是因为你的手上很可能有活着的冠状病毒。以 SARS 病毒为例，在这份军事医学科学院的研究中，它们在玻璃、塑料、金属上都可以存活至少 2 天，它们随着飞沫留在各种地方，而你的的手很可能就会摸到。然后你揉眼睛抠鼻屎的时候，病毒就会接触到黏膜细胞，完成感染。<p/><br><p>所以，洗手。洗久一点。<p/>",
  },
];

const courses = [
  {
    title: "疫情重创全球经济",
    subtitle: "Economy",
    image: require("../assets/coronavirus/mask-movie.jpg"),
    logo: require("../assets/logo-2.png"),
    author: "Tim Sneath",
    avatar: require("../assets/logo-2.png"),
    caption: "疫情对全球经济的冲击日益明显",
    content:
      "<p>2020年第一季度已过大半，2019年底从中国武汉开始的新冠状病毒疫情对全球经济的冲击范围与力度日益明显；除与中国经贸关系密切的国家之外，全球市场也开始感受到影响。</p><br/><p>最新宏观经济数字显示，中国近邻日本的经济开始紧缩，与中国经济关系密切的欧洲第一工业国德国的经济基本停滞，英国银行业巨头汇丰银行全球利润骤跌33%，日前宣布全球业务预备裁员35000人，国际航空运输协会（IATA）预计今年全球航运业经济损失将高达293亿美元……</p><br/><p>疫情所带来的全球需求下滑，作为全球第二大经济体和全球供应链中的重要一环中国的“断链”，对全球经济的负面影响开始在六大“重灾区”显现。</p><br/><h2>旅游娱乐业</h2><br/><p>旅游行业数据分析公司ForwardKeys的最新研究报告显示，由疫情引发的旅游业下行趋势已经产生全球影响。报告称，即使不包括中国和香港的数字，亚太地区其他国家和地区今年第二季度国际旅游预订数量也同比下降10.5%；其中东北亚各国的外出旅游预订同比降幅高达17.1%，近二成。</p><br/><p>第二季度中国境内的国际旅行预订同比降幅达57.5%，而由国际前往中国的预订数字也同比下降55.9%。 除中国之外，受冲击最严重的是韩国、日本、西欧和北美旅游市场国家。</p><br/><p>疫情重创餐饮、娱乐等诸多相关工业中，就连目前属于恢复期的中国影视工业也难以幸免。日前，百家中国影视后期企业联合发布了“产业自救、共同‘战疫’”的倡议书。倡议书表示将汇聚资源和力量，采取一系列措施推动复工促产。</p><br/><p>全球旅行受困和中国娱乐工业停摆也严重影响了国际影视娱乐工业。好莱坞索尼制片公司日前就在一份人事部门发给内部员工的电子邮件中，要求大家多动脑筋，多利用现代科技克服无法旅行，无法开会，以及如何想办法解决比如无法使用在日本的摄影棚和制作室困难等等。</p><br/><h2>全球运输业</h2><br/><p>来自路透社的最新数据显示，新冠肺炎疫情已导致全球逾40家航空公司部分或全部取消了往返于中国大陆的航班，其中包括英航、美联航、澳航、法航等全球最大的一些航空公司。</p><br/><p>在大型国际航空公司中，总部位于香港的国泰航空据悉受到的打击最大，取消了90%飞往中国内地的航班，但其中最大的城市。其大约30%的网络容量已削减，并已要求麾下2.7万名员工休无薪假，以帮助其维持运营。英航则预计，仅仅2月份一个月，直接损失乘客2.4万人次。</p><br/><p>中国的国内航空运输业也受到巨大冲击。据来自旅游数据和分析公司Cirium的数据，仅自1月23日武汉机场关闭3周内，中国国内航班就有超过8.5万航班被取消。</p><br/><p>另据劳埃德船舶日报（Lloyd's List）报道，即使有多数海运公司减少船运次数，全球海洋货运空船率在1月月初同比上升3.2%的基础上一月底同比再度上升3.4%，亚洲和欧洲之间的平均运费下摆约12%。</p><br/><h2>银行和保险业</h2><br/><p>随着第一季度业绩报告期限临近，疫情对那些在中国境内和周边地区业务较集中的大型银行的影响也变得更加明朗。</p><br/><p>摩根士丹利（MorganStanley）的分析预计，由于贷款增长迅速放缓和手续费收入减少，贷款增长“非常疲软”。</p><br/><p>英国的汇丰银行（HSBC）和渣打银行（StandardChartered）等数家大型银行已公布帮助陷入困境的小企业的计划，免除信用卡支付费用，并允许只偿还利息贷款。英国汇丰银行近日刚刚宣布大规模重组，其中包括一项全球裁员35000人的计划。</p><br/><p>另外，随着全球航空公司大量被迫取消往返中国大陆的航班，旅游保险业正在准备理赔。专家预期，全球银行和保险业所受的最终冲击在第二和第三季度会更明显地显示出来。</p>",
  },
  {
    title: "我们学到了什么？",
    subtitle: "Science",
    image: require("../assets/coronavirus/INFO-COVID-19.png"),
    logo: require("../assets/logo-1.png"),
    author: "張奕源Nick",
    avatar: require("../assets/logo-1.png"),
    caption: "值得你长期坚守的健康、生活习惯",
    content:
      "<p>出乎所有人的预料，一场由新型冠状病毒引发的疫潮迅速侵袭全国。这场疫病的爆发阶段正逢春节假期，面对突如其来的疫况，大家只能待在家中，尽可能一边做好防护工作，一边习惯在家工作和学习。</p><br><p>在此背景下，整个社会也完成了一次关于「什么是病毒」「如何戴口罩」「如何洗手」等健康知识的全民大科普。疫情中，很多朋友开始重视个人卫生，规划个人生活，并着手尝试此前从未实践过的远程办公。如果你在日常生活里重视养成好习惯，这些习惯会在特殊时期成为你应对突发状况的绝佳助力</p><br><p>在这篇文章里，我基于自己的经验为你总结了一份关于健康、生活和效率的习惯清单，这些好习惯既能够帮助你在疫期保持身体健康、工作高效和精神愉悦，也希望在疫情过去之后，这些特殊时期建立起来的好习惯仍可以陪伴你的生活，继续让你和你的家人远离疾病，生活顺心。</p><br/><h2>建立你的医疗战备库</h2><br/><p>本次疫情中，大家抢购最多、讨论度最高的无疑是以口罩、防护镜、消毒液为代表的一系列医疗装备和药品。在平常生活中，我已经自主建立了一个家庭常备医疗库，从药品到消毒器具一应俱全，因此当疫情爆发后，我几乎没有任何急需抢购的医疗资源，仅凭此前的储备就能应对相当一段时间。也正是因为我一边守着医疗箱，一边看到很多朋友为手里缺东少西而焦头烂额，促使我写下这篇文章，分享我建立「医疗战备库」的经验。</p><br/><p>尽管疫情期间你可能无法完整购置我提及的医疗用品，但从现在开始规范你的家庭医疗器具和药品管理，依然可以为你的健康帮上大忙。</p><h2>家庭常备医疗库，每家都应该有一个</h2><p>无论是否经历疫情，你都应该建立一个家庭常备的医疗资源库。它可以帮你应对日常生活中经常遇到的小划伤、小感冒或者其它小状况；借助家庭医疗仪器和定期自测的习惯，你还能时刻把控自己身体的健康状况，预防和自我诊断部分疾病。</p><br><p>以下是我建议你手边常备的健康仪器和药物，如果你有更好的建议，欢迎你在评论里补充。我也会不定期维护这份清单，便于你参考：</p><br><p>检测类：血糖仪、血压仪、体温计、血氧仪、体脂秤、酮体试纸等</p><br><p>感冒药：退烧类（对乙酰氨基酚、阿司匹林、布洛芬）、止咳类（氢溴酸右美沙芬）、消炎类（对乙酰氨基酚、阿司匹林、布洛芬（是的，这几样药既是退烧药，也是消炎药））、抗生素类（阿莫西林、左氧氟沙星、替硝唑）、抗病毒类（奥司他韦）等止痛药物（布洛芬、阿司匹林、对乙酰氨基酚）</p><br><p>胃药：胃部不适类（铝碳酸镁、胃仙 U）、辅助消化类（多潘立酮）、止泻类（蒙脱石散）等</p><br><p>防虫和止痒类：蚊帐、驱蚊液、止痒涂剂、炉甘石洗剂、蟑螂药、除螨仪等</p><br><p>外伤及扭伤处理类：棉签、创可贴、纱布、绷带、医用胶布、碘伏、双氧水等</p><br><p>过敏药物（氯雷他定）</p><br><p>睡眠类：助眠药物（褪黑素）、睡眠耳塞等</p><br><p>你认为必要的维生素和营养素</p><br><p>避孕和验孕类：避孕套、避孕药、验孕棒等</p><br><p>防护和清洁类：口罩、一次性手套、一次性帽子、消毒液（84 消毒液、消毒洗衣液等）、洗手液、酒精（酒精液体、酒精棉球、含酒精的湿巾等）、紫外线消毒灯等</p><br><p>其它：晕车药（苯巴比妥东莨菪碱）、漱口水、口气清新剂、牙线、暖宝宝、热水袋、冰袋、葡萄糖补剂等</p><br><p>除了这些我常备的药物，丁香医生也给出了一份 家庭用药常备清单。这份清单是为宝宝准备的，但成人也完全适用。</p><br><p>顺带一提，无论是用药还是参考健康资讯，宝宝可用的大部分药品和医疗知识都适用于成人，我甚至推荐你优先查看宝宝的医疗资讯，因为通常来说，儿童的用药和治疗方案都剂量更严格、禁忌项目更多。在了解儿童用药的方案和注意事项后，你再根据成人的剂量标准灵活应变即可。</p><br><p>",
  },
  {
    title: "冷静应对新型冠状病毒",
    subtitle: "Info & Tips",
    image: require("../assets/coronavirus/InfoAndTips.jpg"),
    logo: require("../assets/logo-4.png"),
    author: "会飞的三羊店长",
    avatar: require("../assets/logo-4.png"),
    caption: "这些小贴士和资讯站请收下",
    content:
      "<p>冷静应对新型冠状病毒，这些小贴士和资讯站请收下</p><br/><p>冬季本就是流感病毒高发时期，再加上新型冠状病毒加持，春运似乎也蒙上了一层阴影。</p><br/><p>然而年还是要过的，对于病毒传播，我们能做的只有了解疫情、不要恐慌、尽量保护自己和家人。在这篇文章中，我搜集了一些针对冠状病毒的的防护方法和疫情资讯网站，希望大家都能平安到家，顺顺利利度过春节。</p><br/><p>小心「病从口入」</p><br/><p>病毒可以通过飞沫、鼻涕、痰液等途径传播，这也是在公共场合最容易传播病毒的方式之一。而且飞沫并不是只通过打喷嚏、咳嗽等剧烈动作传播，唱歌、说话的过程都可能飞沫四溅。</p><br/><p>好好戴口罩</p><br/><p>好好佩戴口罩可以隔绝空气中的飞沫，是身处人流密集场所的明智之选。</p><br/><p>选一个合适的口罩</p><br/><p>如果要前往高铁站、机场等人流密集场合，应首选 N95 型口罩等「高效口罩」（数值越高代表防护越有效，但可能引起呼吸不畅等不适），其中有呼吸阀的款式可以减缓呼吸不畅感。</p><br/><p>N95 口罩的最大特点就是可以预防由患者体液或血液飞溅引起的直接 1 至 5 微米的飞沫传染，是世界卫生组织和美国疾病防控中心在非典期间推荐使用的口罩。由于目前大部分地区物流断运，你可以通过以下途径购买：</p><br/><p>* 京东超市和京东标注了「春节送」字样的店家</p><br/><p>* 711 等便利店有小包装出售</p><br/><p>* 屈臣氏等药妆店的个护区有小包装出售</p><br/><p>* 饿了么等外送服务的的「送药上门」</p><br/><p>* 实体药店</p><br/><p>但也要注意，由于 N95 口罩属于「高效口罩」，如果你有呼吸困难、心脏疾病等情况，请谨慎佩戴，以免出现窒息等问题。如果是为儿童购买，请一定要购买儿童专用的口罩，不然可能发生窒息的风险。</p><br/><p>如果是日常通勤、前往人流不是特别密集的场所，过滤效率高于 95% 的外科手术口罩也可以起到防护的作用，佩戴上也更为舒适，在购买时可注意「过滤系数>=95%」的标识。</p><br/><p>戴了比不戴还糟的是贴合性很差的棉布口罩，非但不能起到防护的效果，甚至可能造成反复感染。明星同款的这种款口罩在防治病毒方面也属于「毛用都没有」系列。</p><br/><p>「毛用都没有」系列口罩</p><br/><p>其他注意事项</p><br/><p>* 在家中应保持空气流通，每过半天都开窗通通风</p><br/><p>* 减少前往人流密集处，走亲访友也要降低频率</p><br/><p>* 可以每周一次将约 500ml 清水倒入洗手池和下水道的排水口，以确保家中环境卫生</p><br/><p>* 不要接触活禽活畜（以及它们的粪便）</p><br/><p>* 在准备春节大餐时，也应该将奶类、蛋类和肉类应该彻底煮熟</p><br/><p>不要讳疾忌医</p><br/><p>由于感染病例的早期症状一般较轻，如果发现发烧、咳嗽的症状，出于对自己和家人负责任的方式，请不要「姑息」养病，尽快前往医院进行检测。</p><br/><p>由于医院也是「重灾区」，不论在何种情形在前往医院时都要注意戴上口罩并且及时洗手。</p><br/><p>对于病毒不要过度恐慌，我们能做到的只有保护自己和身边的人。对于防护意识薄弱的家中长辈，还好有春节这个时机可以帮他们树立起防护意识和培养防护习惯。</p><br/><p>需要在武汉转车的朋友，请小心再小心，格外注意个人防护。</p><br/><p>如果你有什么可靠的信息源和有效防护方法，欢迎在评论区补充。</p>",
  },
  {
    title: "如何正确戴口罩？",
    subtitle: "Tips",
    image: require("../assets/coronavirus/mask-glass.jpeg"),
    logo: require("../assets/logo-4.png"),
    author: "会飞的三羊店长",
    avatar: require("../assets/logo-4.png"),
    caption: "保护自己，爱护他人",
    content:
      "<p>怎么才算戴好了 N95 口罩？</p><br/><p>正确的佩戴方法</p><br/><p>N95 口罩在佩戴时总会让人迷惑不解，尤其是头戴式和耳戴式的佩戴方法还有差别，因此要仔细阅读口罩的使用说明书。佩戴完成的大原则是：口罩必须完全覆盖你的鼻、嘴，达到与面部完全贴合的效果（面部有毛发或者胡子的朋友可能需要做一下清理再行佩戴）。可以根据产品包装上的指示进行佩戴佩戴好口罩后，可以用正向和反向压力测试法来检查密闭效果。</p><br/><p>* 反向压力测试法</p><br/><p>* 用双手压住口罩，但不要移动口罩的位置，用力吸气。如果已经正确佩戴，口罩会被吸附到面部。如果空气在面部或者眼睛周围流入口罩，调整相应位置并且重复用正向压力测试法。</p><br/><p>* 正向压力测试法</p><br/><p>* 用双手压住口罩，用力呼气，口罩理应会鼓起来（如果使用呼吸阀款，在测试时应该堵住呼吸阀）。如果没有空气会在呼吸时泄漏，说明佩戴没有问题。如果有漏气情况，调整后再重复用反向压力测试法进行测试。</p><br/><p>更换频率</p><br/><p>N95 口罩可以重复使用，但在以下两种情况应该立即丢弃：</p><br/><p>* 当颗粒物累积过多导致呼吸困难时，说明口罩已经不适合继续使用，需要丢弃并更换新的口罩</p><br/><p>* 如果直到口罩内测受污染（例如口罩内测受到他人的飞沫污染），也应该及时丢弃更换。</p><br/><p>如果短暂摘下口罩，可以用干净的小口袋或者密实袋保护口罩，戴上后再进行一下正反压力测试，确认它依旧贴合面部。如果发现变形无法再贴合，也应该丢掉换新的。</p><br/><p>外科手术口罩怎么戴？</p><br/><p>只要佩戴正确，过滤系数过关的外科手术口罩也可以起到一定防护作用。</p><br/><p>佩戴方法：在佩戴口罩前洗手，口罩有颜色的一面向外、金属软条向内，按压金属条使得口罩紧贴面部和鼻梁，然后打开口罩的风琴褶。</p><br/><p>更换频率：在口罩被水汽浸湿时，就应该更换口罩；即摘即弃，避免重复感染。在摘取口罩时，尽量只接触口罩的耳挂部分。</p>",
  },
  {
    title: "动物被新冠病毒感染",
    subtitle: "Science",
    image: require("../assets/coronavirus/INFO-COVID-19.png"),
    logo: require("../assets/logo-1.png"),
    author: "BBC 中文",
    avatar: require("../assets/logo-1.png"),
    caption: "从动物被新冠病毒感染看全球防控风险",
    content:
      "<p>肺炎疫情在全世界继续蔓延，中国和国外最近都有证明新冠病毒能够传染动物的消息，全球的疫情防控面临新挑战。</p><br/><p>首先是中国的一些科学团队就在方面提出了学术认证。</p><br/><p>中科院武汉病毒所石正丽教授团队在国际学术平台上发表论文显示，他们在武汉疫情期间取样了102只猫，有14.7%感染新冠病毒。</p><br/><p>此前已有研究表明，猫可能是新冠病毒的潜在易感动物。中国农业科学院哈尔滨兽医研究所陈化兰院士团队研究发现，新冠病毒在雪貂和猫中复制效率很高，而在狗、猪、鸡和鸭中复制能力微弱。</p><br/><p>该研究还发现，新冠病毒可通过呼吸道飞沫在猫之间传播。</p><br/><p>这一论文研究结果也被《自然》杂志报道。</p><br/><p>此外，在香港和台湾，有一些研究人员开始调查猫狗对新冠病毒的感染性。</p><br/><p>不久前香港渔农自然护理署发言人表示，当地一只混种短毛猫对新冠病毒的测试呈阳性反应，引发广泛关注。</p><br/><p>动物被病毒感染</p><br/><p>无独有偶，美国纽约市布朗克斯动物园一只老虎由美国爱荷华州兽医实验室确诊感染了新冠病毒，是全美国首例确诊动物感染新冠病毒的病例。</p><br/><p>这头被确诊是一头4岁的马来亚雌虎，叫纳迪亚。动物园官方称，纳迪亚和另外3只老虎、3只非洲狮出现干咳和食欲下降症状，经过检测，纳迪亚的结果为阳性。</p><br/><p>动物园的兽医称，这些动物是被一名无症状感染员工传染。</p><br/><p>动物园的首席兽医卡勒还表示，这是世界上首例人传染动物导致动物生病的病例。</p><br/><p>动物园表示会密切关注其他动物是否会受到传染。但他们表示这些狮虎会逐渐恢复健康。</p><br/><p>野生动物保护协会呼吁禁止野生动物交易。</p><br/><p>动物与新冠病毒</p><br/><p>动物是否传染新冠病毒的问题很早就进入公众视线。其中，一些动物已被证实感染，一些则被怀疑是中间宿主。</p><br/><p>新冠病毒出现后，经测序发现与SARS病毒同源，相似度79.5%，新冠病毒属于SARS相关冠状病毒。</p><br/><p>因为SARS病毒的源头是蝙蝠，有科学家最初便怀疑新冠病毒来自于蝙蝠这一天然病毒库。特别是上述中科院病毒所石正丽团队宣布，发现中华菊头蝠体内冠状病毒基因序列与新冠病毒相似度达96%。</p><br/><p>在此前后，香港大学袁国勇等团队从走私到中国的马来亚穿山甲体内发现了SARS相关冠状病毒，但基因序列与新冠病毒相比，相似性仅在90%上下。</p><br/><p>中国媒体也在中国疫情爆发和武汉封城前后大肆渲染上述报道，包括武汉华南海鲜市场出售野生动物及个别湖北人吃蝙蝠的消息，将动物与新冠病毒相联系起来。</p><br/><p>还有一些理论预测的新冠病毒的中间宿主包括蛇、老鼠和家猪等动物。</p><br/><p>研究发现，印尼班达亚齐的灵猫与沙斯有关。</p><br/><p>尚无研究定论</p><br/><p>但目前，无论是在国际学术界还是临床医学中，有关这些动物在新冠病毒传播中具体扮演的角色尚无研究定论。</p><br/><p>科研人员指出，猫容易感染新冠病毒是实验室测试的结果，不等于现实中猫就容易被感染。因为实验室的测试用的病毒剂量要远远超于现实的环境。</p><br/><p>石正丽团队就猫可能感染新冠病毒的研究引发的社会关注也补充表示，而且即使猫可能感染，也并不代表猫会传染其它猫群甚至人。</p><br/><p>很多动物研究人员表示，没有证据表明宠物猫狗会传染新冠病毒。</p><br/><p>新冠病毒疫情仍在蔓延之时，诸多疑问还有待各国科研人员携手合作，共同解答。</p><br/><p>世卫组织总干事谭德塞多次强调，在全球共同抗击新冠肺炎疫情时，需要事实，而非恐惧；需要科学，而非谣言；需要团结，而非污名化。</p><br/><p>",
  },
];
