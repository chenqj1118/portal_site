var datagoods =[{
			CLASSIFYS:"分类一",
			datas:[{
				CLASSIFY:"测试分类一一",
				GOODS:[{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果01",
						GOODSNUM:"2",
						USDPRICE:"5.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 101,
						ISINVALID: false,
						STOCK: 64,
					},
					{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果02",
						GOODSNUM:"4",
						USDPRICE:"6.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 102,
						ISINVALID: true,
						STOCK: 7,
				}]
			},
			{
				CLASSIFY:"测试分类一二",
				GOODS:[{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果03",
						GOODSNUM:"2",
						USDPRICE:"5.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 101,
						ISINVALID: false,
						STOCK: 64,
					},
					{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果04",
						GOODSNUM:"4",
						USDPRICE:"6.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 102,
						ISINVALID: true,
						STOCK: 7,
				}]
			}]
		},{
			CLASSIFYS:"分类二",
			datas:[{
				CLASSIFY:"测试分类二一",
				GOODS:[{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果01",
						GOODSNUM:"2",
						USDPRICE:"5.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 101,
						ISINVALID: false,
						STOCK: 64,
					},
					{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果02",
						GOODSNUM:"4",
						USDPRICE:"6.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 102,
						ISINVALID: true,
						STOCK: 7,
				}]
			},
			{
				CLASSIFY:"测试分类二二",
				GOODS:[{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果03",
						GOODSNUM:"2",
						USDPRICE:"5.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 101,
						ISINVALID: false,
						STOCK: 64,
					},
					{
						GOODSNAME:"测试商品标题：网红圣诞礼盒，口气清新糖果04",
						GOODSNUM:"4",
						USDPRICE:"6.15",
						UNIT:"盒",
						GOODSIMAGE:"/images/goods.png",
						GOODID: 102,
						ISINVALID: true,
						STOCK: 7,
				}]
			}]
		}
	];


exports.getscDatagoods = function(){
	// var dataset = _getdataset({"mark": tabmark});
	// if(dataset.length == 0){
		// dataset = dataarr;
	// }
	return datagoods;
	
};