var Mock=require("mockjs");

// 配置数据请求
Mock.mock("/books","get",require("./json/books.json"))
Mock.mock("/faxianhaodianying","get",require("./json/faxianhaodianying.json"))
Mock.mock("/goodbook","get",require("./json/goodbook.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/shouye","get",require("./json/shouye.json"))
Mock.mock("/xiaozua","get",require("./json/xiaozua.json"))
Mock.mock("/xiaozub","get",require("./json/xiaozub.json"))
Mock.mock("/xiaozuc","get",require("./json/xiaozuc.json"))
Mock.mock("/moviea","get",require("./json/moviea.json"))
Mock.mock("/booka","get",require("./json/booka.json"))
