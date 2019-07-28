---
sidebar: auto
---

# API

::: tip
API文档中示例部分的域名为教学使用，如需独立部署或进行二次开发，需要购买课程获得服务端源码后进行部署，课程中包含详细的服务端部署教程
:::

## 首页

### 获取首页数据

#### 接口地址
`GET /book/home/v2`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| openId      | 是 | String | 用户的openId |

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |
| data      | Object | 返回数据 |
| hotSearch      | Object | 热门搜索 |
| shelf      | Array | 书架推荐图书 |
| recommend      | Array | 为你推荐 |
| freeRead      | Array | 免费阅读 |
| hotBook      | Array | 当前最热 |
| category      | Array | 分类 |
| banner      | Object | Banner图 |
| shelfCount      | int | 书架图书数量 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/home/v2?openId=1234](https://test.youbaobao.xyz:18081/book/home/v2?openId=1234)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": {
		"hotSearch": {
			"num": 15,
			"keyword": "Computer"
		},
		"shelf": [{
			"id": 20,
			"fileName": "2018_Book_ComputerAidedVerification",
			"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg",
			"title": "Computer Aided Verification",
			"author": "Hana Chockler",
			"publisher": "Springer International Publishing",
			"bookId": "2018_Book_ComputerAidedVerification",
			"category": 1,
			"categoryText": "ComputerScience",
			"language": "en",
			"rootFile": "OEBPS/package.opf"
		}],
		"recommend": [{
			"id": 27,
			"fileName": "2018_Book_ApplyingTheKaizenInAfrica",
			"cover": "https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-91400-8_CoverFigure.jpg",
			"title": "Applying the Kaizen in Africa",
			"author": "Keijiro Otsuka",
			"publisher": "Springer International Publishing",
			"bookId": "2018_Book_ApplyingTheKaizenInAfrica",
			"category": 3,
			"categoryText": "Economics",
			"language": "en",
			"rootFile": "OEBPS/package.opf"
		}],
		"freeRead": [{
			"id": 17,
			"fileName": "2018_Book_FoundationsOfTrustedAutonomy",
			"cover": "https://www.youbaobao.xyz/book/res/img/Engineering/978-3-319-64816-3_CoverFigure.jpg",
			"title": "Foundations of Trusted Autonomy",
			"author": "Hussein A. Abbass",
			"publisher": "Springer International Publishing",
			"bookId": "2018_Book_FoundationsOfTrustedAutonomy",
			"category": 5,
			"categoryText": "Engineering",
			"language": "en",
			"rootFile": "OEBPS/package.opf"
		}],
		"hotBook": [{
			"id": 225,
			"fileName": "2016_Book_MicrofinanceEUStructuralFundsA",
			"cover": "https://www.youbaobao.xyz/book/res/img/Economics/2016_Book_MicrofinanceEUStructuralFundsA.jpeg",
			"title": "Microfinance, EU Structural Funds and Capacity Building for Managing Authorities",
			"author": "Giovanni Nicola Pes",
			"publisher": "Palgrave Macmillan",
			"bookId": "2016_Book_MicrofinanceEUStructuralFundsA",
			"category": 3,
			"categoryText": "Economics",
			"language": "en",
			"rootFile": "OEBPS/9781137536013.opf"
		}],
		"category": [{
			"cover": "https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-25474-6_CoverFigure.jpg",
			"category": 12,
			"categoryText": "Biomedicine",
			"num": 14,
			"cover2": "https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg"
		}],
		"banner": {
			"img": "https://www.youbaobao.xyz/book/res/bg.jpg",
			"title": "mpvue2.0多端小程序课程重磅上线",
			"subTitle": "马上学习",
			"url": "https://www.youbaobao.xyz/book/#/book-store/shelf"
		},
		"shelfCount": 1
	}
}
```

### 获取微信用户的openId

#### 接口地址
`GET /openId/get`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| appId      | 是 | String | 微信小程序的appId |
| code      | 是 | String |微信登录wx.login后获得的code |
| secret      | 是 | String |小程序的secret key |

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |
| data      | Object | 返回数据 |
| openid      | String | 用户的openId |
| session_key      | String | 用户登录sessionKey，用于微信jsapi请求 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/openId/get?appId=1234&code=5678&secret=9012](https://test.youbaobao.xyz:18081/openId/get?appId=1234&code=5678&secret=9012)
- 响应：
```json
{
	"error_code": 0,
	"msg": "获取openId成功",
	"data": {
		"session_key": "abcdefg",
		"openid": "hijklmn"
	}
}
```

### 获取支付宝用户的openId

#### 接口地址
`GET /openId/get/alipay`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| appId      | 是 | String | 支付宝小程序的appId |
| code      | 是 | String |支付宝授权my.getAuthCode后获得的authCode |

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |
| data      | Object | 返回数据 |
| openid      | String | 用户的userId+alipayUserId |
| session_key      | String | 用户登录sessionKey，用于支付宝jsapi请求 |

#### 示例
- 请求：`https://test.youbaobao.xyz:18081/openId/get/alipay?appId=1234&code=5678`
- 响应：
```json
{
	"error_code": 0,
	"msg": "获取openId成功",
	"data": {
		"session_key": "abcdefg",
		"openid": "1234|5678"
	}
}
```

