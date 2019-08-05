# 首页开发

## 首页视觉稿
[http://www.youbaobao.xyz/mpvue-design/preview/#artboard10](http://www.youbaobao.xyz/mpvue-design/preview/#artboard10)

## 搜索组件
可交互的搜索框
![search_bar](../images/component_search_bar.jpg)
<table>
    <tr>
        <th>组件名称</th>
        <th>属性</th>
        <th>参数</th>
        <th>用途</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td rowspan="11">SearchBar</td>
        <td rowspan="4">props</td>
        <td>focus</td>
        <td>搜索框是否获得焦点</td>
        <td>false</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>搜索框是否可交互</td>
        <td>false</td>
    </tr>
    <tr>
        <td>limit</td>
        <td>搜索框最大可输入字符数</td>
        <td>50</td>
    </tr>
    <tr>
        <td>hotSearch</td>
        <td>热门搜索词</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td>data</td>
        <td>searchWord</td>
        <td>搜索关键字</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td rowSpan="6">method</td>
        <td>onSearchBarClick</td>
        <td>搜索框点击事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>onClearClick</td>
        <td>点击清空事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>onChange</td>
        <td>输入监听事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>onConfirm</td>
        <td>点击虚拟键盘搜索事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setValue</td>
        <td>对输入框关键字赋值</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getValue</td>
        <td>获取输入框的关键字</td>
        <td>-</td>
    </tr>
</table>

## 读书卡片组件
展示用户信息、签到、书架图书和书架入口
![home_card](../images/component_home_card.png)
![home_card2](../images/component_home_card2.png)
<table>
    <tr>
        <th>组件名称</th>
        <th>属性</th>
        <th>参数</th>
        <th>用途</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td rowspan="11">HomeCard</td>
        <td rowspan="3">props</td>
        <td>data</td>
        <td>界面需要展示的数据，userInfo为用户信息，bookList为推荐图书信息，num为书架图书数量</td>
        <td>null</td>
    </tr>
    <tr>
        <td>hasSign</td>
        <td>今天是否签到</td>
        <td>false</td>
    </tr>
    <tr>
        <td>signDay</td>
        <td>连续签到天数</td>
        <td>0</td>
    </tr>
    <tr>
        <td rowSpan="3">method</td>
        <td>gotoShelf</td>
        <td>跳转到书架列表</td>
        <td>-</td>
    </tr>
    <tr>
        <td>onBookClick</td>
        <td>图书点击事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>sign</td>
        <td>签到事件</td>
        <td>-</td>
    </tr>
</table>
::: tip
测试图片地址：
- 头像测试图片地址：[https://www.youbaobao.xyz/mpvue-res/logo.jpg](https://www.youbaobao.xyz/mpvue-res/logo.jpg)
- 图书测试图片地址：[https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg](https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg)
:::

## 图片组件
提供图片懒加载、预加载等功能
<table>
    <tr>
        <th>组件名称</th>
        <th>属性</th>
        <th>参数</th>
        <th>用途</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td rowspan="11">ImageView</td>
        <td rowspan="5">props</td>
        <td>src</td>
        <td>图片地址</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>图片伸缩模式</td>
        <td>widthFix</td>
    </tr>
    <tr>
        <td>lazyLoad</td>
        <td>是否启动懒加载</td>
        <td>true</td>
    </tr>
    <tr>
        <td>round</td>
        <td>是否为圆形图片</td>
        <td>false</td>
    </tr>
    <tr>
        <td>height</td>
        <td>图片高度</td>
        <td>auto</td>
    </tr>
    <tr>
        <td>watch</td>
        <td>src</td>
        <td>监听src变化，如果src变化，则将isLoading置为true</td>
        <td>-</td>
    </tr>
    <tr>
        <td rowSpan="2">data</td>
        <td>isLoading</td>
        <td>图片是否处于加载状态</td>
        <td>true</td>
    </tr>
    <tr>
        <td>error</td>
        <td>是否加载失败</td>
        <td>false</td>
    </tr>
    <tr>
        <td rowSpan="3">methods</td>
        <td>onClick</td>
        <td>图片点击事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>onError</td>
        <td>图片加载失败事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>onLoad</td>
        <td>图片加载成功事件</td>
        <td>-</td>
    </tr>
</table>

::: tip
资源下载地址
- 占位符图片地址：[https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg](https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg)
- 测试大图：[https://www.youbaobao.xyz/mpvue-res/big.jpg](https://www.youbaobao.xyz/mpvue-res/big.jpg)
:::

## Banner组件
展示用户信息、签到、书架图书和书架入口
![component_banner](../images/component_banner.png)
<table>
    <tr>
        <th>组件名称</th>
        <th>属性</th>
        <th>参数</th>
        <th>用途</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td rowspan="11">Banner</td>
        <td rowspan="3">props</td>
        <td>img</td>
        <td>banner图片</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td>title</td>
        <td>标题</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td>subTitle</td>
        <td>副标题</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td>method</td>
        <td>onClick</td>
        <td>banner点击事件</td>
        <td>-</td>
    </tr>
</table>
::: tip
测试背景图片地址：[http://www.youbaobao.xyz/book/res/bg.jpg](http://www.youbaobao.xyz/book/res/bg.jpg)
:::

## 图书推荐组件
适配多场景的图书推荐组件
![recommend_book](../images/component_recommend_book.png)
<table>
    <tr>
        <th>组件名称</th>
        <th>属性</th>
        <th>参数</th>
        <th>用途</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td rowspan="11">HomeBook</td>
        <td rowspan="9">props</td>
        <td>title</td>
        <td>标题栏</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td>data</td>
        <td>图书列表</td>
        <td>[]</td>
    </tr>
    <tr>
        <td>btnText</td>
        <td>按钮文本</td>
        <td>(空)</td>
    </tr>
    <tr>
        <td>row</td>
        <td>行数</td>
        <td>0</td>
    </tr>
    <tr>
        <td>col</td>
        <td>列数</td>
        <td>1</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>显示模式，row - 按行显示，col - 按列显示，category - 分类显示</td>
        <td>row</td>
    </tr>
    <tr>
        <td>showTitle</td>
        <td>是否显示标题</td>
        <td>true</td>
    </tr>
    <tr>
        <td>showBtn</td>
        <td>是否显示按钮</td>
        <td>true</td>
    </tr>
    <tr>
        <td>linearBg</td>
        <td>是否显示背景</td>
        <td>false</td>
    </tr>
    <tr>
        <td rowSpan="2">method</td>
        <td>onMoreClick</td>
        <td>点击更多按钮事件</td>
        <td>-</td>
    </tr>
    <tr>
        <td>onBookClick</td>
        <td>图书点击事件</td>
        <td>-</td>
    </tr>
</table>

> 分类英文名称和中文的映射关系如下：
```js
export const CATEGORY = {
  computerscience: '计算机科学',
  socialsciences: '社会科学',
  economics: '经济学',
  education: '教育学',
  engineering: '工程学',
  environment: '环境学',
  geography: '地理学',
  history: '历史学',
  laws: '法学',
  lifesciences: '生命科学',
  literature: '文学',
  biomedicine: '生物医学',
  businessandmanagement: '工商管理',
  earthsciences: '地球科学',
  materialsscience: '材料科学',
  mathematics: '数学',
  medicineandpublichealth: '公共卫生',
  philosophy: '哲学',
  physics: '物理',
  politicalscienceandinternationalrelations: '国际关系',
  psychology: '心理学',
  statistics: '统计学'
}
```
## 首页mock数据
```json
{
    "error_code":0,
    "msg":"查询成功",
    "data":{
        "hotSearch":{
            "num":22,
            "keyword":"Computer"
        },
        "shelf":[
            {
                "id":67,
                "fileName":"2018_Book_Nanoinformatics",
                "cover":"https://www.youbaobao.xyz/book/res/img/MaterialsScience/978-981-10-7617-6_CoverFigure.jpg",
                "title":"Nanoinformatics",
                "author":"Isao Tanaka",
                "publisher":"Springer Singapore",
                "bookId":"2018_Book_Nanoinformatics",
                "category":15,
                "categoryText":"MaterialsScience",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":38,
                "fileName":"2018_Book_DesigningSustainableTechnologi",
                "cover":"https://www.youbaobao.xyz/book/res/img/Environment/978-3-319-66981-6_CoverFigure.jpg",
                "title":"Designing Sustainable Technologies, Products and Policies",
                "author":"Enrico Benetto",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_DesigningSustainableTechnologi",
                "category":6,
                "categoryText":"Environment",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":12,
                "fileName":"2018_Book_RESTARTSustainableBusinessMode",
                "cover":"https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-91971-3_CoverFigure.jpg",
                "title":"RESTART Sustainable Business Model Innovation",
                "author":"Sveinung Jørgensen",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_RESTARTSustainableBusinessMode",
                "category":13,
                "categoryText":"BusinessandManagement",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            }
        ],
        "recommend":[
            {
                "id":225,
                "fileName":"2016_Book_MicrofinanceEUStructuralFundsA",
                "cover":"https://www.youbaobao.xyz/book/res/img/Economics/2016_Book_MicrofinanceEUStructuralFundsA.jpeg",
                "title":"Microfinance, EU Structural Funds and Capacity Building for Managing Authorities",
                "author":"Giovanni Nicola Pes",
                "publisher":"Palgrave Macmillan",
                "bookId":"2016_Book_MicrofinanceEUStructuralFundsA",
                "category":3,
                "categoryText":"Economics",
                "language":"en",
                "rootFile":"OEBPS/9781137536013.opf"
            },
            {
                "id":88,
                "fileName":"2018_Book_BetweenMobilityAndMigration",
                "cover":"https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg",
                "title":"Between Mobility and Migration",
                "author":"Peter Scholten",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_BetweenMobilityAndMigration",
                "category":2,
                "categoryText":"SocialSciences",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":24,
                "fileName":"2018_Book_SecurityInComputerAndInformati",
                "cover":"https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg",
                "title":"Security in Computer and Information Sciences",
                "author":"Erol Gelenbe",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_SecurityInComputerAndInformati",
                "category":1,
                "categoryText":"ComputerScience",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            }
        ],
        "freeRead":[
            {
                "id":34,
                "fileName":"2018_Book_GeographiesOfTheUniversity",
                "cover":"https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg",
                "title":"Geographies of the University",
                "author":"Peter Meusburger",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_GeographiesOfTheUniversity",
                "category":7,
                "categoryText":"Geography",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":59,
                "fileName":"2018_Book_DrinkingInVictorianAndEdwardia",
                "cover":"https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg",
                "title":"Drinking in Victorian and Edwardian Britain",
                "author":"Thora Hands",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_DrinkingInVictorianAndEdwardia",
                "category":8,
                "categoryText":"History",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":60,
                "fileName":"2018_Book_HarnessingThePowerOfTheCrimina",
                "cover":"https://www.youbaobao.xyz/book/res/img/History/978-3-319-77908-9_CoverFigure.jpg",
                "title":"Harnessing the Power of the Criminal Corpse",
                "author":"Sarah Tarlow",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_HarnessingThePowerOfTheCrimina",
                "category":8,
                "categoryText":"History",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":75,
                "fileName":"2018_Book_TheEuropeanBloodAndMarrowTrans",
                "cover":"https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-50026-3_CoverFigure.jpg",
                "title":"The European Blood and Marrow Transplantation Textbook for Nurses",
                "author":"Michelle Kenyon",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_TheEuropeanBloodAndMarrowTrans",
                "category":17,
                "categoryText":"MedicineAndPublicHealth",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            }
        ],
        "hotBook":[
            {
                "id":89,
                "fileName":"2018_Book_ContemporaryPerspectivesOnAgei",
                "cover":"https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-73820-8_CoverFigure.jpg",
                "title":"Contemporary Perspectives on Ageism",
                "author":"Liat Ayalon",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_ContemporaryPerspectivesOnAgei",
                "category":2,
                "categoryText":"SocialSciences",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":218,
                "fileName":"2015_Book_PovertyReductionPoliciesAndPra",
                "cover":"https://www.youbaobao.xyz/book/res/img/Economics/2015_Book_PovertyReductionPoliciesAndPra.jpeg",
                "title":"Poverty Reduction Policies and Practices in Developing Asia",
                "author":"Almas Heshmati, Esfandiar Maasoumi and Guanghua Wan",
                "publisher":"Springer Singapore, Singapore",
                "bookId":"2015_Book_PovertyReductionPoliciesAndPra",
                "category":3,
                "categoryText":"Economics",
                "language":"en",
                "rootFile":"OEBPS/content.opf"
            },
            {
                "id":6,
                "fileName":"2018_Book_DronesAndTheCreativeIndustry",
                "cover":"https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg",
                "title":"Drones and the Creative Industry",
                "author":"Virginia Santamarina-Campos",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_DronesAndTheCreativeIndustry",
                "category":13,
                "categoryText":"BusinessandManagement",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":139,
                "fileName":"2018_Book_EvolutionMonitoringAndPredicti",
                "cover":"https://www.youbaobao.xyz/book/res/img/EarthSciences/2018_Book_EvolutionMonitoringAndPredicti.jpeg",
                "title":"Evolution, Monitoring and Predicting Models of Rockburst",
                "author":"Chunlai Wang",
                "publisher":"Springer Singapore, Singapore",
                "bookId":"2018_Book_EvolutionMonitoringAndPredicti",
                "category":14,
                "categoryText":"EarthSciences",
                "language":"en",
                "rootFile":"OEBPS/content.opf"
            }
        ],
        "category":[
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-25474-6_CoverFigure.jpg",
                "category":12,
                "categoryText":"Biomedicine",
                "num":14,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-33515-5_CoverFigure.jpg",
                "category":13,
                "categoryText":"BusinessandManagement",
                "num":16,
                "cover2":"https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg",
                "category":1,
                "categoryText":"ComputerScience",
                "num":56,
                "cover2":"https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/EarthSciences/978-981-10-3713-9_CoverFigure.jpg",
                "category":14,
                "categoryText":"EarthSciences",
                "num":16,
                "cover2":"https://www.youbaobao.xyz/book/res/img/EarthSciences/978-3-319-65633-5_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-69772-7_CoverFigure.jpg",
                "category":3,
                "categoryText":"Economics",
                "num":30,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-91400-8_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Education/978-3-319-39450-3_CoverFigure.jpg",
                "category":4,
                "categoryText":"Education",
                "num":60,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Education/978-3-319-52980-6_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Engineering/978-3-319-91707-8_CoverFigure.jpg",
                "category":5,
                "categoryText":"Engineering",
                "num":23,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Engineering/978-3-319-64816-3_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Environment/978-3-319-29671-5_CoverFigure.jpg",
                "category":6,
                "categoryText":"Environment",
                "num":42,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Environment/978-4-431-54895-9_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg",
                "category":7,
                "categoryText":"Geography",
                "num":7,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-92813-5_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/History/978-3-319-64337-3_CoverFigure.jpg",
                "category":8,
                "categoryText":"History",
                "num":18,
                "cover2":"https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Laws/978-3-319-71087-7_CoverFigure.jpg",
                "category":9,
                "categoryText":"Laws",
                "num":13,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Laws/978-981-13-1232-8_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/LifeSciences/978-3-319-68152-8_CoverFigure.jpg",
                "category":10,
                "categoryText":"LifeSciences",
                "num":24,
                "cover2":"https://www.youbaobao.xyz/book/res/img/LifeSciences/978-3-319-69539-6_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Literature/2010_Book_CyborgsInLatinAmerica.jpeg",
                "category":11,
                "categoryText":"Literature",
                "num":6,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Literature/2010_Book_HistoryAndCulturalMemoryInNeo-.jpeg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/MaterialsScience/978-981-10-7617-6_CoverFigure.jpg",
                "category":15,
                "categoryText":"MaterialsScience",
                "num":2,
                "cover2":"https://www.youbaobao.xyz/book/res/img/MaterialsScience/2018_Book_ProceedingsOfTheScientific-Pra.jpeg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Mathematics/978-3-319-29439-1_CoverFigure.jpg",
                "category":16,
                "categoryText":"Mathematics",
                "num":9,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Mathematics/2015_Book_InnovationsInQuantitativeRiskM.jpeg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-28624-2_CoverFigure.jpg",
                "category":17,
                "categoryText":"MedicineAndPublicHealth",
                "num":20,
                "cover2":"https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-75019-4_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Philosophy/978-3-319-26300-7_CoverFigure.jpg",
                "category":18,
                "categoryText":"Philosophy",
                "num":16,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Philosophy/978-3-319-94610-8_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Physics/978-3-319-42424-8_CoverFigure.jpg",
                "category":19,
                "categoryText":"Physics",
                "num":10,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Physics/978-3-662-57366-2_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/PoliticalScienceAndInternationalRelations/978-3-319-69929-5_CoverFigure.jpg",
                "category":20,
                "categoryText":"PoliticalScienceAndInternationalRelations",
                "num":26,
                "cover2":"https://www.youbaobao.xyz/book/res/img/PoliticalScienceAndInternationalRelations/978-981-10-7182-9_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Psychology/978-3-319-78160-0_CoverFigure.jpg",
                "category":21,
                "categoryText":"Psychology",
                "num":3,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Psychology/2015_Book_PromotingSocialDialogueInEurop.jpeg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-72356-3_CoverFigure.jpg",
                "category":2,
                "categoryText":"SocialSciences",
                "num":51,
                "cover2":"https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg"
            },
            {
                "cover":"https://www.youbaobao.xyz/book/res/img/Statistics/2013_Book_ShipAndOffshoreStructureDesign.jpeg",
                "category":22,
                "categoryText":"Statistics",
                "num":1,
                "cover2":"https://www.youbaobao.xyz/book/res/img/Statistics/2013_Book_ShipAndOffshoreStructureDesign.jpeg"
            }
        ],
        "banner":{
            "img":"https://www.youbaobao.xyz/book/res/bg.jpg",
            "title":"mpvue2.0多端小程序课程重磅上线",
            "subTitle":"马上学习",
            "url":"https://www.youbaobao.xyz/book/#/book-store/shelf"
        },
        "shelfCount":0
    }
}
```
