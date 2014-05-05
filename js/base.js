var __base = {
    /* content：搜索内容，  method :搜索方式web\image ； engine:数据来自哪个搜索引擎 */
    first_load: function(content, method, engine) {
        //if(!$.trim(content)) return;
        if(!__config[method])  return;
        var engine = engine || __config[method]._default ||'baidu';
        __base.add_ifm_content(content, method, engine);
    },
    second_load: function(content, method, engine) {
        if(!__config[method] ) return;
        if(!__config[method][engine]) return;
        __base.add_ifm_content(content, method, engine);
    },
    /* 添加引擎列表 */
    add_engine_menu: function(method) {
        /*  放搜索引擎菜单 */
        $('.search_menu').html('')
        for(var i =0, j = __engine.length; i< j; i++) {
            if(__config[method][__engine[i]]) {
                $('<a class="search_menu_engine"  engine="' + __engine[i] + '">' + __config[method][__engine[i]].title + '</a>').appendTo($('.search_menu'));
            }
        }
        var engine = __config[method]._default ? __config[method]._default : 'baidu';
        __base.default_engine(engine);
    },
    default_engine: function(engine) {
        /* 默认搜索引擎加入curr class */
        $('.search_menu_engine').removeClass('curr');
        $('.search_menu_engine[engine="' + engine + '"]').addClass('curr');
    },
     /* 动画效果实现切换div direction:运动方向 非零向上运动,0/undefined是向下*/
    animate_switch_div: function(direction) {
        if(!direction) {
            $('.search_iframe').slideUp(200);
            $('.default_iframe').slideDown(200);
        } else {
            $('.default_iframe').slideUp(200);
            $('.search_iframe').slideDown(200);
        }
    },
    /*  填充内容数据 */
    add_ifm_content: function(content, method, engine) {
        var curr_engine = $('.curr').attr('engine');
        if(curr_engine && engine != curr_engine) {
            engine = curr_engine;
        } else {
            /* 没有发生点击走默认样式 */
            __base.default_engine(engine);
        }
        /* 放搜索内容 */
        var  $load_iframe = __base.load_iframe();
        if(!$load_iframe.length)  return;
        var url = __config[method][engine].url;
        if(!url) return;
        $load_iframe.attr('src',   __base.extend_unicode(url, content));
        __search.upordown(1);
    },
    load_iframe: function() {
        var $iframe = $('#load_iframe');
        if($iframe.length) {
            return $iframe;
        }
        $('<iframe id="load_iframe" ></iframe>').appendTo($('.search_iframe'));
        return  $('#load_iframe');
    },
    resize: function() {
        var $a = $(".wrapper"),
            $b = $(".headtop"),
            $c = $(".header");
        $a.css({'width':  $(document).width() + "px", 'height': $(document).height() + "px"});
        $('.content, .search_iframe, .default_iframe').css({'height': $a.height() - $b.height() - $c.height()+'px' });
    },
    /*  扩展gb2312 */
    extend_unicode: function(H, B) {
        B = B.replace(/\xb7/g, " ");
        if (H.indexOf("{keyword:gb2312}") > -1) {
            H = H.replace("{keyword:gb2312}",  $GB2312.encodeURIComponent(B))
        } else {
            if (H.indexOf("{keyword:escape}") > -1) {
                H = H.replace("{keyword:escape}", escape(B))
            } else {
                if (H.indexOf("{keyword:escape}") > -1) {
                    H = H.replace("{keyword:escape}", escape(B))
                } else {
                    if (H.indexOf("{keyword}") > -1) {
                        H = H.replace("{keyword}", encodeURIComponent(B))
                    } else {
                        if (H.indexOf("{nokeyword}") > -1) {
                            H = H.replace("{nokeyword}", "")
                        } else {
                            if (H.indexOf("{noEncode}") > -1) {
                                H = H.replace("{noEncode}", B)
                            } else {
                                H = H + encodeURIComponent(B)
                            }
                        }
                    }
                }
            }
        }
        return H;
    }
}