### 用户注册

#### 接口地址
`POST /user/register`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| openId | 是 | String | 用户的openId |
| platform | 否 | String | 用户所属平台，默认为wx |
| avatarUrl | 否 | String | 用户头像图片地址 |
| nickName | 否 | String | 用户昵称 |
| gender | 否 | int | 用户性别，1-男，2-女，0-未公开，默认为0 |
| country | 否 | String | 用户所在国家 |
| province | 否 | String | 用户所在省份 |
| city | 否 | String | 用户所在城市 |
| language | 否 | String | 用户使用的语言 |
::: tip
注：参数为json形式
:::

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/user/register](https://test.youbaobao.xyz:18081/user/register)
- 响应：
```json
{"error_code":0,"msg":"用户注册成功"}
```

### 获取"为你推荐"数据

#### 接口地址
`GET /book/home/recommend/v2`

#### 请求参数
无

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |
| data      | Array | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/home/recommend/v2](https://test.youbaobao.xyz:18081/book/home/recommend/v2)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": [{
		"id": 418,
		"fileName": "2015_Book_SocioeconomicAndEnvironmentalI",
		"cover": "https://www.youbaobao.xyz/book/res/img/SocialSciences/2015_Book_SocioeconomicAndEnvironmentalI.jpeg",
		"title": "Socioeconomic and Environmental Implications of Agricultural Residue Burning",
		"author": "Parmod Kumar, Surender Kumar and Laxmi Joshi",
		"publisher": "Springer India, New Delhi",
		"bookId": "2015_Book_SocioeconomicAndEnvironmentalI",
		"category": 2,
		"categoryText": "SocialSciences",
		"language": "en",
		"rootFile": "OEBPS/content.opf"
	}, {
		"id": 24,
		"fileName": "2018_Book_SecurityInComputerAndInformati",
		"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg",
		"title": "Security in Computer and Information Sciences",
		"author": "Erol Gelenbe",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_SecurityInComputerAndInformati",
		"category": 1,
		"categoryText": "ComputerScience",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}, {
		"id": 38,
		"fileName": "2018_Book_DesigningSustainableTechnologi",
		"cover": "https://www.youbaobao.xyz/book/res/img/Environment/978-3-319-66981-6_CoverFigure.jpg",
		"title": "Designing Sustainable Technologies, Products and Policies",
		"author": "Enrico Benetto",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_DesigningSustainableTechnologi",
		"category": 6,
		"categoryText": "Environment",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}]
}
```

### 获取"免费阅读"数据

#### 接口地址
`GET /book/home/freeRead/v2`

#### 请求参数
无

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |
| data      | Array | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/home/freeRead/v2](https://test.youbaobao.xyz:18081/book/home/freeRead/v2)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": [{
		"id": 13,
		"fileName": "2017_Book_SatelliteEarthObservationsAndT",
		"cover": "https://www.youbaobao.xyz/book/res/img/EarthSciences/978-981-10-3713-9_CoverFigure.jpg",
		"title": "Satellite Earth Observations and Their Impact on Society and Policy",
		"author": "Masami Onoda",
		"publisher": "Springer Singapore",
		"bookId": "2017_Book_SatelliteEarthObservationsAndT",
		"category": 14,
		"categoryText": "EarthSciences",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}, {
		"id": 19,
		"fileName": "2018_Book_AutonomousControlForAReliableI",
		"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg",
		"title": "Autonomous Control for a Reliable Internet of Services",
		"author": "Ivan Ganchev",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_AutonomousControlForAReliableI",
		"category": 1,
		"categoryText": "ComputerScience",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}, {
		"id": 20,
		"fileName": "2018_Book_ComputerAidedVerification",
		"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg",
		"title": "Computer Aided Verification",
		"author": "Hana Chockler",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_ComputerAidedVerification",
		"category": 1,
		"categoryText": "ComputerScience",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}, {
		"id": 26,
		"fileName": "2018_Book_AFairShareOfTax",
		"cover": "https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-69772-7_CoverFigure.jpg",
		"title": "A Fair Share of Tax",
		"author": "Lotta Björklund Larsen",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_AFairShareOfTax",
		"category": 3,
		"categoryText": "Economics",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}]
}
```

