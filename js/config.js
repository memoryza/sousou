var  __config = {
    web:  {
        baidu: {
            title: "百度",
            url: "http://www.baidu.com/s?wd="
        },
        google: {
            title: "谷歌",
            url: "http://www.google.com.hk/search?q="
        },
        bing: {
            title: "必应",
            url: "http://cn.bing.com/search?q="
        },
        sogou:{
            title: "搜狗",
            url: "http://www.sogou.com/web?query="
        },
        youdao: {
            title: "有道",
            url: "http://www.youdao.com/search?q="
        },
        soso: {
            title: "搜搜",
            url: "http://www.soso.com/q?pid=s.idx&cid=s.idx.se&w="
        },
        360: {
            title: "360搜索",
            url: "http://www.so.com/s?ie=utf-8&src=360sou_home&q="
        },
        _default: 'baidu'
    },
    image: {
        baidu: {
            title: "百度",
            url: "http://image.baidu.com/i?word={keyword:gb2312}"
        },
        google: {
            title: "Google",
            url: "http://72.14.203.106/images?q="
        },
        sogou: {
            title: "搜狗",
            url: "http://pic.sogou.com/pics?query="
        },
        _default: 'baidu'
    },
    music:{
        baidu: {
            title: "百度",
            url: "http://music.baidu.com/search?key="
        },
        _default: 'baidu'
    }
}
var  __engine = ['baidu', 'google', 'bing', 'sogou', 'youdao', 'soso','360'];