### 获取"当前最热"数据

#### 接口地址
`GET /book/home/hotBook/v2`

#### 请求参数
无

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |
| data      | Array | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/home/hotBook/v2](https://test.youbaobao.xyz:18081/book/home/hotBook/v2)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": [{
		"id": 139,
		"fileName": "2018_Book_EvolutionMonitoringAndPredicti",
		"cover": "https://www.youbaobao.xyz/book/res/img/EarthSciences/2018_Book_EvolutionMonitoringAndPredicti.jpeg",
		"title": "Evolution, Monitoring and Predicting Models of Rockburst",
		"author": "Chunlai Wang",
		"publisher": "Springer Singapore, Singapore",
		"bookId": "2018_Book_EvolutionMonitoringAndPredicti",
		"category": 14,
		"categoryText": "EarthSciences",
		"language": "en",
		"rootFile": "OEBPS/content.opf"
	}, {
		"id": 24,
		"fileName": "2018_Book_SecurityInComputerAndInformati",
		"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg",
		"title": "Security in Computer and Information Sciences",
		"author": "Erol Gelenbe",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_SecurityInComputerAndInformati",
		"category": 1,
		"categoryText": "ComputerScience",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}, {
		"id": 180,
		"fileName": "2014_Book_OptimizingHPCApplicationsWithI",
		"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/2014_Book_OptimizingHPCApplicationsWithI.jpeg",
		"title": "Optimizing HPC Applications with Intel® Cluster Tools",
		"author": "Alexander Supalov, Andrey Semin, Michael Klemm and Christopher Dahnken",
		"publisher": "Apress, Berkeley, CA",
		"bookId": "2014_Book_OptimizingHPCApplicationsWithI",
		"category": 1,
		"categoryText": "ComputerScience",
		"language": "en",
		"rootFile": "OEBPS/content.opf"
	}, {
		"id": 2,
		"fileName": "2017_Book_HormonesMetabolismAndTheBenefi",
		"cover": "https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg",
		"title": "Hormones, Metabolism and the Benefits of Exercise",
		"author": "Bruce Spiegelman",
		"publisher": "Springer International Publishing",
		"bookId": "2017_Book_HormonesMetabolismAndTheBenefi",
		"category": 12,
		"categoryText": "Biomedicine",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}]
}
```

## 搜索

### 获取热门搜索词

#### 接口地址
`GET /book/hot-search`

#### 请求参数
无

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg      | String | 返回消息 |
| data      | Array | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/hot-search](https://test.youbaobao.xyz:18081/book/hot-search)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": [{
		"title": "Tools and Algorithms for the Construction and Analysis of Systems",
		"fileName": "2018_Book_ToolsAndAlgorithmsForTheConstr"
	}, {
		"title": "Computer Aided Verification",
		"fileName": "2018_Book_ComputerAidedVerification"
	}, {
		"title": "Nanoinformatics",
		"fileName": "2018_Book_Nanoinformatics"
	}, {
		"title": "Designing Sustainable Technologies, Products and Policies",
		"fileName": "2018_Book_DesigningSustainableTechnologi"
	}, {
		"title": "Optimizing HPC Applications with Intel® Cluster Tools",
		"fileName": "2014_Book_OptimizingHPCApplicationsWithI"
	}, {
		"title": "Hormones, Metabolism and the Benefits of Exercise",
		"fileName": "2017_Book_HormonesMetabolismAndTheBenefi"
	}, {
		"title": "Prozessintelligenz",
		"fileName": "2018_Book_Prozessintelligenz"
	}, {
		"title": "RESTART Sustainable Business Model Innovation",
		"fileName": "2018_Book_RESTARTSustainableBusinessMode"
	}, {
		"title": "Innovative Medicine",
		"fileName": "2015_Book_InnovativeMedicine"
	}, {
		"title": "Library and Information Sciences",
		"fileName": "2014_Book_LibraryAndInformationSciences"
	}]
}
```

### 关键词搜索

#### 接口地址
`GET /book/search`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| keyword | 是 | String | 搜索关键字 |
| openId | 否 | String | 用户的openId |
| page | 否 | int | 搜索页数，默认为1 |
| pageSize | 否 | int | 搜索结果数，默认为20 |

#### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| error_code      | int | 返回值 |
| msg | String | 返回消息 |
| data | Object | 返回数据 |
| author | Array | 匹配到的作者 |
| category | Array | 匹配到的分类 |
| publisher | Array | 匹配到的出版社 |
| book | Array | 匹配到的图书 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/search?keyword=C&page=1&openId=abcd&pageSize=20](https://test.youbaobao.xyz:18081/book/search?keyword=C&page=1&openId=abcd&pageSize=20)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": {
		"book": [{
			"id": 1,
			"fileName": "2016_Book_PhysiologyPsychoacousticsAndCo",
			"cover": "https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-25474-6_CoverFigure.jpg",
			"title": "Physiology, Psychoacoustics and Cognition in Normal and Impaired Hearing",
			"author": "Pim van Dijk",
			"publisher": "Springer International Publishing",
			"bookId": "2016_Book_PhysiologyPsychoacousticsAndCo",
			"category": 12,
			"categoryText": "Biomedicine",
			"language": "en",
			"rootFile": "OEBPS/package.opf"
		}, {
			"id": 2,
			"fileName": "2017_Book_HormonesMetabolismAndTheBenefi",
			"cover": "https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg",
			"title": "Hormones, Metabolism and the Benefits of Exercise",
			"author": "Bruce Spiegelman",
			"publisher": "Springer International Publishing",
			"bookId": "2017_Book_HormonesMetabolismAndTheBenefi",
			"category": 12,
			"categoryText": "Biomedicine",
			"language": "en",
			"rootFile": "OEBPS/package.opf"
		}],
		"author": [{
			"author": "Bruce Spiegelman"
		}],
		"category": [{
			"category": 1,
			"categoryText": "ComputerScience"
		}],
		"publisher": [{
			"publisher": "Apress, Berkeley, CA"
		}]
	}
}
```

## 图书列表

### 获取图书列表

#### 接口地址
`GET /book/search-list`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| publisher | 否 | String | 出版社名称 |
| author | 否 | String | 作者名称 |
| category | 否 | String | 分类名称 |
| categoryId | 否 | String | 分类ID |
| page | 否 | int | 搜索页数，默认为1 |
| pageSize | 否 | int | 搜索结果数，默认为20 |
::: warning
publisher、author、category、categoryId四个参数至少需要传入一个，否则会返回错误
:::

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |
| data | Array | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/search-list?category=ComputerScience&page=1&pageSize=20](https://test.youbaobao.xyz:18081/book/search-list?category=ComputerScience&page=1&pageSize=20)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": [{
		"id": 19,
		"fileName": "2018_Book_AutonomousControlForAReliableI",
		"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg",
		"title": "Autonomous Control for a Reliable Internet of Services",
		"author": "Ivan Ganchev",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_AutonomousControlForAReliableI",
		"category": 1,
		"categoryText": "ComputerScience",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}, {
		"id": 20,
		"fileName": "2018_Book_ComputerAidedVerification",
		"cover": "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg",
		"title": "Computer Aided Verification",
		"author": "Hana Chockler",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_ComputerAidedVerification",
		"category": 1,
		"categoryText": "ComputerScience",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}]
}
```

## 分类列表

### 获取分类列表

#### 接口地址
`GET /book/category/list/v2`

#### 请求参数
无

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |
| data | Array | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/category/list/v2](https://test.youbaobao.xyz:18081/book/category/list/v2)
- 响应：
```json
{
	"error_code": 0,
	"msg": "查询成功",
	"data": [{
		"cover": "https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-25474-6_CoverFigure.jpg",
		"category": 12,
		"categoryText": "Biomedicine",
		"num": 14,
		"cover2": "https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg"
	}, {
		"cover": "https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-33515-5_CoverFigure.jpg",
		"category": 13,
		"categoryText": "BusinessandManagement",
		"num": 16,
		"cover2": "https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg"
	}]
}
```

## 图书详情

### 获取图书详情

#### 接口地址
`GET /book/detail`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| fileName | 是 | String | 图书名称 |
| openId | 否 | String | 用户的openId |

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |
| data | Object | 返回数据 |
| fileName | String | epub文件名，电子书唯一标识 |
| opf | String | opf文件地址 |
| title | String | 标题 |
| author | String | 作者 |
| publisher | String | 出版社 |
| bookId | String | 同fileName，电子书唯一标识 |
| category | int | 图书对应分类id |
| categoryText | String | 图书分类名称 |
| language | String | 图书语种 |
| readers | Array | 阅读人信息，最多10条 |
| readerNum | int | 阅读数量 |
| rank | int | 当前用户的评分 |
| rankNum | int | 评分人数 |
| rankAvg | String | 平均评分 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/detail?fileName=2015_Book_ContemporaryBioethics&openId=abcd](https://test.youbaobao.xyz:18081/book/detail?fileName=2015_Book_ContemporaryBioethics&openId=abcd)
- 响应：
```json
{
	"error_code": 0,
	"msg": "获取成功",
	"data": {
		"id": 111,
		"fileName": "2015_Book_ContemporaryBioethics",
		"cover": "https://www.youbaobao.xyz/book/res/img//Biomedicine/2015_Book_ContemporaryBioethics.jpeg",
		"title": "Contemporary Bioethics",
		"author": "Mohammed Ali Al-Bar and Hassan Chamsi-Pasha",
		"publisher": "Springer International Publishing, Cham",
		"bookId": "2015_Book_ContemporaryBioethics",
		"category": 12,
		"categoryText": "Biomedicine",
		"language": "en",
		"rootFile": "OEBPS/content.opf",
		"selected": false,
		"private": false,
		"cache": false,
		"haveRead": 0,
		"opf": "https://www.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/content.opf",
		"readers": [{
			"avatarUrl": "https://wx.qlogo.cn/xxx",
			"nickName": "xxx",
			"create_dt": 1560081154139
		}],
		"readerNum": 13,
		"rank": 2,
		"rankNum": 2,
		"rankAvg": 3
	}
}
```

### 获取图书目录

#### 接口地址
`GET /book/contents`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| fileName | 是 | String | 图书名称 |

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |
| data | Object | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/contents?fileName=2015_Book_ContemporaryBioethics](https://test.youbaobao.xyz:18081/book/contents?fileName=2015_Book_ContemporaryBioethics)
- 响应：
```json
{
	"error_code": 0,
	"msg": "获取成功",
	"data": {
		"id": 111,
		"fileName": "2015_Book_ContemporaryBioethics",
		"cover": "https://www.youbaobao.xyz/book/res/img//Biomedicine/2015_Book_ContemporaryBioethics.jpeg",
		"title": "Contemporary Bioethics",
		"author": "Mohammed Ali Al-Bar and Hassan Chamsi-Pasha",
		"publisher": "Springer International Publishing, Cham",
		"bookId": "2015_Book_ContemporaryBioethics",
		"category": 12,
		"categoryText": "Biomedicine",
		"language": "en",
		"rootFile": "OEBPS/content.opf",
		"selected": false,
		"private": false,
		"cache": false,
		"haveRead": 0,
		"opf": "https://www.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/content.opf",
		"readers": [{
			"avatarUrl": "https://wx.qlogo.cn/xxx",
			"nickName": "xxx",
			"create_dt": 1560081154139
		}],
		"readerNum": 13,
		"rank": 2,
		"rankNum": 2,
		"rankAvg": 3
	}
}
```

### 获取图书存储书架状态

#### 接口地址
`GET /book/shelf/get`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| fileName | 是 | String | 图书名称 |
| openId | 是 | String | 用户的openId |

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |
| data | Array | 返回数据 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/shelf/get?openId=abcd&fileName=2015_Book_ContemporaryBioethics](https://test.youbaobao.xyz:18081/book/shelf/get?openId=abcd&fileName=2015_Book_ContemporaryBioethics)
- 响应：
```json
{
	"error_code": 0,
	"msg": "书架获取成功",
	"data": [{
		"fileName": "2015_Book_ContemporaryBioethics",
		"openId": "odLQN5FNbQu2I5-S4YuRiyCsKMoQ",
		"date": 1558884420140,
		"id": 111,
		"cover": "https://www.youbaobao.xyz/book/res/img//Biomedicine/2015_Book_ContemporaryBioethics.jpeg",
		"title": "Contemporary Bioethics",
		"author": "Mohammed Ali Al-Bar and Hassan Chamsi-Pasha",
		"publisher": "Springer International Publishing, Cham",
		"bookId": "2015_Book_ContemporaryBioethics",
		"category": 12,
		"categoryText": "Biomedicine",
		"language": "en",
		"rootFile": "OEBPS/content.opf"
	}]
}
```

### 图书评分

#### 接口地址
`GET /book/rank/save`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| fileName | 是 | String | 图书名称 |
| openId | 是 | String | 用户的openId |
| rank | 是 | int | 评分 |

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/rank/save?openId=abcd&fileName=2015_Book_ContemporaryBioethics&rank=3](https://test.youbaobao.xyz:18081/book/rank/save?openId=abcd&fileName=2015_Book_ContemporaryBioethics&rank=3)
- 响应：
```json
{ "error_code": 0, "msg": "保存评分成功" }
```

### 加入书架

#### 接口地址
`GET /book/shelf/save`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| shelf | 是 | String | 书架信息 |

::: tip
这里向大家演示了如何通过json字符串传递参数，参数内包括两个字段：openId和fileName，通过URLEncode后获得请求参数，这种方案在实际开发中非常常见
:::

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/shelf/save?shelf=%7b%22fileName%22%3a%222016_Book_PhysiologyPsychoacousticsAndCo%22%2c%22openId%22%3a%22abcd%22%7d](https://test.youbaobao.xyz:18081/book/shelf/save?shelf=%7b%22fileName%22%3a%222016_Book_PhysiologyPsychoacousticsAndCo%22%2c%22openId%22%3a%22abcd%22%7d)
- 响应：
```json
{ "error_code": 0, "msg": "加入书架成功" }
```

### 移除书架

#### 接口地址
`GET /book/shelf/remove`

#### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| shelf | 是 | String | 书架信息 |

::: tip
shelf的用法同加入书架API
:::

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----:| ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/shelf/remove?shelf=%7b%22fileName%22%3a%222016_Book_PhysiologyPsychoacousticsAndCo%22%2c%22openId%22%3a%22abcd%22%7d](https://test.youbaobao.xyz:18081/book/shelf/remove?shelf=%7b%22fileName%22%3a%222016_Book_PhysiologyPsychoacousticsAndCo%22%2c%22openId%22%3a%22abcd%22%7d)
- 响应：
```json
{ "error_code": 0, "msg": "移出书架成功" }
```

## 书架列表

### 获取书架列表

#### 接口地址
`GET /book/shelf/get`

#### 请求参数
| 参数名称 | 是否必须 | 类型 | 说明 |
| --- | ---: | ---: | ---: |
| openId | 是 | String | 用户的openId |

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----: | ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |
| data | Array | 返回结果 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/book/shelf/get?openId=abcd](https://test.youbaobao.xyz:18081/book/shelf/get?openId=abcd)
- 响应：
```json
{
	"error_code": 0,
	"msg": "书架获取成功",
	"data": [{
		"fileName": "2018_Book_DronesAndTheCreativeIndustry",
		"openId": "odLQN5FNbQu2I5-S4YuRiyCsKMoQ",
		"date": 1558369230202,
		"id": 6,
		"cover": "https://www.youbaobao.xyz/book/res/img//BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg",
		"title": "Drones and the Creative Industry",
		"author": "Virginia Santamarina-Campos",
		"publisher": "Springer International Publishing",
		"bookId": "2018_Book_DronesAndTheCreativeIndustry",
		"category": 13,
		"categoryText": "BusinessandManagement",
		"language": "en",
		"rootFile": "OEBPS/package.opf"
	}]
}
```

### 获取用户加入天数

#### 接口地址
`GET /user/day`

#### 请求参数
| 参数名称 | 是否必须 | 类型 | 说明 |
| --- | ---: | ---: | ---: |
| openId | 是 | String | 用户的openId |

#### 返回值
| 参数名称  | 类型  | 说明  |
| --- | ----: | ---:|
| error_code | int | 返回值 |
| msg | String | 返回消息 |
| data | Object | 返回结果 |

#### 示例
- 请求：[https://test.youbaobao.xyz:18081/user/day?openId=abcd](https://test.youbaobao.xyz:18081/user/day?openId=abcd)
- 响应：
```json
{
    "error_code": 0,
    "msg": "用户注册成功",
    "data": {
        "day": 15
    }
}
```
